// Components/FilmItem.js

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import filmsData from "../Helpers/filmsData";

class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
      <View style={styles.main_container}>
        <Image style={styles.images} source={{ uri: "image" }} />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text numberOfLines={5} style={styles.descrption_text}>
              {film.overview}
            </Text>
          </View>
          <View style={styles.footer_container}>
            <Text numberOfLines={1} style={styles.footer_text}>
              Sorti le {film.release_date}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row"
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: "gray"
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: "row"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666"
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  footer_container: {
    flex: 1
  },
  footer_text: {
    textAlign: "right",
    fontSize: 14
  }
});

export default FilmItem;
