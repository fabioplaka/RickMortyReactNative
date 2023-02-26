import { useQuery } from "@apollo/client";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useCallback } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from "react-native";
import { GET_CHARACTER_DETAILS } from "../apollo/queries";
import Error from "../components/Error";
import EpisodeCard from "../components/EpisodeCard";
import { CharacterDetailsTypes, EpisodeTypes } from "../types/CharacterTypes";
import { NavigationTypes } from "../types/NavigationTypes";

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
        <Text style={styles.gender}>{data?.character.gender}</Text>
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
    <View style={styles.container}>
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

export default CharacterDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 350,
  },
  name: {
    marginVertical: 15,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "200",
  },
  gender: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  episodes: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#43ADAD",
    color: "#ffffff",
  },
  episodeNumber: {
    width: 30,
  },
});
