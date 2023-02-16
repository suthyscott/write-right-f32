


module.exports = {
    register: async (req, res) => {
        console.log('hit register')
        res.sendStatus(200)
    },
    login: async (req, res) => {
        console.log('hit login')
        res.sendStatus(200)
    }
}