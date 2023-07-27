import { BirthdayEntity } from '@app/birthdays/birthday.entity';

export interface BirthdaysResponseInterface {
  birthdaysList: { [key: string]: BirthdayEntity[] } | BirthdayEntity[];
  birthdayCount: number;
}
