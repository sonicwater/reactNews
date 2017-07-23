import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'top'
		}
	}
	render(){
		return(
			<div>
				<header>
					<Row>
				      	<Col span={2}></Col>
				      	<Col span={4}>
				      		<a href="/" className="logo">
				      			<img src="./src/images/logo.png" alt="logo" />
				      			<span className="ReactNews">ReactNews</span>
				      		</a>
				      	</Col>
				      	<Col span={16}>
				      		<Menu mode="horizontal" selectedKeys={[this.state.current]}>
        						<Menu.Item key="top">
        							<Icon type="home" />头条
        						</Menu.Item>
        						<Menu.Item key="shehui">
        							<Icon type="scan" />社会
        						</Menu.Item>
        						<Menu.Item key="guonei">
        							<Icon type="appstore" />国内
        						</Menu.Item>
        						<Menu.Item key="guoji">
        							<Icon type="global" />国际
        						</Menu.Item>
        						<Menu.Item key="yule">
        							<Icon type="video-camera" />娱乐
        						</Menu.Item>
        						<Menu.Item key="tiyu">
        							<Icon type="compass" />体育
        						</Menu.Item>
        						<Menu.Item key="keji">
        							<Icon type="rocket" />科技
        						</Menu.Item>
        						<Menu.Item key="shishang">
        							<Icon type="camera" />时尚
        						</Menu.Item>
        					</Menu>
				      	</Col>
				      	<Col span={2}></Col>
				    </Row>
				</header>
		  	</div>
		);
	}
}