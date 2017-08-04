import React from 'react';
import { Card } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';

var json = require('./news_json.json');
export default class PCNewsBlock extends React.Component{
	constructor(){
		super();
		this.state = {
			news:''
		};
	}

	componentWillMount(){
		// var myFetchOptions = {
		// 	method: 'GET'
		// };
		// fetch('http://');
		this.setState({
			news:json.result
		})
	}

	render(){
		const news = this.state.news;
		console.log(news[0])
		const newsList = news.length
		?
		news.map( (newsItem,index) => {
			return (
				<li key={index}>
					<Link>
						{newsItem.title}
					</Link>
				</li>
			)
			
		})
		:
		"没有加载到任何新闻";

        return(
            	<Card>
            		<ul>
            			{newsList}
            		</ul>
            	</Card>
        )
	}
}