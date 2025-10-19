import { ObjectType, Field, ID } from '@nestjs/graphql'

import { Chat } from './chat.model'
import { User } from './user.model'

@ObjectType()
export class Message {
	@Field(() => ID)
	id: string

	@Field()
	text: string

	@Field()
	createdAt: Date

	@Field()
	read: boolean

	@Field(() => Chat)
	chat: Chat

	@Field(() => User)
	sender: User
}
