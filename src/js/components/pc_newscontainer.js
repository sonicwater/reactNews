import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';

export default class PCNewsContainer extends React.Component{
	// function onChange(a, b, c) {
	//   	console.log(a, b, c);
	// }
	render(){
		return(
			<div className="pc_news_container">
				<Row>
			      	<Col span={2}></Col>
			      	<Col span={20} className="container">
			      		<div className="leftContainer">
			      			<div className="carousel">
			      				<Carousel autoplay>
								    <div>
								    	<img src="./src/images/news_01.jpeg" width="380" height="200" />
								    </div>
								    <div>
										<img src="./src/images/news_02.jpeg" width="380" height="200" />
								    </div>
								    <div>
								    	<img src="./src/images/news_03.jpeg" width="380" height="200" />
								    </div>
								    <div>
								    	<img src="./src/images/news_04.jpeg" width="380" height="200" />
								    </div>
								</Carousel>
								<PCNewsImageBlock count={6} type="guoji" width="100%" bordered="false" cartTitle="国际头条" imageWidth="155px" />
			      			</div>
			      			
			      		</div>
			      		<Tabs className="tabs_news">
			      			<TabPane tab="新闻" key="1">
			      				<PCNewsBlock width="100%" bordered="false" />
			      			</TabPane>
			      		</Tabs>
			      		
			      	</Col>
			      	<Col span={2}></Col>
			    </Row>
		  	</div>
		);
	}
}