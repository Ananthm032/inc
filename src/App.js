import React from 'react'
import Full from "./Component/Full"

import "./App.css"
import Nav from './Css/Navbar/Nav'
import NavProvider from './Css/Context/Context'

function App() {
  return (
    <div className='appContainer'>
			<NavProvider>
				<Nav />
				<Full />
			</NavProvider>
		</div>
	);
  
}

export default App