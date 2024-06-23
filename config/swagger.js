const dotEnv = require('dotenv');
dotEnv.config();

const { APPLICATION } = require('./config');

const SWAGGER = {
  DEFINITION: version => ({
    swagger: '2.0',
    components: {},
    info: {
      title: `${APPLICATION.APP_NAME} API ${version}`,
      version: require('../package.json').version,
      description: 'All routes of nodejs-backend service',
    },
    host: APPLICATION.APP_URL,
    basePath: `/${version}`,
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'authorization',
        in: 'header',
      },
    },
    security: [{ bearerAuth: [] }],
  }),

  APIS: {
    V1: [
      'authentication',
      'employee',
    ],
  }
};

module.exports = {
  SWAGGER,
};