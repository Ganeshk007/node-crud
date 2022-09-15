import express from 'express'
import UserController from 'app/controllers/user'
const router = express.Router();

router.get('/', UserController.findAll);
router.get('/create', (req, res) => { res.render('user/add') });
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);
router.post('/:id/update', UserController.update);
router.get('/:id/delete', UserController.destroy);

module.exports = router