import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type RootStackParamList } from "../../navigation/types";

import { View, StyleSheet, Text, Pressable } from "react-native";
import Header from "../../components/header/header";
import { Lucide } from "@react-native-vector-icons/lucide";
import { SafeAreaView } from "react-native-safe-area-context";

type NavigationProps = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen = ({ navigation, route }: NavigationProps) => {
  return (
    <SafeAreaView style={styles.mainView} edges={["top"]}>
      <View style={styles.profileView}>
        <Header title="Perfil" goBack={navigation.goBack} showProfile={false} />
        <View style={styles.profileDetailsView}>
          <View style={styles.avatar}>
            <Text style={styles.avatarName}>AS</Text>
          </View>
          <Text style={styles.name}>Ana Silva</Text>
          <Text style={styles.ocupation}>Estudante de DAM</Text>
        </View>
        <View style={styles.statsBarView}>
          <View style={styles.statView}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Tarefas</Text>
          </View>
          <View style={styles.statView}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Feitas</Text>
          </View>
          <View style={styles.statView}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Dias seguidos</Text>
          </View>
        </View>
        <View style={styles.optionBlockView}>
          <View style={styles.optionView}>
            <View style={styles.optionIconView}>
              <Lucide name="user" size={20} color={"#374891"} />
            </View>
            <Text style={styles.optionTitle}>Editar perfil</Text>
            <Pressable style={styles.arrowIcon}>
              <Lucide name="chevron-right" size={20} color={"#374891"} />
            </Pressable>
          </View>
          <View style={styles.optionView}>
            <View style={styles.optionIconView}>
              <Lucide name="bell" size={20} color={"#374891"} />
            </View>
            <Text style={styles.optionTitle}>Notificações</Text>
            <Pressable style={styles.arrowIcon}>
              <Lucide name="chevron-right" size={20} color={"#374891"} />
            </Pressable>
          </View>
          <View style={styles.optionView}>
            <View style={styles.optionIconView}>
              <Lucide name="lock-keyhole" size={20} color={"#374891"} />
            </View>
            <Text style={styles.optionTitle}>Privacidade</Text>
            <Pressable style={styles.arrowIcon}>
              <Lucide name="chevron-right" size={20} color={"#374891"} />
            </Pressable>
          </View>
          <View style={styles.optionView}>
            <View style={styles.optionIconView}>
              <Lucide name="circle-question-mark" size={20} color={"#374891"} />
            </View>
            <Text style={styles.optionTitle}>Ajuda</Text>
            <Pressable style={styles.arrowIcon}>
              <Lucide name="chevron-right" size={20} color={"#374891"} />
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.signOutView}>
          <Lucide
            name="square-arrow-right-exit"
            size={20}
            color={COLOR_SIGNOUT}
          />

          <Text style={styles.signOutText}>Terminar Sessão</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const COLOR_BORDER = "lightgray";
const COLOR_SIGNOUT = "maroon";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white",

    // justifyContent: "center",
  },

  profileView: {
    marginHorizontal: 15,
    padding: 5,

    borderWidth: 1,
    borderRadius: 18,
    borderColor: COLOR_BORDER,
  },
  profileDetailsView: {
    marginTop: 20,
    alignItems: "center",
  },
  avatar: {
    borderRadius: 50,
    backgroundColor: "#d5e0f9",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarName: {
    color: "#374891",
    fontSize: 26,
    fontWeight: "600",
  },
  name: {
    padding: 4,
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  ocupation: {
    padding: 4,
    color: "grey",
    fontSize: 16,
  },
  statsBarView: {
    marginHorizontal: 15,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  statNumber: {
    color: "#374891",
    fontWeight: "600",
    fontSize: 24,
  },
  statLabel: {
    fontSize: 14,
    color: "grey",
  },
  optionBlockView: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  optionView: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLOR_BORDER,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 5,
  },
  optionIconView: {
    marginLeft: 15,
  },
  optionTitle: {
    flex: 1,
    color: "black",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "600",
  },
  arrowIcon: {
    padding: 10,
    marginRight: 15,
  },
  signOutView: {
    borderWidth: 1,
    borderColor: COLOR_SIGNOUT,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    margin: 20,
    gap: 10,
  },
  signOutText: {
    color: COLOR_SIGNOUT,
    fontSize: 16,
    fontWeight: "600",
  },
});
