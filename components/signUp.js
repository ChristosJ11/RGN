import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Image } from 'react-native'
import axios from 'axios';
const BASEURL = "http://172.20.10.2:3001"

export default function Signup({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState('first');    
    const sendInfo = () => {
        const info = {
            username: username,
            password: password,
            role: value
        }
        // navigation.navigate("Home", { username: username, role:"PRODUCER" })
        axios.post(`${BASEURL}/user`, info).then((res) =>{
            if(res.status==200){
                navigation.navigate("Home", { username: username, role:value })
            }
        }).catch(error => console.log(error));
    }
        return (
            <View style={{ marginTop:50}} >
                <Image style={{height:100, width:400, alignSelf:'center',marginLeft:170}} source={require('../assets/rng_logor.png')}/>
                 <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Rooftop Farmer" value="PRODUCER" uncheckedColor='#FA4616' color='#FA4616' style={{width:300,borderWidth:'1', borderColor:'grey', borderRadius:10, alignSelf:'center'}}  />
      <RadioButton.Item label="Produce Consumer" value="CONSUMER" color='#FA4616' style={{width:300,borderWidth:'1', borderColor:'grey', borderRadius:10, alignSelf:'center'}}   />
      <RadioButton.Item label="Delivery Person" value="DELIVERY" color='#FA4616' style={{width:300,borderWidth:'1', borderColor:'grey', borderRadius:10, alignSelf:'center'}} />
    </RadioButton.Group>
                
          <View style={styles.container}>
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderColor: "gray",
                borderWidth: 1,
                fontFamily: "Poppins-Regular",
              }}
              placeholder="Username"
              onChangeText={(newText) => setUsername(newText)}
              defaultValue={username}
            />
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderColor: "gray",
                borderWidth: 1,
              }}
              placeholder="Password"
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
            />
            <Button
            textColor='#FA4616'
              style={{ marginTop: 5 }}
              mode="outlined"
              onPress={sendInfo}
            >
              Sign Up
            </Button>
            <Button
             buttonColor='white'
             textColor='#FA4616'
              style={{ marginTop: 15, color:'grey' }}
              mode="contained"
              onPress={() =>
                navigation.navigate("Signin", { username: "Christos" })
              }
            >
             Already Signed Up?
            </Button>
            </View>
          </View>
        );
      
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'bottom',
    
  },
});
