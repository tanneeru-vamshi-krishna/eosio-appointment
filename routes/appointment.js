import express from 'express';
const router = express.Router();
import Appointment from '../controllers/appointment'
const appointment = new Appointment();


router.post('/', appointment.createapp);
router.post('/', appointment.cancelapp);
router.post('/', appointment.endapp);


module.exports = router;
