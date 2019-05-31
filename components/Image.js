import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class Artista extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.styles}>
        <Image source={{ uri: this.props.url }} style={styles.image} />
      </View>
    )
  }
}

const styles = new StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
})