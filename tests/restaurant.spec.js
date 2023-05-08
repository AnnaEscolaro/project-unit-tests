const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {

  it('Verifica se o objeto tem a propriedade fetchMenu e é uma function', () => {
    const menuCreated = createMenu();
    expect(menuCreated).toHaveProperty('fetchMenu');
    expect(typeof (menuCreated.fetchMenu)).toBe('function');
  });

  it('menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()', () => {
    expect({ food: {}, drinks: {} }).toEqual(createMenu({ food: {}, drinks: {} }).fetchMenu());
  });

  it('propriedade consumption retorna um array vazio', () => {
    expect(createMenu({ food: {}, drinks: {} }).consumption).toEqual([]);
  });

  it('valida na order item indisponível no menu', () => {
    const menuCreated = createMenu({ food: {}, drinks: {} });
    const consumptionObj = menuCreated.consumption;
    expect(menuCreated.order('coca')).toBe('Item indisponível');
    expect(menuCreated.consumption).toEqual(consumptionObj);
  });

  it('caso item passado para order() esteja disponível no menu, adicionar a consumption', () => {
    const menuCreated = createMenu({ food: {}, drinks: { coca: 3.50 } });
    expect(menuCreated.order('coca')).not.toBe('Item indisponível');
    expect(menuCreated.consumption).toContain('coca');
  });

  it('função order aceita que pedidos repetidos sejam acrescidos a consumption', () => {
    const menuCreated = createMenu({ food: {}, drinks: { coca: 3.50 } });
    menuCreated.order('coca');
    menuCreated.order('coca');
    expect(menuCreated.consumption).toEqual(['coca', 'coca']);
  });

  it('pay() deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption', () => {
    const menuCreated = createMenu({ food: {}, drinks: { coca: 3.50 } });
    menuCreated.order('coca');
    menuCreated.order('coca');
    expect(menuCreated.consumption).toEqual(['coca', 'coca']);
  });

  it('pay() deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption', () => {
    const menuCreated = createMenu({ food: { pizza: 10.00 }, drinks: { coca: 3.50 } });
    menuCreated.order('coca');
    menuCreated.order('pizza');
    expect(menuCreated.pay()).toBe(13.50 * 1.1);
  })
});