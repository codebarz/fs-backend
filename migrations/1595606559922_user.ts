/* eslint-disable @typescript-eslint/camelcase */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('users', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()'),
    },
    user_name: { type: 'VARCHAR(250)', notNull: true },
    email: { type: 'VARCHAR(250)', notNull: true },
    password: { type: 'VARCHAR(250)', notNull: true },
    avatar_url: { type: 'VARCHAR(250)', notNull: true },
    created_at: {
      type: 'timestamptz',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamptz',
    },
    deleted_at: {
      type: 'timestamptz',
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('user');
}
