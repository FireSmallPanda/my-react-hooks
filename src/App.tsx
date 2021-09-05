import React, { useState } from 'react';
// import "antd/dist/antd.less";
import RouterPage from './router';
// import { getLocale, localeInfo, LocaleProvider } from "./components/locales";
import './App.css';
function App() {
	const [count, setCount] = useState(0);
	return (
		<div className='app'>
			<header className='app-hearder'>
				<RouterPage />
			</header>
		</div>
	);
}

export default App;
