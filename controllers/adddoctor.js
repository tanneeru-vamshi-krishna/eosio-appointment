import eos from '../config'


class Adddoctor {

    adddoctor(req, res) {
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
                    aadhaar_str: req.body.aadhaar_str,
                    doctor_name: req.body.doctor_name,
                    category: req.body.category,
		    doc_mobile_number: req.body.doc_mobile_number

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

module.exports = Adddoctor
