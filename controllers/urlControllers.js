import { nanoid } from "nanoid";
import Url from "../Models/url.js";

async function handelgeneratenewShorlUrl(req, res) {
  const shortId = nanoid(8);
  if (!req.body.url)
    return res.status(400).render("home", { error: " url is required" });
  await Url.create({
    shortId: shortId,
    redirectUrl: req.body.url,
    visitHistory: [],
  });
  return res.status(200).render("home", { id: shortId });
}

async function handeRedirectlUrl(req, res) {
  const shortId = `${req.params.id}`;
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectUrl);
}

async function handeGetAnalytics(req, res) {
  const shortId = `${req.params.id}`;
  const data = await Url.findOne({ shortId });
  res.json({ visitHistory: data.visitHistory });
}

export { handelgeneratenewShorlUrl, handeRedirectlUrl, handeGetAnalytics };
