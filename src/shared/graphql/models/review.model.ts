import { ObjectType, Field, ID, Int } from '@nestjs/graphql'

import { Item } from './item.model'
import { User } from './user.model'

@ObjectType()
export class Review {
	@Field(() => ID)
	id: string

	@Field(() => Int)
	rating: number

	@Field({ nullable: true })
	comment: string

	@Field()
	createdAt: Date

	@Field(() => Item)
	item: Item

	@Field(() => User)
	user: User
}
