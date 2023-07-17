/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import Bowerman from '../bowerman';
import Character from '../character';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Daemon', () => {
  expect(new Daemon('Oleg', 'Daemon')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  });
});

test('Bowerman', () => {
  expect(new Bowerman('Oleg', 'Bowerman')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Bowerman',
    attack: 25,
    defence: 25,
  });
});

test('Magician', () => {
  expect(new Magician('Oleg', 'Magician')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Magician',
    attack: 10,
    defence: 40,
  });
});

test('Swordsman', () => {
  expect(new Swordsman('Oleg', 'Swordsman')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  });
});

test('Undead', () => {
  expect(new Undead('Oleg', 'Undead')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 25,
    defence: 25,
  });
});

test('Zombie', () => {
  expect(new Zombie('Oleg', 'Zombie')).toEqual({
    name: 'Oleg',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  });
});

test('Zombie', () => {
  expect(() => {
    const result = new Zombie('O', 'Zombie');
  }).toThrow('Неверно переданы данные');
});
