import eos from '../config'

class Doctorbyid {

    doctorbyid (req,res) {
        let data = {
            scope: req.body.scope,
            code: req.body.scope,
            table: req.body.table,
            json: true,
            limit: 1000,
            table_key: null,
            key_type: 'i64',
            index_position: 2
        }
        if (req.body.status) {
            data.lower_bound = parseInt(req.body.status)
            data.upper_bound = parseInt(req.body.status) + 1
        }

        eos.getTableRows(data, (error, data) => {
            return res.json({
                error,
                data
            })
        })
    }
}

module.exports = Doctorbyid;
