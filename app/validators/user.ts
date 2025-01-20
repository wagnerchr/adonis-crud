import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messagesProvider = new SimpleMessagesProvider({
  'required': 'Este campo é obrigatório.',
  'email': 'O email deve ser válido.',
  'name.maxLength': 'O nome não pode ter mais de 100 caracteres.',
  'age.min': 'A idade deve ser pelo menos 18 anos.',
  'age.max': 'A idade não pode ser maior que 130 anos.',
})

export const userValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(100),
    age: vine.number().min(18).max(130),
    email: vine.string().email(),
  })
)

userValidator.messagesProvider = messagesProvider
