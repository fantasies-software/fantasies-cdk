import { describe, expect, it } from 'vitest';

import { sift } from './sift';

describe('sift', () => {
  it('should return an empty array for an empty input', () => {
    expect(sift([])).toEqual([]);
  })
});
