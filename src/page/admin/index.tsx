import React, { useState } from 'react';
// import './Index.css'
function Index() {
	const [count, setCount] = useState(0);
	return (
		<div className='Index'>
			<svg className='icon' aria-hidden='true'>
				<use xlinkHref='#icon-all'></use>
			</svg>
			主页
		</div>
	);
}

export default Index;
