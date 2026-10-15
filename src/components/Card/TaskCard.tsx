import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

type TaskCardProps = {
  id: string;
  title: string;
  isComplete: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
};

const TaskCard = ({
  id,
  title,
  isComplete,
  onToggle,
  onDelete,
}: TaskCardProps) => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.title, isComplete && styles.completedTask]}>
          {title}
        </Text>
        <Checkbox
          style={styles.checkbox}
          value={isComplete}
          onValueChange={onToggle}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#6060aa",
    borderRadius: 25,
    padding: 10,
    marginVertical: 5,
    gap: 5,
    flexDirection: "row",
  },

  id: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "right",
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 2,
    textAlign: "left",
  },
  isComplete: {
    color: "#ffffff",
    fontSize: 14,
    marginTop: 2,
    textAlign: "center",
  },
  completedTask: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  deleteText: {
    color: "red",
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default TaskCard;
