import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import films from "../Data/films.json";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HorreurScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        source={{ uri: films.horreur[0].image }}
        style={{ width: 300, height: 450 }}
      />
      <Text>{films.horreur[0].titre}</Text>
      <Text>{films.horreur[0].annee}</Text>
      <Text>{films.horreur[0].realisateur}</Text>
      <Text>{films.horreur[0].description}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Revenir en arrière</Text>
      </TouchableOpacity>
    </View>
  );
}
