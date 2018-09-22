process.env.NODE_ENV= process.env.NODE_ENV || 'test'
process.env.SERVER_PORT= process.env.SERVER_PORT || '4040'
process.env.JWT_SECRET='0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
process.env.MONGO_HOST='mongodb://admin:admin123@ds062059.mlab.com:62059/tese1'
process.env.MONGO_PORT='35574'
process.env.MAILER_EMAIL_ID='ubcomssa@gmail.com'
process.env.MAILER_PASSWORD='computerscience2018'
require('babel-register');
require("babel-polyfill");
require('./auth.test');
