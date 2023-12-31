const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../../db/models/User');

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, user });
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      isAdmin,
      adminPassphrase,
    } = req.body;

    if (isAdmin && adminPassphrase !== process.env.ADMIN_PASSPHRASE) {
      return res.status(403).json({ error: 'Invalid admin passphrase' });
    }

    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      username,
      isAdmin: isAdmin && adminPassphrase === process.env.ADMIN_PASSPHRASE,
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error('error signing up', error);
    next(error);
  }
});

router.post('/logout', (req, res) => {
  try {
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error('error logging out', error);
    res.status(500).json({ error: 'Error logging out' });
  }
});

router.get('/getUser', async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) return res.sendStatus(403);

      const getUser = await User.findOne({ where: { id: user.id } });
      if (!getUser) res.send('Cannot find user');
      console.log('user in server:', getUser);
      res.send(getUser);
    });
  } catch (error) {
    console.error('error fetching user');
    next(error);
  }
});

module.exports = router;
