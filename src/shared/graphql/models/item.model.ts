import { ObjectType, Field, ID, Float } from '@nestjs/graphql'

import { Address } from './address.model'
import { Category } from './category.model'
import { Rental } from './rental.model'
import { Review } from './review.model'
import { User } from './user.model'

@ObjectType()
export class Item {
	@Field(() => ID)
	id: string

	@Field()
	title: string

	@Field()
	description: string

	@Field(() => Float)
	pricePerDay: number

	@Field(() => Float, { nullable: true })
	deposit: number

	@Field(() => [String])
	imageUrls: string[]

	@Field()
	available: boolean

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date

	@Field(() => User)
	owner: User

	@Field(() => Category)
	category: Category

	@Field(() => Address, { nullable: true })
	address: Address

	@Field(() => [Rental], { nullable: 'itemsAndList' })
	rentals: Rental[]

	@Field(() => [Review], { nullable: 'itemsAndList' })
	reviews: Review[]
}
