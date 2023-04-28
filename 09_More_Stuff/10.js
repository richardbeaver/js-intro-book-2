// Challenging Exercise
// This exercise has nothing to do with this chapter. Instead, it uses
// concepts you learned earlier in the book. If you can't figure out the
// answer, don't worry: this question can stump developers with more
// experience than you have.

// Consider this code:

// > let x = "5"
// > x = x + 1
// = "51"

// Now, consider this code:

// > let y = "5"
// > y++

// What gets returned by y++ in the second snippet, and why?

/*
 5 (numeric value)

 The post-increment operator coerces a string operand to a number. It then
 increments that value by 1. However, it then returns the un-incremented
 number value.
*/
