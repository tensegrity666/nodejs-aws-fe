Clone repo
$ git clone git@github.com:tensegrity666/x-check-app.git

then checkout to origin/dev:
$ git fetch origin
$ git checkout -b dev origin/dev

Install
$ npm i

Start server
$ npm start
Open http://localhost:3000 to view it in the browser.

Build project
$ npm run build


Deploy
$ npm run cloudfront:update:build:deploy:nc