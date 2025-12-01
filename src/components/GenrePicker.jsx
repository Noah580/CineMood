import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

export default function GenrePicker() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>CHOISISSEZ VOTRE GENRE</Text>
      
      <View style={styles.buttonsContainer}>
        {/* Bouton Horreur */}
        <TouchableOpacity
          style={[styles.genreButton, { borderColor: couleurs.horreur }]}
          onPress={() => navigation.navigate("HorreurScreen")}
        >
          <Text style={[styles.textButton, { color: couleurs.horreur }]}>HORREUR</Text>
        </TouchableOpacity>

        {/* Bouton Action */}
        <TouchableOpacity
          style={[styles.genreButton, { borderColor: couleurs.action }]}
          onPress={() => navigation.navigate("ActionScreen")}
        >
          <Text style={[styles.textButton, { color: couleurs.action }]}>ACTION</Text>
        </TouchableOpacity>

        {/* Bouton Drame */}
        <TouchableOpacity
          style={[styles.genreButton, { borderColor: couleurs.drame }]}
          onPress={() => navigation.navigate("DrameScreen")}
        >
          <Text style={[styles.textButton, { color: couleurs.drame }]}>DRAME</Text>
        </TouchableOpacity>

        {/* Bouton Fantasy */}
        <TouchableOpacity
          style={[styles.genreButton, { borderColor: couleurs.fantasy }]}
          onPress={() => navigation.navigate("FantasyScreen")}
        >
          <Text style={[styles.textButton, { color: couleurs.fantasy }]}>FANTASY</Text>
        </TouchableOpacity>

        {/* Bouton SF */}
        <TouchableOpacity
          style={[styles.genreButton, { borderColor: couleurs.scifi }]}
          onPress={() => navigation.navigate("SciFiScreen")}
        >
          <Text style={[styles.textButton, { color: couleurs.scifi }]}>SCIENCE-FICTION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const couleurs = {
  horreur: "#DC143C",
  action: "#FF6347",
  scifi: "#1E90FF",
  fantasy: "#9370DB",
  drame: "#708090", // J'ai éclairci le gris pour qu'il soit plus visible sur le fond sombre
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B132B",
    flex: 1, // Remplace height: 1000 pour s'adapter à l'écran
    alignItems: "center",
    justifyContent: "center",
    width: width, // S'assure de prendre toute la largeur
    paddingVertical: 50,
  },
  textTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 40,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 20, // Espace régulier entre les boutons
  },
  genreButton: {
    width: width * 0.8, // 80% de la largeur de l'écran
    height: 60,
    borderRadius: 30, // Bords bien arrondis
    borderWidth: 2, // Juste la bordure colorée
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Pas de couleur de fond ("aucune couleur")
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});