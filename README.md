SQLite

Prisma

1. pnpm i prisma
   pnpm approve-builds (approve ignored build scripts)
2. npx prisma init --datasource-provider sqlite
3. compiling model Schema
4. generate database tables from the model
   npx prisma db push
5. generate Prisma Client according to Schema for operating database
   npx prisma generate
