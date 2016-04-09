/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View,
  StyleSheet
} from 'react-native';
var DayItem = require('./src/day-item');
// var StyleSheet = React.StyleSheet;
var styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


var weekdays = React.createClass({
  render: function(){
    return <View style = {styles.container}>
      <Text>
        Days of the Week:
      </Text>
      <DayItem />
    </View>
  }
});


AppRegistry.registerComponent('weekdays', () => weekdays);
