const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

const requireUserMatch = (req, res, next) => {
  if (req.user.id === parseInt(req.params.id)) {
    next();
  } else {
    res.status(403).send('Unauthorized to view this page');
  }
};

module.exports = {
  requireAuth,
  requireUserMatch,
};
