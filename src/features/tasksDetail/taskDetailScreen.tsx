import { Text, View } from "react-native";
import Header from "../../components/header/header";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "TaskDetail">;

const TaskDetailScreen = ({ navigation, route }: NavigationProps) => {
  return (
    <View>
      <Header title="Detalhe da tarefa" goBack={() => navigation.goBack()} />
      <View>
        <Text>Fazer Compras</Text>
      </View>
    </View>
  );
};

export default TaskDetailScreen;
