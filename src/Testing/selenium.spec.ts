import { Builder, By, Capabilities, until, WebDriver } from 'selenium-webdriver';
import 'chromedriver';

describe('Prueba con Selenium', () => {
  let driver: WebDriver;

  beforeEach(async () => {
    // Configurar el controlador del navegador (en este caso, Chrome)
    driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
  });

  afterEach(async () => {
    // Cerrar el navegador después de cada prueba
    await driver.quit();
  });

  it('debe ingresar texto en un campo de entrada', async () => {
    // Navegar a la página
    await driver.get('URL_DE_LA_PAGINA');

    // Esperar a que se cargue el elemento
    await driver.wait(until.elementLocated(By.id('name')), 5000);

    // Ingresar texto en el campo de entrada
    const input = await driver.findElement(By.id('name'));
    await input.sendKeys('Texto de prueba');

    // Verificar el valor del campo de entrada
    const value = await input.getAttribute('value');
    expect(value).toEqual('Texto de prueba');
  });

  it('debe hacer clic en un botón', async () => {
    // Navegar a la página
    await driver.get('URL_DE_LA_PAGINA');

    // Esperar a que se cargue el botón
    await driver.wait(until.elementLocated(By.css('.btn-success')), 5000);

    // Hacer clic en el botón
    const button = await driver.findElement(By.css('.btn-success'));
    await button.click();

    // Realizar aserciones adicionales o verificar cambios en la página después de hacer clic en el botón
  });
});
