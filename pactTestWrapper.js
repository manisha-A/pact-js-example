jasmine.DEFAULT_TIMEOUT_INTERVAL=20000;

beforeAll(() => global.provider.setup());
beforeEach(() => global.provider.verify());
afterAll(() => global.provider.finalize());
