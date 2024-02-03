import React, { useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar
} from 'react-native';
import { LoadingModal } from "react-native-loading-modal";
import Button from '../components/Button';
import axios from 'axios';
import { SIZES } from '../Constants/Theme';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    if (key === 'email') {
      setEmail(value);
    } else if (key === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      // setLoading(true);
  
      // const response = await axios.post(
      //   'http://localhost:8000/login',
      //   {
      //     email,
      //     password,
      //   }
      // );
      // if (response.status === 200) {
      //   console.log(response.data)
      //   // await AsyncStorage.setItem('access', response.data.token.access);
      //   // await AsyncStorage.setItem('user', email);
      //   // await AsyncStorage.setItem('user_type', response.data.user.user_type);
      //   Alert.alert('Success✔️', 'Logged in successful');
      //   setEmail('');
      //   setPassword('');
      //   navigation.navigate('Organizations');
      // }
      navigation.navigate("Home")
    } catch (error) {
      // Alert.alert('Invalid⚠️', 'Incorrect password or username');
      console.log(error)
    } finally {
      setLoading(false);
    }
  };  

  const {
    container,
    linearGradientBackground,
    imageContainer,
    image,
    welcomeContainer,
    welcomeTitle,
    welcomeText,
    inputContainer,
    input,
    buttonText,
    buttonContainer,
    forgotPass,
    forgotPassText,
    clickHere,
    indicator,
  } = styles;

  return (
      <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView style={container}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : '100%'}
          style={container}
        >
          <View style={imageContainer}>
            <Image source={require('../assets/logo.png')} style={image} />
          </View>
          <View style={welcomeContainer}>
            <Text style={welcomeTitle}>Welcome Back!</Text>
            <Text style={welcomeText}>Please Log into your existing account</Text>
          </View>
          <View style={inputContainer}>
            <TextInput
              style={input}
              placeholder="Email"
              placeholderTextColor="black"
              onChangeText={(value) => handleChange('email', value)}
              value={email}
            />
            <TextInput
              style={input}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry
              onChangeText={(value) => handleChange('password', value)}
              value={password}
            />
          </View>
          <Button
            title={'Login'}
            buttonContainer={buttonContainer}
            buttonText={buttonText}
            press={handleLogin}
          />
          <View style={forgotPass}>
            <Text style={forgotPassText}>Forgot Password?</Text>
            <Text style={clickHere} onPress={() => navigation.navigate('OTPMail')}>
              Click Here
            </Text>
          </View>
          <Text style={indicator}>
          </Text>
        </KeyboardAvoidingView>
        {loading && <LoadingModal task='Logging in..' modalVisible={true} />}
      </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  linearGradientBackground: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: SIZES.height * 0.02,
  },
  image: {
    width: SIZES.width * 0.55,
    height: SIZES.height * 0.34,
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingTop:50
  },
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  welcomeText: {
    marginTop: 10,
    textAlign: 'center',
    width: 200,
  },
  inputContainer: {
    alignItems: 'center',
    paddingTop: SIZES.height * 0.02,
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    width: SIZES.width * 0.8,
    padding: SIZES.height * 0.017,
    borderRadius: 10,
    margin: 10,
    color:'black'
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: SIZES.height * 0.02,
  },
  buttonText: {
    color: 'white',
    backgroundColor: 'orange',
    width: SIZES.width * 0.4,
    padding: SIZES.height * 0.017,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  forgotPass: {
    alignItems: 'center',
    paddingTop: 13,
  },
  forgotPassText: {
    color: 'white',
  },
  clickHere: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  indicator: {
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    top: SIZES.height,
    left: SIZES.width * 0.43,
  },
});

export default Login;
