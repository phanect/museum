# Museum

A package manager for assets

## Set up local environment

- Clone this repo to your local machine.

```shell
git clone https://github.com/phanect/museum.git
```

- Install npm dependencies using npm install

```shell
$ npm install && cd client && npm install
```

- Create a free [Cloudinary account](https://cloudinary.com/)
- Create a [GitHub OAuth app](https://github.com/settings/developers)
- Create a .env file in the root directory
- Set up required environment variables

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

- In the project root, run the backend, the frontend, and the DB server with the following command:

```shell
$ npm run dev
```
