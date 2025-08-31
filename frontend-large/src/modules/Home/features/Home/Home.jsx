import React from 'react'

import { Button } from '../../../shared/components'
import { useHomeHook } from '../../hooks'

import styles from './Home.module.css'


export function Home() {

    const { navigateToOrder } = useHomeHook()

    return (
        <>
            <Button label={`HOMI`} onClick={navigateToOrder}/>
        </>
    )
}
