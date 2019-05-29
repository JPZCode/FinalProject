import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      nameComplete: '',
    }
  }

   _login = async () => {
     try {
       let user = await AsyncStorage.getItem('user');
       let parsed = JSON.parse(user);
       alert(parsed.name);
     } catch (error) {
       alert(error);
     }
     //     this.props.navigation.navigate('HomeStack')
   }

  _navigate = () => {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
     // <KeyboardAvoidingView style={styles.wrapper} behavior="padding" enabled>
        <View style={styles.container}>
          <Text style={styles.title}> Inicio de Sesión </Text>
          <TextInput style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="#000"
            onChangeText={username => this.setState({username})}            
          />
          <TextInput style={styles.input}
            placeholder="•••••••"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}              
          />
          <TouchableOpacity style={styles.btn}
            onPress={() => this._login()}>
            <Text style={styles.textbtn}>Iniciar Sesión</Text>
          </TouchableOpacity>
            <Text style={styles.link}>¿Aún no tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => this._navigate()}>
            <Text style={styles.textlink}>Regístrate</Text>
          </TouchableOpacity>
        </View>
     // </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    color: '#000',
    fontWeight: 'bold',
    textShadowOffset: {width: 2, height: 1},
  },
  input: {
    alignSelf: 'stretch',
    padding: 8,
    backgroundColor: '#dcdcdc',
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10,
    color: '#000000',
    paddingLeft: 15
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#00bfff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  textbtn: {
    fontSize: 16,
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textlink: {
    fontWeight: 'bold',
  }
});