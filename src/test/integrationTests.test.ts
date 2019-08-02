import moxios from 'moxios';
import { testStore } from "../../Utils";
import { fetchUsers } from "../actions/user";
import {User} from "../types/User";

describe('fetchUsers action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('store is updated correctly', () => {
    const data: User[] = [{name: "abc", email: "abc@gmail.com", password: "sadfs"},
                           {name: "xyz", email: "xyz@gmail.com", password: "sadfs"}]

    const users: any = {
      "data": data
    }

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: users
      });
    });

    store.dispatch(fetchUsers()).then(() => {
      const newState = store.getState();
      expect(newState.users).toBe(users["data"]);
    });
    // const newState = await store.getState();
    // console.log(newState);
    // expect(newState.users).toBe(users);

  });

});