import express from 'express';
const router = express.Router();
import Wallet_unlock from '../controllers/walletunlock'
const walletunlock = new Wallet_unlock();


router.get('/', walletunlock.unlock);



module.exports = router;