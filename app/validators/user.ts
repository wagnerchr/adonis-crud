import vine from '@vinejs/vine'

export const userValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(100),
    age: vine.number().min(18).max(130),
    email: vine.string().email(),
  })
)
