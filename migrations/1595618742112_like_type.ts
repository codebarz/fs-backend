/* eslint-disable @typescript-eslint/camelcase */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createType('like_type', ['Post', 'Comment']);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropType('like_type');
}
