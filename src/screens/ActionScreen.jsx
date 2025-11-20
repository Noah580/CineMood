import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import films from "../Data/films.json";

export default function ActionScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        source={{ uri: films.action[0].image }}
        style={{ width: 300, height: 450 }}
      />
      <Text>{films.action[0].titre}</Text>
      <Text>{films.action[0].realisateur}</Text>
      <Text>{films.action[0].description}</Text>
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
