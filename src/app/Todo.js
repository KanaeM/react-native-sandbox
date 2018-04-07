import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native';

export class Todo extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(e){
    const {value} = e.target;
    this.setState({newTodo: value});
  }

  handlePress(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }


	render(){
		return(
			<View style={styles.container}>
        <TextInput value={this.state.newTodo} onChange={this.handleChange.bind(this)} />
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Click Here</Text>
        </TouchableHighlight>
        {this.state.todos.map(todo => <Text>{todo}</Text>)}
      </View>
		)
	}
}

const styles = StyleSheet.create({
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