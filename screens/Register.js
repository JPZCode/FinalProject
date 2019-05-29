import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      nameComple: ''
    }
  }

  _register = () => {

    let obj = {
        nameU: this.state.username,
        nameC: this.state.nameComple,
        email: this.state.email,
        pass: this.state.password
    }

    AsyncStorage.setItem('session', JSON.stringify(obj));
      if (obj) {
				this.props.navigation.navigate('Login');
				alert('Registro exitoso. Inicia Sesión.')
      } else {
        alert('Error.')
      }
		}
	
		_navigate = () => {
			this.props.navigation.navigate('Login');
		}

  render() {
    return (
      //<KeyboardAvoidingView style={styles.wrapper} behavior="padding" enabled>
        <View style={styles.container}>
          <Text style={styles.title}> Registro </Text>
          <TextInput style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="#000"
            onChangeText={username => this.setState({username})}            
          />
          <TextInput style={styles.input}
            placeholder="Nombre Completo"
            placeholderTextColor="#000"
            onChangeText={nameComple => this.setState({nameComple})}
          />
          <TextInput style={styles.input}
            placeholder="Correo Electrónico"
            placeholderTextColor="#000"
            onChangeText={email => this.setState({email})}
          />
          <TextInput style={styles.input}
            placeholder="•••••••"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}              
          />
          

          <TouchableOpacity style={styles.btn}
            onPress={() => this._register()}>
            <Text style={styles.textbtn}>Regístrate</Text>
          </TouchableOpacity>

            <Text style={styles.link}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigate('Login')}>
            <Text style={styles.textlink}>Inicia Sesión</Text>
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