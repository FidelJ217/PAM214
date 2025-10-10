// 1. Imports: Zona de importaciones.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
//2.Main: Zona de componentes.


export default function ContadorScreen() {
  const [contador,setContador] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}> Contador: </Text>
       <Text style={styles.texto2}> {contador} </Text>

       <View style={styles.contenedorBotones}>
        <Button color={'pink'} title='Agregar' onPress={()=>setContador(contador + 1)} />
        <Button color={'green'} title='Quitar' onPress={()=>setContador(contador - 1)} />
        <Button  color={'orange'}title='Reiniciar' onPress={()=>setContador( 0)} />
        </View>

      <StatusBar style="auto" />

    </View>
  );
}

//3. Estilos: Zona de estética y posicionamiento de los componentes.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f761ff', 
    alignItems: 'center',      //Trabaja en el eje x
    justifyContent: 'center',  //Trabaja en el eje Y


  },
  texto:{
    color: '#ff1616ff',
    fontSize: 30,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',           //Cambiar el texto a negrita
    fontStyle: 'italic ',         //Dos propiedades, italic y normal. Texto de costado.
    textDecorationLine: 'line-through'  //texto rayado
  },

  texto2:{
    color:'#a47ee0ff',
    fontSize:40,
    fontFamily:'Arial',
    fontWeight: 900,
    textDecorationLine: 'underline',

  },

  contenedorBotones:{
    marginTop: 15,            //Sirve para dar una separación de la parte superior con los botones.
    flexDirection:'row',      //Siempre viene en columna y siempre se posiconan en columna o ponerlo en row pa' filas
    gap: 15,                 //Separación equidistante.


  },

});
