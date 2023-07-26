import { IsNotEmpty } from 'class-validator';

export class CreateBirthdayDto {
  @IsNotEmpty()
  readonly firstname: string;

  @IsNotEmpty()
  readonly congratulationsText: string;

  @IsNotEmpty()
  readonly kinshipGroup: string;

  readonly lastname?: string;

  readonly dayOfBirth?: number;

  readonly monthOfBirth?: number;

  readonly yearOfBirth?: number;

  readonly dayOfJubilee?: number;

  readonly monthOfJubilee?: number;

  readonly yearOfJubilee?: number;

  readonly telegramUsername?: string;

  readonly telegramId?: number;

  readonly phone?: string;
}
