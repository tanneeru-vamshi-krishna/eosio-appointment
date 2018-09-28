import express from 'express';
const router = express.Router();
import Hospital from '../controllers/hospital'
const hospital = new Hospital();


router.post('/', hospital.hosp);
//router.post('/', hospital.get);
//router.post('/', hospital.getDataById);
router.post('/', hospital.updateById);
router.post('/', hospital.deleteById);

module.exports = router;
