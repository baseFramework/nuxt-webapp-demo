import {Router} from 'express'
import util from '../util'

var router = Router()

const brands = require('../data/brandlist.json')

/* GET brands listing. */
router.get('/brands', function (req, res, next) {
    if (req.query && req.query.currentPage && req.query.pageSize) {
        let currentPage = req.query.currentPage;
        let pageSize = req.query.pageSize;
        let arrs = util.pagination(currentPage, pageSize, brands)
        let result = {};
        result.code = 0;
        result.data = {};
        result.data.pageSize = pageSize;
        result.data.currentPage = currentPage;
        result.data.total = brands.length || 0
        result.data.items = arrs
        res.json(result)
    } else {
        res.json({
            code: "601",
            msg: "params error!"
        })
    }

    //res.json(brands)
})

export default router
