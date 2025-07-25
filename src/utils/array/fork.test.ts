import { expect, describe, it } from "vitest";
import { fork } from "./fork"; // Adjust the import path as necessary


describe("fork", () => {
  it("should split an array into two arrays based on a condition", () => {
    const arr = [1, 2, 3, 4];
    const [evens, odds] = fork(arr, n => n % 2 === 0);
    expect(evens).toEqual([2, 4]);
    expect(odds).toEqual([1, 3]);
  })

  it("should return two empty arrays for an empty input array", () => {
    const [evens, odds] = fork([], n => n % 2 === 0);
    expect(evens).toEqual([]);
    expect(odds).toEqual([]);
  })

  it("should handle arrays with no elements matching the condition", () => {
    const arr = [1, 3, 5];
    const [evens, odds] = fork(arr, n => n % 2 === 0);
    expect(evens).toEqual([]);
    expect(odds).toEqual([1, 3, 5]);
  })

  it("should handle arrays with all elements matching the condition", () => {
    const arr = [2, 4, 6];
    const [evens, odds] = fork(arr, n => n % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([]);
  })

  it("should return two empty arrays for non-array input", () => {
    const [evens, odds] = fork(null as any, (n: any) => n % 2 === 0);
    expect(evens).toEqual([]);
    expect(odds).toEqual([]);
  })

})
