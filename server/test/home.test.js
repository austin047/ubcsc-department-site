import request from 'supertest-as-promised';
import mongoose from 'mongoose';
import chai, { expect } from 'chai';
import httpStatus from 'http-status';
import app from '../index';
import path from 'path';
import appRoot from 'app-root-path';

chai.config.includeStack = true;

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

describe(' ## Home API ', () => {
    let testfile = path.join(appRoot.path,'server','test','test-files','pic1.png');

    let home = {
      hodMessage: 'new message',
      email: 'csc@gmail.com',
      contactNumber: 67777777,
      homePictures: [ {filename: testfile}]
    };
    let picture = {};


    describe(' # GET /api/home', () => {
      it('should get home object', (done) => {
        request(app)
        .get('/api/home')
        .expect(httpStatus.OK)
        .then( (res) => {
          expect(res.body).to.be.an('object');
          done();
        })
        .catch(done)
      });
    });

    describe(' # PUT /api/home', () => {
      it('should update the home collection email and contactNumber', (done) => {
        request(app)
         .put('/api/home')
         .send(home)
         .expect(httpStatus.OK)
         .then( (res) => {
           expect(res.body.contactNumber).to.equal(home.contactNumber);
           expect(res.body.email).to.equal(home.email);
           done();
         })
         .catch(done)

      })
    });

    describe(' # PUT /api/home/hodmessage', () => {
      it('should update the home collection hodMessage field', (done) => {
        request(app)
         .put('/api/home/hodmessage')
         .send(home)
         .expect(httpStatus.OK)
         .then( (res) => {
           expect(res.body.hodMessage).to.equal(home.hodMessage);
           done();
         })
         .catch(done)

      })
    })

 testfile = path.join(appRoot.path,'server','test','test-files','test1.txt');
  //Use document format .txt, .pdf and .dox/.docx to test file upload as mocha only accepts these formats
    describe(' # POST /api/home/pictures', () => {
      it('should create a new picture', (done) => {
        request(app)
         .post('/api/home/pictures')
         .attach('file',testfile)
         .expect(httpStatus.OK)
         .then( (res) => {
           //expect(res.body.filename.includes('test1')).to.equal(true);
           expect(res.body.filename).to.be.a('string');
           picture = res.body;
           done();
         })
         .catch(done);
      });
    });



    describe(' # DELETE /api/home/pictures/:pictureId', () => {
      it('should delete a picture', (done) => {
        request(app)
         .delete(`/api/home/pictures/${picture._id}`)
         .expect(httpStatus.OK)
         .then((res) => {
           expect(res.body.isFulfilled).to.equal(true);
           expect(res.body.isRejected).to.equal(false);
           done();
         })
         .catch(done);
      })
    })
});
