import UsersService from '#services/user.service'
import { userValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(protected userService: UsersService) {}

  public async index({ response }: HttpContext) {
    const users = await this.userService.findAll()
    return response.json(users)
  }

  public async show({ params, response }: HttpContext) {
    const user = await this.userService.find(params.id)
    return response.json(user)
  }

  public async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(userValidator)
    const user = await this.userService.create(data)
    return response.status(201).json(user)
  }

  public async update({ params, request, response }: HttpContext) {
    const data = await request.validateUsing(userValidator)
    const updatedUser = await this.userService.update(params.id, data)
    return response.json(updatedUser)
  }

  public async destroy({ params, response }: HttpContext) {
    const deletedUser = await this.userService.delete(params.id)
    return response.json(deletedUser)
  }
}
