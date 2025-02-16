const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: ['./apps/admin/src/main.ts'], // Entry point for your Angular app
  bundle: true,
  outfile: 'dist/cjs/main.js', // customize path accordingly
  minify: true,
  sourcemap: true,
  external: ['@angular/core', '@angular/common', '@angular/compiler', '@angular/platform-browser', '@angular/platform-browser-dynamic', '@angular/router'], // Exclude Angular libraries to avoid bundling them
  format: 'cjs',                 // Transpile to CommonJS
  loader: {
    '.ts': 'ts', // Load TypeScript files
    '.html': 'text', // Load HTML files if you're using templates inline
    '.css': 'text', // Load CSS files if you're using styles inline
  },
  target: 'node14', // Specify the target to match Node.js version for proper compatibility
  define: {
    'process.env.NODE_ENV': '"production"', // Ensure environment variables are correctly set for production
  },
  plugins: [
    {
      name: 'angular-plugins',
      setup(build) {
        // If you need to customize the behavior of Angular-specific assets
        // This is where you would extend support for Angular-specific features, like lazy loading.
      },
    },
  ],
}).catch(() => process.exit(1));

