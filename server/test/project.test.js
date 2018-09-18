import request from 'supertest-as-promised';
import chai, { expect } from 'chai';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import app from '../index';

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

describe('## Project API', () => {
    let project = {
        name:'App manifest',
        description: 'create a manifest for an express app'
    };

    describe(' # POST /api/projects', () => {
        it('Should create a new project', (done) => {
            request(app)
             .post('/api/projects')
             .send(project)
             .expect(httpStatus.OK)
             .then((res) => {
                 expect(res.body.name).to.equal(project.name);
                 expect(res.body.description).to.equal(project.description);
                 project = res.body;
                 done();
             })
             .catch(done);
        });
    });

    describe(' # GET /api/projects/:projectId', () => {
        it('Should get project details', (done) => {
            request(app)
             .get(`/api/projects/${project._id}`)
             .expect(httpStatus.OK)
             .then((res) => {
                 expect(res.body.name).to.equal(project.name);
                 expect(res.body.description).to.equal(project.description);
                 done();
             })
             .catch(done);
        });

        it('should report error message - Not found, when user not exists', (done) => {
            request(app)
             .get('/api/projects/5b7f793c01ab671e8931aff9')
             .expect(httpStatus.NOT_FOUND)
             .then((res) => {
                 expect(res.body.message).to.equal('Not Found');
                 done();
             })
             .catch(done);
        })
    });

    describe(' # PUT /api/project/:projectId', () => {
        it('should udate the project detail', (done) => {
            request(app)
             .put(`/api/projects/${project._id}`)
             .send({name: 'new name', description: 'and description also'})    
             .expect(httpStatus.OK)
             .then((res) => {
                expect(res.body.name).to.equal("new name");
                expect(res.body.description).to.equal("and description also");
                done();
             })
             .catch(done);
        })
    });

    describe(' # GET /api/projects/', () => {
        it('should get all projects', (done) => {
            request(app)
             .get('/api/projects')
             .expect(httpStatus.OK)
             .then( (res) => {
                expect(res.body).to.be.an('array');
                done();
             })
             .catch(done);
        });
        
        it('should get all projects (with limit and skip)', (done) => {
            request(app)
             .get('/api/projects')
             .query({limit: 20, skip: 2})
             .expect(httpStatus.OK)
             .then( (res) => {
                 expect(res.body).to.be.an('array');
                 done();
             })
             .catch(done);
        });
    });

    describe(' # DELETE /api/projects/:projectId', () => {
        it('should delete project', (done) => {
            request(app)
             .delete(`/api/projects/${ project._id }`)
             .expect(httpStatus.OK)
             .then( (res) => {
                 expect(res.body.name).to.equal("new name");
                 expect(res.body.description).to.equal("and description also");
                 done();
             })
             .catch(done);
        });
    });
});

