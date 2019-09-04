const ConsumerService = require('../ConsumerService');
const ToDo = require('../ToDo');
const { Matchers } = require('@pact-foundation/pact');

describe('The API',()=>{
  let provider = global.provider;

  describe('first interaction',()=>{
    const consumerService = new ConsumerService(`http://${provider.server.options.host}`, provider.server.options.port);
    beforeEach(() => {
      return provider.addInteraction({
        uponReceiving: 'some request',
        withRequest: {
          method:  'POST',
          path:  '/todo',
          headers: {
            Accept: 'application/json'
          },
          body: new ToDo('Superman', 'first todo')
        },
      willRespondWith: {
        status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: Matchers.somethingLike(
                        new ToDo('Superman', 'first todo', 42))
      },
      });
  });

  it('Tests something', (done) => {
      console.log('test');
      return consumerService.createToDo(new ToDo('Superman', 'first todo'))
      .then((reseponse) => {
        done();
      });
    });
  });
});
