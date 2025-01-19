import User from '#models/user.module'
import { userValidator } from '#validators/user'
import { Infer } from '@vinejs/vine/types'

export default class UsersService {
  async create(data: Infer<typeof userValidator>) {
    const newUser = await User.create(data)
    return newUser
  }

  async findAll() {
    const users = await User.all()
    return users
  }

  async find(id: number) {
    const user = await User.findOrFail(id)
    return user
  }

  async update(id: number, data: Infer<typeof userValidator>) {
    const user = await User.findOrFail(id)
    user.merge(data)
    await user.save()
    return user
  }

  async delete(id: number) {
    const user = await User.findOrFail(id)
    await user.delete()
    return { message: 'Usuário deletado com sucesso' }
  }
}
