import { IsEnum, IsOptional, IsString, IsUUID, IsDateString } from 'class-validator';
import { TransactionStatus } from '@prisma/client';

export class UpdateZakatTransactionDto {
  @IsOptional()
  @IsEnum(TransactionStatus)
  status?: TransactionStatus;

  @IsOptional()
  @IsString()
  buktiPembayaran?: string;

  @IsOptional()
  @IsString()
  midtransId?: string;

  @IsOptional()
  @IsDateString()
  tanggalPembayaran?: string;
}

export class ZakatTransactionQueryDto {
  @IsOptional()
  @IsEnum(TransactionStatus)
  status?: TransactionStatus;

  @IsOptional()
  @IsString()
  startDate?: string;

  @IsOptional()
  @IsString()
  endDate?: string;

  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  limit?: string;
}