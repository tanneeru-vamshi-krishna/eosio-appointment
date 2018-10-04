import eos from '../config'
import axios from 'axios'

class Endapp {

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
                    terminated_by: req.body.terminated_by,
                    terminated_at: req.body.terminated_at,
		    patient_mobile_number: req.body.patient_mobile_number

            }
        }],
        }).then((result) => {
           let message = axios.post(`http://178.62.92.215:6000/sendsms`,
{from:"HOMASO",to:req.body.patient_mobile_number,text:`Dear Patient, Your Appointment has been completed .`})
            return res.json(result)
        }).catch((err) => {
            console.log(err)
            return res.json(err)
        })
    }

    updateById() 
    {
    }

    deletedById() 
    {
    }
}

module.exports = Endapp



