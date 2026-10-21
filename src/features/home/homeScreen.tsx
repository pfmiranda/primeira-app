import { StyleSheet, View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppButton from "../../components/AppButton/appButton";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import Header from "../../components/header/header";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation, route }: NavigationProps) => {
  const name = "Paulo";
  const [counter, setCounter] = useState(0);

  console.log(counter);

  return (
    <View style={styles.mainContainer}>
      <Header title="Primeira App"></Header>
      <Text style={{ color: "white", fontSize: 30 }}>
        Olá <Text style={{ fontWeight: "bold" }}>{name}</Text>!
      </Text>
      <Text numberOfLines={5} style={{ color: "#bcbbc0" }}>
        Este é o primeiro aplicativo desenvolvido em React Native com TypeScript
        por {name}.
      </Text>
      <StatusBar />
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
        source={require("../../../assets/cat.jpeg")}
      />
      <Text>{counter}</Text>
      <AppButton title="Clique Aqui" onPress={() => setCounter(counter + 1)} />

      <AppButton
        title="Go To Task Screen"
        onPress={() => navigation.navigate("Tasks")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#7dd6ea",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
