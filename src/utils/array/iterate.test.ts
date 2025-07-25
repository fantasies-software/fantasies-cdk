import { describe, expect, it } from 'vitest';

describe('iterate', () => {
  it('should iterate over array and apply function', () => {
    const arr = [1, 2, 3];
    const result: number[] = [];
    arr.forEach((value) => {
      result.push(value * 2);
    });
    expect(result).toEqual([2, 4, 6]);
  })
});
