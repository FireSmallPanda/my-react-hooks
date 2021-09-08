import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import './Index.css'
function Base() {
	const history = useHistory();
	const [comList, setComList] = useState({
		data: [
			{
				title: '自定义input组件',
				path: '/components/input',
				icon: '',
				id: '1'
			}
		]
	});
	useEffect(() => {});

	function clickLink(obj) {
		console.log(obj);
	}

	return (
		<div className='index'>
			{comList.data.map(item => (
				<div
					key={item.id}
					onClick={() => {
						clickLink(item);
					}}>
					{item.title}
				</div>
			))}
		</div>
	);
}

export default Base;
