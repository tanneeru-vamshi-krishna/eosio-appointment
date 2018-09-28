import eos from '../config'


class Assigndoc {

    assigndoc(req, res) {
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
                    doctor_ID_str: req.body.doctor_ID_str,
                    hospital_ID_str: req.body.hospital_ID_str,
                    role_ID_str: req.body.role_ID_str,
                    doctor_name: req.body.doctor_name,
                    hospital_name: req.body.hospital_name

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

module.exports = Assigndoc
