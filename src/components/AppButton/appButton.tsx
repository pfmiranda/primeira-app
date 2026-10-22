import { TouchableOpacity, Text, StyleSheet } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

const AppButton = ({ title, onPress }: AppButtonProps) => {
  return (
    //<Button title='Clique Aqui'/>
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#618ae8",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 20,
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "white",
  },
});
