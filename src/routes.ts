import { Router } from 'express'
import UserController from './controller/UserController'
import ExpensesController from './controller/ExpensesController'

const routes = Router()

routes.get('/expenses', ExpensesController.find)
routes.post('/expenses', ExpensesController.create)
routes.delete('/expenses/:id', ExpensesController.delete)

export default routes
