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
        <View style={styles.titleBox}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={[styles.side, !!right && styles.sideFilled]}>{right}</View>
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

export default Header;

const BOX_SIZE = 45;
const BOX_RADIUS = 15;
const BOX_SHADOW = "0px 2px 8px rgba(0, 0, 0, 0.08)";

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
    justifyContent: "space-between",
  },
  titleBox: {
    flex: 1,
    maxWidth: 320,
    height: BOX_SIZE,
    marginHorizontal: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    borderRadius: BOX_RADIUS,
    backgroundColor: "whitesmoke",
    boxShadow: BOX_SHADOW,
  },
  title: {
    color: "midnightblue",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  subtitle: {
    color: "#525252",
    fontSize: 18,
    textAlign: "center",
  },
  side: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  sideFilled: {
    borderRadius: BOX_RADIUS,
    backgroundColor: "whitesmoke",
    boxShadow: BOX_SHADOW,
  },

  icon: {
    width: 20,
    height: 20,
  },
});
