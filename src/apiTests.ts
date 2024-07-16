import {server} from "./mocks/node.mjs";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())