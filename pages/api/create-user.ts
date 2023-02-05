import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body;

  if (name == undefined) {
    res.status(500).json({ error: `name undefined` });
  } else if (email == undefined) {
    res.status(500).json({ error: `email undefined` });
  } else if (/* name form validation */ false) {
    res.status(500).json({ error: `invalid name: {name}` });
  } else if (/* email form validation */ false) {
    res.status(500).json({ error: `invalid email: {email}` });
  } else {
    res.status(200).json({ id: 12345 });
  }
}
