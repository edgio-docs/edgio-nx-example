const createBuilder =
  require('@layer0/next/build/createBuildEntryPoint').default;
const { join } = require('path');
const srcDir = require('./nextSrcDir');

module.exports = createBuilder({
  srcDir,
  distDir: join('dist', 'apps', 'layer0-nx-next-app', '.next'),
  buildCommand: 'npm run build',
});
