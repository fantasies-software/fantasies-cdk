# Object

<script setup lang="ts">
import AssignDemo from './demo/assign.vue'
import CloneDemo from './demo/clone.vue'
import ConstructDemo from './demo/construct.vue'
import CrushDemo from './demo/crush.vue'
import GetDemo from './demo/get.vue'
import InvertDemo from './demo/invert.vue'
import KeysDemo from './demo/keys.vue'
import ListifyDemo from './demo/listify.vue'
import LowerizeDemo from './demo/lowerize.vue'
import MapEntriesDemo from './demo/map-entries.vue'
import MapKeysDemo from './demo/map-keys.vue'
import MapValuesDemo from './demo/map-values.vue'
import OmitDemo from './demo/omit.vue'
import PickDemo from './demo/pick.vue'
import SeriesDemo from './demo/series.vue'
import SetDemo from './demo/set.vue'
import ShakeDemo from './demo/shake.vue'
import UpperizeDemo from './demo/upperize.vue'
import ObjectifyDemo from './demo/objectify.vue'
</script>

## assign

- Recursively merges properties from `override` into `initial`.
  <AssignDemo/>
  <<< ./demo/assign.vue

## clone

- Deeply clones an object, preserving its type.
  <CloneDemo/>
  <<< ./demo/clone.vue

## construct

- Constructs a new object from the given object (see demo for details).
  <ConstructDemo/>
  <<< ./demo/construct.vue

## crush

- Flattens an object into a structure where each key is a path to the value.
  <CrushDemo/>
  <<< ./demo/crush.vue

## get

- Gets a value from an object by a path string.
  <GetDemo/>
  <<< ./demo/get.vue

## invert

- Swaps the keys and values of an object.
  <InvertDemo/>
  <<< ./demo/invert.vue

## keys

- Recursively retrieves all keys from an object, including nested objects and arrays.
  <KeysDemo/>
  <<< ./demo/keys.vue

## listify

- Converts an object into a list of items based on a transformation function.
  <ListifyDemo/>
  <<< ./demo/listify.vue

## lowerize

- Converts all keys of an object to lowercase.
  <LowerizeDemo/>
  <<< ./demo/lowerize.vue

## mapEntries

- Maps the entries of an object to a new object with potentially different keys and values.
  <MapEntriesDemo/>
  <<< ./demo/map-entries.vue

## mapKeys

- Maps the keys of an object using a provided mapping function.
  <MapKeysDemo/>
  <<< ./demo/map-keys.vue

## mapValues

- Applies a function to each value in an object and returns a new object with the same keys but transformed values.
  <MapValuesDemo/>
  <<< ./demo/map-values.vue

## omit

- Omits properties from an object.
  <OmitDemo/>
  <<< ./demo/omit.vue

## pick

- Creates a new object with only the specified keys from the original object.
  <PickDemo/>
  <<< ./demo/pick.vue

## series

- Creates a series object around a list of values that should be treated with order.
  <SeriesDemo/>
  <<< ./demo/series.vue

## set

- Sets a value at a specified path in an object, creating nested objects or arrays as needed.
  <SetDemo/>
  <<< ./demo/set.vue

## shake

- Removes keys with values that match the filter function (default: removes undefined).
  <ShakeDemo/>
  <<< ./demo/shake.vue

## upperize

- Converts all keys of an object to uppercase.
  <UpperizeDemo/>
  <<< ./demo/upperize.vue

## objectify

- Transforms an array into an object using specified key and value extraction functions.
  <ObjectifyDemo/>
  <<< ./demo/objectify.vue
