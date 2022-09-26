import express from 'express'
import UserController from 'app/controllers/user'
const router = express.Router();
import userValidation from "app/requests/userValidation";


router.get('/', UserController.findAll);
router.get('/create', UserController.showCreate);
router.get('/:id', UserController.findOne);
router.post('/', userValidation, UserController.create);
router.post('/:id/update', userValidation,  UserController.update);
router.get('/:id/delete', UserController.destroy);

module.exports = router