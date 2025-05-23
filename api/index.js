import book from "../book.json";

export default function handler(req, res) {
  res.status(200).json({ result: book });
}
import book from '../book.json';

export default function handler(req, res) {
  res.status(200).json({ result: book });
}
