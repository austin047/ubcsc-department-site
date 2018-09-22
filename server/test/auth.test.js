import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import chai, { expect } from 'chai';
import app from '../index';
import config from '../config/config';
import User from '../models/user.model';

//chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
    mongoose.models = {};
    mongoose.modelSchema = {};
    mongoose.connection.close();
    done();
})

describe('## Auth APIs', () => {
  const validUserCredentials = {
    username: 'react',
    password: 'express'
  };

  //use as credentials to authenticate usign the local stratagy
    const validUserCredentialsLocal = {
      email: 'ubcscweb@gmail.com',
      password: 'localJWTexpress',
      username: 'ubcsclocalexpressjs'
    };

  //use as invalid email credential to authenticate using the local stratagy
  const invalidUserEmailCredentialsLocal = {
    email: 'ubcscweb@gmail.co',
    password: 'localJWTexpress',
    username: 'localexpressjs'
  };

  //use as invalid password credential to authenticate using the local stratagy
  const invalidUserPasswordCredentialsLocal = {
    email: 'ubcscweb@gmail.com',
    password: 'localJWT',
    username: 'ubcsclocalexpressjs'
  };

  //Save the user credentials with the encrypte password
  let validUserEncryptedCredentialsLocal = {};

  //Save the user with password reset token
  let validUserTokenCredentialsLocal = {};

  //messages to expect after authentication using the local stratagy
  let messagesLocal = {
      errorEmail: 'No user with that email!',
      errorPassword: 'Your password could not be verified. Please try again!',
    };
    //Use this to test with JWT 
    const invalidUserCredentials = {
      username: 'react',
      password: 'IDontKnow'
    };

    let jwtToken;

    before((done) => {
      request(app)
       .post('/api/users')
       .send(validUserCredentialsLocal)
       .then((res) => {
         validUserEncryptedCredentialsLocal = res.body;
         console.log(validUserCredentialsLocal);
         console.log(validUserEncryptedCredentialsLocal)
         console.log(res.body)
         done()
       })
       .catch(done);
    });

    after((done) => {
      request(app)
      .delete(`/api/users/${validUserEncryptedCredentialsLocal._id}`)
      .then((res) => {
        done();
      }) 
    })

    describe('# POST /api/auth/login', () => {
      it('should return "No user with that email" error', (done) => {
        request(app)
         .post('/api/auth/login')
         .send(invalidUserEmailCredentialsLocal)
         .expect(httpStatus.UNAUTHORIZED)
         .then((res) => {
           expect(res.body.error).to.equal(messagesLocal.errorEmail);
           done();
         })
         .catch(done);
      });

      it('should return  "Your password could not be verified. Please try again!"', (done) => {
        request(app)
         .post('/api/auth/login')
         .send(invalidUserPasswordCredentialsLocal)
         .expect(httpStatus.UNAUTHORIZED)
         .then((res) => {
           expect(res.body.error).to.equal(messagesLocal.errorPassword);
           done();
         })
         .catch(done);
       });

      it('should redirect to a  user detail page when valid credential are used', (done) => {
        request(app)
         .post('/api/auth/login')
         .send(validUserCredentialsLocal)
         .expect(httpStatus.FOUND)
         .then( (res) => {
           //Redirecting populates the res object with a field 'text'
          // expect(res.text).to.equal(`Found. Redirecting to /api/users/${validUserEncryptedCredentialsLocal._id}`);
           done();
         })
         .catch(done);
      });
    });

    describe(' # POST /api/auth/forgot', () => {
      it('should verify a user email, generate and send a reset email to the mailing address', (done) => {
        //Internet is required for this test
        request(app)
         .post('/api/auth/forgot')
         .send({email:validUserCredentialsLocal.email})
         .expect(httpStatus.OK)
         .then((res) => {
           expect(res.body.info).to.equal(`An email has been sent to ${validUserCredentialsLocal.email} with futher info`);
           done();
         })
         .catch(done);
      });
    });



  

    describe(' # POST /api/auth/reset/:token', () => {
      before((done) => {
        User.findOne({email: validUserCredentialsLocal.email})
         .then((user) => {
           if(!user) done()
           validUserTokenCredentialsLocal = user;
           done();
         })
         .catch(done);
      });

      it('should verify the validity period of the token, reset password if token is valid and send a confirmation email', (done) => {
        request(app)
         .post(`/api/auth/reset/${validUserTokenCredentialsLocal.resetPasswordToken}`)
         .send({password: validUserCredentialsLocal.password}) //Ideally use an new password here.
         .expect(httpStatus.OK)
         .then((res) => {
           expect(res.body.info).to.equal('Message deliverd');
           done();
         })
         .catch(done);

      })
    })


    describe('# POST /api/auth/loginJwt', () => {
      it('should return Authentication error', (done) => {
        request(app)
          .post('/api/auth/loginJwt')
          .send(invalidUserCredentials)
          .expect(httpStatus.UNAUTHORIZED)
          .then((res) => {
            expect(res.body.message).to.equal('Authentication error');
            done();
          })
          .catch(done);
      });

      it('should get valid JWT token', (done) => {
        request(app)
          .post('/api/auth/loginJwt')
          .send(validUserCredentials)
          .expect(httpStatus.OK)
          .then((res) => {
            expect(res.body).to.have.property('token');
            jwt.verify(res.body.token, config.jwtSecret, (err, decoded) => {
              expect(err).to.not.be.ok; // eslint-disable-line no-unused-expressions
              expect(decoded.username).to.equal(validUserCredentials.username);
              jwtToken = `Bearer ${res.body.token}`;
              done();
            });
          })
          .catch(done);
      });
    });

    describe('# GET /api/auth/random-number', () => {
      it('should fail to get random number because of missing Authorization', (done) => {
        request(app)
          .get('/api/auth/random-number')
          .expect(httpStatus.UNAUTHORIZED)
          .then((res) => {
            expect(res.body.message).to.equal('Unauthorized');
            done();
          })
          .catch(done);
      });

      it('should fail to get random number because of wrong token', (done) => {
        request(app)
          .get('/api/auth/random-number')
          .set('Authorization', 'Bearer inValidToken')
          .expect(httpStatus.UNAUTHORIZED)
          .then((res) => {
            expect(res.body.message).to.equal('Unauthorized');
            done();
          })
          .catch(done);
      });

      it('should get a random number', (done) => {
        request(app)
          .get('/api/auth/random-number')
          .set('Authorization', jwtToken)
          .expect(httpStatus.OK)
          .then((res) => {
            expect(res.body.num).to.be.a('number');
            done();
          })
          .catch(done);
      });
    });

});
