import React from 'react';
import Head from 'next/head';

function about() {
  return (
    <div style={{textAlign:'center'}}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/tree.jpg" />
      </Head>
        <h1>Ini Halaman about</h1>
    </div>
  )
}

export default about