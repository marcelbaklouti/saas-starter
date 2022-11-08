// update user credentials in the database
// images are binary data, so we need to convert them to base64
// and store them as strings
//

// Path: pages/api/user/update/index.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../../lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })
  if (session) {
    switch (req.method) {
      case 'POST':
        const user = await prisma.user.update({
          where: {
            email: String(session?.user?.email),
          },
          data: {
            name: req.body.name,
            email: req.body.email,
            image: req.body.image,
          },
        })
        res.json(user)
        break
      default:
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } else {
    res.status(401).end(`Not logged in`)
  }
}
