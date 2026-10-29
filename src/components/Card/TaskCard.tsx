import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "expo-checkbox";
import { type TaskCardProps } from "./types";

const TaskCard = ({
  id,
  title,
  isComplete,
  priority,
  onToggle,
  onDelete,
  onPress,
}: TaskCardProps) => {
  const colorPriority =
    priority === "High"
      ? "darkred"
      : priority === "Medium"
        ? "darkorange"
        : "mediumblue";

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        style={[styles.Taskcard, { backgroundColor: colorPriority }]}
        onPress={onPress}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.title, isComplete && styles.completedTask]}>
          {title}
        </Text>
        <Checkbox
          hitSlop={15}
          style={styles.checkbox}
          value={isComplete}
          onValueChange={onToggle}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text numberOfLines={2} style={styles.deleteText}>
          Eliminar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Taskcard: {
    flex: 1,
    minWidth: 150,
    // backgroundColor: { colorPriority },
    borderRadius: 25,
    padding: 10,
    marginVertical: 5,
    gap: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "teal",
    shadowColor: "teal",
    shadowRadius: 4,
  },
  mainView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    flex: 1,
    color: "oldlace",
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Montserrat",
  },
  completedTask: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "crimson",
    borderRadius: 25,
    padding: 10,
    backgroundColor: "crimson",
  },
  deleteText: {
    color: "whitesmoke",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor: "white",
  },
});

export default TaskCard;
