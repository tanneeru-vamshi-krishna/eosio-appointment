import express from 'express';
const router = express.Router();
import Hospital from '../controllers/hospital'
const hospital = new Hospital();


router.post('/', hospital.hosp);
router.get('/', hospital.get);
router.get('/:id', hospital.getDataById);
router.post('/', hospital.updateById);
router.post('/', hospital.deleteById);

module.exports = router;