import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '@app/user/user.entity';

@Entity({ name: 'birthday' })
export class BirthdayEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  firstname: string;

  @Column({ default: '' })
  lastname: string;

  @Column({ default: 0 })
  dayOfBirth: number;

  @Column({ default: 0 })
  monthOfBirth: number;

  @Column({ default: 0 })
  yearOfBirth: number;

  @Column({ default: 0 })
  dayOfJubilee: number;

  @Column({ default: 0 })
  monthOfJubilee: number;

  @Column({ default: 0 })
  yearOfJubilee: number;

  @Column({ default: '' })
  telegramUsername: string;

  @Column({ default: 0 })
  telegramId: number;

  @Column({ default: '' })
  phone: string;

  @Column({ default: '' })
  congratulationsText: string;

  @Column({ default: '' })
  kinshipGroup: string;

  @Column({ default: 0 })
  remainingDaysUntilBirthday: number;

  @Column({ default: 0 })
  remainingDaysUntilJubilee: number;

  @Column({ default: 0 })
  age: number;

  @Column({ default: 0 })
  nextAge: number;

  @Column({ default: '' })
  zodiac: string;

  @Column({ default: '' })
  dayOfWeekWasBorn: string;

  @Column({ default: '' })
  dayOfWeekOfJubilee: string;

  @ManyToOne(() => UserEntity, (user) => user.birthdays, { eager: true })
  author: UserEntity;
}
