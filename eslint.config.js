import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginInclusiveLanguage from 'eslint-plugin-inclusive-language'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'eslint-plugin-import': eslintPluginImport,
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      'inclusive-language': eslintPluginInclusiveLanguage
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'import/no-unresolved': 'off',
      'no-console': 'error',
      'no-unused-vars': 'off',
      'no-unsafe-optional-chaining': 'off',
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',
      'class-methods-use-this': 'off',
      'no-nested-ternary': 'off',
      'no-use-before-define': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      eqeqeq: 'off',
      'no-underscore-dangle': 'off',
      'no-unused-expressions': ['error', { allowTernary: true }],
      'prefer-destructuring': ['error', { array: false }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'eslint-plugin-import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            'index',
            'sibling',
            'parent'
          ],
          'newlines-between': 'never',
          named: true,
          warnOnUnassignedImports: true,
          alphabetize: { order: 'asc' }
        }
      ],
      'react/jsx-no-useless-fragment': 'warn',
      'prettier/prettier': 'warn',
      'no-duplicate-imports': 'warn',
      'react/no-array-index-key': 'warn',
      'no-unneeded-ternary': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-duplicate-type-constituents': 'warn',
      'no-shadow': ['error', { hoist: 'all' }],
      'inclusive-language/use-inclusive-words': 'error',
      'react/boolean-prop-naming': [
        'error',
        { propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'] }
      ],
      'no-lonely-if': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      radix: 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow' // if you want to allow _parameter
        }
      ],
      '@typescript-eslint/array-type': 'warn',
      'func-names': ['error', 'always'],
      camelcase: ['error', { properties: 'never' }],
      '@typescript-eslint/no-var-requires': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      '@typescript-eslint/triple-slash-reference': 'error',
      'no-alert': 'error',
      'max-params': ['error', 4]
    },
  },
)
