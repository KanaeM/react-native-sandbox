/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Todo } from './src/app/Todo'

type Props = {};

export default class App extends Component<Props> {

  render() {
    return (
      <Todo />
    );
  }
}


