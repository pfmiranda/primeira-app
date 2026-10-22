import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { type RootStackParamList } from "./src/navigation/types";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/features/home/homeScreen";
import TasksScreen from "./src/features/tasks/tasksScreen";
import TaskDetailScreen from "./src/features/tasksDetail/taskDetailScreen";
import formScreen from "./src/features/forms/formScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tasks" component={TasksScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Form" component={formScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
