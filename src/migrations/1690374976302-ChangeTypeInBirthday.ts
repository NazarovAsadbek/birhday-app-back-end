import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTypeInBirthday1690374976302 implements MigrationInterface {
    name = 'ChangeTypeInBirthday1690374976302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dayOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dayOfBirth" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "monthOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "monthOfBirth" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "yearOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "yearOfBirth" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dayOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dayOfJubilee" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "monthOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "monthOfJubilee" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "yearOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "yearOfJubilee" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "yearOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "yearOfJubilee" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "monthOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "monthOfJubilee" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dayOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dayOfJubilee" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "yearOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "yearOfBirth" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "monthOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "monthOfBirth" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dayOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dayOfBirth" character varying NOT NULL DEFAULT ''`);
    }

}
