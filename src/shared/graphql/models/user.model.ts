import { ObjectType, Field, ID } from '@nestjs/graphql'

import { Address } from './address.model'
import { ChatParticipant } from './chat-participant.model'
import { Item } from './item.model'
import { Message } from './message.model'
import { Payment } from './payment.model'
import { Rental } from './rental.model'
import { Review } from './review.model'

@ObjectType()
export class User {
	@Field(() => ID)
	id: string

	@Field()
	email: string

	@Field({ nullable: true })
	name: string

	@Field({ nullable: true })
	phone: string

	@Field({ nullable: true })
	avatarUrl: string

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date

	// Relations
	@Field(() => [Item], { nullable: 'itemsAndList' })
	items: Item[]

	@Field(() => [Rental], { nullable: 'itemsAndList' })
	rentals: Rental[]

	@Field(() => [Review], { nullable: 'itemsAndList' })
	reviews: Review[]

	@Field(() => [Payment], { nullable: 'itemsAndList' })
	payments: Payment[]

	@Field(() => [Address], { nullable: 'itemsAndList' })
	addresses: Address[]

	@Field(() => [Message], { nullable: 'itemsAndList' })
	messages: Message[]

	@Field(() => [ChatParticipant], { nullable: 'itemsAndList' })
	chats: ChatParticipant[]
}
