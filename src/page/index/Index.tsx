import React, { useState } from 'react';
// import './Index.css'
function Index() {
	const [count, setCount] = useState(0);
	return (
		<div className='Index'>
			<i className='iconfont icon-code'></i>本页
		</div>
	);
}

export default Index;
