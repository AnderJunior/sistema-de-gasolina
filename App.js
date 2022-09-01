import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity, Modal  } from 'react-native';

import Resultato from './src/Resultado';

export default function App({data}) {
  const [valorAlcool, setValorAlcool] = useState(0);
  const [valorGasolina, setValorGasolina] = useState(0);

  const [visibleModal, setVisibleModal] = useState(false);

  function calcularResultado(){
    if(valorAlcool == 0 || valorGasolina == 0){
      return;
    }
    setVisibleModal(true)
  }

  function voltarParaOCalculo(){
    setVisibleModal(false);
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.areaLogoEmpresa}>
        <Image
          source={require('./src/images/logoEmpresa.png')}
          style={styles.logoEmpresa}
        /> 
        <View style={styles.areaTexto}>
          <Text style={styles.textEmpresa}>Analis</Text>
          <Text style={styles.textEmpresa2}>Code</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginBottom: -20}}>
        <Image
        source={require('./src/images/logo.png')}
        style={{ height: 150, width: 150 }}
        />
        <Text style={styles.text}>Qual a Melhor Opção ?</Text>
      </View>

      <View style={{ alignItems: 'center'}}>
        <Text style={styles.textAlcool}>Álcool (preço por litro)</Text>
        <TextInput
        placeholder="Ex 4.50"
        style={styles.input}
        keyboardType='numeric'
        onChangeText={ (valor) => setValorAlcool(valor) }
        />

        <Text style={[styles.textAlcool, { marginTop: -50 }]}>Gasolina (preço pro litro)</Text>
        <TextInput
        placeholder="Ex 4.50"
        style={styles.input}
        keyboardType='numeric'
        onChangeText={ (valor) => setValorGasolina(valor) }
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={calcularResultado}>
        <Text style={styles.textBotao}>Calcular</Text>
      </TouchableOpacity>

      <Modal transparent={false} animationType="slide" visible={visibleModal}>
        <Resultato voltar={voltarParaOCalculo} 
        gasolina={valorGasolina} 
        alcool={valorAlcool} />
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    backgroundColor: '#121212',
    paddingBottom: 100
  },
  text:{
    fontSize: 20,
    color: '#fff',
    marginTop:15,
    fontWeight: 'bold'
  },
  textAlcool:{
    paddingTop: 55,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 5,
    width: 200
  },
  input:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  botao:{
    backgroundColor: '#ff0000',
    justifyContent: "center",
    alignItems: "center",
    width: '90%',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20
  },
  textBotao:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  areaLogoEmpresa:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: -100,
    marginLeft: 20
  },
  logoEmpresa:{
    width: 30,
    height: 30,
    marginLeft: 17,
  },
  areaTexto:{
    flexDirection: 'row',
    margin: 5
  },
  textEmpresa:{
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 10
  },
  textEmpresa2:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
    marginLeft: 1
  }
});

















