import express from 'express';
const router = express.Router();
import Createrole from '../controllers/createrole'
const createrole = new Createrole();


router.post('/', createrole.createrole);
// router.get('/:id', createrole.getDataById);
// router.put('/:id', createrole.updateById);
// router.delete('/:id', createrole.deleteById);


module.exports = router;