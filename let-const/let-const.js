const PI = 3.14;

/**
 * 1. The difference between var and let is that var can be redeclared/reassigned, while let can only be 
 * reassigned. Also, var has function scope while let has block scope.
 * 2. The difference between var and const is that const cannot be redeclared or reassigned. Const also has
 * block scope.
 * 3. The difference between let and const is that const cannot be reassigned. However, a reference type such as 
 * an array or object declared with const can be mutated.
 * 4. Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope. Variables
 * declared with var will be given a value of undefined until the compiler reaches the line where the variable is
 * initialized. This can result in undefined behavior and bugs that are hard to find. Variables declared with let 
 * and const behave differently. They cannot be used before being declared. Attempting to do so will result in a 
 * ReferenceError.  
 */