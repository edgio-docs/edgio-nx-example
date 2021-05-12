// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { withLayer0, withServiceWorker } = require('@layer0/next/config');
module.exports = withLayer0(withServiceWorker(withNx({})));
