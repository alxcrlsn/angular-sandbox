import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestUdemyAppAppComponent } from '../app/test-udemy-app.component';

beforeEachProviders(() => [TestUdemyAppAppComponent]);

describe('App: TestUdemyApp', () => {
  it('should create the app',
      inject([TestUdemyAppAppComponent], (app: TestUdemyAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-udemy-app works!\'',
      inject([TestUdemyAppAppComponent], (app: TestUdemyAppAppComponent) => {
    expect(app.title).toEqual('test-udemy-app works!');
  }));
});
