
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, {useState} from 'react';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState ('');
  const [resultado, setResultado] = useState('')
  
  function calcularIMC(){
    const imc = peso / (altura * altura);
    setResultado (imc)

  }

  return (
<View>
  <Text>Calculadora de IMC</Text>

<TextInput
  placeholder='Peso (kg)'
  keyboardType="numeric"
  value={peso}
  onChangeText={setPeso}
/>

<TextInput
  placeholder='Altura (cm)'
  keyboardType="numeric"
  value={altura}
  onChangeText={setAltura}
/>
<button title= "Calcular IMC" onPress={calcularIMC}/>


</View>

);
}


  


    

  
