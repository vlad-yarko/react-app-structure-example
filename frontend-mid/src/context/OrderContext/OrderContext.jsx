import React from 'react'
import { createContext, useState } from 'react'


const OrderContext = createContext()


const OrderContextProvider = ({ children }) => {
    const [ignoreValue, setIgnoreValue] = useState(null)

    return (
        <OrderContext.Provider
            value={{
                ignoreValue
            }}
        >
            {children}
        </OrderContext.Provider>
    )
}


export { OrderContext, OrderContextProvider }
