import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

export default function Signin({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
         <TextInput
        style={{height: 40,width: 300, borderColor: 'gray', borderWidth: 1}}
        placeholder="Username"
        onChangeText={newText => setUsername(newText)}
        defaultValue={username}
      />
       <TextInput
        style={{height: 40,width: 300, borderColor: 'gray', borderWidth: 1}}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
      />
         <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Home', { username: 'Christos' })
      }
    />
    
    </View>
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
