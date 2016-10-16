import { DevwrightPage } from './app.po';

describe('devwright App', function() {
  let page: DevwrightPage;

  beforeEach(() => {
    page = new DevwrightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
