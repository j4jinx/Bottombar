import React from 'react';
import Bottombar from '../src/index.jsx';

export default {
	component: Bottombar,
	title: 'Bottombar',
	argTypes: {
		color: {
			options: ['#ffffff', '#9e9e9e', '#ff9800', '#4caf50', '#03a9f4', '#00bcd4'],
			control: { type: 'select' }
		}
	}
};

const Template = (args) => <Bottombar {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: true,
	color: '#00bcd4',
	height: 56
};