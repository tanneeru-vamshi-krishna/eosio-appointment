import eos from '../config'


class Addpatient {

    addpatient(req, res) {
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
                    aadhaar_str: req.body.aadhaar_str,
                    mobile_number: req.body.mobile_number,
                    patient_name: req.body.patient_name

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

module.exports = Addpatient
