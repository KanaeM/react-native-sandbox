import React, { Component } from 'react';
import {View, Text} from 'react-native';

export class Reddit extends Component{

	constructor(){
		super();
		this.state = {
			posts: []
		}
	}

	componentDidMount(){
		fetch('https://www.reddit.com/r/DestinyTheGame/.json', {
			Accept: 'application/json'
		})
		.then(res => res.json())
		.then(data => {
			this.setState({posts: data.data.children });
		});
	}

	render(){
		return(
			<View>
				<Text>Hello</Text>
				<View>
					{this.state.posts.map( post=> (
						<Text>{ post.data.author }</Text>
					))}
				</View>
			</View>
		)
	}
}