import { useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import AppButton from "../../components/AppButton/appButton";
import TaskCard from "../../components/Card/TaskCard";
import Header from "../../components/header/header";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";
import { type Task, type Filter } from "./types";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Tasks">;

// inicialização de um array de tasks
const initalTasks = [
  {
    id: "1",
    title: "Arranjar fechadura da porta",
    description:
      "Necessário reajustar dimensões de entrada de trinco para que porta feche corretamente",
    ownerEmail: "paulo.miranda@gmail.com",
    isCompleted: false,
  },

  {
    id: "2",
    title: "Reconfigurar home network",
    description:
      "Redesenhar toda a rede interna, garantindo boa perfomance em todos os locais.",
    ownerEmail: "john.doe@gmail.com",
    isCompleted: false,
  },

  {
    id: "3",
    title: "Trocar puxadores do armário",
    description:
      "Necessário trocar puxadores antigos por novos para bater certo com os existentes.",
    ownerEmail: "john.doe@gmail.com",
    isCompleted: true,
  },
] as Task[]; // Alternativa Task[]

const TasksScreen = ({ navigation, route }: NavigationProps) => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(initalTasks as Task[]); //Alternativa Array<Task>
  const [cardFilter, setCardFilter] = useState("All" as Filter);

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
    <View style={styles.mainContainer}>
      {/*  <ScrollView showsVerticalScrollIndicator={true}>*/}
      <View style={styles.headerArea}>
        <Header
          title="Primeira App"
          subtitle="Bem-vindo!"
          goBack={() => navigation.goBack()}
        />
      </View>

      <View style={styles.filterView}>
        <AppButton title="Todas" onPress={() => setCardFilter("All")} />
        <AppButton title="Pendentes" onPress={() => setCardFilter("Pending")} />
        <AppButton title="Concluídas" onPress={() => setCardFilter("Done")} />
      </View>
      <View style={styles.newTaskView}>
        <TextInput
          style={styles.newTaskInput}
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          placeholder="Digite o título da tarefa"
        />
        <AppButton
          title="Inserir Tarefa"
          onPress={() => {
            const newTaskObject = {
              id: String(tasks.length + 1),
              title: newTask,
              isCompleted: false,
            } as Task;
            if (newTask.length > 0) {
              setTasks([...tasks, newTaskObject]);
            }
            setNewTask("");
          }}
        />
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
      <View style={styles.buttonsView}>
        <AppButton title="Voltar" onPress={() => navigation.goBack()} />
        <AppButton title="Home" onPress={() => navigation.popToTop()} />
      </View>

      {/* </ScrollView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: "#d7f2f8",
    alignItems: "center",
  },
  filterView: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
    justifyContent: "center",
    gap: 10,
  },
  newTaskView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
    gap: 10,
  },
  newTaskInput: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    fontSize: 16,
  },

  headerArea: {
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    maxWidth: 512,
    alignSelf: "center",
  },
  listContent: {
    paddingHorizontal: 12,
  },

  buttonsView: {
    flexDirection: "row",
    margin: 10,
    gap: 10,
  },
});

export default TasksScreen;
