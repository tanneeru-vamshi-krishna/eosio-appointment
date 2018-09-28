import express from 'express';
const router = express.Router();
import Adddoctor from '../controllers/adddoctor'
const adddoctor = new Adddoctor();


router.post('/', adddoctor.adddoctor);
//router.get('/', adddoctor.get);
//router.get('/:id', adddoctor.getDataById);
// router.put('/:id', adddoctor.updateById);
// router.delete('/:id', adddoctor.deleteById);
// router.param('id', thread.getById)


module.exports = router;