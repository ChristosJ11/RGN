import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BottomNavigation, List, MD3Colors, Avatar, Card, Button, IconButton } from 'react-native-paper';
import { useState } from 'react';


const MusicRoute = () => <List.Section>
<List.Subheader style={{fontFamily:'Poppins-Medium', fontSize:25}}>Current Orders</List.Subheader>
<List.Item title="Order 7/12/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />
<List.Item title="Order 7/13/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />
<List.Item title="Order 7/15/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />
<List.Item title="Order 7/20/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />

</List.Section>;

const AlbumsRoute = () =>  <View>
    <Text style={{fontSize:25, fontFamily:"Poppins-Medium", marginTop:25, alignSelf:'center'}}>Add Inventory </Text>
    <View style={{alignSelf:'center'}}>
    <TextInput
              style={{
                height: 40,
                width: 300,
                borderColor: "gray",
                borderWidth: 1,
              }}
              placeholder="Produce Name"
             // onChangeText={(newText) => setPassword(newText)}
              defaultValue={""}
            />
             <TextInput
              style={{
                height: 40,
                width: 300,
                borderColor: "gray",
                borderWidth: 1,
                marginTop:10
              }}
              placeholder="Produce Weight/ Quantity"
             // onChangeText={(newText) => setPassword(newText)}
              defaultValue={""}
            />
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderColor: "gray",
                borderWidth: 1,
                marginTop:10
              }}
              placeholder="Date Harvested"
             // onChangeText={(newText) => setPassword(newText)}
              defaultValue={""}
            />
            </View>
    <IconButton
    icon="plus-circle-outline"
    iconColor="#f4511e"
    size={50}
    style={{alignSelf:"center"}}
    onPress={() => console.log('Pressed')}
  />
</View>;

const RecentsRoute = () => <View>
    <Card style={{height:100, backgroundColor:'black'}}>
    
    </Card>
   
    
    <Avatar.Image style={{marginTop:-50, zIndex:999}} size={100} source={require('../assets/26_west.jpg')} />
   
    <Card style={{height:200, zIndex:-1, marginTop:-30}}>
    <Text style={{fontSize:25, fontFamily:"Poppins-Medium", marginTop:50}}>Apartment X                 5.0/5.0 </Text>
    <Text style={{fontSize:14, fontFamily:"Poppins-Regular"}}>Apartment on 28th street with a massive roof top garden
    can supply beans, lettuce, cabbage</Text>
    </Card>
    <Card style={{height:200, zIndex:0, marginTop:10}}>

    </Card>
    <Card style={{height:200, zIndex:0, marginTop:10}}>

    </Card>
    <Card style={{height:200, zIndex:0, marginTop:10}}>

    </Card>
    <Card style={{height:200, zIndex:0, marginTop:10}}>

    </Card>
</View>;

export default function Producers({navigation, route}) {
    const[password, setPassword] = useState("");
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
