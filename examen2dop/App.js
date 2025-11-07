
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Alert, ScrollView, Button } from 'react-native';
import { useEffect, useState } from 'react';

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
      <ScrollView>
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
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg ',
        }}

        style={styles.background}
      >

        <View style={styles.contenedorInfo} >

          <Text> Juárez Torres Juan Fidel</Text>
          <Text>Ingeniero en sistemas computacionales</Text>
          <Text>Me llamo Fidel y tal y tal</Text>
          <Text>Juanfidel10@hotmai.com</Text>
          <Text>8331384009</Text>

          <Button
            title='EditarPerfil'
            onPress={mostrarAlerta}

          />




        </View>






      </ImageBackground>


    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: "#f5eded7b"

  },






});
