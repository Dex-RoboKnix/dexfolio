import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SRC = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const MARKER = '/*__MOF_' + 'DATA__*/null';

function fakeVault(builder) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'folio-'));
  const dot = path.join(root, 'dex-vault', '.dex');
  fs.mkdirSync(path.join(dot), { recursive: true });
  fs.mkdirSync(path.join(root, 'dex-vault', '03_spine'), { recursive: true });
  fs.writeFileSync(path.join(root, 'dex-vault', '00_index.md'), '# Home\n');
  fs.writeFileSync(path.join(root, 'dex-vault', '03_spine', 'L1_values.md'), '# L1 Values\nFELT-UNIQUE-TEXT\n');
  for (const f of ['build_folio.mjs', 'build_folio.py', 'dex-folio.template.html']) fs.copyFileSync(path.join(SRC, f), path.join(dot, f));
  return { root, dot, script: path.join(dot, builder) };
}

test('node builder writes Folio with data marker replaced', () => {
  const v = fakeVault('build_folio.mjs');
  const r = spawnSync(process.execPath, [v.script], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  const html = fs.readFileSync(path.join(v.root, 'dex-vault', 'dex-folio.html'), 'utf8');
  assert.ok(!html.includes(MARKER));
  assert.ok(html.includes('FELT-UNIQUE-TEXT'));
  assert.ok(fs.existsSync(path.join(v.dot, 'snapshot.json')));
  const c = spawnSync(process.execPath, [v.script, '--changes'], { encoding: 'utf8' });
  assert.equal(c.status, 0, c.stderr);
  assert.match(c.stdout, /Changes since the snapshot/);
});

const py = ['python3', 'python'].find(p => spawnSync(p, ['--version']).status === 0);
test('python builder matches', { skip: py ? false : 'python not on PATH' }, () => {
  const v = fakeVault('build_folio.py');
  const r = spawnSync(py, [v.script], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  const html = fs.readFileSync(path.join(v.root, 'dex-vault', 'dex-folio.html'), 'utf8');
  assert.ok(!html.includes(MARKER));
  assert.ok(html.includes('FELT-UNIQUE-TEXT'));
  const c = spawnSync(py, [v.script, '--changes'], { encoding: 'utf8' });
  assert.equal(c.status, 0, c.stderr);
});
