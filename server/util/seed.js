const { ProjectType } = require("../models/projectType")

const types = [
    {
        projectTypeName: "Short Story"
    },
    { 
        projectTypeName: 'Novel'
     },
     {
        projectTypeName: 'Essay'
     }
]

const seedDatabase = async () => {
    await ProjectType.bulkCreate(types)
}

module.exports = {
    seedDatabase
}
