process.env.NODE_ENV= process.env.NODE_ENV || 'development'
process.env.SERVER_PORT= process.env.PORT || '3000'
process.env.JWT_SECRET='0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
process.env.MONGO_HOST='mongodb://localhost:27017/test2'
process.env.MONGO_PORT='35574'
process.env.MAILER_EMAIL_ID='ubcomssa@gmail.com'
process.env.MAILER_PASSWORD='computerscience2018'
require('babel-register');
require("babel-polyfill");
require('./server');
