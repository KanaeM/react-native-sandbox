import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const backgroundImageUrl = require('./assets/img/succulent3.jpg');

export class Todo extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(text){
    this.setState({newTodo: text});
  }

  handlePress(e){
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }


	render(){
		return(
			<View style={styles.container}>
				<Image 
					style={styles.backgroundImage}
					source={ backgroundImageUrl }
				/>
				<View style={styles.wrapper}>
					<Text style={styles.mainTitle}>Plant Reminders</Text>
	        <TextInput 
	        	style={styles.input}
	        	value={this.state.newTodo} 
	        	onChangeText={this.handleChange.bind(this)}
	        />
	        <TouchableOpacity 
	        	onPress={this.handlePress.bind(this)}
	        	style={styles.button}
	        >
	          <Text style={styles.btnText}>Click Here</Text>
	        </TouchableOpacity>
	        <View style={styles.list}>
	        	{this.state.todos.map((todo, i) => <Text style={styles.listText} key={i}>{todo}</Text>)}
	        </View>
	      </View>
      </View>
		)
	}
}