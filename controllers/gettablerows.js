import eos from '../config'

class Get_table_rows {

    getData(req, res) {
        eos.getTableRows({
            scope: req.body.scope,
            code: req.body.code,
            table: req.body.table,
            json: true
        }, (error, data) => {
            return res.json({
                error,
                data
            })
        })
    }

}

module.exports = Get_table_rows
