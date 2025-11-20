import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
    eslint.configs.recommended,
    {
        ignores: ['dist', 'node_modules', '.storybook', 'storybook-static', 'eslint.config.js', 'vite.config.ts'],
    },
    // Non-story TypeScript files (with type-checking)
    {
        files: ['src/**/*.{ts,tsx}'],
        ignores: ['**/*.stories.tsx'],
        extends: [...tseslint.configs.recommendedTypeChecked],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            // Custom rules
            'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
            'react/prop-types': 'off', // Using TypeScript for prop validation
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    // Storybook files with lighter linting (no type-checking)
    {
        files: ['**/*.stories.tsx'],
        extends: [...tseslint.configs.recommended],
        plugins: {
            react,
            'react-hooks': reactHooks,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    }
);
