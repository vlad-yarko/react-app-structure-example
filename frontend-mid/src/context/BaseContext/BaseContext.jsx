import React from 'react'

import { createContext, useState } from 'react'


const BaseContext = createContext()


const BaseContextProvider = ({ children }) => {
	const [ignoreValue, setIgnoreValue] = useState(null)

	return (
		<BaseContext.Provider
			value={{
				ignoreValue
			}}
		>
			{children}
		</BaseContext.Provider>
	)
}


export { BaseContext, BaseContextProvider }
