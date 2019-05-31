import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: '',
    }
  }

  _login = () => {
    AsyncStorage.getItem('@Session:user')
      .then((valor) => {
        const parsed = JSON.parse(valor);
        let user = parsed.find(user => user.nameU === this.state.userName);
        let pass = parsed.find(user => user.pass === this.state.password);

        if(user && pass){
          this.props.navigation.navigate('HomeStack');
          <ActivityIndicator/>
        }else{
          alert('Usuario o Contraseña incorrectos');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Inicio de Sesión </Text>
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding" enabled>
          <TextInput style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="#000"
            onChangeText={value => this.setState({userName:value})}            
          />
          <TextInput style={styles.input}
            placeholder="•••••••"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={value => this.setState({password:value})}              
          />
          <TouchableOpacity style={styles.btn}
            onPress={() => this._login()}>
            <Text style={styles.textbtn}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: 80,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
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
});