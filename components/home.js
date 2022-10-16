import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text style={{fontFamily:'Poppins-Regular'}}>This is {route.params.username}'s profile</Text>
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
