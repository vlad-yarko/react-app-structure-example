import React from 'react'
import { Outlet } from 'react-router-dom'

import { OrderContextProvider } from '../../context'

import styles from './OrderLayout.module.css'


export function OrderLayout() {

	return (
		<OrderContextProvider>
			<Outlet />
		</OrderContextProvider>
	)
}
