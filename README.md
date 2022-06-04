# Museum

A package manager for assets

## Installation - Development

### Clone

Clone this repo to your local machine.

```shell
git clone https://github.com/phanect/museum.git
```

### Setup

> Install npm dependencies using npm install

```shell
$ npm install && cd client && npm install
```

> Set up a MongoDB database either locally or provision a free database with <a href='https://www.mongodb.com/cloud/atlas'>`MongoDB Atlas`</a>

> Create a free <a href="https://cloudinary.com/">`Cloudinary account`</a>

> Create a <a href='https://github.com/settings/developers'>`GitHub OAuth app`</a>

> Create a .env file in the root directory

> Set up required environment variables

```javascript
MONGO_URI= // mongodb://localhost:27017/instaclone
JWT_SECRET= // random string: j2390jf09kjsalkj4r93
CLOUDINARY_API_KEY= // Cloudinary API key
CLOUDINARY_API_SECRET= // Cloudinary API secret
CLOUDINARY_CLOUD_NAME= // Cloudinary cloud name
SMTP_HOST= // mail.example.com
SMTP_PORT= // 587
EMAIL_USERNAME= // example@example.com
EMAIL_PASSWORD= // Password
HOME_URL= // http://localhost:3000
GITHUB_CLIENT_ID= // Client id for GitHub OAuth app
GITHUB_CLIENT_SECRET= // Client secret for GitHub OAuth app
MODERATECONTENT_API_KEY= // Free API key from https://moderatecontent.com
```

> In the root directory run both the backend and the front end with the following command

```shell
$ npm run dev
```

The app should launch automatically, enjoy playing around 😄
