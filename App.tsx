import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  {/* Definição de variáveis de uma pessoa*/}
  {/*
  const nome: string = 'Paulo';
  const idade: number = 35;
  const working: boolean = true;
  const hobbies: string[] = ['crossfit', 'futebol', 'cinema'];
  */}

{/*Definição de novo tipo onde uso os tipos base para construir um novo tipo*/}
  type Pessoa = {
      nome: string;
      idade: number;
      working: boolean;
      hobbies: string[];
  }

{/*Definição de uma variável do tipo Pessoa*/}
  const paulo: Pessoa = {
    nome: 'Paulo',
    idade: 35,
    working: true,
    hobbies: ['crossfit', 'futebol', 'cinema']
  }

  const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#b31f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  return (
    <View style={styles.mainContainer}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={{ borderWidth: 1, alignItems: "center"}}>
        <Text style={{ color: "white", fontSize: 30 }}>Olá, <Text style={{fontWeight: "bold"}}>{paulo.nome}</Text>!</Text>
         <Text numberOfLines={20} style={{color: "#bcbbc0"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum</Text>
        <StatusBar style="light" />
         {/** Imagem Remote  */}
        <Image
          style={{ width: 300, height: 400 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"}}
        /> 
        <Image
          style={{ width: 300, height: 150 }}
          source={require('./assets/cat.jpeg')}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
  
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#a15896',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
