import { StyleSheet, Text, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppButton from "../../components/AppButton/appButton";
import { useState } from "react";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";
import Header from "../../components/header/header";
import { SafeAreaView } from "react-native-safe-area-context";
//import { Lucide } from "@react-native-vector-icons/lucide";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation, route }: NavigationProps) => {
  const name = "Paulo";
  const [counter, setCounter] = useState(0);

  //console.log(counter);

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top"]}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Header title="Primeira App" />
        <Text style={styles.presentation}>
          Olá <Text style={styles.name}>{name}</Text>!
        </Text>
        <Text style={styles.description}>
          Este é o primeiro aplicativo desenvolvido em React Native com
          TypeScript por {name}.
        </Text>
        {/** Imagem Remote  */}
        <Image
          resizeMode="contain"
          style={styles.smallImage}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
          }}
        />
        <Image
          resizeMode="contain"
          style={styles.bigImage}
          source={require("../../../assets/cat.jpeg")}
        />
        <Text style={styles.counter}>{counter} Cliques</Text>
        <AppButton
          title="Clique Aqui"
          onPress={() => setCounter(counter + 1)}
        />

        <AppButton
          title="Ver Tarefas"
          onPress={() => navigation.navigate("Tasks")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#d7f2f8",
  },
  scroll: {
    flex: 1,
    width: "100%",
  },
  content: {
    width: "100%",
    //maxWidth: 512,
    alignSelf: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  presentation: {
    color: "midnightblue",
    fontSize: 30,
  },
  name: {
    fontWeight: "bold",
  },

  description: {
    color: "midnightblue",
    fontSize: 16,
    textAlign: "center",
  },

  smallImage: {
    width: "100%",
    maxWidth: 150,
    aspectRatio: 1,
  },

  bigImage: {
    width: "100%",
    maxWidth: 400,
    aspectRatio: 400 / 150,
  },

  counter: {
    color: "midnightblue",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;
