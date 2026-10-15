import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import Header from "./src/components/header/header";
import AppButton from "./src/components/AppButton/appButton";
import { useState } from "react";
//import PeopleCard from "./src/components/Card/PeopleCard";
import TaskCard from "./src/components/Card/TaskCard";

//Definição de variáveis de uma pessoa
{
  /*
  const nome: string = 'Paulo';
  const idade: number = 35;
  const working: boolean = true;
  const hobbies: string[] = ['crossfit', 'futebol', 'cinema'];
  */
}

//Definição de novo tipo onde uso os tipos base para construir um novo tipo
/*
type Pessoa = {
  nome: string;
  idade: number;
  working: boolean;
  hobbies: string[];
};

const PessoasList = [
  {
    nome: "Maria",
    idade: 30,
    working: false,
    hobbies: ["leitura", "viagem", "fotografia"],
  },
  {
    nome: "João",
    idade: 25,
    working: true,
    hobbies: ["futebol", "música", "cinema"],
  },
  {
    nome: "Paulo",
    idade: 35,
    working: true,
    hobbies: ["crossfit", "futebol", "cinema"],
  },
  {
    nome: "Ana",
    idade: 28,
    working: true,
    hobbies: ["dança", "arte", "moda"],
  },
] as Array<Pessoa>;

*/

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
    title: "Arranjar fechado da porta",
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

export default function App() {
  const name = "Paulo";
  const [counter, setCounter] = useState(0);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(initalTasks as Task[]); //Alternativa Array<Task>

  console.log("Contador: ", counter); //logar para consola o contador

  // const [counter, setCounter] = useState<number>(0);
  //const [email, setEmail] = useState<string>("");
  //const [pessoas, setPessoas] = useState<Pessoa[]>(PessoasList);

  //console.log("Counter: ", counter);

  return (
    <View style={styles.mainContainer}>
      {/*  <ScrollView showsVerticalScrollIndicator={true}>*/}
      <Header title="Primeira App" subtitle="Bem-vindo!" />
      <View style={{ alignItems: "center" }}>
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
        </View>
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

      <Text style={{ color: "white", fontSize: 30 }}>
        Olá <Text style={{ fontWeight: "bold" }}>{name}</Text>!
      </Text>
      <Text numberOfLines={5} style={{ color: "#bcbbc0" }}>
        Este é o primeiro aplicativo desenvolvido em React Native com TypeScript
        por {name}.
      </Text>
      <StatusBar style="light" />
      {/** Imagem Remote  */}
      <Image
        resizeMode="contain"
        style={{ width: 150, height: 150 }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
        }}
      />

      <Image
        resizeMode="contain"
        style={{ width: 400, height: 150 }}
        source={require("./assets/cat.jpeg")}
      />
      <Text>{counter}</Text>
      <AppButton title="Clique Aqui" onPress={() => setCounter(counter + 1)} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item: task }) => (
          <TaskCard
            id={task.id}
            title={task.title}
            isComplete={task.isCompleted}
            onDelete={() => {
              setTasks(tasks.filter((t) => t.id !== task.id));
            }}
            onEdit={() => {
              setTasks(
                tasks.map((t) =>
                  t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t,
                ),
              );
            }}
          />
        )}
      />

      {/* </ScrollView> */}

      {/*
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Digite seu e-mail"
          />

          <Text>
            O Valor do Counter é: {counter}. O valor do email é: {email}.
          </Text>
          
          <AppButton
            title="Clique Aqui"
            onPress={() => setCounter(counter + 1)}
          />*/}
      {/*<FlatList
            data={PessoasList}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => <Text> {item.nome} </Text>}
          />*/}
      {/*       {pessoas.map((pessoa) => (
            <PeopleCard
              key={pessoa.nome}
              nome={pessoa.nome}
              idade={pessoa.idade}
              working={pessoa.working}
              hobbies={pessoa.hobbies}
            />
          ))}*/}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#d7f2f8",
    alignItems: "center",
    justifyContent: "center",
  },
});
