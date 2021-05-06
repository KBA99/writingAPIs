import express from 'express'

import { createUser, getUsers, getUserByID, deleteUserByID, patchUserByID} from '../controllers/users.js'

const router = express.Router()


router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserByID);

router.delete('/:id', deleteUserByID)

router.patch('/:id', patchUserByID)


export default router;