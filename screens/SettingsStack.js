import React from 'react';
import {
  StyleSheet,
  View,
  Picker,
  ScrollView,
  ActivityIndicator
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
      breed: 'african',
    }
  }

  componentDidMount() {
    this._picker();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed) {
      this._picker();
    }
  }
  
  _fill = (breeds) => {
    let valor = 'https://dog.ceo/api/breed/'+breeds+'/images/random/3';
    return valor
  }

  async _picker() {
    let breeds = this.state.breed;
    console.log(this._fill(breeds));

    let response = await fetch(this._fill(breeds));
    const json = await response.json();
    this.setState({
      dogs: json
    });

    console.log(this.state.dogs.message);
    console.log(breeds);
  }

  render() {
    return (
      <View style={styles.container}>
         <Picker selectedValue={this.state.breed} 
          onValueChange={breed => this.setState({breed: breed })}
          mode="dropdown">
            <Picker.Item label = "Selecciona una raza..." />
            <Picker.Item label = "African" value = "african" />
            <Picker.Item label = "Akita" value = "akita" />
            <Picker.Item label = "Boxer" value = "boxer" />
            <Picker.Item label = "Mountain" value = "mountain" />
            <Picker.Item label = "Chihuahua" value = "chihuahua" />
            <Picker.Item label = "Terrier" value = "terrier" />

            <Picker.Item label = "Dingo" value = "dingo" />
            <Picker.Item label = "Shihtzu" value = "shihtzu" />
            <Picker.Item label = "Husky" value = "husky" />
            <Picker.Item label = "Labrador" value = "labrador" />
            <Picker.Item label = "Shiba" value= "shiba" />
            <Picker.Item label = "Retriever" value = "retriever" />

            <Picker.Item label = "Wolfhound" value = "wolfhound" />
            <Picker.Item label = "Newfoundland" value = "newfoundland" />
            <Picker.Item label = "Pointer" value = "pointer" />
            <Picker.Item label = "Schipperke" value = "schipperke" />
            <Picker.Item label = "Mexicanhairless" value= "mexicanhairless" />
            <Picker.Item label = "Leonberg" value = "leonberg" />
          </Picker>
          <ScrollView style={styles.container}>
            {
              this.state.dogs ?
                this.state.dogs.message.map((dog, key) => {
                  return (
                    <Image styles={styles.image} key={key} url={dog} />
                  )
                })
                : <ActivityIndicator/>
            }
          </ScrollView>
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    flex: 1,
    paddingBottom: 15,
  },
})