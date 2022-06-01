import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import styles from '../../styles/Detail.module.css'

function NewsDetail() {
    const router = useRouter();

    console.log(router)

  return (
    <div style={{textAlign:'center'}}>
        <h2>News Detail</h2>
        <h1>{router.query.title}</h1>
        <p>{router.query.content}</p>
        <div className={styles.centerflex}>
        <div>
        <p>image from local</p>
        <Image alt={router.query.title} src="/tree.jpg" width={200} height={200} />
        </div>
        <div>
        <p>image from url</p>
        <Image alt={router.query.title} src={router.query.gambar} width={200} height={200} />
        </div>
        </div>
        <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  )
}

export default NewsDetail