import { Fabric.EhrPage } from './app.po';

describe('fabric.ehr App', () => {
  let page: Fabric.EhrPage;

  beforeEach(() => {
    page = new Fabric.EhrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
