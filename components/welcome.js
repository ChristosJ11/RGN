import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "react-native";
import axios from "axios";
const BASEURL = "http://172.20.10.2:3001"

export default function Signin({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const sendInfo = () => {
    const info = {
      params: {
        username: username,
        password: password,
      },
    };
    axios
      .get(`${BASEURL}/user`, info)
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data.role)
          navigation.navigate("Home", { username: username, role:res.data.role });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 100,
          width: 400,
          alignSelf: "center",
          marginLeft: 170,
        }}
        source={require("../assets/rng_logor.png")}
      />

      <View style={{ marginBottom: 300 }}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
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
          textColor="#FA4616"
          style={{ marginTop: 5 }}
          mode="outlined"
          onPress={sendInfo}
        >
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
