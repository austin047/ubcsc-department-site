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
});



describe(' ## Course API ', () => {
    let course = {
        name:'Languages and compilers',
        courseCode: 'CSC 402'
    };
    let material = {};

    let testfile = path.join(appRoot.path,'server','test','test-files','test1.txt');

    describe(' # POST /api/courses', () => {
        it('Should create a new Course', (done) => {
            request(app)
             .post('/api/courses')
             .send(course)
             .expect(httpStatus.OK)
             .then((res) => {
                 expect(res.body.name).to.equal(course.name);
                 expect(res.body.courseCode).to.equal(course.courseCode);
                 course = res.body;
                 done();
             })
             .catch(done);
        });
    });

    describe(' # GET /api/courses/:courseId', () => {
       it('Should get course detail', (done) => {
            request(app)
            .get(`/api/courses/${course._id}`)
            .expect(httpStatus.OK)
            .then((res) => {
                expect(res.body.name).to.equal(course.name);
                done();
            })
            .catch(done);
        });

        it('should return error message -Not found, When course not exist', (done)=> {
            request(app)
             .get('/api/courses/5b7f793c01ab671e8931aff9')
             .expect(httpStatus.NOT_FOUND)
             .then((res) => {
                 expect(res.body.message).to.equal('Not Found');
                 done();
             })
             .catch(done);
        })


    });

    describe(' # GET /api/courses/', () => {
        it('should get all courses', (done) => {
            request(app)
            .get('/api/courses/')
            .expect(httpStatus.OK)
            .then( (res) => {
                expect(res.body).to.be.an('array');
                done();
            })
            .catch(done);
        });

        it('should get all courses, and with limit and skip ', (done) => {
            request(app)
            .get('/api/courses/')
            .query({limit: 5, skip: 0})
            .expect(httpStatus.OK)
            .then( (res) => {
                expect(res.body).to.be.an('array');
                done();
            })
            .catch(done);
        });
    })

    let newCourse = {name: 'Numerical methods', courseCode: 'CSC 410'};

    describe(' # PUT /api/courses/courseId', () => {
        it('should update the course detail', (done) => {
            request(app)
             .put(`/api/courses/${course._id}`)
             .send(newCourse)
             .expect(httpStatus.OK)
             .then((res) => {
                 expect(res.body.name).to.equal(newCourse.name)
                 expect(res.body.courseCode).to.equal(newCourse.courseCode);
                 done();
             })
             .catch(done);
        });
    });


     testfile = path.join(appRoot.path,'server','test','test-files','test1.txt');
    describe(' # POST /api/courses/:courseId/material', () => {
        it('should create new course Material', (done) => {
            request(app)
             .post(`/api/courses/${course._id}/material`)
             .attach('file',testfile)
             .expect(httpStatus.OK)
             .then( (res) => {
                // expect(res.body.material[0].filename.includes('test1')).to.equal(true);
                expect(res.body.filename).to.be.a('string');
                 material = res.body;
                 done();
             })
             .catch(done);
        })
    })


    describe(' # DELETE /api/courses/:courseId/material/:materialId', () => {
        it('should delete the course material with id materailId ', (done) => {
            request(app)
             .delete(`/api/courses/${course._id}/material/${material._id}`)
             .expect(httpStatus.OK)
             .then( (res) => {
                 expect(res.body.isFulfilled).to.equal(true);
                 expect(res.body.isRejected).to.equal(false);
                 done();
             })
             .catch(done)
        })
    })

    describe(' # DELETE /api/courses/:courseId', () => {
        it('should delete the course with course id courseId', (done) => {
            request(app)
             .delete(`/api/courses/${course._id}`)
             .expect(httpStatus.OK)
             .then( (res) => {
                 expect(res.body.name).to.equal(newCourse.name);
                 done();
             })
             .catch(done);
        });
    });

});
