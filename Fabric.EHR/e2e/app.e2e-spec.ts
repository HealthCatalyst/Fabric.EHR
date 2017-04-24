import { Fabric.EHRPage } from './app.po';

describe('fabric.ehr App', () => {
  let page: Fabric.EHRPage;

  beforeEach(() => {
    page = new Fabric.EHRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
