import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLButtonElement>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const a: ButtonType;

export declare const Button: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare type ButtonType = 'Button';

/**
 * Groups an array of items by a specified key.
 * @param array  - The array to group
 * @param by  - A function that returns the key to group by
 * @returns - An object where keys are the result of the `by` function and values are arrays of items that correspond to those keys
 */
export declare function groupBy<T, K extends string | number | symbol>(array: readonly T[], by: (item: T) => K | undefined): Record<K, T[]>;

/**
 * Checks if the provided value is an array.
 * @param value - The value to check
 * @returns True if the value is an array, false otherwise
 */
export declare function isArray<T>(value: unknown): value is T[];

/**
 * Checks if the provided value is a Date object.
 * @param value - The value to check
 * @returns True if the value is a Date object, false otherwise
 */
export declare function isDate(value: unknown): value is Date;

/**
 * Checks if the provided value is empty.
 * @param value - The value to check
 * @returns True if the value is considered empty, false otherwise
 */
export declare function isEmpty(value: unknown): boolean;

/**
 * Performs deep equality comparison between two values.
 * @param pre - The first value to compare
 * @param next - The second value to compare
 * @returns True if the values are deeply equal, false otherwise
 */
export declare function isEqual<T>(pre: T, next: T): boolean;

/**
 * Checks if the provided value is a float.
 * @param value - The value to check
 * @returns True if the value is a float, false otherwise
 */
export declare function isFloat(value: unknown): value is number;

/**
 * Checks if the provided value is a function.
 * @param value - The value to check
 * @returns True if the value is a function, false otherwise
 */
export declare function isFunction(value: unknown): value is Function;

/**
 * Checks if the provided value is an integer.
 * @param value - The value to check
 * @returns True if the value is an integer, false otherwise
 */
export declare function isInt(value: unknown): value is number;

/**
 * Checks if the provided value is null or undefined.
 * @param value - The value to check
 * @returns True if the value is null or undefined, false otherwise
 */
export declare function isNil(value: unknown): value is null | undefined;

/**
 * Checks if the provided value is a number (excluding NaN).
 * @param value - The value to check
 * @returns True if the value is a number and not NaN, false otherwise
 */
export declare function isNumber(value: unknown): value is number;

/**
 * Checks if the provided value is an object (plain object, not array, function, etc.).
 * @param value - The value to check
 * @returns True if the value is a plain object, false otherwise
 */
export declare function isObject(value: unknown): value is object;

/**
 * Checks if the provided value is a primitive type (string, number, boolean, symbol, null, or undefined).
 * @param value - The value to check
 * @returns True if the value is a primitive type, false otherwise
 */
export declare function isPrimitive(value: unknown): value is string | number | boolean | symbol | null | undefined;

/**
 * Checks if the provided value is a Promise.
 * @param value - The value to check
 * @returns True if the value is a Promise, false otherwise
 */
export declare function isPromise(value: unknown): value is Promise<unknown>;

/**
 * Checks if the provided value is a RegExp object.
 * @param value - The value to check
 * @returns True if the value is a RegExp object, false otherwise
 */
export declare function isRegexp(value: unknown): value is RegExp;

/**
 * Checks if the provided value is a string.
 * @param value - The value to check
 * @returns True if the value is a string, false otherwise
 */
export declare function isString(value: unknown): value is string;

/**
 * Checks if the provided value is a symbol.
 * @param value - The value to check
 * @returns True if the value is a symbol, false otherwise
 */
export declare function isSymbol(value: unknown): value is symbol;

/**
 * Combines multiple arrays into an array of arrays, where each inner array contains elements from the input arrays at the same index.
 * eg:  const zipped = zipAll(['a', 'b'], [1, 2], [true, false]) // [['a', 1, true], ['b', 2, false]]
 */
export declare function zipAll<T1, T2>(array1: T1[], array2: T2[]): [T1, T2][];

export declare function zipAll<T1, T2, T3>(array1: T1[], array2: T2[], array3: T3[]): [T1, T2, T3][];

export declare function zipAll<T1, T2, T3, T4>(array1: T1[], array2: T2[], array3: T3[], array4: T4[]): [T1, T2, T3, T4][];

export declare function zipAll<T1, T2, T3, T4, T5>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[]): [T1, T2, T3, T4, T5][];

export declare function zipAll<T1, T2, T3, T4, T5, T6>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[]): [T1, T2, T3, T4, T5, T6][];

export declare function zipAll<T1, T2, T3, T4, T5, T6, T7>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[]): [T1, T2, T3, T4, T5, T6, T7][];

export declare function zipAll<T1, T2, T3, T4, T5, T6, T7, T8>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[]): [T1, T2, T3, T4, T5, T6, T7, T8][];

export declare function zipAll<T1, T2, T3, T4, T5, T6, T7, T8, T9>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[], array9: T9[]): [T1, T2, T3, T4, T5, T6, T7, T8, T9][];

export declare function zipAll<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(array1: T1[], array2: T2[], array3: T3[], array4: T4[], array5: T5[], array6: T6[], array7: T7[], array8: T8[], array9: T9[], array10: T10[]): [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10][];

export { }
