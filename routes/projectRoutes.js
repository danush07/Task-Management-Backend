const express = require('express')
const router = express()

const {
    createProject,
    getProjects,
    getProjectById,
    editProject,
    deleteProject,
    addTask,
    deleteSingleTask,
    editSingleTask,
    setTaskCompletedStatus,
    addEpicTitle
  } = require('../controllers/projectController');
const {protect} = require('../middleware/authMiddleware')

router.post('https://task-management-backend-hpay.onrender.com/createproject',protect,createProject)
router.get('https://task-management-backend-hpay.onrender.com/getprojects',protect,getProjects)
router.get('https://task-management-backend-hpay.onrender.com/:id',protect,getProjectById)
router.put('https://task-management-backend-hpay.onrender.com/:id',protect,editProject)
router.delete('https://task-management-backend-hpay.onrender.com/:id',protect,deleteProject)
router.post('https://task-management-backend-hpay.onrender.com/addtask',protect,addTask)
router.delete('https://task-management-backend-hpay.onrender.com/:projectId/task/:taskId',protect,deleteSingleTask)
router.put('https://task-management-backend-hpay.onrender.com/:projectId/task/:taskId',protect,editSingleTask)
router.put('https://task-management-backend-hpay.onrender.com/:projectId/task/:taskId/complete',protect,setTaskCompletedStatus)
router.post('https://task-management-backend-hpay.onrender.com/:projectId/addepicname',protect,addEpicTitle)

module.exports = router
