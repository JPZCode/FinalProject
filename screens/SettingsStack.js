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
      user: ''
    }
  }

  updateUser = (user) => {
     this.setState({ user: user })
  }

   _fetch() {
    let response =  fetch('https://dog.ceo/api/breed/'+this.state.user+'/images/random/'); ////////////////////
    const json = response.json();
    this.setState({
      dogs: json
    });
    console.log(this.state.dogs);
  }

  render() {
    return (
      <View style={styles.container}>
         <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
           <Picker.Item label = "Swiss Mountain" value = "SwissMountain" />
           <Picker.Item label = "Ellen" value = "ellen" />
           <Picker.Item label = "Maria" value = "maria" />
          </Picker>
          <Button title="Buscar" onPress={()=>this._fetch()} />
          {
          this.state.dogs ?
            this.state.dogs.message.map((dog, key) => {
              return (
                <Image styles={styles.card} key={key} url={dog}/>
              )
            })
            : <ActivityIndicator/>
        }
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
})