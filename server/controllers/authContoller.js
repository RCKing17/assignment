// Dummy data for users, including roles
const users = [
  { id: 1, username: 'superadmin', email: 'superadmin@example.com', roles: ['Super Admin'] },
  { id: 2, username: 'groupadmin', email: 'groupadmin@example.com', roles: ['Group Admin'] },
  { id: 3, username: 'user', email: 'user@example.com', roles: ['User'] }
];

  // Authenticate user and return user info including roles
  exports.login = (req, res) => {
    const { username, password } = req.body;
  
    // Find the user by username
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      // Authentication successful
      res.json({ success: true, message: 'Logged in successfully', user });
    } else {
      // Authentication failed
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  };
  