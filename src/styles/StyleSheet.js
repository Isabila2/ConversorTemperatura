import { StyleSheet } from "react-native";
// Importando StyleSheet e criando a const styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede0d7",
  },
  titulo: {
    color: "#292d42",
    fontSize: 22,
  },
  inputs: {
    width: 300,
    height: 30,
    textAlign: "center",
  },
  botao: {
    width: 300,
    height: 50,
    backgroundColor: "#cfa98f",
    borderWidth: 1,
    borderColor: "#b2907a",
    borderRadius: 15,
    marginTop: 15,
  },
  txtbotao: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 17,
    color: "#292d42",
  },
});

export default styles;
