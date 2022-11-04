import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Email from 'next-auth/providers/email'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      Email({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
      }),
    ],
    // ...
  })
}