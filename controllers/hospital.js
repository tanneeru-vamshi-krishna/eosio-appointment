import eos from '../config'


class Hospital {

    hosp(req, res) {
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
    getDataById()
    {
    }

    deleteById() 
    {
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

}

module.exports = Hospital
