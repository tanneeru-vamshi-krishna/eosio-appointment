import express from 'express';
const router = express.Router();
import Get_table_rows from '../controllers/gettablerows'
const get_table_rows = new Get_table_rows();


router.post('/', get_table_rows.getData);



module.exports = router;