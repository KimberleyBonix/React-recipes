import { describe, expect, it } from 'vitest';
import { sum } from './sum';

// Commentaire pour décrire ce qu'on attend d'un test
describe('sum function', () => {
  it('should sum two number', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should sum two STRING number', () => {
    expect(sum('1', '2')).toBe('12');
  });

  // Il y a une fonction avant sum() pour que ce soit .toThrowsError qui exécute sum()
  it('should throw an error if one of the argument is not a number', () => {
    expect(() => sum('1', 'a')).toThrowError();
  });
});
