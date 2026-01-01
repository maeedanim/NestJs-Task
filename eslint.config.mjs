// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  // eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // imports / unused
      'unused-imports/no-unused-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      // explicitness / types
 

      // core JS rules
      'prefer-const': 'error',
      'arrow-body-style': 'error',
      'block-scoped-var': 'off',
      'default-case-last': 'off',
      'default-param-last': 'off',
      'max-params': 'off',
      'no-else-return': 'off',
      'no-empty': 'error',
      'no-extra-semi': 'warn',
      'no-floating-decimal': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'off',
      'no-new-object': 'error',
      'no-param-reassign': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'prefer-template': 'error',
      'yoda': 'error',
      'eqeqeq': 'error',
      'no-console': 'off',
      'no-var': 'error',
      'no-undef': 'off',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-use-before-define': 'error',
      'max-classes-per-file': 'error',
    },
  },
);
