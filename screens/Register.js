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
      userName: '',
      nameComple: '',
      email: '',
      password: '',

    }
  }

  _register = () => {
    //const users = [];
    
    let obj = {
      nameU: this.state.userName,
      nameC: this.state.nameComple,
      email: this.state.email,
      pass: this.state.password
    }

    //const {userName,nameComple,email,password} = this.state;
      AsyncStorage.getItem('@Session:user')
      .then((valor) => {
        const parsed = JSON.parse(valor);
        let user = parsed.find(user => user.nameU === this.state.userName);
        let nCom = parsed.find(user => user.nameC === this.state.nameComple);
        let mail = parsed.find(user => user.email === this.state.email);
        
        if (this.state.userName == "" || this.state.nameComple == "" || this.state.email == "" || this.state.password == "") {
          alert('Llene todos los campos')
        } else if(user){
          console.log(this.state.userName + '' + this.state.password);
          alert('Nombre de usuario ya registrado')
        } else if (nCom) {
          alert('Nombre ya registrado')
        } else if (mail) {
          alert('Correo ya registrado')
        } else{
          
          AsyncStorage.setItem('@Session:user', JSON.stringify([obj]))
            .then((valor) => {
              this.props.navigation.navigate('LogIn');
              console.log(valor);
          })
          .catch((error) => {
            console.log(error);
          });
        }
        })
    
  }

  render() {
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
})