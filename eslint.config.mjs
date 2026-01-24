import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // semi: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
      'no-unused-expressions': 'error',
      quotes: ['error', 'single'],
      'no-multi-spaces': 'error',
      eqeqeq: 'error',
      complexity: ['error', 10],
      'prettier/prettier': ['off', { endOfLine: 'auto' }],
      'linebreak-style': ['error', 'unix'],
      'object-curly-spacing': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'comma-dangle': [2, 'always-multiline'],
      'no-duplicate-imports': ['error', { includeExports: true }],
      '@typescript-eslint/no-explicit-any': ['error'],
      'nonblock-statement-body-position': ['error', 'beside'],
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'components/ui/**',
  ]),
]);

export default eslintConfig;
