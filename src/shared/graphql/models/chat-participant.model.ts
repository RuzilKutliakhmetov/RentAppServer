import { ObjectType, Field, ID } from '@nestjs/graphql'

import { Chat } from './chat.model'
import { User } from './user.model'

@ObjectType()
export class ChatParticipant {
	@Field(() => ID)
	id: string

	@Field(() => Chat)
	chat: Chat

	@Field(() => User)
	user: User
}
