import express from 'express';
const router = express.Router();
import Addpatient from '../controllers/addpatient'
const addpatient = new Addpatient();


router.post('/', addpatient.addpatient);
// router.get('/', addpatient.getDataById);
// router.put('/:id', addpatient.updateById);
// router.delete('/:id', addpatient.deleteById);



module.exports = router;