import express from 'express';
const router = express.Router();
import Docrole from '../controllers/docrole'
const docrole = new Docrole();


router.post('/', docrole.docrole);
router.post('/', docrole.get);
router.post('/', docrole.getDataById);
router.post('/', docrole.updateById);
router.post('/', docrole.getDataById);
router.post('/', docrole.deleteById);


module.exports = router;