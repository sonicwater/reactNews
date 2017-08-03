import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane

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
			      			</div>
			      		</div>
			      	</Col>
			      	<Col span={2}></Col>
			    </Row>
		  	</div>
		);
	}
}