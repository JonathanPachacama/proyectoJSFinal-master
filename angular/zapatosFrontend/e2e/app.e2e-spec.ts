import { ZapatosFrontendPage } from './app.po';

describe('zapatos-frontend App', () => {
  let page: ZapatosFrontendPage;

  beforeEach(() => {
    page = new ZapatosFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
