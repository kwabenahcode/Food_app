import React from 'react';
import { SafeAreaView, StyleSheet, Alert,  Image, Text, View, TextInput, StatusBar, ScrollView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons'
import Button from '../components/Button';
import {SIZES } from "../Constants/Theme"
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { LoadingModal } from "react-native-loading-modal";
import axios from 'axios';


const Register = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user_type, setUserType] = useState("customer");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('')


  const handleChange = (key,value) =>{
    if (key === 'username') {
      setUsername(value);
    } else if (key === 'password') {
      setPassword(value);
    }else if (key === 'email') {
      setEmail(value);
    }
  }

  const handleCreateAccount = async () => {
    try {
      // setLoading(true);
      // const response = await axios.post('http://localhost:8000/register', 
      // { email, username, password},  { withCredentials: true });
      // if(response.status === 200){
      //   Alert.alert("Succesnavigates ✔️","User created succesful")
      //   // navigation.("Login")
      // }
      // if(response.status === 409){
      //   Alert.alert("Warning ⚠️","User already exist")
      // }
      navigation.navigate("Home")
    } catch (error) {
      // Alert.alert("Warning ⚠️", "Something went wrong")
      console.log(error)
      setLoading(false);
      // setEmail('');
      // setPassword('');
      // setUsername('') 
    }finally {
      setLoading(false); 
      setEmail('');
      setPassword('')
      setUsername('')
    }
  };

  const {
    container,
    imageContainer,
    image,
    welcomeContainer,
    welcomeTitle,
    welcomeText,
    inputContainer,
    inputField,
    input,
    buttonText,
    buttonContainer,
    haveAccountText,
    haveAccount,
    iconUser,
    scrollContainer,
    indicator
  } = styles;

  return (
    <SafeAreaView style={container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView style={scrollContainer}> 
      <View style={imageContainer}>
      <Image source={require('../assets/logo.png')} style={image} />
      </View>
      <View style={welcomeContainer}>
        <Text style={welcomeTitle}>Create Account</Text>
      </View>
      <View style={inputContainer}>
        <View style={input}>
          <Feather name={'user'} 
           size={20} color={'black'}
           style={iconUser} />
          <TextInput 
           style={inputField} 
           placeholder="Username"
           onChangeText={(value)=>handleChange('username', value)}
           value={username}
          />
        </View>
        <View style={input}>
          <Feather name={'mail'} 
           size={20} color={'black'} 
           style={iconUser} />
          <TextInput 
           style={inputField}
           placeholder="Email" 
           onChangeText={(value)=>handleChange('email', value)}
           value={email}
           />
        </View>
        <View style={input}>
          <Feather name={'lock'} 
          size={20} color={'black'} 
          style={iconUser} />
          <TextInput 
           style={inputField} 
           placeholder="Password"
           secureTextEntry  
           onChangeText={(value)=>handleChange('password', value)}
           value={password}
           />
        </View>
      </View>
      <Button title={'Create Account'} 
       buttonContainer={buttonContainer}
       buttonText={buttonText}
       press={handleCreateAccount}
       />
       
      {loading && <LoadingModal modalVisible={true} />} 

      <Button title={'Already have an account?'}
       buttonContainer={haveAccount}
       buttonText={haveAccountText}
       press={()=>navigation.navigate("Login")}
       />
       </ScrollView> 
    </SafeAreaView>
  );
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: SIZES.width*0.55,
    height: SIZES.height*0.30,
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingTop:10,
  },
  welcomeTitle: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25
  },
  welcomeText: {
    color: 'black',
    marginTop: 5,
    textAlign: 'center',
    width: SIZES.width*0.5
  },
  inputContainer: {
    alignItems: 'center',
    paddingTop: SIZES.height*0.01,
  },
  inputField:{
    width: SIZES.width*0.64,
    padding: SIZES.height*0.0007,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width*0.8,
    padding: SIZES.height*0.014,
    borderRadius: 10,
    margin: 7,
    backgroundColor: 'white',
    color: 'black',
    marginVertical:10,
    borderColor: 'gray',
    borderWidth: 2,
  },
  buttonContainer: {
    alignItems: 'center',
    top:SIZES.height*0.01
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'orange',
    width: SIZES.width*0.45,
    padding: SIZES.height*0.02,
    textAlign: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  haveAccount: {
    alignItems: 'center',
    paddingTop: SIZES.height*0.035
  },
  haveAccountText: {
    color: 'blue',
    backgroundColor: 'white',
    width: SIZES.width*0.6,
    padding: SIZES.height*0.017,
    textAlign: 'center',
    borderRadius: 15,
    overflow:'hidden',
  },
  iconUser: {
    margin:2,
    paddingRight:5,
    color:'#9CADF2',
    borderColor: '#DBE3FF', 
    borderRightWidth: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "white",
    flexGrow: 1,
    paddingBottom:50
  },
  indicator:{
    alignItems:'center',
    textAlign:'center',
    position:"absolute",
    top:SIZES.height*0.765,
    left:SIZES.width*0.45
  }
});

export default Register;
