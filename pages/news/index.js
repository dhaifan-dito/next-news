import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function News() {
  const [title, setTitle] = useState([]);
  const [content, setcontent] = useState([]);
  const [gambar, setGambar] = useState([])
  const [lan, setLan] = useState([]);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();
    console.log(data);
    setNews(data);
  };

  const submitNews = async () => {
    const response = await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
        url: lan,
        gambar
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <h1 style={{textAlign:"center"}}>News Page</h1>
      <div align="center">
        {"Title: "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        {"content: "}
        <input
          type="text"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        />
        <br />
        {"url: "}
        <input
          type="text"
          value={lan}
          onChange={(e) => setLan(e.target.value)}
        />
        <br />
        {"gambar: "}
        <input
          type="text"
          value={gambar}
          onChange={(e) => setGambar(e.target.value)}
        />
        <br />
        <button onClick={submitNews}>Submit news</button>
      </div>{" "}
      <br />
      <br /> <br />
      <div align="center">
        <button onClick={fetchNews}>Get the latest news</button>
      </div>{" "}
      {news.map((item) => {
        return (
          <Link href={{
            pathname: `/news/${item.url}`,
            query: {title: item.title, content: item.content, gambar: item.gambar}
         }} as={`/news/${item.url}`}>
          <div align="center" key={item.id} style={{display:'flex', marginBlock:'20px', alignItems:'center', justifyContent:'center'}}>
          <Image src={item.gambar} width={200} height={200} alt={item.title}/><br />
            <div style={{marginLeft:'30px'}}> 
            <h4>{item.title}.</h4><br />
            {"content: "} {item.content}.<br />
            {"url: "}
            {item.url} <br />
            </div>
          </div>
          </Link>
        );
      })}{" "}
    </>
  );
}

export default News
