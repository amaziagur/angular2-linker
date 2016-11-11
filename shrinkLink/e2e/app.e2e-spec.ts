import { ShrinkLinkPage } from './app.po';

describe('shrink-link App', function() {
  let page: ShrinkLinkPage;

  beforeEach(() => {
    page = new ShrinkLinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
