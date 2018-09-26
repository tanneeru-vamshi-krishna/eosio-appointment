import express from 'express';
const router = express.Router();
import Appointment from '../controllers/appointment'
const appointment = new Appointment();


router.post('/', appointment.createapp);
router.post('/', appointment.get);
router.post('/', appointment.getDataById);
router.post('/', appointment.updateById);
router.post('/', appointment.deleteById);


module.exports = router;