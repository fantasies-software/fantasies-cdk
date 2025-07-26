# Array

<script setup lang="ts">
import Alphabetical from './demo/alphabetical.vue'
import Boil from './demo/boil.vue'
import Sort from './demo/sort.vue'
import Flat from './demo/flat.vue'
import Shift from './demo/shift.vue'
import Sift from './demo/sift.vue'
import Unique from './demo/unique.vue'

import CountBy from './demo/count-by.vue'
import GroupBy from './demo/group-by.vue'
import Diff from './demo/diff.vue'
import Intersects from './demo/intersects.vue'

import GetFirst from './demo/get-first.vue'
import GetLast from './demo/get-last.vue'
import SelectMap from './demo/select-map.vue'
import ReplaceAllArrayByItem from './demo/replace-all-array-by-item.vue'
import ReplaceArrayByItem from './demo/replace-array-by-item.vue'
import ReplaceOrAppend from './demo/replace-or-append.vue'
import Toggle from './demo/toggle.vue'

import List from './demo/list.vue'
import Range from './demo/range.vue'
import Cluster from './demo/cluster.vue'
import Fork from './demo/fork.vue'
import Merge from './demo/merge.vue'
import Objectify from './demo/objectify.vue'
import ZipToArray from './demo/zip-to-array.vue'
import ZipToObject from './demo/zip-to-object.vue'

import Max from './demo/max.vue'
import Min from './demo/min.vue'
import Sum from './demo/sum.vue'
import Iterate from './demo/iterate.vue'
</script>

## alphabetical

- Sorts an array of strings in alphabetical order.
  <Alphabetical/>
  <<< ./demo/alphabetical.vue

## boil

- Sorts an array of strings in alphabetical order, ignoring case.
  <Boil/>
  <<< ./demo/boil.vue

## sort

- Sort an array based on a getter function and order.
  <Sort/>
  <<< ./demo/sort.vue

## flat

- Flattens an array of arrays into a single array.
  <Flat/>
  <<< ./demo/flat.vue

## shift

- Shift array items by n steps.
  <Shift/>
  <<< ./demo/shift.vue

## sift

- Returns a new list with only truthy values.
  <Sift/>
  <<< ./demo/sift.vue

## unique

- Removes duplicate items from an array based on a key function.
  <Unique/>
  <<< ./demo/unique.vue

## countBy

- Count the occurrences of each item in an array based on a key.
  <CountBy/>
  <<< ./demo/count-by.vue

## groupBy

- Groups an array of items by a specified key.
  <GroupBy/>
  <<< ./demo/group-by.vue

## diff

- Returns all items from the first list that do not exist in the second list.
  <Diff/>
  <<< ./demo/diff.vue

## intersects

- Checks if two arrays intersect based on a primary key function.
  <Intersects/>
  <<< ./demo/intersects.vue

# 取值/变换

## getFirst

- Get the first element of an array or return a default value.
  <GetFirst/>
  <<< ./demo/get-first.vue

## getLast

- Get the last element of an array or return a default value.
  <GetLast/>
  <<< ./demo/get-last.vue

## selectMap

- Maps and filters an array based on a condition and a mapping function.
  <SelectMap/>
  <<< ./demo/select-map.vue

## replaceAllArrayByItem

- Replaces all occurrences of an item in an array with a specified item based on a matching function.
  <ReplaceAllArrayByItem/>
  <<< ./demo/replace-all-array-by-item.vue

## replaceArrayByItem

- Replaces the first occurrence of an item in an array with a specified item based on a matching function.
  <ReplaceArrayByItem/>
  <<< ./demo/replace-array-by-item.vue

## replaceOrAppend

- Replaces an item in a list if it matches a condition, otherwise appends the new item.
  <ReplaceOrAppend/>
  <<< ./demo/replace-or-append.vue

## toggle

- If the item matching the condition already exists in the list it will be removed. If it does not it will be added.
  <Toggle/>
  <<< ./demo/toggle.vue

## list

- Generates a list of values based on the provided parameters.
  <List/>
  <<< ./demo/list.vue

## range

- Generates a range of numbers or values based on the provided parameters.
  <Range/>
  <<< ./demo/range.vue

## cluster

- Clusters an array into smaller arrays of a specified size.
  <Cluster/>
  <<< ./demo/cluster.vue

## fork

- Splits an array into two arrays based on a condition.
  <Fork/>
  <<< ./demo/fork.vue

## merge

- Merges two arrays based on a matcher function.
  <Merge/>
  <<< ./demo/merge.vue

## objectify

- Transforms an array into an object using specified key and value extraction functions.
  <Objectify/>
  <<< ./demo/objectify.vue

## zipToArray

- Combines multiple arrays into an array of arrays, where each inner array contains elements from the input arrays at the same index.
  <ZipToArray/>
  <<< ./demo/zip-to-array.vue

## zipToObject

- Combines keys and values into an object, where each key is associated with a value.
  <ZipToObject/>
  <<< ./demo/zip-to-object.vue

## max

- Finds the maximum value in an array of numbers or objects.
  <Max/>
  <<< ./demo/max.vue

## min

- Finds the minimum value in an array of numbers or objects.
  <Min/>
  <<< ./demo/min.vue

## sum

- Calculates the sum of an array of numbers or objects.
  <Sum/>
  <<< ./demo/sum.vue

## iterate

- Like a reduce but does not require an array. Iterates a function n times.
  <Iterate/>
  <<< ./demo/iterate.vue
