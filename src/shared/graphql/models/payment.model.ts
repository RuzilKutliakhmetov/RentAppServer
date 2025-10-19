import { ObjectType, Field, ID, Float } from '@nestjs/graphql'

import { PaymentMethod } from '../enums/payment-method.enum'
import { PaymentStatus } from '../enums/payment-status.enum'

import { Rental } from './rental.model'
import { User } from './user.model'

@ObjectType()
export class Payment {
	@Field(() => ID)
	id: string

	@Field(() => Float)
	amount: number

	@Field(() => PaymentMethod)
	method: PaymentMethod

	@Field(() => PaymentStatus)
	status: PaymentStatus

	@Field()
	createdAt: Date

	@Field(() => Rental)
	rental: Rental

	@Field(() => User)
	user: User
}
