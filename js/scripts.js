//check to see if lengths can combine to be valid triangle or not
//if no, then return a message saying isn't a triangle
//if yes, then check to see if three sides are not equal, then return "scalene"
//if not, then check to see if three sides are equal and return "equilateral"
//if not, then return "isosceles"

var triangleChecker = function(length1, length2, length3){
    if (
        (length1 + length2) < length3 ||
        (length2 + length3) < length1 ||
        (length3 + length1) < length2
        ) {
            return "not a triangle";
        }
    else if ((length1 !== length2) && (length2 !== length3) && (length3 !== length1)){
            return "scalene";
        }
    else if((length1 === length2) && (length2 === length3)){
                return "equilateral";
        } else {
                return "isosceles";
        }
    };
