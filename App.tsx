import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/navigation/types";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/features/home/homeScreen";
import TasksScreen from "./src/features/tasks/tasksScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
