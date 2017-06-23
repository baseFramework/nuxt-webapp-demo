import { Router } from 'express'

import users from './users'
import operates from './operates'

var router = Router()

// Add USERS Routes
router.use(users)
router.use(operates)

export default router
