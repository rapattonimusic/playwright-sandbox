# For the playwright tests
FROM mcr.microsoft.com/playwright:v1.37.1-focal
WORKDIR /app
COPY . ./
COPY package.json package.json
RUN apt-get update && apt-get install -y xvfb
RUN npm install

# CMD xvfb-run --auto-servernum --server-num=1 --server-args='-screen 0, 1920x1080x24' npx playwright test --project=Chromium --headed --reporter=html
CMD ["xvfb-run", "--auto-servernum", "--server-num=1", "--server-args='-screen 0, 1920x1080x24'", "npx", "playwright", "test", "--project=Chromium", "--headed", "--reporter=html"]