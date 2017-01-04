import { browser, by, element, ProtractorBy } from 'protractor';

describe('App', () => {


  beforeEach(() => {
    browser.get('/');
  });



  it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'Angular2 Webpack Starter by @gdi2290 from @AngularClass';
    expect(subject).toEqual(result);
  });

  it('should have sign in button', () => {
    let btLogin = element(by.id('btsignin'));
    btLogin.isDisplayed().then((v) => {
      expect(v).toBeTruthy();
    })

  })

  it('should login and logout without problems', () => {
    let modal = element(by.id('modalpopup'));
    let btLogin = element(by.id('btsignin'));
    let btlogout = element(by.id('btlogout'));
    let companyName = element(by.id('companyName'));
    let password = element(by.id('password'));
    let username = element(by.id('username'));
    let msgloggedin = element(by.id('msgloggedin'));
    let submit = modal.all(by.cssContainingText('button', 'sign in')).get(0);
    btLogin.click().then(() => {
      return modal.isDisplayed()
    }).then(v => {
      expect(v).toBeTruthy();
      return companyName.sendKeys('111')
    }).then(() => {
      return username.sendKeys('222')
    }).then(() => {
      return password.sendKeys('333')
    }).then(() => {
      return submit.click();
    }).then(() => {
      return browser.sleep(1000);
    }).then(() => {
      return browser.getCurrentUrl()
    }).then((url) => {
      expect(url).toContain('/loggedin');
      return msgloggedin.getText();
    }).then( msgtext =>{
      expect(msgtext).toContain('You are logged in')
      return btlogout.click();
    }).then(() => {
      return browser.getCurrentUrl()
    }).then(url => {
      expect(url).not.toContain('/loggedin');
    })

  })





});
