import { MigrationInterface, QueryRunner } from "typeorm";

export class dashboard1676151451390 implements MigrationInterface {
    name = 'dashboard1676151451390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(300) NOT NULL, "uid" character varying(300) NOT NULL, "pUid" character varying(300) NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."entry_action_enum" AS ENUM('0', '1', '3', '4')`);
        await queryRunner.query(`CREATE TABLE "entry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "action" "public"."entry_action_enum" NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "amount" bigint NOT NULL, "description" character varying(300) NOT NULL, "accountId" uuid, "toAssetIdId" uuid, "categoryId" uuid, CONSTRAINT "PK_a58c675c4c129a8e0f63d3676d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, "uid" character varying(300) NOT NULL, "is_trans_expense" boolean NOT NULL, "value" bigint NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "entry" ADD CONSTRAINT "FK_dc23c864c9270f1d5f0bf0dfea3" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entry" ADD CONSTRAINT "FK_8d5acf6fddf8495e3e32f322172" FOREIGN KEY ("toAssetIdId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "entry" ADD CONSTRAINT "FK_5e1c00d1bf0d7f449fbd257d3c8" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" DROP CONSTRAINT "FK_5e1c00d1bf0d7f449fbd257d3c8"`);
        await queryRunner.query(`ALTER TABLE "entry" DROP CONSTRAINT "FK_8d5acf6fddf8495e3e32f322172"`);
        await queryRunner.query(`ALTER TABLE "entry" DROP CONSTRAINT "FK_dc23c864c9270f1d5f0bf0dfea3"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "entry"`);
        await queryRunner.query(`DROP TYPE "public"."entry_action_enum"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
