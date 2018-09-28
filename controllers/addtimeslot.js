import eos from '../config'


class Addtimeslot {

    addtimeslot(req, res) {
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

module.exports = Addtimeslot
