import OpenAI from 'openai'
import { Redis } from '@upstash/redis'
import { createChatHandler } from '../server/chat.js'

let redis
let openai
export default createChatHandler({
  env: process.env,
  getRedis: () =>
    (redis ||= new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
      retry: { retries: 0 },
      signal: () => AbortSignal.timeout(3000),
    })),
  getOpenAI: () =>
    (openai ||= new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      maxRetries: 0,
      timeout: 20000,
    })),
  getIP: (req) =>
    process.env.VERCEL === '1'
      ? String(req.headers['x-forwarded-for'] || '')
          .split(',')[0]
          .trim()
      : req.socket?.remoteAddress,
})
