import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { useState } from 'react';
import Producers from './producers';
import Consumers from './consumers';
import Delivery from './delivery';

export default function Home({navigation, route}) {
    if(route.params.role=='PRODUCER'){
        return ( <Producers/>)
    }else if(route.params.role == "CONSUMER"){
        return ( <Consumers/>)
    }else{
        return (<Delivery/>)
    }

}
