import eos from '../config'


class Appointment {

    createapp(req, res) {
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
                    doctor_ID_str: req.body.doctor_ID_str,
                    hospital_ID_str: req.body.hospital_ID_str,
                    appointment_ID_str: req.body.appointment_ID_str,
                    start_time: req.body.start_time,
                    end_time: req.body.end_time

            }
        }],
        }).then((result) => {
            return res.json(result)
        }).catch((err) => {
            console.log(err)
            return res.json(err)
        })
    }

    cancelapp(req, res) {

        eos.transaction({
            actions: [{
                account: req.body.account,
                name: req.body.name,
                authorization: [{
                    actor: req.body.actor,
                    permission: "active"
                }],
                data: {

                    appointment_ID_str: req.body.appointment_ID_str,
                    cancelled_by: req.body.cancelled_by,
                    cancelled_at: req.body.cancelled_at
                }
    
            }],
        }).then((result) => {
            return res.json(result)
        }).catch((err) => {
            console.log(err)
            return res.json(err)
        })

    }
   
    endapp(req, res) {

        eos.transaction({
            actions: [{
                account: req.body.account,
                name: req.body.name,
                authorization: [{
                    actor: req.body.actor,
                    permission: "active"
                }],
                data: {
                   
                    appointment_ID_str: req.body.appointment_ID_str,
                    cancelled_by: req.body.cancelled_by,
                    cancelled_at: req.body.cancelled_at
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

module.exports = Appointment



