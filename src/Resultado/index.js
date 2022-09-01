import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Resultato(props) {

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../images/gas.png')} />

      <View style={styles.areaText}>
        <Text style={styles.titulo}>{
          ( props.alcool / props.gasolina > 0.7 ? 'Abastecer com Gasolina' : 'Abastecer com alcool')
          }</Text>
        <Text style={styles.subTitulo}>Com os preços:</Text>
        <Text style={styles.valorGasolina}>
          Álcool: R$ {Number(props.alcool).toFixed(2)}
        </Text>
        <Text style={styles.valorGasolina}>
          Gasolina: R$ {Number(props.gasolina).toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={props.voltar}>
        <Text style={styles.textBotao}>Calcular Novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  img: {
    marginTop: 80,
  },
  areaText: {
    paddingTop: 30,
    alignItems: 'center',
  },
  titulo: {
    color: '#46ff00',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
  },
  subTitulo: {
    paddingTop: 20,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  valorGasolina: {
    color: '#fff',
    marginTop: 10,
  },
  botao: {
    marginTop: 50,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff0000',
  },
  textBotao: {
    color: '#ff0000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
