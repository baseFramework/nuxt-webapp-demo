import { Router } from 'express'

var router = Router()

// Mock Users
// const users = [
//     { name: 'Alexandre' },
//     { name: 'Sébastien' }
// ]

const operate1 = require('../data/operates1.json')
const operate2 = require('../data/operates2.json')

/* GET users listing. */
router.get('/operate1', function (req, res, next) {
    res.json(operate1)
})

router.get('/operate2', function (req, res, next) {
    res.json(operate2)
})
//
// /* GET user by ID. */
// router.get('/users/:id', function (req, res, next) {
//     var id = parseInt(req.params.id)
//     if (id >= 0 && id < users.length) {
//         res.json(users[id])
//     } else {
//         res.sendStatus(404)
//     }
// })

export default router
