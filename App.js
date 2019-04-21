/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {};

  buttonPress = (key) => {
    debugger;
    console.log(key + "Pressed");
  }
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome to React Native!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>
    // );
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.resultContainer}><Text style={styles.resultViewText}>Answer</Text></View>
        <View style={styles.buttonRowContainer}>
          <TouchableNativeFeedback style={styles.buttonView} onPress={this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>C</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.buttonView} onPress={this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>+/-</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.buttonView} onPress={this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>%</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.buttonView} onPress={this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>/</Text></View></TouchableNativeFeedback>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>7</Text></View>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>8</Text></View>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>9</Text></View>
          <View style={styles.buttonView}><Text style={styles.buttonText}>X</Text></View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>4</Text></View>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>5</Text></View>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>6</Text></View>
          <View style={styles.buttonView}><Text style={styles.buttonText}>-</Text></View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>1</Text></View>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>2</Text></View>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>3</Text></View>
          <View style={styles.buttonView}><Text style={styles.buttonText}>+</Text></View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={{flex:2, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>0</Text></View>
          <View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>.</Text></View>
          <View style={styles.buttonView}><Text style={styles.buttonText}>=</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: '#00000A',
    flex: 3,
    textAlign: 'right',
    color: 'white',
    fontSize:40,
  },
  resultViewText: {
    flex: 1,color: 'white', 
    fontSize: 40, 
    textAlign: 'right', 
    textAlignVertical: 'bottom', 
    paddingBottom: 10,
    paddingRight: 10,
  },
  buttonRowContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#ff9933',
    borderBottomColor: '#4d4d4d',
    borderBottomWidth: 1
  },
  buttonView: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: '#4d4d4d'
  },
  buttonText:{
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
