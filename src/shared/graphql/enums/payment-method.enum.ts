import { registerEnumType } from '@nestjs/graphql'

export enum PaymentMethod {
	CARD = 'CARD',
	CASH = 'CASH',
	PAYPAL = 'PAYPAL',
	STRIPE = 'STRIPE'
}

registerEnumType(PaymentMethod, { name: 'PaymentMethod' })
