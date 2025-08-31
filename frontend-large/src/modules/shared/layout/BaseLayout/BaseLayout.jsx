import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../../components'
import { BaseContextProvider } from '../../context'

import styles from './BaseLayout.module.css'


export function BaseLayout() {
	
	return (
		<BaseContextProvider>
			<Header />
			<Outlet />
			<Footer />
		</BaseContextProvider>
	)
}
