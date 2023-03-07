// this file re-exports the request handler for Vercel Edge Functions
import handlers from '../now';

export default (req, ctx) => {
  const env = { DATABASE_URL: process.env.DATABASE_URL };
  return handlers.fetch(req, env, ctx);  // note: passing process.env straight through oddly doesn't work
}

export const config = {
  runtime: 'edge',
  regions: ['fra1'],  // fra1 = Frankfurt: pick the Vercel region nearest your Neon DB
};
