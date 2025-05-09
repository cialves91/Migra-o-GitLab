Feature('Login');

Scenario('Login com sucesso', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/');
  I.waitForElement('#top_header', 10); 
  I.click('Login'); 
  I.waitForElement('#user', 15); 
  I.fillField('#user', 'cintia.alves.91@hotmail.com');  
  I.fillField('#password', '123456');  
  I.click('#btnLogin'); 
  I.waitForText('Login realizado', 10); 

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

I.amOnPage('http://automationpratice.com.br/')
I.click('Login')
I.waitForText('Login',10)
I.fillField('#user','cintia.alves.91@hotmail.com')
I.fillField('#password','')
I.click('#btnLogin')
I.waitForText('Senha inválida.',10)

}).tag('@sucesso')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
I.amOnPage('http://automationpratice.com.br/')
I.click('Login')
I.waitForText('Login',10)
I.fillField('#user','')
I.fillField('#password','123456')
I.click('#btnLogin')
I.waitForText('E-mail inválido.',10)

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
I.amOnPage('http://automationpratice.com.br/')
I.click('Login')
I.waitForText('Login',10)
I.fillField('#user','')
I.fillField('#password','123456')
I.click('#btnLogin')
I.waitForText('E-mail inválido.',10)

}).tag('@sucesso')
