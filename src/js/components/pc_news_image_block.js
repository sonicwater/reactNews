import React from 'react';
import { Card } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';

var json = require('./news_json.json');
export default class PCNewsImageBlock extends React.Component{
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
		const styleImage = {
			display:"block",
			width:this.props.imageWidth,
			height:"90px"
		};
		const styleH3 = {
			width:this.props.imageWidth,
			whiteSpace:"nowrap",
			overflow:"hidden",
			textOverFlow:"ellipsis"
		};
		const news = this.state.news;
		console.log(news[0])
		const newsList = news.length
		?
		news.map( (newsItem,index) => {
			return (
				<div key={index} className="imageblock">
					<Link target="_blank">
						<div class="custom-image">
							<img alt="" style={styleImage} src={newsItem.img} />
						</div>
						<div class="custom-card">
							<h3 style={styleH3}>{newsItem.title}</h3>
						</div>
					</Link>
				</div>
			)
			
		})
		:
		"没有加载到任何新闻";

        return(
            	<Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}}>
            		 {newsList}
            	</Card>
        )
	}
}