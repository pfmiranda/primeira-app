import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const nome = 'Paulo'

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
      <view style={{ borderWidth: 1, alignItems: "center"}}>
      <Text>Primeira mensagem de {nome}</Text>
      <StatusBar style="light" />
      {/** Imagem Remote  */}
      <Image
        style={{ width: 300, height: 400 }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/pt/3/3e/Sporting_Clube_de_Portugal.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
        }}
      /> 
      <Image
        style={{ width: 300, height: 150 }}
        source={require('./assets/cat.jpeg')}

      />
      </view>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
