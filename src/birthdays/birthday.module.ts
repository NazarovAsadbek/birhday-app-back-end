import { Module } from '@nestjs/common';
import { BirthdayController } from '@app/birthdays/birthday.controller';
import { BirthdayService } from '@app/birthdays/birthday.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BirthdayEntity } from '@app/birthdays/birthday.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BirthdayEntity])],
  controllers: [BirthdayController],
  providers: [BirthdayService],
})
export class BirthdayModule {}
