import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'

export default function Item({ item }) {

    return (
        <MainLayout>
            <div className={s.itemTop}>
                <h1>Item {item.id}</h1>
                <Link href={'/items'}>
                    <a className={s.backButton}>Back</a>
                </Link>
            </div>

            <hr />

            <div className={s.productContainer}>
                <div className={s.textProduct}>
                    <h3 className={s.characteristics}>Characteristics</h3>
                    <h2>Brand: {item.name}</h2>
                    <h2>Weight: {item.weight}</h2>
                    <h2>Count: {item.count}</h2>
                </div>

                <img style={{
                    width: `${item.size.width + 400}px`,
                    height: `${item.size.height + 400}px`,
                }} src={item.imageUrl} alt={item.name} />

            </div>

            <div className={s.comments}>

                <h2>COMMENTS:</h2>

                {item.comments.map(comment => (
                    <li key={comment.id}>
                        {comment.description}
                        <p>{comment.date}</p>
                    </li>
                ))}

            </div>



        </MainLayout>
    )
}

Item.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/items/${ctx.query.id}`)
    const item = await response.json()

    return {
        item
    }
}