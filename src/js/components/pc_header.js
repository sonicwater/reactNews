import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, Message, 
	Form, Input, Button, CheckBox, Modal } from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane; 
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userId: 0
		};
	}

	setModalVisible(value){
		this.setState({modalVisible:value});
	}

	handleClick(e){
		if(e.key=="register"){
			this.setState({
				current:"register"
			})
			this.setModalVisible(true);
		}else{
			this.setState({
				current:e.key
			})
		}
	}

	handleSubmit(e){
		e.preventDefault();
		var myFeachOptions = {
			methods : 'GET'
		}
		var formData = this.props.form.getFieldValue();
		console.log(formData);
	}

	render(){
		// let {getFieldProps} = this.state.form;
		// const userShow = this.state.hasLogined
		// ?
		// <Menu.Item key="logout" className="register">
		// 	<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
		// 	&nbsp;&nbsp;
		// 	<Link target="_blank">
		// 		<Button type="dashed" htmlType="button">个人中心</Button>
		// 	</Link>
		// 	&nbsp;&nbsp;
		// 	<Button type="ghost" htmlType="button">退出</Button>
		// </Menu.Item>
		// :
		// <Menu.Item key="register" className="register">
		// 	<Icon type="appstore" />注册/登陆
		// </Menu.Item>;


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
				      		<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
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
        						<Menu.Item key="register" className="register">
									<Icon type="appstore" />注册/登陆
								</Menu.Item>
        					</Menu>

        					<Modal title="用户中心" warpClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel = {()=>this.setModalVisible(false)} onOk= {()=>this.setModalVisible(false)} okText="关闭">
        						<Tabs type="card">
        							<TabPane tab="注册" key="2">
										<Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
											<FormItem label="账户" hasFeedback>
												<Input placeholder="输入您的账号" />
											</FormItem>
											
											<FormItem label="密码" hasFeedback>
												<Input type="password" placeholder="输入您的密码"  />
											</FormItem>
											
											<FormItem label="确认密码" hasFeedback>
												<Input type="password" placeholder="请再次输入您的密码"  />
											</FormItem>

											

											
											<Button type="primary" htmlType="submit">注册
											</Button>
										</Form>
									</TabPane>
        						</Tabs>
        					</Modal>


				      	</Col>
				      	<Col span={2}></Col>
				    </Row>
				</header>
		  	</div>
		);
	};
}

export default PCHeader = Form.create({

})(PCHeader);