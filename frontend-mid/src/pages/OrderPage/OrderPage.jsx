import React from 'react'

import { OrderItem, OrderContact } from '../../features'

import styles from './OrderPage.module.css'


export function OrderPage() {

    return (
        <>
            <OrderContact />
            <OrderItem />
        </>
    )
}
