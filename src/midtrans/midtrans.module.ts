// // src/midtrans/midtrans.module.ts
// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// // import { MidtransService } from './midtrans.service';
// // import { MidtransController } from './midtrans.controller';
// import { PrismaService } from '../prisma.service';

// @Module({
//   imports: [ConfigModule],
//   controllers: [],
//   providers: [MidtransService, PrismaService],
//   exports: [MidtransService],
// })
// export class MidtransModule {}

// // src/config/midtrans.config.ts
// import { registerAs } from '@nestjs/config';

// export default registerAs('midtrans', () => ({
//   serverKey: process.env.MIDTRANS_SERVER_KEY,
//   clientKey: process.env.MIDTRANS_CLIENT_KEY,
//   isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
//   merchantId: process.env.MIDTRANS_MERCHANT_ID,
// }));