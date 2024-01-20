import { nanoid } from 'nanoid'
import Url from "../Models/url.js"

async function handelgeneratenewShorlUrl(req, res) {
  const shortId = nanoid(8);
  if (!req.body.url) return res.status(400).json({ error: " url is required" });
  await Url.create({
    shortId: shortId,
    redirectUrl: req.body.url,
    visitHistory: [],
  });
  return res.json({ id: shortId });
}

export {
  handelgeneratenewShorlUrl,
};
