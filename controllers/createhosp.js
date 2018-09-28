import eos from '../config'


class Createhosp {

    createhosp(req, res) {
        eos.transaction({
            actions: [{
                account: req.body.account,
                name: req.body.name,
                authorization: [{
                    actor: req.body.actor,
                    permission: "active"
                }],
                data: {

                    created_by: req.body.created_by,
                    created_at: req.body.created_at,
                    hospital_name: req.body.hospital_name,
                    hospital_ID_str: req.body.hospital_ID_str

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

module.exports = Createhosp
