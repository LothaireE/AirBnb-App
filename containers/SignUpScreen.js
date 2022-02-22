import { Button, Text, TextInput, View } from "react-native";
// import de useState
import { useState } from "react";

export default function SignUpScreen({ setToken }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(email);
  // console.log(username);
  // console.log(description);
  // console.log(password);
  // console.log(confirmPassword);
  // ma requete axios en post ici
  const handlePress = async (event) => {
    // const userToken = "secret-token";
    // setToken(userToken);

    try {
      event.preventDefault();
      if (password !== confirmPassword) {
        setErrorMessage("Vos mots de passe ne sont pas identiques");
      } else {
        const userToken = "secret-token";
        console.log(1);
        setToken(userToken);
        console.log(2);
        const response = await axios.post(
          "https://express-airbnb-api.herokuapp.com/user/sign_up",
          {
            email: email,
            username: username,
            description: description,
            password: password,
          }
        );
        console.log(5);
        setUser(response.data);
        console.log("response ===>", response.data);
      }
    } catch (error) {}
  };

  return (
    <View>
      <View>
        <Text>email: </Text>
        <TextInput
          placeholder="email"
          onChangeText={(email) => {
            setEmail(email);
          }}
          value={email}
        />
        <Text>username: </Text>
        <TextInput
          placeholder="username"
          onChangeText={(username) => {
            setUsername(username);
          }}
          value={username}
        />
        <Text>description: </Text>
        <TextInput
          placeholder="description"
          onChangeText={(description) => {
            setDescription(description);
          }}
          value={description}
        />
        <Text>password: </Text>
        <TextInput
          placeholder="password"
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
          secureTextEntry={true}
        />
        <Text>confirmPassword: </Text>
        <TextInput
          placeholder="confirmPassword"
          onChangeText={(confirmPassword) => {
            setConfirmPassword(confirmPassword);
          }}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <Text>{errorMessage}</Text>
        <Button
          // title="Sign up"
          // onPress={async () => {
          //   const userToken = "secret-token";
          //   setToken(userToken);
          // }}
          title="Sign up"
          onPress={handlePress}
        />
      </View>
    </View>
  );
}
