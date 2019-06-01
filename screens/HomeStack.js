import React from 'react';
import {
  ScrollView,
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
  };

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('@Session:user')
      .then((valor) => {
        const parsed = JSON.parse(valor);
        this.setState({
          user: parsed[0]
        })
      })
  }

  async _closeSession() {
    try {
      await AsyncStorage.removeItem('@Session:user')
      // .then((valor) => {
      //   const parsed = JSON.parse(valor);
      //   this.props.navigation.navigate('Login');
        console.log('Changarro cerrado' + parsed);
      // })
    } catch (err) {
      console.log(`The error is: ${err}`)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Datos personales</Text>

          <Image 
          style={styles.img}
          source={require('../assets/images/robot-dev.png')}
          />
          <Text style={styles.data}>Nombre de Usuario: </Text>
            <Text style={styles.textdata}>{this.state.user.nameU}</Text>
          <Text style={styles.data}>Nombre Completo: </Text>
            <Text style={styles.textdata}>{this.state.user.nameC}</Text>
          <Text style={styles.data}>Correo: </Text>
            <Text style={styles.textdata}>{this.state.user.email}</Text>

          <TouchableOpacity
            onPress={() => {this._closeSession()}}>
            <Text style={styles.textbtn}>Salir</Text>
          </TouchableOpacity>  

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
   title: {
     fontSize: 28,
     marginTop: 30,
     color: '#000',
     fontWeight: 'bold',
     alignSelf: 'center',
   },
   subtitle:{
    fontSize: 22,
    marginTop: 15,
    marginBottom: 15,
    color: '#000',
    fontWeight: 'normal',
    alignSelf: 'flex-start',
   },
   img:{
    width: 50,
    height: 50,
   },
   data:{
    fontSize: 15,
    marginTop: 10,
    color: '#000',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
   },
   textdata:{
    fontSize: 13.5,
    marginTop: 10,
    color: '#000',
    alignSelf: 'flex-start',

   },
   textbtn: {
     marginTop: 25,
     fontSize: 16,
   },
});
