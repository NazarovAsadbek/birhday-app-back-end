import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationsBetweenBirthdayAndUser1690370984090 implements MigrationInterface {
    name = 'AddRelationsBetweenBirthdayAndUser1690370984090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "birthday" ADD CONSTRAINT "FK_d49d1ccedc3d97143def7077744" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "birthday" DROP CONSTRAINT "FK_d49d1ccedc3d97143def7077744"`);
        await queryRunner.query(`ALTER TABLE "birthday" DROP COLUMN "authorId"`);
    }

}
