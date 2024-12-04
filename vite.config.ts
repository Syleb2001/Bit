import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs-extra';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'db-middleware',
      configureServer(server) {
        server.middlewares.use('/api/saveDb', async (req, res) => {
          if (req.method === 'POST') {
            try {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              
              req.on('end', () => {
                const data = JSON.parse(body);
                
                // Always write to both locations to keep them in sync
                fs.ensureDirSync('public/data');
                fs.ensureDirSync('dist/data');
                
                fs.writeFileSync('public/data/db.json', JSON.stringify(data, null, 2));
                fs.writeFileSync('dist/data/db.json', JSON.stringify(data, null, 2));
                
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              });
            } catch (error) {
              console.error('Error saving database:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Failed to save database' }));
            }
          } else {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          }
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use('/api/saveDb', async (req, res) => {
          if (req.method === 'POST') {
            try {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              
              req.on('end', () => {
                const data = JSON.parse(body);
                
                // In preview, write only to dist
                fs.ensureDirSync('dist/data');
                fs.writeFileSync('dist/data/db.json', JSON.stringify(data, null, 2));
                
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              });
            } catch (error) {
              console.error('Error saving database:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Failed to save database' }));
            }
          } else {
            res.statusCode = 405;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          }
        });
      },
      buildStart() {
        // Copy db.json to dist/data during build
        fs.ensureDirSync('dist/data');
        if (fs.existsSync('public/data/db.json')) {
          fs.copyFileSync('public/data/db.json', 'dist/data/db.json');
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 4444,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 4444
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4444
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
});