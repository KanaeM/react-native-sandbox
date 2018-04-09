import React, { Component } from 'react';
import {	StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECFFFF',
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
  input:{
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 24,
  },
  mainTitle:{
    fontSize: 40,
  },
  button: {
    // width: 100,
    // height: 50,
    borderRadius: 50,
    backgroundColor: '#122619',
    textAlign: 'center',
    padding: 24,
    shadowOffset: {
      width: 20,
      height: 20
    }
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700'
  },
  list:{
    marginTop: 64,
  },
  listText:{
    fontSize: 20
  }
});