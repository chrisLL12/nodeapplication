export const rating = number => {
    if (number >= 5) {
        return "Excellent!";
    } else if (number === 4) {
        return "Great!";
    } else if (number === 3) { 
        return "Okay.";
    } else if (number <= 2) {
        return "Try something else!";
    } else {
        return "Give your rating!";
    }

};

//Creates a random rating number
let number = Math.floor(Math.random() * Math.floor(10));
console.log(
    rating(number)
);

export default number => 5;