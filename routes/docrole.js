import express from 'express';
const router = express.Router();
import Docrole from '../controllers/docrole'
const docrole = new Docrole();


router.post('/', docrole.docrole);
router.get('/', docrole.get);
router.get('/', docrole.getDataById);
router.post('/', docrole.updateById);
router.post('/', docrole.getDataById);
router.post('/', docrole.deleteById);


module.exports = router;