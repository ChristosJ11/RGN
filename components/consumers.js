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

const AlbumsRoute = () => <List.Section>
<List.Subheader style={{fontFamily:'Poppins-Medium', fontSize:25}}>Click To Order</List.Subheader>
<List.Item title="Order 7/12/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />
<List.Item title="Order 7/13/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />
<List.Item title="Order 7/15/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />
<List.Item title="Order 7/20/22" description="5 lbs apples" left={() => <List.Icon icon="food-apple" />} />

</List.Section>;

const RecentsRoute = () => <View>
<Card style={{height:100, backgroundColor:'black'}}>

</Card>


<Avatar.Image style={{marginTop:-50, zIndex:999}} size={100} source={require('../assets/pizzapress.jpg')} />

<Card style={{height:200, zIndex:-1, marginTop:-30}}>
<Text style={{fontSize:25, fontFamily:"Poppins-Medium", marginTop:50}}>Pizza Press                5.0/5.0 </Text>
<Text style={{fontSize:14, fontFamily:"Poppins-Regular"}}>Pizzeria on 26th street that needs fresh produce</Text>
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

export default function Consumers({navigation, route}) {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'current_orders', title: 'Current Orders', focusedIcon: 'history', unfocusedIcon: 'history'},
        { key: 'make_order', title: 'Make Order', focusedIcon: 'cart' },
        { key: 'profile', title: 'Profile', focusedIcon: 'account' },
      ]);
    
      const renderScene = BottomNavigation.SceneMap({
        current_orders: MusicRoute,
        make_order: AlbumsRoute,
        profile: RecentsRoute
      });
  return (

      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
