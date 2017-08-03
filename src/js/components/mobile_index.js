import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
	render(){
		return(
			<div>
				<MobileHeader/>
				<Tabs>
					<TabPane tab="头条" key="1">12</TabPane>
					<TabPane tab="社会" key="2">12</TabPane>
					<TabPane tab="国内" key="3">12</TabPane>
					<TabPane tab="国际" key="4">12</TabPane>
					<TabPane tab="娱乐" key="5">12</TabPane>
					<TabPane tab="体育" key="6">12</TabPane>
					<TabPane tab="科技" key="7">12</TabPane>
					<TabPane tab="时尚" key="8">12</TabPane>
				</Tabs>
				<MobileFooter/>
		  	</div>
		);
	}
}