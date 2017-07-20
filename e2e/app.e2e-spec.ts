import { codeProPage } from './app.po';

describe('codePro App', function() {
  let page: codeProPage;

  beforeEach(() => {
    page = new codeProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
