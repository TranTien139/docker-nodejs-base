const exprress = require("express")
const app = exprress()

app.use(exprress.static(__dirname +'/public'))

app.get("/", function (req, res, next) {
    res.send("success")
})

app.listen(7000, function () {
    console.log("listen port 7000")
})
