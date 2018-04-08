import {AppPage} from './page-objects/app.po';
import {by, element} from 'protractor';

describe('angular-project App', () => {
  let page: AppPage;

  const viewButton = element(by.id('btn-view'));

  // var firstNumber = element(by.model('first'));
  // var secondNumber = element(by.model('second'));
  //
  // var latestResult = element(by.binding('latest'));

  beforeEach(() => {
    page = new AppPage();
    page.navigateToHome();
  });

  it('should have a title', function() {
    expect(page.getTitleText()).toEqual('Менеджер машин');
  });

  it('should display title', () => {
    viewButton.click();

    // page.navigateToCar();
    // page.navigateToUpdateCar();
    //
    // expect(page.getTitleText()).toEqual('Менеджер машин');
  });
});
