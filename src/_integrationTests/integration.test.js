import moxios from 'moxios';
import {testStore} from './../../utils';
import {fetchPosts} from './../actions';

describe('fetch posts action', () => {
  beforeEach(()=> {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  })
  it('test store update', () => {
    const expectedState = [{ title: "test1", body: "some 1"},{ title: "test2", body: "some 2"},{ title: "test3", body: "some 3"}];
    const store = testStore();
    moxios.wait(()=>{
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status:200,
        response:expectedState
      })
    });
    return store.dispatch(fetchPosts()).then(()=>{
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    })
  })
});
