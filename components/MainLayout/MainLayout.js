import Link from 'next/link'
import React from 'react'
import s from '../MainLayout/MainLayout.module.css'

export default function MainLayout({ children }) {
    return (
        <>
            <nav className={s.customNav}>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/items'}><a>Items</a></Link>
                <Link href={'/about'}><a>About</a></Link>
            </nav>
            <main className={s.customMain}>
                {children}
            </main>

        </>
    )
}
