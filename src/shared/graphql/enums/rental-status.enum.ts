import { registerEnumType } from '@nestjs/graphql'

export enum RentalStatus {
	PENDING = 'PENDING',
	ACTIVE = 'ACTIVE',
	COMPLETED = 'COMPLETED',
	CANCELLED = 'CANCELLED'
}

registerEnumType(RentalStatus, { name: 'RentalStatus' })
