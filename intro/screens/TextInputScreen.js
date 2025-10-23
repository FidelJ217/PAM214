import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native'
import React, {useState} from 'react';


export default function TextInputScreen() {
  const[nombre, setNombre] = useState ('');
  const[contraseña, setContraseña] = useState ('');
  const[contenido, setContenido] = useState ('');

  const  mostrarAlerta = ()=>{
    if(nombre.trim() === ' ' || contraseña.trim() === ' ' || contenido.trim() == ' ' ){
      alert('Error. Por favor ingresa tu nombree.');
      Alert.alert('Error. Por favor ingresa tu nombre.');
      }else{
      Alert.alert(`Hola ${nombre}!, 'Tu nombre ha sido registrado con éxito!!!' `);     //Se ponen para integrar una variable en esa cadena de texto en vez de poner el +
      alert(`Hola ${nombre}!, Tu nombre ha sido registrado con éxito!!!. Tu contraseña es ${contraseña} . ` );


      setNombre('');
      setContraseña('');
      setContenido('');
      }
  };
  
   
    return (
      <View style={styles.container} >
        <Text style={styles.label} > Ingresa tu nombre</Text>

        <TextInput
        style={styles.input}
        placeholder='Ingresar tu nombre...'
        value={nombre}
        onChangeText={setNombre}
        keyboardType='default'
        autoCapitalize='words'
        />

        <TextInput
        style={styles.input}
        placeholder='Password...'
        keyboardType='numeric'
        secureTextEntry =  {true}

        />


        <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        />

        <Button
        title='Saludar'
        onPress ={mostrarAlerta}
        color='#841584'
        
        />
      </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16, 
  },
});

