#!/usr/bin/env node
import { cpSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
mkdirSync(join(dist, 'api'), { recursive: true });
if (process.env.COPY_SQL === '1') mkdirSync(join(dist, 'sql'), { recursive: true });
cpSync(join(root, 'public/api'), join(dist, 'api'), { recursive: true });
if (process.env.COPY_SQL === '1') cpSync(join(root, 'sql'), join(dist, 'sql'), { recursive: true });
console.log('OK: sql/ et public/api/ copiés dans dist/');
