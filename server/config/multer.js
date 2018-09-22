import moment from 'moment';
import path from 'path';
import multer from 'multer';
import appRoot from 'app-root-path';
import fs from 'fs'


let storage = multer.diskStorage({
    destination: (req,file,cd) => {
      let dir = path.join(appRoot.path, 'public/uploads')

      if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      cd(null,dir)
    }
    // filename: (req, file, cd) => {
    //   cd(null,null)
    //  // cd(null, path.parse(file.originalname).name + '-' + moment(Date.now()).format('MMMM MM YYYY h:mm:ss') + path.extname(file.originalname))
    // }
  })
  
const upload = multer({storage: storage})

export default upload;