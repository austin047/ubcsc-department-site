import Home from '../models/home.model';
import path from 'path';
import appRoot from 'app-root-path';

let testfile = path.join(appRoot.path,'server','test','test-files','pic1.png');

/**
 * Load home and append to req.
 */
function load(req,res,next, id) {

  //Ennsures only one instance of Home exist in database
  //If none create one instance with dummy data
  Home.find()
  .exec()
  .then((data) => {
      if(data.length < 1 ) {
      let home = new Home({
              hodMessage: 'new message',
              email: 'csc@gmail.com',
              contactNumber: '67777777',
              homePictures: [ {filename: testfile}]
          });
          home.save()
           .then((data) => {
               data._id
              req.home = data;
              next();
           })
           .catch(e => next(e));
      } else {
          req.home = data[0];
           next();
      }
  })
}

/**
 * Get home
 * @returns {Home}
 */
function get(req, res) {
   res.json(req.home);
}


/**
 * Update existing home
 * @property {string} req.body.email - The email to home.
 * @property {number} req.body.contactNumber - The home contanct Number
 * @returns {Home}
 */
function update(req,res,next) {
  req.home.email = req.body.email;
  req.home.contactNumber = req.body.contactNumber;

  return req.home.save()
    .then(home => res.json({
      email: home.email,
      contactNumber: home.contactNumber
    }))
    .catch(e => next(e))
}

/**
 * Update existing home
 * @property {string} req.body.hodMessage - The HOD Message.
 * @returns {Home}
 */
function updateHodMessage(req,res,next) {
  req.home.hodMessage = req.body.hodMessage;

  return req.home.save()
    .then(home => res.json({hodMessage: home.hodMessage}))
    .catch(e => next(e))
}

/**
 * Update existing home pictures
 * @property {string} req.file.filename - Home picture.
 * @returns {Home}
 */
function createPicture(req,res,next) {

  req.home.homePictures.push({filename:req.file.filename});
  return req.home.save()
    .then(home => {
      if (home._id === req.home._id) {
        let picture = req.home.homePictures.find( (pic) => {
          return pic.filename == req.file.filename
        });
   
        res.json(picture);
      }
    })
    .catch(e => next(e))
}


/**
 * Delete home picture
 * @param {string} req.params.pictureId
 * @return {Home}
 */
function removePicture(req,res,next) {

  req.home.update({ "$pull": {"homePictures":{"_id": req.params.pictureId}} }, {safe: true})
   .then((data) => {
     res.json({isFulfilled: true, isRejected: false, info: `Picture with deleted`});
   })
   .catch(e => next(e));
}


export default { load, get, update, createPicture, removePicture, updateHodMessage};
