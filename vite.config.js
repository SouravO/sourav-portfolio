import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'local-portfolio-api',
      configureServer(server) {
        // Server-only env; never expose these through VITE_ variables.
        Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
        server.middlewares.use('/api/chat', async (req, res) => {
          try {
            const { default: handler } = await import('./api/chat.js')
            let body = ''
            for await (const chunk of req) {
              body += chunk
              if (Buffer.byteLength(body) > 16000) {
                res.writeHead(413, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: 'Request too large.' }))
                return
              }
            }
            req.body = body ? JSON.parse(body) : {}
            await handler(req, res)
          } catch {
            if (!res.headersSent)
              res.writeHead(400, { 'Content-Type': 'application/json' })
            res.end(
              JSON.stringify({ error: 'Unable to process this request.' }),
            )
          }
        })
      },
    },
  ],
}))
