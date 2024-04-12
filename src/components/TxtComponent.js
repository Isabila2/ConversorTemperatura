import { Text } from "react-native";
// Todos os props para o Text

export default function TxtComponent({ texto, styleText }) {
  return <Text style={styleText}>{texto}</Text>;
}
