'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

// import custom component
import Home from '../components/Home'

// Create a class
export default class App extends Component {
  // make a render for your returned ui
  render(){
    return (
      <Text> some text </Text>
    )
  }
}

// Styling to fill whole screen
const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})
