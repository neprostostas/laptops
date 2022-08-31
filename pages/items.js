import React from 'react'
import { useState, useEffect } from 'react'
import Head from 'next/head';
import MainLayout from '../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../styles/Items.module.css'

export default function Items({ items }) {

    // const [items, setItems] = useState([])

    // useEffect(() => {

    //     async function load() {

    //         const response = await fetch('http://localhost:4200/items')
    //         const json = await response.json()
    //         setItems(json)

    //     }

    //     load()

    // }, [])

    return <MainLayout>
        <Head>
            <title>
                Items
            </title>
        </Head>
        <h1>List of Items</h1>

        <ul className={s.customUl}>
            {items.map(item => (
                <li key={item.id}>
                    <Link href={`/item/${item.id}`}>
                        <img className={s.customImage} style={{
                            width: `${item.size.width}px`,
                            height: `${item.size.height}px`,
                        }} src={item.imageUrl} alt={item.name} />
                    </Link>

                    <Link href={`/item/${item.id}`}>
                        <a className={s.customName}>{item.name}</a>
                    </Link>
                </li>
            ))}
        </ul>

    </MainLayout>
}

Items.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/items')
    const items = await response.json()

    return {
        items
    }
}