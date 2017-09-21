import { AAssignment71Page } from './app.po';

describe('a-assignment71 App', function() {
  let page: AAssignment71Page;

  beforeEach(() => {
    page = new AAssignment71Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
