import { TestUdemyAppPage } from './app.po';

describe('test-udemy-app App', function() {
  let page: TestUdemyAppPage;

  beforeEach(() => {
    page = new TestUdemyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('test-udemy-app works!');
  });
});
