import { Query, Resolver } from '@nestjs/graphql'

import { User } from '@/src/shared/graphql/models/user.model'

import { AccountService } from './account.service'

@Resolver('Account')
export class AccountResolver {
	public constructor(private readonly accountService: AccountService) {}

	@Query(() => [User], { name: 'findAllUsers' })
	public async findAll() {
		return this.accountService.findAll()
	}
}
