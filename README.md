# Fullstack XAPIX  with Next.js (REST API)

This challenge showing Xapix Challenge  **fullstack app in TypeScript with [Next.js](https://nextjs.org/)** using [React](https://reactjs.org/) (frontend), [Express](https://expressjs.com/) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend). It uses a SQLite database file with some initial dummy data which you can find at [`./backend/prisma/dev.db`](./backend/prisma/dev.db).

## What could be better?
`Backend:`
1. MVC architecture could have been used.
2. Business logic could have been moved to a separate file.

`Frontend:`
1. Business logic could have been moved to backend side.
2. Redux or Context could have been used.
3. Tailwind CSS could have been used.
4. Clean Code could have been used.
5. Error handling could have been used.
6. Unit tests could have been used.
7. Code coverage could have been used.
8. Code linting could have been improved.
9. Code style could have been improved.
10. Code documentation could have been improved.
11. Functions could have been used dynamically.
12. Cypress could have been used.
13. Bundle and loading could have been improved.
14. Table Data working logic could be improved based on API.

## Getting Started

### 1. Download example and install dependencies

Download this example:

```
curl https://codeload.github.com/prisma/prisma-examples/tar.gz/latest | tar -xz --strip=2 prisma-examples-latest/typescript/rest-nextjs-express
```

Navigate to the example:

```
cd rest-nextjs-express
```

#### Install npm dependencies: 

Install dependencies for your [`backend`](./backend). Open a terminal window and install the `backend`'s dependencies

```bash
cd backend
npm install
```

Open a separate terminal window and navigate to your [`frontend`](./frontend) directory and install its dependencies

```bash
cd frontend
npm install
```

### 2. Create and seed the database (backend)

On the terminal window used to install the backend npm dependencies, run the following command to create your SQLite database file. This also creates the `Order` and `Financial` and `FinancialGroup` tables that are defined in [`prisma/schema.prisma`](./backend/prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./backend/prisma/seed.ts) will be executed and your database will be populated with the sample data.

### 3. Start the server (backend)

On the same terminal used in step 2, run the following command to start the server:

```bash
npm run dev
```

The server is now running at [`http://localhost:3001/`](http://localhost:3001/).

### 4. Start the app (frontend)

On the terminal window used to install frontend npm dependencies, run the following command to start the app:

```bash
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

## Using the REST API

You can also access the REST API of the API server directly. It is running [`localhost:3001`](http://localhost:3001) (so you can e.g. reach the API with [`localhost:3000/orders`](http://localhost:3001/feed)).

### `GET`

- `/api/orders`: Fetch all orders
- `/api/financials`: Fetch all financials
- `/api/financialGroups`: Fetch all financialGroups
