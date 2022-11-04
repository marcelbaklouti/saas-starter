# SAAS STARTER

This is a starter project for a SaaS application. It is based on the [Next.js](https://nextjs.org/) framework and uses [Prisma](https://www.prisma.io/) as the ORM.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

>You'll get an error `Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.`. This will be fixed after you configure your database as in section [Database](#database).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/](http://localhost:3000/api/).

To create an API route, create a file in `pages/api` with the following format:

```ts
// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
```

The `req` and `res` objects (from `import { NextApiRequest, NextApiResponse } from 'next'`) have the following types:

```ts
type NextApiRequest = http.IncomingMessage & {
  query: { [key: string]: string | string[] }
  cookies: { [key: string]: string }
  body: any
}

type NextApiResponse<T = any> = http.ServerResponse & {
  json: (obj: T) => void
  status: (code: number) => NextApiResponse<T>
}
```

### Create the .env file

Create a `.env` file in the root of the project. You can take a look at the `.env.example` file for the required environment variables.

## Database

This project uses [Prisma](https://www.prisma.io/) as the ORM. To get started, you need to create a database and configure the connection string in the `.env` file.

### Create a database

To create a database, you can use Heroku Postgres or a local Postgres database. If you are using Heroku Postgres, you can use the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) to create a database:

```bash
heroku addons:create heroku-postgresql:hobby-dev
```

If you are using a local Postgres database, you can use the [Postgres.app](https://postgresapp.com/) or [Docker](https://www.docker.com/) to create a database.

### Configure the connection string

To configure the connection string, you need to update the `DATABASE_URL` environment variable in the `.env` file.

```.env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### Migrate the database

To migrate the database, run the following command:

```bash
npm run db:migrate
# or
yarn db:migrate
```

### Generate Prisma client

To generate the Prisma client, run the following command:

```bash
npm run db:generate
# or
yarn db:generate
```

## Authentication

This project uses [NextAuth.js](https://next-auth.js.org/) for authentication. To get started, you need to configure the authentication providers in the `pages/api/auth/[...nextauth].ts` file.

### Configure authentication providers

To configure authentication providers, you need to update the `providers` array in the `pages/api/auth/[...nextauth].ts` file.

We are using the Email provider for this project so if you want to use other providers, you need to install the corresponding packages.

You can find the list of available providers [here](https://next-auth.js.org/providers/).

## Stripe

This project uses [Stripe](https://stripe.com/) for payments. To get started, you need to configure the Stripe API keys in the `.env` file.

## Deployment

To deploy your application, you can use [Vercel](https://vercel.com/). To deploy your application, you need to create a Vercel account and link it to your GitHub repository.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Prisma, take a look at the following resources:

- [Prisma Documentation](https://www.prisma.io/docs/) - learn about Prisma features and API.

To learn more about NextAuth.js, take a look at the following resources:

- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction) - learn about NextAuth.js features and API.
