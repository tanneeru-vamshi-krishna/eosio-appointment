import eos from '../config'


class Deletehosp {

    deletehosp(req, res) {
        eos.transaction({
            actions: [{
                account: req.body.account,
                name: req.body.name,
                authorization: [{
                    actor: req.body.actor,
                    permission: "active"
                }],
                data: {

                    hospital_ID_str: req.body.hospital_ID_str,
                    deleted_by: req.body.deleted_by,
                    deleted_at: req.body.deleted_at

            }
        }],
        }).then((result) => {
            return res.json(result)
        }).catch((err) => {
            console.log(err)
            return res.json(err)
        })
    }

    getById() 
    {
    }
    updateById() 
    {
    }
    getDataById()
    {
    }
    deleteById() 
    {
    }

}

module.exports = Deletehosp
