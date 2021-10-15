const express  = require('express');
const router = express.Router();

const USER = [
  {id: 0, username:"test", password:"1234", name:"테스트" },
  {id: 1, username:"admin", password:"1234", name:"관리자" },
]

// @desc Login
// @route Post /login
router.post('/login', (req, res) => {
  const { username } = req.body
  const user = USER.find(element => element.username == username);
  res.json(user);
})

module.exports = router;