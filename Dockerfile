# For the playwright tests
FROM mcr.microsoft.com/playwright:v1.37.1-focal
WORKDIR /app
COPY . ./
COPY package.json package.json
RUN npm install

ARG SET01

ENV SET01=${SET01}
