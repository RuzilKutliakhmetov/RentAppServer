import { ObjectType, Field, ID, Float } from '@nestjs/graphql'

import { Item } from './item.model'
import { User } from './user.model'

@ObjectType()
export class Address {
	@Field(() => ID)
	id: string

	@Field({ nullable: true })
	label: string

	@Field()
	city: string

	@Field()
	street: string

	@Field({ nullable: true })
	house: string

	@Field({ nullable: true })
	apartment: string

	@Field({ nullable: true })
	postalCode: string

	@Field(() => Float, { nullable: true })
	lat: number

	@Field(() => Float, { nullable: true })
	lng: number

	@Field()
	createdAt: Date

	@Field(() => User)
	user: User

	@Field(() => [Item], { nullable: 'itemsAndList' })
	items: Item[]
}
