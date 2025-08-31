import React from 'react'
import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from 'react-router-dom'

import { BaseLayout, OrderLayout} from './layout'
import { HomePage, OrderPage } from './pages'


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
