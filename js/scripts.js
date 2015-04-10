//check to see if lengths can combine to be valid triangle or not
var triangleChecker = function(length1, length2, length3){
    if (
        (length1 + length2) < length3 ||
        (length2 + length3) < length1 ||
        (length3 + length1) < length2
        ) {
//if no, then return a message saying isn't a triangle
//if yes, then check to see if three sides are equal and return "equilateral"
            return "not a triangle";
        }
        // else if((length1 === length2) && (length2 === length3)){
        //         return "equilateral";
        //     }
        else if ((length1 !== length2) && (length2 !== length3) && (length3 !== length1)){
            return "scalene";
        }

    else if((length1 === length2) && (length2 === length3)){
                return "equilateral";
            } else {
                return "isosceles";
            }


        //if no, then return "isosceles"



    //if no, then return "scalene"


    //if yes, then check to see if one of those sides is equal to the third side


    };
