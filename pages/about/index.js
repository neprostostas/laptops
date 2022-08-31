import React from 'react'
import Head from 'next/head';
import Router from 'next/router'
import MainLayout from '../../components/MainLayout/MainLayout';

export default function About() {

    return <MainLayout>
        <Head>
            <title>
                About
            </title>
        </Head>
        <h1>
            STANISLAV KINASH
        </h1>
        <p>test project</p>
    </MainLayout>
}
