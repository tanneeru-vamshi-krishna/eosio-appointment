import eos from '../config'


class Createrole {

    createrole(req, res) {
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
                    role_name: req.body.role_name,
                    role_ID_str: req.body.role_ID_str,
                    created_by: req.body.created_by,
                    created_at: req.body.created_at

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

module.exports = Createrole
