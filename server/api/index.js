import {Router} from 'express'

import users from './users'
import operates from './operates'
import brands from './brands'

var router = Router()

// Add USERS Routes
router.use(users)
router.use(operates)
router.use(brands)

export default router
