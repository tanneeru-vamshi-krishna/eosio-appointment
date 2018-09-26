import eos from '../config'


class Docrole {

    docrole(req, res) {
        eos.transaction({
            actions: [{
                account: req.body.account,
                name: "adddoctor",
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
                    category: req.body.category

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

    get() 
    {

    }
    getById() 
    {

    }
    updateById() 
    {
        eos.transaction({
            actions: [{
                account: req.body.account,
                name: "addpatient",
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
    getDataById()
    {
        eos.transaction({
            actions: [{
                account: req.body.account,
                name: "addtimeslot",
                authorization: [{
                    actor: req.body.actor,
                    permission: "active"
                }],
                data: {
                   
                    created_by: req.body.created_by,
                    created_at: req.body.created_at,
                    time_in: req.body.time_in,
                    time_out: req.body.time_out,
                    timeslot_ID_str: req.body.timeslot_ID_str,
                    doctor_ID_str: req.body.doctor_ID_str
                }
    
            }],
        }).then((result) => {
            return res.json(result)
        }).catch((err) => {
            console.log(err)
            return res.json(err)
        })
 
    }

    deleteById() 
    {
        eos.transaction({
            actions: [{
                account: req.body.account,
                name: "assigndoc",
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

module.exports = Docrole
