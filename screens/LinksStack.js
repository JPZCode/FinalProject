import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor() {
    super();
    this.state = {
      dogs: ''
    }
  }

  componentDidMount() {
    this._fetchDogs();
  }

  _fetchDogs = () => {
    let dogPetition = new XMLHttpRequest;
    dogPetition.open('https://dog.ceo/api/breed/hound/images');
    dogPetition.onreadystatechange = () => {
      if (dogPetition.status == 200 && dogPetition.readyState == 4) {
        this.setState({
          dogs: JSON.parse(dogPetition.resposeText)
        })
      }
    }
    dogPetition.send();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.dogs ?
            this.state.dogs.message.map((dog, key) => {
              return (
                <View style={styles.card}>
                
                </View>
              )
            })
            : <ActivityIndicator/>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
