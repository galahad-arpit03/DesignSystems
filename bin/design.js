#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const http = require('http');

const args = process.argv.slice(2);
const command = args[0];
const isLocal = args.includes('--local') || args.includes('-l');
const slug = args.find((arg, index) => index > 0 && args[index-1] === 'add');

if (command !== 'add' || !slug) {
  console.log('Usage: npx design.md@latest add <slug> [--local]');
  console.log('Options:');
  console.log('  --local, -l    Use localhost:3000 instead of production');
  process.exit(1);
}

// ANSI Color Codes
const RESET = '\x1b[0m';
const PINK = '\x1b[38;5;206m';
const WHITE = '\x1b[37m';
const GRAY = '\x1b[90m';
const GREEN = '\x1b[32m';
const BOLD = '\x1b[1m';

const asciiArt = `
  ${PINK}
  ██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗   
  ██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║   
  ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║   
  ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║   
  ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║██╗
  ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝${RESET}
`;

const baseUrl = isLocal 
  ? 'http://localhost:3000' 
  : (process.env.DESIGN_API_URL || 'https://designbyarpit.vercel.app');

const url = `${baseUrl}/api/design/${slug}`;

if (isLocal) {
  console.log(`${GRAY}Using local server: ${baseUrl}${RESET}`);
}

const client = url.startsWith('https') ? https : http;

client.get(url, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);

  res.on('end', () => {
    if (res.statusCode === 404) {
      try {
        const json = JSON.parse(body);
        console.error(`\n  ${PINK}Error:${RESET} Design system for "${slug}" not found.`);
        if (json.availableSlugs) {
          console.log(`\n  ${BOLD}Available designs:${RESET}\n  ${json.availableSlugs}\n`);
        }
      } catch (e) {
        console.error(`\n  ${PINK}Error:${RESET} Design system for "${slug}" not found.`);
      }
      process.exit(1);
    }

    if (res.statusCode !== 200) {
      console.error(`\n  ${PINK}Error:${RESET} Failed to fetch design. status: ${res.statusCode}`);
      process.exit(1);
    }

    try {
      fs.writeFileSync('Design.md', body);
      
      console.log(asciiArt);
      console.log(`  ${GREEN}✓${RESET} ${BOLD}Design inspired by ${slug} installed${RESET}`);
      console.log(`    ${GRAY}→ Design.md${RESET}\n`);
      console.log(`  ${GRAY}Tell your coding agent to use this file as${RESET}`);
      console.log(`  ${GRAY}reference before writing any UI.${RESET}`);
      console.log(`  ${GRAY}Customize it as your project evolves.${RESET}\n`);
      
    } catch (err) {
      console.error(`\n  ${PINK}Error:${RESET} ${err.message}`);
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error(`\n  ${PINK}Error:${RESET} ${err.message}`);
  process.exit(1);
});
