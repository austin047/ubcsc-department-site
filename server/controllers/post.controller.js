import Post from '../models/post.model';


// function load(req, res, next , pos) {
//   console.log("enterd1");
//   console.log(req.params);
//   console.info(req.body);
//   console.log(pos);
//   Post.get(pos) 
//     .then((data) => {res.json(data);
//   })
//   .catch (err => next(err))
  
// }
function load(id) {
  Post.get(id);
}


function get(req, res) {
  console.log("enterd");
  return res.json(req.post);
}

// function create(params) {
//   const post = new Post({
//     title: params.data.title,
//     content: params.data.content
//   });
//   return post.save();
// }

function create(req, res, next) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

function update(params) {
  return load(params).then(post => {
    const tmp = post;
    post.title = params.data.title;
    post.content = params.data.content;
    return post.save()
  });
}

function list(params) {
  const { limit = 50, skip = 0 } = params;
  return Post.list({ limit, skip })
}

function remove(params) {
  return load(params).then(post => post.remove());
}

export default { load, get, create, update, list, remove };
