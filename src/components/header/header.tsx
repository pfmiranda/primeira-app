import React from "react";
import { View, Text, StyleSheet } from "react-native";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#525252",
    fontSize: 18,
    textAlign: "center",
  },
});

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        {subtitle ? subtitle : "Sem subtítulo definido"}
      </Text>
    </View>
  );
};

export default Header;
