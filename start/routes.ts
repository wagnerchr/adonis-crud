const UsersController = () => import('#controllers/user.controller')
import router from '@adonisjs/core/services/router'

router.group(() => {
  router.resource('users', UsersController).apiOnly()
})
