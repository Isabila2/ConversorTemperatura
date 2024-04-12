// Importando View, Text e Touchable
import { View, TouchableOpacity } from "react-native";
// Importando os componentes TxtComponent, styles e TxtInputComponent
import TxtComponent from "./src/components/TxtComponent";
import styles from "./src/styles/StyleSheet";
import TxtInputComponent from "./src/components/TxtInputComponent";
// Importando o useState e o Modal
import React, { useState } from "react";
import { Modal } from "react-native";

export default function App() {
  // As variáveis que serão usadas para a conta e para abrir o modal
  const [celsius, setCelsiu] = useState("");
  const [resultado, setResultado] = useState("");
  const [visible, setVisible] = useState(false);

  // Const que verifica se tem algum valor para, se isso for verificado, então abrir o modal e realizar toda a conta com os valores do celsius e depois dar o resultado
  const calc_tem = () => {
    if (celsius != "") {
      setVisible(true);
      const resultado = (parseFloat(celsius) * 9) / 5 + 32;
      const resposta = celsius + " °C equivale à " + resultado + " °F!";
      setResultado(resposta);
    } else {
      setVisible(false);
      alert("Coloque alguem valor!");
    }
  };

  // Const para fechar o modal e limpar o Input
  const calc_novamente = () => {
    setCelsiu("");
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Código da tela principal com os TxtComponentes e com o TxtInputComponent */}
      <View style={styles.topo}>
        <TxtComponent
          styleText={styles.titulo}
          texto="Conversor de Temperatura"
        />
      </View>
      <TxtInputComponent
        styleInput={styles.inputs}
        legenda="Coloque o valor em Celsius aqui..."
        value={celsius}
        changeText={setCelsiu}
        teclado="numeric"
      />
      <TouchableOpacity onPress={calc_tem} style={styles.botao}>
        <TxtComponent texto="Resultado" styleText={styles.txtbotao} />
      </TouchableOpacity>

      {/* Código do modal com o TxtComponente  e o Touchable*/}
      <Modal visible={visible}>
        <View style={styles.container}>
          <TxtComponent styleText={styles.titulo} texto={resultado} />
          <TouchableOpacity style={styles.botao} onPress={calc_novamente}>
            <TxtComponent
              styleText={styles.txtbotao}
              texto="Calcular Novamente"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
