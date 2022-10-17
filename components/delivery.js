import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { useState } from 'react';

const MusicRoute = () => <Text>WIP</Text>;

const AlbumsRoute = () => <Text>WIP</Text>;

const RecentsRoute = () => <Text>WIP</Text>;

export default function Delivery({navigation, route}) {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'current_orders', title: 'Current Orders', focusedIcon: 'history', unfocusedIcon: 'history'},
        { key: 'add_inventory', title: 'Add Inventory', focusedIcon: 'food-apple' },
        { key: 'profile', title: 'Profile', focusedIcon: 'account' },
      ]);
    
      const renderScene = BottomNavigation.SceneMap({
        current_orders: MusicRoute,
        add_inventory: AlbumsRoute,
        profile: RecentsRoute
      });
  return (

      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
