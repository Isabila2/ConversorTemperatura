import { TextInput } from "react-native";
// Todos os props
export default function TxtInputComponent({
  legenda,
  styleInput,
  value,
  changeText,
  teclado,
}) {
  return (
    <TextInput
      placeholder={legenda}
      style={styleInput}
      value={value}
      onChangeText={changeText}
      keyboardType={teclado}
    />
  );
}
