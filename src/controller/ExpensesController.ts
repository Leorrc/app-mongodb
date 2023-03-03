import { Request, Response } from 'express'
import Expenses from '../database/schemas/Expenses'
import { StatusCodes } from 'http-status-codes'

class ExpensesController {
  async find(request: Request, response: Response) {
    try {
      const expenses = await Expenses.find()

      return response.json(expenses)
    } catch (error) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Something wrong happened, try again',
        message: error,
      })
    }
  }

  async create(request: Request, response: Response) {
    const { email, title, type, category, amount } = request.body

    try {
      const expense = await Expenses.create({
        email,
        title,
        type,
        category,
        amount,
      })

      return response.status(StatusCodes.CREATED).json(expense)
    } catch (error) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: 'Registration failed',
        message: error,
      })
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params

    try {
      const expense = await Expenses.findOne({ _id: id })

      if (!expense) {
        return response.status(StatusCodes.NOT_FOUND).json({
          error: 'Ooops',
          message: 'Expenses not exists',
        })
      }

      await Expenses.deleteOne({ _id: id })

      return response.sendStatus(StatusCodes.NO_CONTENT)
    } catch (error) {
      return response.status(500).send({
        error: 'Something wrong happened, try again',
        message: error,
      })
    }
  }
}

export default new ExpensesController()
