export class TestUdemyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-udemy-app-app h1')).getText();
  }
}
