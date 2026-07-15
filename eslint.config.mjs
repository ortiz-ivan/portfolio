// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default defineConfig(
	{ ignores: ['dist/**', '.astro/**', 'node_modules/**'] },
	eslint.configs.recommended,
	tseslint.configs.recommended,
	astro.configs['flat/recommended'],
	{
		files: ['scripts/**/*.mjs'],
		languageOptions: { globals: globals.node }
	},
	{
		rules: {
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
		}
	}
);
