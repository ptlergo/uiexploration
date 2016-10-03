'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

// Create a class
export default class Home extends Component {
  render(){
    return (
      <View style={ styles.container }>
        <Text> Hello </Text>
      </View>
    )
  }
}


// Create actual styles
const styles = StyleSheet.create({
  contaner:{
    flex: 1
  }
})
