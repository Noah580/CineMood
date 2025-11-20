import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GenrePicker() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <Text style={styles.TextTitle}>Choisissez votre genre</Text>
      <TouchableOpacity
        style={[styles.GenreButton, { backgroundColor: couleurs.horreur }]}
        onPress={() => {
          navigation.navigate("HorreurScreen");
        }}
      >
        <Text style={styles.TextButton}>Horreur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.GenreButton, { backgroundColor: couleurs.action }]}
        onPress={() => {
          navigation.navigate("ActionScreen");
        }}
      >
        <Text style={styles.TextButton}>Action</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.GenreButton, { backgroundColor: couleurs.drame }]}
        onPress={() => {
          navigation.navigate("DrameScreen");
        }}
      >
        <Text style={styles.TextButton}>Drame</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.GenreButton, { backgroundColor: couleurs.fantasy }]}
        onPress={() => {
          navigation.navigate("FantasyScreen");
        }}
      >
        <Text style={styles.TextButton}>Fantasy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.GenreButton, { backgroundColor: couleurs.scifi }]}
        onPress={() => {
          navigation.navigate("SciFiScreen");
        }}
      >
        <Text style={styles.TextButton}>ScienceFiction</Text>
      </TouchableOpacity>
    </View>
  );
}

const couleurs = {
  horreur: "#DC143C",
  action: "#FF6347",
  scifi: "#1E90FF",
  fantasy: "#9370DB",
  drame: "#708090",
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#0B132B",
    height: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  TextTitle: {
    color: "white",
    top: -25,
    fontSize: 30,
    padding: 10,
  },
  GenreButton: {
    padding: 10,
    margin: 5,
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 25,
    width: 250,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  TextButton: {
    fontSize: 28,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
