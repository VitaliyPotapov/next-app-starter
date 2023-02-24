const path = require('path');

// See: https://nextjs.org/docs/basic-features/eslint#lint-staged
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  // See: https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments
  'src/**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write --ignore-unknown'],
  '!(**/*.{js,jsx,ts,tsx})': 'prettier --write --ignore-unknown',
};
