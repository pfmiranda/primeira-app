import { useState } from "react";
import {
  Text,
  View,
  Switch,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import Header from "../../components/header/header";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Form">;

const FormScreen = ({ navigation, route }: NavigationProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskComplete, setTaskComplete] = useState(false);
  const [taskOwnerEmail, setTaskOwnerEmail] = useState("");

  const invalidTaskName = !(taskName.trim().length >= 3);
  const invalidTaskDescription = !(taskName.trim().length >= 20);
  const invalidTaskOwnerEmail = !(
    taskOwnerEmail.trim().length === 0 ||
    (taskOwnerEmail.includes("@") && taskOwnerEmail.includes("."))
  );

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Header title="Form" goBack={() => navigation.navigate("Home")} />
      <View style={styles.formArea}>
        <View style={styles.field}>
          <Text style={styles.titles}>Nome da tarefa:</Text>
          <TextInput
            style={styles.textInputs}
            value={taskName}
            onChangeText={setTaskName}
            placeholder="Introduza o nome"
            placeholderTextColor="#999"
          />
          <View style={styles.errorSlot}>
            {invalidTaskName ? (
              <Text style={styles.textInputError}>
                Um nome válido deve conter mais de 3 caracteres!
              </Text>
            ) : null}
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.titles}>Descrição da tarefa:</Text>
          <TextInput
            style={styles.textInputs}
            value={taskDescription}
            onChangeText={setTaskDescription}
            keyboardType={Platform.OS === "ios" ? "default" : "ascii-capable"}
            placeholder="Descreva o que a tarefa deve garantir"
            placeholderTextColor="#999"
          />
          <View style={styles.errorSlot}>
            {invalidTaskDescription ? (
              <Text style={styles.textInputError}>
                Uma descrição válida contém pelo menos 20 caracteres!
              </Text>
            ) : null}
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.titles}>Email do responsável da tarefa:</Text>
          <TextInput
            style={styles.textInputs}
            value={taskOwnerEmail}
            onChangeText={setTaskOwnerEmail}
            keyboardType={Platform.OS === "ios" ? "email-address" : "ascii-capable"}
            placeholder="Introduza o email do responsável"
            placeholderTextColor="#999"
          />
          <View style={styles.errorSlot}>
            {invalidTaskOwnerEmail ? (
              <Text style={styles.textInputError}>
                Um email válido deve conter pelo menos um . válida contém pelo menos 20 caracteres!
              </Text>
            ) : null}
          </View>
        </View>

        <View style={styles.termView}>
          <Text style={styles.titles}>A tarefa já está completa?</Text>
          <Switch value={isTaskComplete} onValueChange={setTaskComplete} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e9e9e9",
  },
  formArea: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 6,
  },

  field: {
    width: 300,
    marginBottom: 20,
  },
  titles: {
    marginBottom: 4,
    fontWeight: "bold",
    marginLeft: 4,
    color: "#713074",
    fontSize: 18,
  },
  textInputs: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 12,
    paddingLeft: 5,
    fontSize: 16,
    height: 30,
  },
  termView: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  textInputError: {
    paddingLeft: 5,
    color: "red",
    fontSize: 12,
  },
  errorSlot: {
    minHeight: 36,
  },
});

export default FormScreen;
