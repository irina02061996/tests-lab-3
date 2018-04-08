
import {browser, by, element, protractor} from 'protractor';

describe('angular-project App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', function () {
        expect(element(by.css('app-root h1')).getText()).toEqual('Менеджер машин');
    });

    it('test1', () => {

        element.all(by.css('.list-group li')).then(function (items) {
            expect(items.length).toBe(3);
        });

        element.all(by.css('.list-group li button')).then(function (items) {
            expect(items.length).toBe(3);
            items[0].click();
        });

        element.all(by.css('.cars li')).then(function (items) {
            expect(items.length).toBe(3);

            const color = items[0].getText();
            expect(color).toBe('Цвет: red');

            const description = items[1].getText();
            expect(description).toBe('Описание: Отличная машина');

            const year = items[2].getText();
            expect(year).toBe('Год: 2015');
        });
    });

    it('test2', () => {

        element.all(by.css('.list-group li button')).then(function (items) {
            expect(items.length).toBe(3);
            items[0].click();
        });

        const btnUpdate = element(by.id('btn-update'));
        btnUpdate.click();

        element.all(by.css('form .form-group')).then(formGroups => {
            expect(formGroups.length).toBe(3);

            element.all(by.css('.description')).all(by.css('.form-control')).then(controls => {
                expect(controls.length).toBe(1);
                controls[0].clear();
                controls[0].sendKeys('Отличная машина');
            });

            element.all(by.css('.year')).all(by.css('.form-control')).then(controls => {
                expect(controls.length).toBe(1);
                controls[0].clear();
                controls[0].sendKeys('2015');
            });
        });

        const btnSubmit = element(by.id('btn-submit'));
        btnSubmit.click();
    });


    it('test3', () => {

        element.all(by.css('.list-group li button')).then(function (items) {
            expect(items.length).toBe(3);
            items[0].click();
        });

        const btnUpdate = element(by.id('btn-update'));
        btnUpdate.click();

        element.all(by.css('form .form-group')).then(formGroups => {
            expect(formGroups.length).toBe(3);

            element.all(by.css('.description')).all(by.css('.form-control')).then(controls => {
                expect(controls.length).toBe(1);
                controls[0].clear();
            });

            element.all(by.css('.year')).all(by.css('.form-control')).then(controls => {
                expect(controls.length).toBe(1);
                controls[0].clear();
            });
        });

        const btnSubmit = element(by.id('btn-submit'));
        btnSubmit.click();

        const messageBlock = element(by.css('.message-block'));
        expect(browser.isElementPresent(messageBlock)).toBe(true);
    });
});

