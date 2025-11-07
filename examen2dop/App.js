
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Alert, ScrollView, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native-web';

export default function App() {

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const mostrarAlerta = () => {
    alert("Guardar y Cancelar");

  }

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)

    }, 1000);

    return () => clearTimeout(timer);

  }, []);

  if (showSplash) {
    return (

      <SafeAreaView style={{ flex: 1 }} >
        <ImageBackground

          style={styles.pantallaCarga}
          source={{
            uri: 'https://wallpapercave.com/wp/wp3850825.jpg ',
          }}

        >
          <View>
            <Text style={styles.splashText} >
              Bienvenido al examen del segundo parcial!!

            </Text>

          </View>
        </ImageBackground>

      </SafeAreaView>
    )

  }

  return (
    <SafeAreaView style={{ flex: 1 }} >


      <ScrollView

        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }

        stickyHeaderIndices={[0]}
      >





        <View>



          <ImageBackground
            source={{
              uri: 'https://wallpapercave.com/wp/wp3850825.jpg ',
            }}

            style={styles.background}
          >

            <View style={styles.container}>

            <View style={styles.contenedorInfo} >

              <Text style={styles.texto }> NOMBRE: Juárez Torres Juan Fidel</Text>
              <Text  style={styles.texto } >PROFESIÓN / TITULO : Ingeniero en sistemas computacionales</Text>
              <Text style={styles.texto } > BIOGRAFÍA: Me llamo Fidel y nací en Ciuda Madero, Tamaulipas, 
                Tengo una gata llamda Milly, la quiero mucho y es mi mascota que tuve cuando tenia 12 años.
                Actualmente vivo y estoy estudiando en Queretaro, en la universidad Politécnica de Querétaro.
                Es algo dificil en algunos momentos, pero es diveritda.

              </Text>
              <Text style={styles.texto } > CORREO ELECTRÓNICO: Juanfidel10@hotmai.com</Text>
              <Text style={styles.texto }  > NÚMERO TELÉFONICO: 8331384009</Text>
              
              <View style={styles.botones} >
              <Button
                title='EditarPerfil'
                onPress={mostrarAlerta}

              />
              </View>

              </View>




            </View>






          </ImageBackground>
        </View>




      </ScrollView >
    </SafeAreaView>

  );
}



const styles = StyleSheet.create({


  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 400,
     marginBottom: 1,

  },

  pantallaCarga: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover"

  },

  splashText: {
    fontsize: 50,
    color: "#6bff0fff"
  },

  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover"
  },

  contenedorInfo: {
    backgroundColor: "#ffffff92",
    padding: 10,
    borderRadius: 15,
   textAlign: "center",
   marginBottom: 10,


  },

  texto:{
    marginBottom:10,
  },

  botones:{

    gap:100
  },






});
