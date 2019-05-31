import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import Image from '../components/Image';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Perritos Kawaii',
  };

  constructor() {
    super();
    this.state = {
      dogs: ''
    }
  }

  async componentDidMount() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    const json = await response.json();
    this.setState({
      dogs: json
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.dogs ?
            this.state.dogs.message.map((dog, key) => {
              return (
                <Image styles={styles.card} key={key} url={dog}/>
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
  card: {
    flex: 1,
    paddingBottom: 15,
  },
});
