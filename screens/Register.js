import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      userName: [],
      nameComple: '',
      email: '',
      password: '',

    }
  }

  _register = () => {
    let obj = {
      key: this.state.key+1,
      nameU: this.state.userName,
      nameC: this.state.nameComple,
      email: this.state.email,
      pass: this.state.password
    }

    let registeredUsers = AsyncStorage.getItem('@Session:user', (users) => {
      console.log(users)
    });

    return

    AsyncStorage.setItem('@Session:user', JSON.stringify([obj]))
    .then((valor)=>{
      console.log(valor);
      this.props.navigation.navigate('LogIn');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Registro </Text>
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding" enabled>
          <TextInput style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="#000"
            onChangeText={value => this.setState({userName: value})}            
          />
          <TextInput style={styles.input}
            placeholder="Nombre Completo"
            placeholderTextColor="#000"
            onChangeText={value => this.setState({nameComple: value})}
          />
          <TextInput style={styles.input}
            placeholder="Correo Electrónico"
            placeholderTextColor="#000"
            onChangeText={value => this.setState({email: value})}
          />
          <TextInput style={styles.input}
            placeholder="•••••••"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={value => this.setState({password: value})}              
          />
          
          <TouchableOpacity style={styles.btn}
            onPress={() => {this._register()}}>
            <Text style={styles.textbtn}>Regístrate</Text>
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