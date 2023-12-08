const express = require('express')
const router = express()

const {registerUser,loginUser,profilePage,getAllUsers,changePassword} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('https://task-management-backend-hpay.onrender.com/',registerUser)
router.post('https://task-management-backend-hpay.onrender.com/login',loginUser)
router.get('https://task-management-backend-hpay.onrender.com/me',protect,profilePage)
router.put('https://task-management-backend-hpay.onrender.com/changepassword',protect,changePassword)
router.get('https://task-management-backend-hpay.onrender.com/getall',protect,getAllUsers)


module.exports = router
