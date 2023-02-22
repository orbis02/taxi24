"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedConductoresTable1614112212465 = void 0;
class SeedConductoresTable1614112212465 {
    async up(queryRunner) {
        await queryRunner.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL
        );
      `);
    }
    async down(queryRunner) {
    }
}
exports.SeedConductoresTable1614112212465 = SeedConductoresTable1614112212465;
//# sourceMappingURL=1677003792630-migrations.js.map