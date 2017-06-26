import { Router } from 'express'

var router = Router()

const brands = require('../data/brandlist.json')

/* GET brands listing. */
router.get('/brands', function (req, res, next) {
    res.json(brands)
})

export default router
