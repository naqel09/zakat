import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, IsUUID, Min } from 'class-validator';
import { PaymentMethod, ZakatType } from '@prisma/client';

export class CreateZakatPaymentDto {
  @IsEnum(ZakatType)
  jenisZakat: ZakatType;

  @IsNumber()
  @IsPositive()
  @Min(1000)
  nominal: number;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @IsOptional()
  @IsString()
  catatan?: string;
}

export class ZakatPaymentResponseDto {
  id: string;
  jenisZakat: ZakatType;
  nominal: number;
  paymentMethod: PaymentMethod;
  status: string;
  paymentToken?: string;
  paymentUrl?: string;
  createdAt: Date;
}