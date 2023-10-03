describe('Автотесты на форму логина и пароля', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible')
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })
})
   it('на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
   it('на проверку на негативный кейс авторизации:', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('123456');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
   it('негативный кейс c неавторизованным пользователем:', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('carafan@mail.ru');
        cy.get('#pass').type('123456');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
   it('негативный кейс авторизации c невалидными данными:', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('carafan');
        cy.get('#pass').type('123456');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
   it('проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })