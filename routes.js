// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router');
const { default: NextRoutes } = require('@layer0/next/router/NextRoutes');

module.exports = new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js');
  })
  .use(new NextRoutes('apps/next-app'));
