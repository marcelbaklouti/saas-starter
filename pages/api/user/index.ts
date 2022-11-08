// api that returns the userdata of the user that is logged in (if any)
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })
  if (session) {
    switch (req.method) {
      case 'GET':

        const user = await prisma.user.findUnique({
          where: {
            email: String(session?.user?.email),
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
