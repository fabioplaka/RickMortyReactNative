import { useQuery } from "@apollo/client";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, ActivityIndicator, FlatList, Image, Text } from "react-native";
import { GET_CHARACTER_DETAILS } from "../../apollo/queries";
import { Error } from "../../components/Error";
import { EpisodeCard } from "../../components/EpisodeCard";
import {
  CharacterDetailsTypes,
  EpisodeTypes,
} from "../../types/CharacterTypes";
import { NavigationTypes } from "../../types/NavigationTypes";
import { styles } from "./styles";
import { STYLES } from "../../common/Styles";

const CharacterDetails: React.FC = (): JSX.Element => {
  const { params } = useRoute<RouteProp<NavigationTypes, "CharacterDetails">>();

  const { loading, data, error } = useQuery<CharacterDetailsTypes>(
    GET_CHARACTER_DETAILS,
    {
      variables: {
        id: params.id,
      },
    }
  );

  const renderHeader = useCallback(
    () => (
      <View>
        <Image source={{ uri: data?.character.image }} style={styles.image} />
        <Text style={styles.name}>{data?.character.name}</Text>
        <Text style={styles.gender}>
          {data?.character.species} - {data?.character.gender}
        </Text>
        <Text style={styles.episodes}>
          Episodes: {data?.character.episode?.length}
        </Text>
      </View>
    ),
    [data]
  );

  const renderEpisode = useCallback(
    (item: EpisodeTypes, index: number) => (
      <EpisodeCard>
        <View style={styles.episodeNumber}>
          <Text>{index + 1} - </Text>
        </View>
        <View>
          <Text>Name: {item.name}</Text>
          <Text>Air Date: {item.air_date}</Text>
        </View>
      </EpisodeCard>
    ),
    []
  );

  return (
    <View style={STYLES.container}>
      {loading && <ActivityIndicator color="#43ADAD" size={"large"} />}
      {error ? (
        <Error />
      ) : (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data?.character.episode}
          renderItem={({ item, index }) => renderEpisode(item, index)}
        />
      )}
    </View>
  );
};

export { CharacterDetails };
