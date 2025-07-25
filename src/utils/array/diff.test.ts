import { describe, expect, it } from 'vitest';
import { diff } from './diff';

describe('diff', () => {
  it('should return added and removed', () => {
    const a = [1, 2, 3];
    const b = [2, 3, 4];
    const result = diff(a, b);
    expect(result).toEqual([1]);
  });
});
