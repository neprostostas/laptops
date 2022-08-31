import Link from 'next/link'
import Head from 'next/head'

import React from 'react'
import MainLayout from '../components/MainLayout/MainLayout';

export default function index() {
  return <MainLayout>
    <Head>
      <title>
        Home
      </title>
    </Head>
    <h1>Hello!</h1>
    <p>Click on Items!</p>
  </MainLayout>

}
