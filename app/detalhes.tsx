import { router, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { lanches } from "../assets/mockups/lanche";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fce",
    padding: 20,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#836",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 6,
  },
  ingredientes: {
    fontSize: 16,
    marginBottom: 10,
  }
});

export default function Detalhes() {
  const { id } = useLocalSearchParams();
  const indice = lanches.findIndex((lanche) => lanche.id === Number(id));
  const lanche = lanches[indice];

  function voltar() {
    router.back();
  }

  if (!lanche) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Lanche não encontrado</Text>
        <Button title="Voltar" color="#f9c" onPress={voltar} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{lanche.nome}</Text>
      <Text style={styles.text}>Preço: R$ {lanche.preco ? lanche.preco.toFixed(2) : "N/A"}</Text>
      <Text style={styles.ingredientes}>Ingredientes:</Text>
      {lanche.ingredientes.map((ing, idx) => (
        <Text key={idx} style={styles.text}>- {ing}</Text>
      ))}
      <Button title="Voltar" color="#f9c" onPress={voltar} />
    </View>
  );
}