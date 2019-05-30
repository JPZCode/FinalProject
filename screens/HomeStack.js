import React from 'react';
import {
  ScrollView,
  StyleSheet,
  AsyncStorage,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>Datos personales</Text>
          <Text style={styles.data}> {this.state.user.nameU} </Text>
          <Text style={styles.data}> {this.state.user.nameC} </Text>
          <Text style={styles.data}> {this.state.user.email} </Text>

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
   title: {
     fontSize: 20,
     marginTop: 70,
     color: '#000',
     fontWeight: 'bold',
     alignSelf: 'center',
   },
   subtitle:{
    // fontSize: ,
    marginTop: 15,
    color: '#000',
    fontWeight: 'normal',
    alignSelf: 'flex-start',
   },
});
