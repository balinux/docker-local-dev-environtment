module.exports = {
    showEvent: (req, res) => {
        res.send("exmaple route with controller");
    },
    responApi: (req, res) => {
        res.json({ firstName: 'Tobi' });
    }
}