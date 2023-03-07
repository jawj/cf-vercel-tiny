// this file re-exports the request handler for Vercel Edge Functions
import handlers from '../now';

export default (req, ctx) => handlers.fetch(req, process.env, ctx);

export const config = {
  runtime: 'edge',
  regions: ['fra1'],  // fra1 = Frankfurt: pick the Vercel region nearest your Neon DB
};
