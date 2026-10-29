import { useState } from "react";
import {
  Text,
  View,
  Switch,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Keyboard,
  Pressable,
} from "react-native";
import Header from "../../components/header/header";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";
import AppButton from "../../components/AppButton/appButton";
import { type Task, type Priority } from "../tasks/types";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "NewTask">;

const NewTaskScreen = ({ navigation, route }: NavigationProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskComplete, setTaskComplete] = useState(false);
  // const [taskOwnerEmail, setTaskOwnerEmail] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low" as Priority);
  const taskList = route.params.taskList;
  const priorities: Priority[] = ["Low", "Medium", "High"];
  const priorityLabels: Record<Priority, string> = {
    Low: "Baixa",
    Medium: "Média",
    High: "Alta",
  };

  const save = () => {
    Keyboard.dismiss();
    const newTaskObject = {
      id: String(taskList.length + 1),
      title: taskName,
      isCompleted: isTaskComplete,
      priority: taskPriority,
    } as Task;
    navigation.navigate("Tasks", { taskList: [...taskList, newTaskObject] });
  };

  const invalidTaskName = taskName.trim().length < 3;
  const invalidTaskDescription = taskDescription.trim().length < 20;

  /* const invalidTaskOwnerEmail = !(
    taskOwnerEmail.trim().length === 0 ||
    (taskOwnerEmail.includes("@") && taskOwnerEmail.includes("."))
  );*/

  return (
    <SafeAreaView edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <Header title="Nova Tarefa" goBack={() => navigation.goBack()} />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">
          <View style={styles.formArea}>
            <View style={styles.field}>
              <Text style={styles.titles}>Nome da tarefa:</Text>
              <TextInput
                style={styles.textInputs}
                value={taskName}
                onChangeText={setTaskName}
                placeholder="Ex.: Regar plantas"
                placeholderTextColor="#999"
                accessibilityLabel="Nome da tarefa"
              />
              <View style={styles.errorSlot}>
                {invalidTaskName && taskName.length > 0 ? (
                  <Text style={styles.textInputError}>
                    O nome deve conter pelo menos 3 caracteres!
                  </Text>
                ) : null}
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.titles}>Descrição da tarefa:</Text>
              <TextInput
                style={[styles.textInputs, styles.descriptionInput]}
                value={taskDescription}
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                onChangeText={setTaskDescription}
                placeholder="Ex.: Regar interiores e do pátio (opcional)"
                placeholderTextColor="#999"
                accessibilityLabel="Descrição da tarefa"
              />
              <View style={styles.errorSlot}>
                {invalidTaskDescription && taskDescription.length > 0 ? (
                  <Text style={styles.textInputError}>
                    A descrição deve conter pelo menos 20 caracteres!
                  </Text>
                ) : null}
              </View>
            </View>

            {/*} <View style={styles.field}>
              <Text style={styles.titles}>Email do responsável:</Text>
              <TextInput
                style={styles.textInputs}
                value={taskOwnerEmail}
                onChangeText={setTaskOwnerEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Introduza o email do responsável"
                placeholderTextColor="#999"
                accessibilityLabel="Email do responsável"
              />
              <View style={styles.errorSlot}>
                {invalidTaskOwnerEmail ? (
                  <Text style={styles.textInputError}>
                    Um email válido deve conter @ e pelo menos um ponto.
                  </Text>
                ) : null}
              </View>
            </View>*/}
            <Text style={styles.titles}>Prioridade</Text>
            <View style={styles.priorityView}>
              {priorities.map((i) => {
                const active = i === taskPriority;
                return (
                  <Pressable key={i} onPress={() => setTaskPriority(i)}>
                    <Text
                      style={[
                        styles.priorityOptions,
                        {
                          borderColor: active ? "#3d5ce4" : "#d9dae3",
                          backgroundColor: active ? "#e6e6fa" : "#fff",
                        },
                      ]}>
                      {priorityLabels[i]}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.termView}>
              <Text style={[styles.titles, styles.termLabel]}>
                A tarefa já está completa?
              </Text>
              <Switch value={isTaskComplete} onValueChange={setTaskComplete} />
            </View>
          </View>

          <View style={styles.buttonArea}>
            <AppButton title="Cancelar" onPress={navigation.goBack} />
            <AppButton
              title="Guarda tarefa"
              onPress={save}
              disabled={invalidTaskName}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    //flex: 1,
    backgroundColor: "#d8d8d8",
    marginTop: 15,
  },
  scroll: {
    //  flex: 1,
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    padding: 16,
  },
  formArea: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
  },
  field: {
    width: "100%",
    marginBottom: 8,
    borderColor: "lightgray",
  },

  titles: {
    marginBottom: 4,
    marginLeft: 4,
    fontWeight: "bold",
    color: "black",
    fontSize: 14,
  },
  textInputs: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  descriptionInput: {
    minHeight: 100,
  },
  errorSlot: {
    minHeight: 32,
    paddingTop: 4,
  },
  textInputError: {
    paddingLeft: 5,
    color: "red",
    fontSize: 12,
  },
  termView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  termLabel: {
    flex: 1,
    marginBottom: 0,
  },
  buttonArea: {
    width: "100%",
    maxWidth: 480,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    marginTop: 10,
  },
  priorityView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  priorityOptions: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    // borderColor: "lightgray",
    width: 70,
    textAlign: "center",
    color: "slategray",
  },
});

export default NewTaskScreen;
