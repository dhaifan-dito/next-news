import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', height:'40vh', flexDirection:'column'}}>
      <h1>Welcome to Next News</h1>
      <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', width:'100%'}}>
      <Link href='/about' ><h2>About</h2></Link>
      <Link href='/news'><h2>News Page</h2></Link>
      </div>
      </div>
      <style jsx>{`
        h2{
          color:black;
        }
        h2:hover{
          color:darkred;
        }
      `}</style>

    </div>
  )
}
