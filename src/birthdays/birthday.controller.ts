import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { BirthdayService } from '@app/birthdays/birthday.service';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { User } from '@app/user/decorators/user.decorator';
import { UserEntity } from '@app/user/user.entity';
import { CreateBirthdayDto } from '@app/birthdays/dto/createBirthday.dto';
import { BirthdayResponseInterface } from '@app/birthdays/types/birthdayResponse.interface';
import { BirthdayEntity } from '@app/birthdays/birthday.entity';
import { BirthdaysResponseInterface } from '@app/birthdays/types/birthdaysResponse.interface';

@Controller('birthday')
export class BirthdayController {
  constructor(private readonly birthdayService: BirthdayService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  async create(
    @User() currentUser: UserEntity,
    @Body('birthday') createBirthdayDto: CreateBirthdayDto,
  ): Promise<BirthdayResponseInterface> {
    const birthday: BirthdayEntity = await this.birthdayService.create(
      currentUser,
      createBirthdayDto,
    );

    return this.birthdayService.buildBirthdayResponse(birthday);
  }

  @Get('get')
  @UseGuards(AuthGuard)
  async get(
    @User('id') currentUserId: number,
    @Query() query: any,
  ): Promise<BirthdaysResponseInterface> {
    return this.birthdayService.getBirthdayList(currentUserId, query);
  }
}
