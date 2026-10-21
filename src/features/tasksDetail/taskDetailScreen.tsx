import { Text, View } from "react-native";
import Header from "../../components/header/header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "TaskDetail">;

const TaskDetailScreen = ({ navigation, route }: NavigationProps) => {
  return (
    <View>
      <Header
        title="Detalhe da tarefa"
        goBack={() => navigation.goBack()}></Header>
      <View>
        <Text>Fazer Compras</Text>
      </View>
    </View>
  );
};

export default TaskDetailScreen;
