const users = require('../userData');

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  return res.status(200).json({ message: 'Login successful', user });
};

const registerUser = (req, res) => {
  // Logic to register a new user
};

module.exports = {
  loginUser,
  registerUser,
};
