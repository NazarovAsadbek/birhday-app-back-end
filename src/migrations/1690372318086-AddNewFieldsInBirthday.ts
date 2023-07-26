import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNewFieldsInBirthday1690372318086 implements MigrationInterface {
    name = 'AddNewFieldsInBirthday1690372318086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dateOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "jubileeDate"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dayOfBirth" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "monthOfBirth" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "yearOfBirth" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dayOfJubilee" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "monthOfJubilee" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "yearOfJubilee" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "yearOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "monthOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dayOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "yearOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "monthOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dayOfBirth"`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "jubileeDate" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dateOfBirth" TIMESTAMP NOT NULL`);
    }

}
