import eos from '../config'
import axios from 'axios'


class Createapp {

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
                    end_time: req.body.end_time,
		    doc_mobile_number: req.body.doc_mobile_number,
		    patient_mobile_number: req.body.patient_mobile_number

            }
        }],
        }).then((result) => {
            let message = axios.post(`http://178.62.92.215:6000/sendsms`,
{from:"HOMASO",to:req.body.patient_mobile_number,text:`Dear Patient, Your Appointment has been created succusfully.`})
//{from:"HOMASO",to:req.body.doc_mobile_number,text:`Dear Doctor, Patient has been assigned to you.`})

            return res.json(result)
        }).catch((err) => {
            console.log(err)
            return res.json(err)
        })
    }

    updateById() 
    {
    }
   
    deleteById() 
    {
    }
}

module.exports = Createapp



