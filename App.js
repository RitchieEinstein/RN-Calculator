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

  state = {
    firstString: null,
    operand: null,
    secondString: null,
    answerString: '0',
  };

  buttonPress = (key) => {
    console.log(key + " Pressed");
    debugger;
    if(key == 'c'){
      this.setState({
        firstString: null,
        operand: null,
        secondString: null,
        answerString: '0',
      });
      return;
    }
    if(key != '+' && key != '-' && key != '*' && key != '/' && key != 'c' && key != '='){
      var ans = null;
      if(this.state.firstString != null && this.state.secondString != null){
        this.setState({...this.state, firstString: ''+key, secondString: null, operand: null, answerString: ''+key});
        return;
      }
      if(this.state.operand == null){
        var fs = '';
        if(this.state.firstString == null)fs = ''+key;
        else fs = ''+ this.state.firstString + key;
        ans = fs;
        this.setState({...this.state, firstString: fs, answerString: ans});
        return;
      }else{
        var ss = '';
        if(this.state.secondString == null)ss = ''+key;
        else ss = '' + this.state.secondString + key;
        ans = ss;
        this.setState({...this.state, secondString: ss, answerString: ans});
        return;
      }
    }else{
      if(this.state.firstString == null){return};
      if(key == '='){
        var ans = 0;
        if(this.state.secondString == null && this.state.firstString == null){
          ans = 0;
        }
        else if(this.state.secondString == null){
          ans = this.state.firstString;
        }
        else{
          var firstNumber = Number(this.state.firstString);
          var secondNumber = Number(this.state.secondString);
          ans = this.calculateValue(this.state.firstString, this.state.secondString, this.state.operand);
        }
        this.setState({...this.state, answerString: ''+ans, operand: key, firstString: null, secondString:null});
        return;
      }else{
        if(this.state.operand == '='){
          this.setState({...this.state, firstString: ''+this.state.answerString, secondString:null, operand: key});
        }
        else if(this.state.firstString != null && this.state.secondString != null){
          var ans = this.calculateValue(this.state.firstString, this.state.secondString, key);
          this.setState({...this.state, operand: key, firstString: ''+ans, secondString: null});
          return;
        }
        this.setState({...this.state, operand: key});
      }
    }
  }

  calculateValue = (val1, val2, op) =>{
    var firstNumber = Number(val1);
    var secondNumber = Number(val2);
    var ans = 0;
    switch(op){
        case '+':
         ans = firstNumber + secondNumber;
         break;
        case '-':
          ans = firstNumber - secondNumber;
          break;
        case '*':
          ans = firstNumber * secondNumber;
          break;
        case '/':
          ans = firstString / secondNumber;
    }
    return ans;
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.resultContainer}><Text style={styles.resultViewText}>{this.state.answerString}</Text></View>
        <View style={styles.buttonRowContainer}>
          <TouchableNativeFeedback style={styles.buttonView} onPress={()=>this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>C</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.buttonView} onPress={()=>this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>+/-</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.buttonView} onPress={()=>this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>%</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.buttonView} onPress={()=>this.buttonPress('c')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>/</Text></View></TouchableNativeFeedback>
        </View>
        <View style={styles.buttonRowContainer}>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('7')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>7</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('8')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>8</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('9')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>9</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('*')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>X</Text></View></TouchableNativeFeedback>
        </View>
        <View style={styles.buttonRowContainer}>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('4')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>4</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('5')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>5</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('6')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>6</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('-')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>-</Text></View></TouchableNativeFeedback>
        </View>
        <View style={styles.buttonRowContainer}>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('1')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>1</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('2')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>2</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('3')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>3</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('+')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>+</Text></View></TouchableNativeFeedback>
        </View>
        <View style={styles.buttonRowContainer}>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('0')} underlayColor="white"><View style={{flex:2, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>0</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('.')} underlayColor="white"><View style={{flex:1, borderRightWidth: 1, borderColor: '#4d4d4d', backgroundColor: '#d9d9d9'}}><Text style={styles.buttonText}>.</Text></View></TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={()=>this.buttonPress('=')} underlayColor="white"><View style={styles.buttonView}><Text style={styles.buttonText}>=</Text></View></TouchableNativeFeedback>
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
