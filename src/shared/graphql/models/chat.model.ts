import { ObjectType, Field, ID } from '@nestjs/graphql'

import { ChatParticipant } from './chat-participant.model'
import { Message } from './message.model'
import { Rental } from './rental.model'

@ObjectType()
export class Chat {
	@Field(() => ID)
	id: string

	@Field()
	createdAt: Date

	@Field(() => Rental, { nullable: true })
	rental: Rental

	@Field(() => [ChatParticipant], { nullable: 'itemsAndList' })
	participants: ChatParticipant[]

	@Field(() => [Message], { nullable: 'itemsAndList' })
	messages: Message[]
}
