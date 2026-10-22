import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

type HeaderProps = {
  title: string;
  subtitle?: string;
  goBack?: () => void;
  right?: React.ReactNode;
};

const Header = ({ title, subtitle, goBack, right }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.side, goBack && styles.sideFilled]}>
          {goBack && (
            <TouchableOpacity onPress={goBack}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={require("../../../assets/return.png")}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={[styles.side, styles.sideRight, !!right && styles.sideFilled]}>{right}</View>
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 40,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: "#000000",
    fontSize: 22,
    textAlign: "center",
  },
  subtitle: {
    color: "#525252",
    fontSize: 18,
    textAlign: "center",
  },
  side: {
    width: 45,
    height: 45,
    padding: 10,
    alignItems: "flex-start",
  },
  sideFilled: {
    borderRadius: 15,
    backgroundColor: "white",
  },

  sideRight: {
    alignItems: "flex-end",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
