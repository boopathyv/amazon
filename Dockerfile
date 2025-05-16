# Stage 1: Build React frontend
FROM node:18 as build

WORKDIR /amazon

COPY frontend ./frontend
WORKDIR /amazon/frontend
RUN npm install
RUN npm run build

# Stage 2: Setup backend and serve frontend
FROM node:18

WORKDIR /amazon

COPY backend ./backend
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy React build to backend public folder
COPY --from=build /amazon/frontend/build ./backend/public

WORKDIR /amazon/backend

EXPOSE 8000

CMD ["node", "server.js"]
