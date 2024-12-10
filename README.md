# MongoDB $inc Operator with String Value

This repository demonstrates an uncommon error in MongoDB when using the `$inc` operator with a string value instead of a number.

## Bug Description
The `$inc` operator is designed to increment a numerical value.  Providing a string value leads to a silent failure. The update operation does not throw an error, but the document is not updated.

## Bug Reproduction
1. Create a MongoDB collection.
2. Insert a document with a numerical field, e.g., `count: 0`.
3. Attempt to update the document using the `$inc` operator with a string value for the increment.  The example code shows this incorrect usage.
4. Observe that the document is not updated as expected.

## Solution
Ensure that the value provided to the `$inc` operator is a number, not a string.  Correct the data type of the increment value.