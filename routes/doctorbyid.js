import express from 'express';
const router = express.Router();
import Doctorbyid from '../controllers/doctorbyid'
const doctorbyid = new Doctorbyid();


router.post('/', doctorbyid.doctorbyid);

module.exports = router;