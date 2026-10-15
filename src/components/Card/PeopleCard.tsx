import React from "react";
import { View, Text, StyleSheet } from "react-native";

type PeopleCardProps = {
  nome: string;
  idade: number;
  working: boolean;
  hobbies: string[];
  onEdit?: () => void;
  onDelete?: () => void;
};

const PeopleCard = ({ nome, idade, working, hobbies }: PeopleCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.idade}>{idade} anos</Text>
      <Text style={styles.working}>
        {working ? "A trabalhar" : "Sem trabalho"}
      </Text>
      <Text style={styles.hobbies}>Hobbies: {hobbies.join(", ")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "30%",
    backgroundColor: "#6060aa",
    borderRadius: 25,
    padding: 16,
    marginVertical: 10,
    alignItems: "center",
  },

  nome: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  idade: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 2,
  },
  working: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 2,
  },
  hobbies: {
    flexDirection: "row",
    fontSize: 14,
    marginTop: 2,
  },
});

export default PeopleCard;
