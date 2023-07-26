import { Injectable } from '@nestjs/common';
import { UserEntity } from '@app/user/user.entity';
import { CreateBirthdayDto } from '@app/birthdays/dto/createBirthday.dto';
import { BirthdayEntity } from '@app/birthdays/birthday.entity';
import { Months } from '@app/birthdays/types/months.type';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BirthdayResponseInterface } from '@app/birthdays/types/birthdayResponse.interface';

@Injectable()
export class BirthdayService {
  constructor(
    @InjectRepository(BirthdayEntity)
    private readonly birthdayRepository: Repository<BirthdayEntity>,
  ) {}

  async create(
    currentUser: UserEntity,
    createBirthdayDto: CreateBirthdayDto,
  ): Promise<BirthdayEntity> {
    const birthday: BirthdayEntity = new BirthdayEntity();
    Object.assign(birthday, createBirthdayDto);

    birthday.author = currentUser;
    birthday.age = this.calculateAge(createBirthdayDto.yearOfBirth);
    birthday.nextAge = this.calculateNextAge(createBirthdayDto.yearOfBirth);
    birthday.zodiac = this.getZodiacSign(
      createBirthdayDto.dayOfBirth,
      createBirthdayDto.monthOfBirth,
    );
    birthday.dayOfWeekWasBorn = this.getDayOfWeek(
      createBirthdayDto.yearOfBirth,
      createBirthdayDto.monthOfBirth,
      createBirthdayDto.dayOfBirth,
    );
    birthday.remainingDaysUntilBirthday = this.daysUntilBirthday(
      createBirthdayDto.yearOfBirth,
      createBirthdayDto.monthOfBirth,
      createBirthdayDto.dayOfBirth,
    );
    birthday.dayOfWeekOfJubilee = this.getDayOfWeek(
      createBirthdayDto.yearOfJubilee,
      createBirthdayDto.monthOfJubilee,
      createBirthdayDto.dayOfJubilee,
    );
    birthday.remainingDaysUntilJubilee = this.daysLeftBefore(
      createBirthdayDto.yearOfJubilee,
      createBirthdayDto.monthOfJubilee,
      createBirthdayDto.dayOfJubilee,
    );

    return await this.birthdayRepository.save(birthday);
  }

  calculateAge(year: number): number {
    return new Date().getFullYear() - year;
  }

  calculateNextAge(year: number): number {
    return new Date().getFullYear() - year + 1;
  }

  getZodiacSign(day: number, month: number): string {
    const months: Months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };

    const zodiacSigns: { [key: string]: string } = {
      Aries: 'March 21 - April 19',
      Taurus: 'April 20 - May 20',
      Gemini: 'May 21 - June 20',
      Cancer: 'June 21 - July 22',
      Leo: 'July 23 - August 22',
      Virgo: 'August 23 - September 22',
      Libra: 'September 23 - October 22',
      Scorpio: 'October 23 - November 21',
      Sagittarius: 'November 22 - December 21',
      Capricorn: 'December 22 - January 19',
      Aquarius: 'January 20 - February 18',
      Pisces: 'February 19 - March 20',
    };

    const zodiacSignKeys: string[] = Object.keys(zodiacSigns);

    for (let i = 0; i < zodiacSignKeys.length; i++) {
      const sign = zodiacSignKeys[i];
      const dateRange = zodiacSigns[sign];
      const [startMonthStr, startDay] = dateRange.split(' - ')[0].split(' ');
      const [endMonthStr, endDay] = dateRange.split(' - ')[1].split(' ');

      const startMonth = months[startMonthStr];
      const endMonth = months[endMonthStr];

      if (
        (month === startMonth && day >= parseInt(startDay)) ||
        (month === endMonth && day <= parseInt(endDay))
      ) {
        return sign;
      }
    }

    // If the date doesn't fall into any zodiac range, return an empty string or null
    return '';
  }

  getDayOfWeek(year: number, month: number, day: number): string {
    if (month < 1 || month > 12 || day < 1 || day > 31) {
      throw new Error('Invalid date. Please provide a valid date.');
    }

    if (month === 2 && day > 29) {
      throw new Error('Invalid date. February cannot have more than 29 days.');
    }
    // Adjust month and year for January and February (Zeller's algorithm requirement)
    if (month < 3) {
      month += 12;
      year--;
    }

    // Zeller's Congruence formula
    const k = year % 100;
    const j = Math.floor(year / 100);
    const dayIndex =
      (day +
        Math.floor((13 * (month + 1)) / 5) +
        k +
        Math.floor(k / 4) +
        Math.floor(j / 4) +
        5 * j) %
      7;

    const daysOfWeek = [
      'saturday',
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
    ];
    return daysOfWeek[dayIndex];
  }

  daysUntilBirthday(year: number, month: number, day: number): number {
    const date = `${year}-${month}-${day}`;
    const now: Date = new Date();
    const currentYear: number = now.getFullYear();
    const birthDate: Date = new Date(date);
    birthDate.setFullYear(currentYear);

    // If the birthday has already occurred this year, set the birth year to the next year
    if (birthDate < now) {
      birthDate.setFullYear(currentYear + 1);
    }

    // Calculate the time difference in milliseconds between now and the next birthday
    const timeDifferenceMs = birthDate.getTime() - now.getTime();

    // Convert milliseconds to days
    return Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));
  }

  daysLeftBefore(year: number, month: number, day: number): number {
    const date = new Date(`${year}-${month}-${day}`);
    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference between the current date and the target date
    const timeDifference = date.getTime() - currentDate.getTime();

    // Calculate the number of days left
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
  }

  buildBirthdayResponse(birthday: BirthdayEntity): BirthdayResponseInterface {
    return {
      birthday,
    };
  }
}
