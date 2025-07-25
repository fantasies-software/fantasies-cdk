import { describe, expect, it } from 'vitest';

import { shift } from './shift';

describe('shift', () => {
  it('should return the same array for n = 0', () => {
    const arr = [1, 2, 3];
    expect(shift(arr, 0)).toEqual(arr);
  })
});
