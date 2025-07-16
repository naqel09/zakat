import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ZakatModule } from './zakat/zakat.module';
// import { MidtransController } from './midtrans/midtrans.controller';
// import { MidtransService } from './midtrans/midtrans.service';
// import { MidtransModule } from './midtrans/midtrans.module';

@Module({
  imports: [AuthModule, AdminModule, UserModule, ZakatModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
