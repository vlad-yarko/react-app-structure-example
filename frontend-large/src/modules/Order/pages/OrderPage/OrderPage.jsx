import React from 'react'

import { OrderItem, OrderContact } from '../../features'

import styles from './OrderPage.module.css'


export function OrderPage() {

    return (
        <>
            <h1 className="order">Order common css</h1>
            <OrderContact />
            <OrderItem />
        </>
    )
}
