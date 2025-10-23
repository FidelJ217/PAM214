import {Text, StyleSheet, View, Button} from 'react-native'
import React, {cacheSignal, useState} from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from "./BotonesScreen"
import TextInputScreen from './TextInputScreen'
import ImageScreen from './ImageScreen'
import ScrollScreen from './ScrollScreen'
import ActivityScreen from './ActivityScreen'
import FlatListScreen from './FlatListScreen'
import ModaltScreen from './ModalScreen'
import BottomScreen from './BottomScreen'

export default function MenuScreen()  {
    const[screen, setScreen]= useState( ' menu ');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'text':
            return <TextInputScreen/>
        case 'image':
            return <ImageScreen/>
        case 'scroll':
            return <ScrollScreen/>
        case 'activity':
            return <ActivityScreen/>
        case 'list':
            return <FlatListScreen/>
        case 'modal':
            return <ModaltScreen/>
        case 'bottom':
            return <BottomScreen/>
        
        case 'menu':
            default:
                return(
            <View>
                <Text>Menu Práctica</Text>
                <Button title='Práctica contador' onPress={()=>setScreen('contador')} ></Button>
                <Button title='Práctica botones' onPress={()=>setScreen('botones')} ></Button>
                <Button title='Práctica text input' onPress={()=>setScreen('text')}  ></Button>
                <Button title='Práctica image background & SlapshScreen' onPress={()=>setScreen('image')}  ></Button>
                <Button title='Práctica ScrollView' onPress={()=>setScreen('scroll')}  ></Button>
                <Button title='Práctica Activity Indicator' onPress={()=>setScreen('activity')}  ></Button>
                <Button title='Práctica Flat list y Section List' onPress={()=>setScreen('list')}  ></Button>
                <Button title='Práctica Modal' onPress={()=>setScreen('modal')}  ></Button>
                <Button title='Práctica Bottom Sheet' onPress={()=>setScreen('bottom')}  ></Button>
            </View>
        )
    }


    
}

const styles = StyleSheet.create({})


