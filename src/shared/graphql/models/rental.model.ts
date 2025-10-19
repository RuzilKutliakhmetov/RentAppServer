import { ObjectType, Field, ID, Float } from '@nestjs/graphql'

import { RentalStatus } from '../enums/rental-status.enum'

import { Chat } from './chat.model'
import { Item } from './item.model'
import { Payment } from './payment.model'
import { User } from './user.model'

@ObjectType()
export class Rental {
	@Field(() => ID)
	id: string

	@Field()
	startDate: Date

	@Field()
	endDate: Date

	@Field(() => Float)
	totalPrice: number

	@Field(() => RentalStatus)
	status: RentalStatus

	@Field()
	createdAt: Date

	@Field(() => Item)
	item: Item

	@Field(() => User)
	renter: User

	@Field(() => Payment, { nullable: true })
	payment: Payment

	@Field(() => Chat, { nullable: true })
	chat: Chat
}
