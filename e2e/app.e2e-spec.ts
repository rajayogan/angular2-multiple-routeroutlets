import { RouteroutletsPage } from './app.po';

describe('routeroutlets App', function() {
  let page: RouteroutletsPage;

  beforeEach(() => {
    page = new RouteroutletsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
