import {browser, by, element} from 'protractor';

export class AppPage {
  navigateToHome() {
    return browser.get('/');
  }

  navigateToCar() {
    return browser.get('/:id');
  }

  navigateToUpdateCar() {
    return browser.get('update/:id');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
