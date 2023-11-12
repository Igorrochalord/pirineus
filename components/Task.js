import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//React: Importando a biblioteca principal do React.
//View, Text, StyleSheet, TouchableOpacity: Importando componentes específicos e utilitários da biblioteca react-native.

const Task = (props) => {
//Definindo um componente funcional chamado Task que recebe props como parâmetro.


  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}
//O componente retorna uma View contendo dois componentes filhos View (itemLeft e circular).
//itemLeft contém um quadrado (square) e um texto (itemText) com base no valor de props.text passado para o componente.circular é um elemento circular.


//Esses estilos definem a aparência visual do componente, como cores, tamanhos e posicionamento.
// O componente Task está destinado a representar uma tarefa em um aplicativo React Native.
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;