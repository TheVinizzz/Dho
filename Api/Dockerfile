FROM node:16

WORKDIR /app

COPY wait-for.sh .

ENV DATABASE_URL="postgresql://postgress:postgresspassword@postgres:5432/mydb?schema=public"

COPY dist ./src

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 3333

CMD npm start
