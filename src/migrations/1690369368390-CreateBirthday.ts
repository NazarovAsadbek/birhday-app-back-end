import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBirthday1690369368390 implements MigrationInterface {
    name = 'CreateBirthday1690369368390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "birthday" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL DEFAULT '', "lastname" character varying NOT NULL DEFAULT '', "dateOfBirth" TIMESTAMP NOT NULL, "jubileeDate" character varying NOT NULL DEFAULT '', "telegramUsername" character varying NOT NULL DEFAULT '', "telegramId" integer NOT NULL DEFAULT '0', "phone" character varying NOT NULL DEFAULT '', "congratulationsText" character varying NOT NULL DEFAULT '', "kinshipGroup" character varying NOT NULL DEFAULT '', "remainingDaysUntilBirthday" integer NOT NULL DEFAULT '0', "age" integer NOT NULL DEFAULT '0', "nextAge" integer NOT NULL DEFAULT '0', "zodiac" character varying NOT NULL DEFAULT '', "dayOfWeekWasBorn" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_7a6b26049417fc6bd75d29588ec" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "birthday"`);
    }

}
