import orderByProps from '../app';

test('Функция orderByProps должна правильно сортировать массив ключей/значений', () => {
  const parent = { type: 'человек' };

  function Obj(name, health, level, attack, defence) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  Obj.prototype = parent;
  const obj = new Obj('мечник', 10, 2, 80, 40);

  const array = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(obj, ['name', 'level'])).toEqual(array);
});
