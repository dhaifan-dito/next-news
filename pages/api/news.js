import { news } from "../../data"

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(news);
  } else if (req.method === "POST") {
    const title = req.body.title;
    const content = req.body.content;
    const url = req.body.url;
    const gambar = req.body.gambar;
    const newBook = {
      id: Date.now(),
      title,
      content,
      url,
      gambar,
    };
    news.push(newBook);
    res.status(201).json(newBook);
  }
}
