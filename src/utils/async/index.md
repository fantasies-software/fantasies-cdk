# Async

<script setup lang="ts">
import AggregateError from './demo/aggregate-error.vue';
import All from './demo/all.vue';
import Defer from './demo/defer.vue';
import Guard from './demo/guard.vue';
import Map from './demo/map.vue';
import Parallel from './demo/parallel.vue';
import Reduce from './demo/reduce.vue';
import Retry from './demo/retry.vue';
import Sleep from './demo/sleep.vue';
import Tryit from './demo/tryit.vue';
</script>

## aggregateError

- This error is used to represent multiple errors that occur during asynchronous operations. It is particularly useful when dealing with promises that may reject with multiple errors.

<AggregateError />

<<< ./demo/aggregate-error.vue

## all

- This utility provides a way to handle multiple promises and wait for all of them to resolve or reject. It is useful when you want to perform multiple asynchronous operations in parallel and handle their results collectively.

<All />

<<< ./demo/all.vue

## defer

- This utility allows you to defer the execution of a function until a later time, which can be useful for managing asynchronous operations and ensuring that certain code runs after a delay or under specific conditions.
  <Defer />

<<< ./demo/defer.vue

## guard

- This utility provides a way to guard against certain conditions or errors in asynchronous operations. It can be used to ensure that specific checks are performed before executing a function, helping to prevent unwanted behavior or errors in your code.

<Guard />

<<< ./demo/guard.vue

## map

- This utility provides a way to map over an array of promises and transform their results. It is useful when you want to apply a function to each element of an array of promises and collect the results in a new array.

<Map />

<<< ./demo/map.vue

## parallel

- This utility provides a way to run multiple asynchronous operations in parallel and wait for all of them to complete. It is useful when you want to perform several tasks simultaneously and handle their results collectively.

<Parallel />

<<< ./demo/parallel.vue

## reduce

- This utility allows you to reduce an array of promises into a single value by applying a function to each element in the array. It is useful when you want to accumulate results from multiple asynchronous operations into a single value.

<Reduce />

<<< ./demo/reduce.vue

## retry

- This utility provides a way to retry an asynchronous operation a specified number of times before giving up. It is useful for handling transient errors or failures in asynchronous operations, allowing you to attempt the operation multiple times before considering it a failure.

<Retry />

<<< ./demo/retry.vue

## sleep

- This utility allows you to pause the execution of your code for a specified duration. It is useful for introducing delays in asynchronous operations, such as waiting for a certain period before retrying an operation or delaying the execution of a function.

<Sleep />

<<< ./demo/sleep.vue

## tryit

- This utility provides a way to handle errors in asynchronous operations gracefully. It allows you to attempt an operation and catch any errors that may occur, providing a way to handle failures without crashing your application.

<Tryit />

<<< ./demo/tryit.vue
