const path = require('path');
const { Pact } = require('@pact-foundation/pact');

global.port=1234;
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  cors: true,
  pactfileWriteMode: 'update',
  consumer: 'TestConsumer',
  provider: 'TestProvider',
  host: '127.0.0.1'
});
