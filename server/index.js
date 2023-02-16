require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Project} = require('./models/project')
const {Session} = require('./models/session')
const {ProjectType} = require('./models/projectType')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Project)
Project.belongsTo(User)

ProjectType.hasMany(Project)
Project.belongsTo(ProjectType)

Project.hasMany(Session)
Session.belongsTo(Project)


sequelize
    .sync()
    // .sync({force:true})
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))