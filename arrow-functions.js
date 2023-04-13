const double = (arr) => arr.map((val) => val * 2);

//Yes, this function could be one line, but readability is also important 
const squareAndFindEvens = numbers => {
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}