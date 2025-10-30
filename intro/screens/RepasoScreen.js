import { ImageBackground, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function RepasoScreen() {

    //Logo personalizado de carga
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);

        }, 1000);
        return () => clearTimeout(timer);

    }, []);

    //CAMPOS PARA RELLENAR:
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const mostrarAlerta = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (nombre.trim() === '' || correo.trim() === '') {
            alert('Error. Porfavor rellene todos los campos.');
            Alert.alert('Error. Porfavor rellene todos los campos.');
        } else if (!emailRegex.test(correo)) {
            alert('Error. Correo No Valido.');
            Alert.alert('Error. Correo No Valido.');

        } else if (isDisabled) {
            Alert.alert('Aviso, Debes aceptar los términos y condiciones para continuar.');
            alert('Aviso, Debes aceptar los términos y condiciones para continuar.');
        } else {
            alert(`Hola ${nombre}!!,Tu nombre ha sido registrado con exito, junto con tu correo ${correo}`);
            Alert.alert(`Hola ${nombre}!!,Tu nombre ha sido registrado con exito, junto con tu correo ${correo} `);

            setNombre('');
            setCorreo('');
            setIsDisabled(true);
        }
    }

    // BOTÓN SWITCH:
    const [isDisabled, setIsDisabled] = useState(true);





    if (showSplash) {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ImageBackground
                    style={styles.imagenPantallaCarga}
                    source={{
                        uri: 'https://wallpapercave.com/wp/wp3850825.jpg ',
                    }}
                >

                    <View style={styles.pantallaCarga} >
                        <Text style={styles.textoPantallaCarga} >CARGANDO....</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
    return (

        <SafeAreaView style={{ flex: 1 }} >





            <ImageBackground
                    source={{
                        uri: 'https://wallpapercave.com/wp/wp3850825.jpg ',
                    }}
                style={styles.background}

            >
                <View style={styles.contenedorPrincipal} >
                    <Text style={styles.registroTexto} > Registro de Usuario</Text>

                    <View style={styles.cuadroInput}>

                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Completo'
                            value={nombre}
                            onChangeText={setNombre}


                        />

                        <TextInput

                            style={styles.input}
                            placeholder='Correo Electrónico'
                            value={correo}
                            onChangeText={setCorreo}
                            keyboardType='email-address'

                        />
                        <Text style={styles.textoPantalla} > Aceptar Terminos y Condiciones

                            <Switch style={styles.botonSwitch}
                                onValueChange={() => setIsDisabled(!isDisabled)}
                                value={!isDisabled}
                            />

                        </Text>

                    </View>
                    <TouchableOpacity
                        activeOpacity={0.2}
                        onPress={mostrarAlerta}


                    >
                        <Text style={styles.textoPantalla2} > Registrate</Text>





                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </SafeAreaView>


    );
}



const styles = StyleSheet.create({

    splashContainer: {
        flex: 1,
    },

    imagenPantallaCarga: {
        flex: 1,
        justifyContent: 'center',
    },

    pantallaCarga: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoPantallaCarga: {
        fontSize: 20,
        color: 'white'

    },

background: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',  
  alignItems: 'center',      
},


    contenedorPrincipal: {
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#0d0c0cc3',
        borderRadius: 20,
        width: '90%',
        height: 'auto',

    },

    cuadroInput: {
        alignItems: 'center',

    },

input: {
  width: '100%',
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 5,
  paddingHorizontal: 15,
  marginBottom: 15,
},

    botonSwitch: {

        marginLeft: 200,

    },

    textoPantalla: {
        color: 'white',

    },

    registroTexto: {
        color: 'white',
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'flex-start',
        fontSize: 22.5


    },

    textoPantalla2: {
        color: 'blue',
        justifyContent: 1,
        marginTop: 30

    }






})