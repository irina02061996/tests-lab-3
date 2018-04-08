import { browser, by, element } from 'protractor';

export class CarPage {
navigateTo() {
  return browser.get('/:id');
}
}
