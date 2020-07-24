import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL);

export async function close() {
  await sql.end({ timeout: 5 });
}

export default sql;
