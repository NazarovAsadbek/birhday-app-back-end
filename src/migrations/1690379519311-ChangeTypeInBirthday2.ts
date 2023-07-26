import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTypeInBirthday21690379519311 implements MigrationInterface {
    name = 'ChangeTypeInBirthday21690379519311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" ADD "remainingDaysUntilJubilee" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD "dayOfWeekOfJubilee" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "dayOfWeekOfJubilee"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "remainingDaysUntilJubilee"`);
    }

}
