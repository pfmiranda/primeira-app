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
} from "react-native";
import Header from "../../components/header/header";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";
import AppButton from "../../components/AppButton/appButton";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "NewTask">;

const NewTaskScreen = ({ navigation, route }: NavigationProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskComplete, setTaskComplete] = useState(false);
  const [taskOwnerEmail, setTaskOwnerEmail] = useState("");

  const save = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  const invalidTaskName = taskName.trim().length < 3;
  const invalidTaskDescription = taskDescription.trim().length < 20;
  const invalidTaskOwnerEmail = !(
    taskOwnerEmail.trim().length === 0 ||
    (taskOwnerEmail.includes("@") && taskOwnerEmail.includes("."))
  );

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={styles.headerArea}>
        <Header title="Nova Tarefa" goBack={() => navigation.goBack()} />
      </View>
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
              placeholder="Introduza o nome"
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
              style={styles.textInputs}
              value={taskDescription}
              onChangeText={setTaskDescription}
              placeholder="Descreva o que a tarefa deve garantir"
              placeholderTextColor="#999"
              accessibilityLabel="Descrição da tarefa"
            />
            <View style={styles.errorSlot}>
              {invalidTaskDescription ? (
                <Text style={styles.textInputError}>
                  A descrição deve conter pelo menos 20 caracteres!
                </Text>
              ) : null}
            </View>
          </View>

          <View style={styles.field}>
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
          </View>

          <View style={styles.termView}>
            <Text style={[styles.titles, styles.termLabel]}>
              A tarefa já está completa?
            </Text>
            <Switch value={isTaskComplete} onValueChange={setTaskComplete} />
          </View>
        </View>
        <View style={styles.buttonArea}>
          <AppButton title="Cancelar" onPress={save} />
          <AppButton title="Guarda tarefa" onPress={save} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#e9e9e9",
  },
  headerArea: {
    width: "100%",
    maxWidth: 512,
    paddingHorizontal: 4,
    alignSelf: "center",
  },
  scroll: {
    flex: 1,
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
  },
  titles: {
    marginBottom: 4,
    marginLeft: 4,
    fontWeight: "bold",
    color: "#713074",
    fontSize: 18,
  },
  textInputs: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
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
    gap: 10,
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
});

export default NewTaskScreen;
