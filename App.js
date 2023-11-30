import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function App() {
  const luckyPhrases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
  ];

  const [phrase, setphrase] = useState("Qual a sorte do dia?");
  const [img, setImg] = useState(require("./src/images/biscoito.png"));

  function quebraBiscoito() {
    let randomNumber = Math.floor(Math.random() * luckyPhrases.length);
    setphrase('"' + luckyPhrases[randomNumber] + '"');
    setImg(require("./src/images/biscoitoAberto.png"));
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <Text style={styles.generalText}> {phrase}</Text>
      <TouchableOpacity style={styles.button} onPress={quebraBiscoito}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>Abrir Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  generalText: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
