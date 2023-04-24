// What value does the following expression evaluate to?

parseInt('3.1415', 10);

// 3 - parseInt parses strings that begin with a digit until it reaches an
// invalid character.
// When parsing an integer, '.' is an invalid character
// So, it will convert the 3 and ignore everything else
