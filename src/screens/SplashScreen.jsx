import { useNavigation } from '@react-navigation/native';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
    <Animated.View style={[styles.container, {opacity: fadeAnimation}]}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>CINÉMOOD</Text>
          <View style={styles.separator} />
        </View>
        
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={styles.textLoading}>Chargement...</Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B132B",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 50, // Espace entre le titre et le chargement
  },
  textTitle: {
    color: "white",
    fontSize: 48,
    fontWeight: "900", // Très gras pour l'impact
    letterSpacing: 2, // Espacement des lettres style cinéma
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  separator: {
    height: 4,
    width: 100,
    backgroundColor: "#DC143C", // Une touche de rouge cinéma (optionnel, accordé à ton GenrePicker)
    marginTop: 10,
    borderRadius: 2,
  },
  loadingContainer: {
    alignItems: "center",
    gap: 10, // Espace entre le spinner et le texte (React Native moderne)
  },
  textLoading: {
    color: "#8D99AE", // Un gris clair plus doux que le blanc pur
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});