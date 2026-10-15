import { Button, TouchableOpacity, Text } from "react-native";

type AppButtonProps = {
  title: string;
  onPress: () => void;
};

const AppButton = ({ title, onPress }: AppButtonProps) => {
  return (
    //<Button title='Clique Aqui'/>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: "#618ae8",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Arial",
          fontWeight: "bold",
          color: "white",
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
