import { Text, View, StyleSheet } from "react-native";
import Header from "../../components/header/header";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lucide } from "@react-native-vector-icons/lucide";
type NavigationProps = NativeStackScreenProps<RootStackParamList, "TaskDetail">;

const taskPriority = "Prioridade alta";
const taskStatus = "Em Curso";
const taskName = "Entregar relatório de Física";
const taskDueDate = new Date("2026-10-24T23:59:00");

const TaskDetailScreen = ({ navigation, route }: NavigationProps) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.mainView}>
      <Header title="Detalhe" goBack={() => navigation.goBack()} />
      <View style={styles.TaskDetailsView}>
        <View style={styles.badgesView}>
          <Text style={[styles.badge, styles.badgeStatus]}>{taskStatus}</Text>
          <Text style={[styles.badge, styles.badgePriority]}>
            {taskPriority}
          </Text>
        </View>
        <View>
          <Text style={styles.taskTitle}>{taskName}</Text>
        </View>
        <View>
          <View style={styles.taskDueDateView}>
            <Lucide name="calendar" size={18} color={"gray"} />
            <Text style={styles.taskDueDate}>
              Entrega:{" "}
              {taskDueDate.toLocaleDateString("pt-PT", {
                day: "2-digit",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </View>
          <Text style={styles.taskCategory} />
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionTitle} />
        <Text style={styles.description} />
      </View>
    </SafeAreaView>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#d8d8d8",
  },

  TaskDetailsView: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  badgesView: {
    flexDirection: "row",
    gap: 10,
  },

  badge: {
    borderRadius: 18,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
    fontWeight: "600",
  },

  badgeStatus: {
    backgroundColor: "#e3eafb",
    color: "#1a3fb6",
  },

  badgePriority: {
    backgroundColor: "#fdebdd",
    color: "#8a400c",
  },

  taskTitle: {
    fontSize: 24,
    fontWeight: "600",
  },

  taskDueDateView: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  taskDueDate: {
    color: "gray",
  },

  taskCategory: {},

  descriptionView: {},

  descriptionTitle: {},

  description: {},
});
