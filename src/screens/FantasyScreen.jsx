import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import films from "../Data/films.json";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const { width } = Dimensions.get("window"); // Pour adapter la taille de l'image à l'écran

export default function ActionScreen() {
  const navigation = useNavigation();
  const movie = films.fantasy[0]; // On garde la logique d'accès au premier film

  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Affiche du film avec une ombre */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: movie.image }} style={styles.poster} />
        </View>

        {/* Informations du film */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.titre}</Text>
          <View style={styles.directorContainer}>
            <Text style={styles.directorLabel}>Réalisé par </Text>
            <Text style={styles.directorName}>{movie.realisateur}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.description}>{movie.description}</Text>
        </View>

        {/* Bouton retour */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.backButtonText}>Revenir en arrière</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.LikeButton,
            {
              backgroundColor: favorite ? "#9370DB" : "none",
              borderWidth : favorite ? 0 : 1,
              borderColor: "white",
              borderStyle: "solid"
            },
          ]}
          onPress={() => {
            setFavorite((prev) => !prev);
          }}
        >
          <Text style={[styles.backButtonText, {color: favorite ? "white" : "#9370DB"}]}>Liker ce Film</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0B132B", // Même fond bleu nuit que le reste de l'app
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  imageContainer: {
    shadowColor: "#9370DB", // Ombre couleur "Action"
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Pour l'ombre sur Android
    marginBottom: 30,
  },
  poster: {
    width: width * 0.7, // 70% de la largeur de l'écran
    height: width * 0.7 * 1.5, // Ratio classique d'affiche de cinéma
    borderRadius: 15,
  },
  infoContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  directorContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  directorLabel: {
    color: "#8D99AE",
    fontSize: 16,
  },
  directorName: {
    color: "#9370DB", // Couleur "Action" pour mettre en valeur le réalisateur
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    width: "40%",
    backgroundColor: "#3A506B",
    marginBottom: 20,
  },
  description: {
    color: "#CDD6F4", // Blanc légèrement cassé pour la lisibilité
    fontSize: 16,
    textAlign: "justify", // Justifié pour faire plus propre (comme un livre/article)
    lineHeight: 24, // Espace entre les lignes pour aérer le texte
  },
  backButton: {
    borderColor: "#9370DB", // Bordure couleur "Action"
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "transparent", // Fond transparent pour le style
  },
  backButtonText: {
    color: "#9370DB",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  LikeButton: {
    marginTop: 20,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
});
