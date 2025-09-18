import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const ignoresConfig = [
  {
    name: 'custom/eslint/ignores',

    // the ignores option needs to be in a separate configuration object
    // replaces the .eslintignore file
    ignores: ['.next/', '.vscode/', 'public/'],
  },
];

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      'no-var': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  }),
  ...ignoresConfig,
  includeIgnoreFile(gitignorePath),
];

export default eslintConfig;
