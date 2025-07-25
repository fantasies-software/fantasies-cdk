import { describe, expect, it } from 'vitest';
import { toggle } from './toggle';

describe('toggle', () => {
  it('should add item if not present', () => {
    expect(toggle([1, 2], 3)).toEqual([1, 2, 3]);
  });
  it('should remove item if present', () => {
    expect(toggle([1, 2, 3], 2)).toEqual([1, 3]);
  });
});
