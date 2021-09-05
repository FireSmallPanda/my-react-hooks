import React, { useState } from 'react';
// import './User.css'
function User() {
	const [count, setCount] = useState(0);
	return (
		<div className='User'>
			<svg className='icon' aria-hidden='true'>
				<use xlinkHref='#icon-all'></use>
			</svg>
			用户页面
		</div>
	);
}

export default User;
