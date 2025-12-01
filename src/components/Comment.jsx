import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ReviewSection() {
  const [comment, setComment] = useState(" ");

  const [tableau, setTableau] = useState([]);

  const Submit = () => {
    if (comment.trim().length > 0) {
      setTableau((Comments) => [
        ...Comments,
        {
          id: Date.now(),
          text: comment,
        },
      ]);

      setComment(" ");
    }
  };

  return (
    <View style={styles.commentSection}>
      <Text style={styles.commentTitle}>Laisser un avis :</Text>

      <TextInput
        style={styles.commentInput}
        value={comment}
        onChangeText={setComment}
        placeholder="Écrivez votre critique ici..."
        placeholderTextColor="#8D99AE"
        multiline
      />

      <TouchableOpacity
        style={[
        styles.submitButton,
        // Le bouton est semi-transparent/grisé si le champ est vide
        { opacity: comment.trim().length === 0 ? 0.3 : 1 }
      ]}
        onPress={Submit}
        disabled={comment.trim().length === 0}
      >
        <Text style={styles.submitButtonText}>Poster le commentaire</Text>
      </TouchableOpacity>

      <Text style={styles.commentTitle}>
        Avis des utilisateurs ({tableau.length})
      </Text>

      {tableau.map((comment) => (
        <View key={comment.id} style={styles.singleCommentContainer}>
          <Text style={styles.commentAuthor}>Utilisateur CineMood</Text>
          <Text style={styles.commentText}>{comment.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  commentSection: {
      width: "100%",
      marginTop: 40,
      paddingHorizontal: 10,
      alignItems: 'flex-start',
  },
  commentTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      marginTop: 20,
  },
  commentInput: {
      width: '100%',
      minHeight: 100,
      backgroundColor: '#1C2833', 
      color: 'white',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      textAlignVertical: 'top',
      fontSize: 16,
  },
  submitButton: {
      backgroundColor: '#1E90FF',
      padding: 12,
      borderRadius: 8,
      alignSelf: 'center', 
      marginTop: 10,
  },
  submitButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  singleCommentContainer: {
      width: '100%',
      backgroundColor: '#1C2833',
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
  },
  commentAuthor: {
      color: '#FF6347',
      fontWeight: 'bold',
      marginBottom: 5,
  },
  commentText: {
      color: '#CDD6F4',
      fontSize: 15,
  },
});
