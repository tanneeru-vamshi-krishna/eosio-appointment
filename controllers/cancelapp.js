import eos from '../config'


class Cancelapp {

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

    updateById() 
    {
    }

    deletedById() 
    {
    }
}

module.exports = Cancelapp



