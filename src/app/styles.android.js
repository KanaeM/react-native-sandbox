import React, { Component } from 'react';
import {	StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  wrapper: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(225, 225, 225, .8)',
    width: '100%',
    height: '100%',
    padding: 24,
    paddingTop: 96
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgorundImage: {
    flex: 1,
    // 'cover'
  },
  input:{
    alignSelf: 'stretch',
    textAlign: 'center',
    margin: 24,
  },
  mainTitle:{
    fontFamily: 'CactusSandwich',
    fontSize: 60,
    textAlign: 'center',
    position: 'relative'
  },
  button: {
    alignSelf: 'center',
    // width: 150,
    right: 0,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#122619',
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