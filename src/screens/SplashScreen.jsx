import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Animated } from 'react-native';

export default function SplashScreen() {

  const navigation = useNavigation(); // On utilise l'objet de navigation

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  // Ici le useEffect est la pour changer de route une fois que le composant principal est chargée
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0, // Pour avoir un fadeOut
        duration: 500, // Durée de l'animation
        useNativeDriver: true,
      }).start(() => {
        // Après que l'anim est passé on change de page
        navigation.replace('Home');
      });
    }, 2500);
  }, []);

  return (
    <Animated.View style={[styles.Container, {opacity: fadeAnimation}]}>
      <Text style={styles.TextTitle}>Cinémood</Text>
      <Text style={styles.TextCenter}>Chargement...</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    backgroundColor: "#0B132B",
    height: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  TextTitle:{
    color: "white",
    top: -300,
    fontSize: 40,
    border: "white",
    borderWidth: 3,
    borderStyle: "solid",
    padding: 10,
    borderColor: "white"
  },
  TextCenter:{
    color: "white",
    fontSize: 30
  }
})
