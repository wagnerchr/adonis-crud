import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.integer('age').notNullable()
      table.string('email').notNullable().unique()
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now()).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
