import { describe, expect, it } from 'vitest';

import { replaceOrAppend } from './replace-or-append';

describe('replaceOrAppend', () => {
  it('should append if not found', () => {
    const arr = [1, 2, 3];
    const result = replaceOrAppend(arr, 4, v => v === 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should replace if found', () => {
    const arr = [1, 2, 3];
    const result = replaceOrAppend(arr, 9, v => v === 2);
    expect(result).toEqual([1, 9, 3]);
  });
});
