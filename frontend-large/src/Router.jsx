import React from 'react'
import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from 'react-router-dom'

import { 
	BaseLayout,
	OrderLayout,
	HomePage,
	OrderPage
} from './modules'


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<BaseLayout />}>
			<Route path='' element={<HomePage />} />
			<Route path='' element={<OrderLayout />}>
				<Route path='order' element={<OrderPage />} />
			</Route>
		</Route>
	)
)

export default router
