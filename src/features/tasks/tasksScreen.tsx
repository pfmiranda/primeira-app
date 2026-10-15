import React, { useState } from "react";
import { StyleSheet, View, TextInput, FlatList } from "react-native";
import AppButton from "../../components/AppButton/appButton";
import TaskCard from "../../components/Card/TaskCard";
import Header from "../../components/header/header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Tasks">;

//definição do tipo Task
type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

// inicialização de um array de tasks
const initalTasks = [
  {
    id: "1",
    title: "Arranjar fechadura da porta",
    isCompleted: false,
  },

  {
    id: "2",
    title: "Reconfigurar home network",
    isCompleted: false,
  },

  {
    id: "3",
    title: "Trocar puxadores do armário",
    isCompleted: true,
  },
] as Task[]; // Alternativa Task[]

type Filter = "All" | "Done" | "Pending";

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
      <Header title="Primeira App" subtitle="Bem-vindo!" />

      <View
        style={{
          flexDirection: "row",
        }}>
        <AppButton title="Todas" onPress={() => setCardFilter("All")} />
        <AppButton title="Pendentes" onPress={() => setCardFilter("Pending")} />
        <AppButton title="Concluídas" onPress={() => setCardFilter("Done")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
        <TextInput
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
        showsVerticalScrollIndicator={false}
        data={visibleTasks()}
        keyExtractor={(task) => task.id}
        renderItem={({ item: task }) => (
          <TaskCard
            id={task.id}
            title={task.title}
            isComplete={task.isCompleted}
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
      <View style={{ flexDirection: "row", margin: 10, gap: 10 }}>
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
    backgroundColor: "#d7f2f8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TasksScreen;
