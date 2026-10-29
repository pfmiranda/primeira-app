import { TouchableOpacity, Text, StyleSheet } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const AppButton = ({ title, onPress, disabled = false }: AppButtonProps) => {
  return (
    //<Button title='Clique Aqui'/>
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.buttonStyle, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "midnightblue",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 20,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "oldlace",
  },
  buttonDisabled: {
    opacity: 0.4,
  },
});
