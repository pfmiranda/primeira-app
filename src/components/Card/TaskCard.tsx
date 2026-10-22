import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "expo-checkbox";
import { type TaskCardProps } from "./types";

const TaskCard = ({ id, title, isComplete, onToggle, onDelete, onPress }: TaskCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.mainView}>
        <Text style={[styles.title, isComplete && styles.completedTask]}>{title}</Text>
        <Checkbox style={styles.checkbox} value={isComplete} onValueChange={onToggle} />
      </View>
      <View>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
  mainView: {
    flex: 1,
  },

  title: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 2,
    textAlign: "left",
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
