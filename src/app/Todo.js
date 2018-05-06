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
// To set up URL replace xxx with your IP address. 
// 'localhost:3000' throws an error
const jsonUrl = 'http://xxx.xxx.x.xxx:3000/todos'


export class Todo extends Component {

  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentDidMount(){
  	fetch(jsonUrl, {
  		headers: {
  			Accept: 'application/json'
  		}
  	})
  	.then(res => res.json())
  	.then(todos => this.setState({todos}))
  	.catch(err => console.warn('Error', err))

  }

  handleChange(text){
    this.setState({newTodo: text});
  }

  handlePress(e){
  	console.log('hello')
  	fetch(jsonUrl, {
  		method: 'POST',
  		headers: {
  			Accept: 'application/json',
  			'Content-Type': 'application/json'
  		},
  		body: JSON.stringify({
  			name: this.state.newTodo
  		}),	
  	})
  	.then(res => res.json())
  	.then(todo => {
  		const todos = [todo, ...this.state.todos];
  		this.setState({todos, newTodo: ''});
  	})
  	.catch(err => console.log('Error', err))
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
					<View style={styles.textForm}>
		        <TextInput 
		        	style={styles.input}
		        	value={this.state.newTodo} 
		        	onChangeText={this.handleChange.bind(this)}
		        />
		        <TouchableOpacity 
		        	onPress={this.handlePress.bind(this)}
		        	style={styles.button}
		        >
		          <Text style={styles.btnText}>OK</Text>
		        </TouchableOpacity>
		       </View>
	        <View style={styles.list}>
	        	{this.state.todos.map((todo, i) => <Text style={styles.listText} key={i}>{todo.name}</Text>)}
	        </View>
	      </View>
      </View>
		)
	}
}