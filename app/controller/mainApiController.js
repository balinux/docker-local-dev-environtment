module.exports = {
    posts: (req, res) => {
        res.json({
            "id": 1,
            "title": "new post",
            "content": "this is new content"
        })
    },
    getProducts:(req,res) => {
        res.json({
            "message" : "get Product"
        })
    }
}