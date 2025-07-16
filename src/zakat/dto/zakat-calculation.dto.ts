import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, Min } from 'class-validator';
import { ZakatType } from '@prisma/client';

export class ZakatCalculationDto {
    @IsEnum(ZakatType)
    jenisZakat: ZakatType;

    @IsNumber()
    @IsPositive()
    @Min(0)
    nominam: number;

    @IsOptional()
    @IsString()
    catatan?: string;
}

export class ZakatFitrahCalculationDto {
  @IsNumber()
  @IsPositive()
  @Min(1)
  jumlahJiwa: number;
}

export class ZakatMaalCalculationDto {
  @IsNumber()
  @IsPositive()
  @Min(0)
  totalHarta: number;

  @IsNumber()
  @IsPositive()
  @Min(0)
  totalHutang: number;
}

export class ZakatPenghasilanCalculationDto {
  @IsNumber()
  @IsPositive()
  @Min(0)
  penghasilanBruto: number;

  @IsNumber()
  @IsPositive()
  @Min(0)
  potonganWajib: number;

  @IsNumber()
  @IsPositive()
  @Min(0)
  kebutuhanPokok: number;
}

export class ZakatEmasCalculationDto {
  @IsNumber()
  @IsPositive()
  @Min(0)
  beratEmas: number; // dalam gram

  @IsNumber()
  @IsPositive()
  @Min(0)
  hargaEmasPerGram: number;
}

export class ZakatFidyahCalculationDto {
  @IsNumber()
  @IsPositive()
  @Min(1)
  jumlahHari: number;
}

export class ZakatCalculationResponseDto {
  jenisZakat: ZakatType;
  nominal: number;
  nisab: number;
  wajibZakat: boolean;
  detail: {
    perhitungan: string;
    keterangan: string;
  };
}