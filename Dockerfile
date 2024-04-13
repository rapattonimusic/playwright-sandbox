# For the playwright tests
FROM mcr.microsoft.com/playwright:v1.38.0-focal as playwright
WORKDIR /app
COPY . ./
COPY package.json package.json
# Install Xvfb
# RUN apt-get update && apt-get install -y xvfb
RUN npm install
ENV START_XVFB_SERVER_COMMAND="xvfb-run --auto-servernum --server-num=1 --server-args='-screen 0, 1920x1080x24'"
ENV RUN_PLAYWRIGHT_COMMAND="npx playwright test"
# Run the Playwright tests
CMD bash -c "$RUN_PLAYWRIGHT_COMMAND"
