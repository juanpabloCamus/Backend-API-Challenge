const jwt = require('jsonwebtoken');

const JWT_SECRET = 'crystalzoom';

module.exports = (req, res, next) => {
  const authorization = req.get('authorization');
  let token = null;
  let decodedToken = null;

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
    decodedToken = jwt.verify(token, JWT_SECRET);

    if (!decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' });
    }

    const { id: userId } = decodedToken;
    req.userId = userId;
    return next();
  }

  return res.status(401).json({ error: 'token missing or invalid' });
};
