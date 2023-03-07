import { Pool } from '@neondatabase/serverless';

export default {
  async fetch(req, env, ctx) {
    const pool = new Pool({ connectionString: env.DATABASE_URL });
    const { rows: [{ now }] } = await pool.query('SELECT now()');
    ctx.waitUntil(pool.end());
    return new Response(now);
  }
}
