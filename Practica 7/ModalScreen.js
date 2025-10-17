import { Text, StyleSheet, View, Modal, Button} from 'react-native'
import React, {useState} from 'react'


export default function ModaltScreen() {
  const [showModal, setShowModal] = useState(false);
   
    return (

      <View style={styles.contenedorMain} >
      


       <View style={styles.contenedorBotones} >
         <Button title='Abrir Modal' onPress={()=> setShowModal(true)} >
        

        </Button>
      </View>

      <Modal  visible={showModal} transparent={true} animationType="fade"  >
        <View style={styles.contenedorModal} >
          <View style={styles.modal} >

            <Text> HOLA ESTO ES UN MODAL</Text>
            <Button color={"#F7363C"} title='Cerrar Modal' onPress={()=> setShowModal(false)} >
            
            </Button>

           </View>
        </View>
        
      </Modal>

      </View>

    )
  
}

const styles = StyleSheet.create({

  contenedorMain:{
    flex: 1,
    backgroundColor:"#36F79F",
    alignItems: "center",
  
  },

  contenedorBotones:{
    marginTop: 20,            
    flexDirection:'row',   
    gap: 15,
    alignItems: "center", 
  },

  contenedorModal:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d111298"
  },
  
  modal:{
    backgroundColor: "#91FAED",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 8,

  }

}
);

