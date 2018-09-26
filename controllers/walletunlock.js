import shell from 'shelljs';

class WalletUnlock {
    unlock(req, res) {
        try {
            shell.exec('../cmd/cmd.txt')
            res.json({
                success: true
            })
        } catch (err) {
            return res.json({
                success: true,
                err
            })
        }

    }
}

module.exports = WalletUnlock