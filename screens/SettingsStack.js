import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Picker,
  Button,
} from 'react-native';

import Image from '../components/Image';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Buscador',
  };

  constructor() {
    super();
    this.state = {
      dogs: '',
      breed: '',
    }
  }

  componentDidUpdate(){
    this._picker();
  }

  _fill = (breeds) => {
    let valor = 'https://dog.ceo/api/breed/'+breeds+'/images/random/';
    return valor;
  }

  async _picker() {
    let breeds = this.state.breed;
    console.log(this._fill(breeds));
    
    fetch(this._fill(breeds))
    .then((valor) => {
        const parsed = JSON.parse(valor);
        this.setState({
          dogs: parsed[0]
        });
        console.log(this.state)
    })
    .catch(error => console.log(error))

    console.log(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
         <Picker selectedValue={this.state.breed} 
          onValueChange={breed => this.setState({breed: breed })}
          mode="dropdown">
           <Picker.Item label = "African" value = "african" />
           <Picker.Item label = "Ellen" value = "ellen" />
           <Picker.Item label = "Maria" value = "maria" />
          </Picker>
          {/* <Button title="Buscar" onPress={()=>this._picker()} /> */}
          {/* {
          this.state.dogs ?
            this.state.dogs.message.map((dog, key) => {
              return (
                <Image styles={styles.card} key={key} url={dog}/>
              )
            })
            : <ActivityIndicator/>
          } */}
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    width: 100,
    height: 100
  }
})