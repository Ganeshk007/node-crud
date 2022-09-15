import express from 'express'
import AdminLoginController from 'app/controllers/admin/login'
const router = express.Router();

router.get('/login', AdminLoginController.findAll);
router.post('/login', AdminLoginController.create);

module.exports = router