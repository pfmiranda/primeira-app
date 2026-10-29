import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AppButton from "../../components/AppButton/appButton";
import TaskCard from "../../components/Card/TaskCard";
import Header from "../../components/header/header";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";
import { type Task, type Filter } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Tasks">;

// inicialização de um array de tasks
const initalTasks = [
  {
    id: "1",
    title: "Arranjar fechadura da porta",
    description:
      "Necessário reajustar dimensões de entrada de trinco para que porta feche corretamente",
    priority: "High",
    isCompleted: false,
  },

  {
    id: "2",
    title: "Reconfigurar home network",
    description:
      "Redesenhar toda a rede interna, garantindo boa perfomance em todos os locais.",
    priority: "Medium",
    isCompleted: false,
  },

  {
    id: "3",
    title: "Trocar puxadores do armário",
    description:
      "Necessário trocar puxadores antigos por novos para bater certo com os existentes.",
    priority: "Low",
    isCompleted: true,
  },
] as Task[]; // Alternativa Task[]

const TasksScreen = ({ navigation, route }: NavigationProps) => {
  const [tasks, setTasks] = useState<Task[]>(
    route.params?.taskList ?? initalTasks,
  ); //Alternativa Array<Task>
  const [cardFilter, setCardFilter] = useState("All" as Filter);

  // se receber uma lista de tarefas por parâmetro, usa essa; senão mantém a inicial
  const [prevParams, setPrevParams] = useState(route.params);
  if (route.params !== prevParams) {
    setPrevParams(route.params);
    if (route.params?.taskList) {
      setTasks(route.params.taskList);
    }
  }

  // console.log("Contador: ", counter); //logar para consola o contador
  const visibleTasks = () => {
    if (cardFilter === "Pending") {
      return tasks.filter((taskFilter) => !taskFilter.isCompleted);
    }

    if (cardFilter === "Done") {
      return tasks.filter((taskFilter) => taskFilter.isCompleted);
    }
    return tasks;
  };
  return (
    <SafeAreaView style={styles.mainContainer} edges={["top"]}>
      {/*<ScrollView showsVerticalScrollIndicator>*/}
      <View style={styles.headerArea}>
        <Header
          title="Primeira App"
          subtitle="Bem-vindo!"
          goBack={() => navigation.goBack()}
        />
      </View>
      <View style={styles.newTaskView}>
        <AppButton
          title="Inserir nova tarefa"
          onPress={() => {
            navigation.navigate("NewTask", { taskList: tasks });
          }}
        />
      </View>
      <View style={styles.filterView}>
        <AppButton title="Todas" onPress={() => setCardFilter("All")} />
        <AppButton title="Pendentes" onPress={() => setCardFilter("Pending")} />
        <AppButton title="Concluídas" onPress={() => setCardFilter("Done")} />
      </View>

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        data={visibleTasks()}
        keyExtractor={(task) => task.id}
        renderItem={({ item: task }) => (
          <TaskCard
            id={task.id}
            title={task.title}
            priority={task.priority}
            isComplete={task.isCompleted}
            onPress={() => navigation.navigate("TaskDetail", { task: task })}
            onDelete={() => {
              setTasks(tasks.filter((t) => t.id !== task.id));
            }}
            onToggle={() => {
              setTasks(
                tasks.map((t) =>
                  t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t,
                ),
              );
            }}
          />
        )}
      />
      {/*</SafeAreaView>]  </ScrollView>*/}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: "#d8d8d8",
    alignItems: "center",
    padding: 10,
  },
  filterView: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
  },
  newTaskView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
    gap: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
  },

  headerArea: {
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
  },
  list: {
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    flexGrow: 0,
  },
  listContent: {
    paddingHorizontal: 12,
  },
});

export default TasksScreen;
