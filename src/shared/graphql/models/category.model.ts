import { ObjectType, Field, ID } from '@nestjs/graphql'

import { Item } from './item.model'

@ObjectType()
export class Category {
	@Field(() => ID)
	id: number

	@Field()
	name: string

	@Field()
	slug: string

	@Field({ nullable: true })
	icon: string

	@Field()
	createdAt: Date

	@Field(() => [Item], { nullable: 'itemsAndList' })
	items: Item[]
}
