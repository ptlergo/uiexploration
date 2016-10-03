'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  DatePickerIOS
} from 'react-native'

// import custom component
import Home from '../components/Home'

// Create a class
export default class App extends Component {
  // make a render for your returned ui
  render() {
    return (
      <ActivityIndicator style={styles.container}/>
    );
  }

  render() {
    return (
      <View>
        <Text>
        </Text>
      </View>
    );
  }
}

// Styling to fill whole screen
const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})
