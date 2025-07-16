// import { 
//   Controller, 
//   Get, 
//   Post, 
//   Body, 
//   Param, 
//   Query, 
//   UseGuards, 
//   HttpCode,
//   HttpStatus 
// } from '@nestjs/common';
// import { ZakatService } from './zakat.service';
// import { ZakatCalculationService } from './services/zakat-calculation.service';
// import { ZakatPaymentService } from './services/zakat-payment.service';
// import { ZakatTransactionService } from './services/zakat-transaction.service';
// import { UserJwtGuard } from '../guards/user-jwt.guard';
// import { User } from '../common/decorators/user.decorator';
// import { 
//   ZakatFitrahCalculationDto,
//   ZakatMaalCalculationDto,
//   ZakatPenghasilanCalculationDto,
//   ZakatEmasCalculationDto,
//   ZakatFidyahCalculationDto
// } from './dto/zakat-calculation.dto';
// import { CreateZakatPaymentDto } from './dto/zakat-payment.dto';
// import { ZakatTransactionQueryDto } from './dto/zakat-transaction.dto';
// import { ApiResponse } from '../common/interfaces/response.interface';
// import { ResponseUtil } from '../common/utils/response.util';

// @Controller('zakat')
// @UseGuards(UserJwtGuard)
// export class ZakatController {
//   constructor(
//     private readonly zakatService: ZakatService,
//     private readonly zakatCalculationService: ZakatCalculationService,
//     private readonly zakatPaymentService: ZakatPaymentService,
//     private readonly zakatTransactionService: ZakatTransactionService,
//   ) {}

//   // Calculator endpoints
//   @Post('calculate/fitrah')
//   @HttpCode(HttpStatus.OK)
//   async calculateFitrah(@Body() dto: ZakatFitrahCalculationDto): Promise<ApiResponse> {
//     const result = await this.zakatCalculationService.calculateZakatFitrah(dto);
//     return ResponseUtil.success('Kalkulasi zakat fitrah berhasil', result);
//   }

//   @Post('calculate/maal')
//   @HttpCode(HttpStatus.OK)
//   async calculateMaal(@Body() dto: ZakatMaalCalculationDto): Promise<ApiResponse> {
//     const result = await this.zakatCalculationService.calculateZakatMaal(dto);
//     return ResponseUtil.success('Kalkulasi zakat maal berhasil', result);
//   }

//   @Post('calculate/penghasilan')
//   @HttpCode(HttpStatus.OK)
//   async calculatePenghasilan(@Body() dto: ZakatPenghasilanCalculationDto): Promise<ApiResponse> {
//     const result = await this.zakatCalculationService.calculateZakatPenghasilan(dto);
//     return ResponseUtil.success('Kalkulasi zakat penghasilan berhasil', result);
//   }

//   @Post('calculate/emas')
//   @HttpCode(HttpStatus.OK)
//   async calculateEmas(@Body() dto: ZakatEmasCalculationDto): Promise<ApiResponse> {
//     const result = await this.zakatCalculationService.calculateZakatEmas(dto);
//     return ResponseUtil.success('Kalkulasi zakat emas berhasil', result);
//   }

//   @Post('calculate/fidyah')
//   @HttpCode(HttpStatus.OK)
//   async calculateFidyah(@Body() dto: ZakatFidyahCalculationDto): Promise<ApiResponse> {
//     const result = await this.zakatCalculationService.calculateZakatFidyah(dto);
//     return ResponseUtil.success('Kalkulasi fidyah berhasil', result);
//   }

//   // Payment endpoints
//   @Post('payment')
//   @HttpCode(HttpStatus.CREATED)
//   async createPayment(
//     @User('id') userId: string,
//     @Body() dto: CreateZakatPaymentDto
//   ): Promise<ApiResponse> {
//     const result = await this.zakatPaymentService.createPayment(userId, dto);
//     return ResponseUtil.success('Pembayaran berhasil dibuat', result);
//   }

//   // Transaction endpoints
//   @Get('transactions')
//   async getTransactions(
//     @User('id') userId: string,
//     @Query() query: ZakatTransactionQueryDto
//   ) {
//     const result = await this.zakatTransactionService.getUserTransactions(userId, query);
//     return result;
//   }

//   @Get('transactions/:id')
//   async getTransactionById(
//     @User('id') userId: string,
//     @Param('id') id: string
//   ): Promise<ApiResponse> {
//     const result = await this.zakatTransactionService.getTransactionById(id, userId);
//     return ResponseUtil.success('Transaksi berhasil diambil', result);
//   }

//   @Get('statistics')
//   async getStatistics(@User('id') userId: string): Promise<ApiResponse> {
//     const result = await this.zakatTransactionService.getTransactionStatistics(userId);
//     return ResponseUtil.success('Statistik berhasil diambil', result);
//   }

//   // Config endpoints
//   @Get('config')
//   async getZakatConfig(): Promise<ApiResponse> {
//     const result = await this.zakatService.getZakatConfig();
//     return ResponseUtil.success('Konfigurasi zakat berhasil diambil', result);
//   }
// }