import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const data = schema.safeParse(req.body);

  if (!data.success) {
    res.status(500).json({
      error: "schema error",
    });
  } else {
    res.status(200).json({ id: 12345 });
  }
}
