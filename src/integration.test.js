import moxios from 'moxios';
import { testStore } from './utils'
import { fetchPosts } from './actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  test('Store is updated correctly', () => {
    const expectedState = [{
      title: 'Example title 1',
      body: 'Some text'
    },{
      title: 'Example title 2',
      body: 'Some text'
    },{
      title: 'Example title 1',
      body: 'Some text'
    }];

    const store = testStore();
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });
});
