import News from '../models/news.model';

/**
 * Load news and append to req.
 */
function load(req,res,next, id) {
   News.get(id)
    .then((news) => {
     req.news = news;
    return next();
    })
    .catch( e => next(e))
}

/**    
 * Get news
 * @returns {News}
 */
function get(req, res) {
   res.json(req.news);
}


/**
 * Create new news
 * @property {string} req.body.title - The name of news.
 * @property {string} req.body.content - The content of the news.
 * @returns {News}
 */
function create(req, res, next) {
  const news = new News({
    title: req.body.title,
    content: req.body.content
  });
  
  
  news.save()
    .then(savedNews => res.json(savedNews))
    .catch(e => next(e));
    
}

/**
 * Update existing news
 * @property {string} req.body.title - The title of news.
 * @property {string} req.body.content - The content of news.
 * @returns {News}
 */
function update(req,res,next) {
  
  req.news.title = req.body.title
  req.news.content = req.body.content

  return req.news.save()
    .then(news => res.json(news)) 
    .catch(e => next(e)) 
}

/**
 * Get News list
 * @property {number} req.query.skip  - Number of users to be skiped
 * @property {number} req.query.limit - Limit number of news to be returned
 * @returns {News[]}
 */
function list(req, res, next) {
  const { limit = 0, skip = 0 } = req.query;
   News.list({ limit, skip })
     .then(news => res.json(news))
     .catch(e => next(e))
}

/**
 * Delete news
 * @param {sting} id
 * @return {News} 
 */
function remove(req,res,next) {
  req.news.remove()
   .then((news) => res.json(news))
   .catch(e => next(e))
}


export default { load, get, create, update, list, remove };
