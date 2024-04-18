import React from 'react'
import ReactDOM from 'react-dom/client'

import { Root } from '@app/root'

import '@app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
)
