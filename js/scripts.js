//check to see if lengths can combine to be valid triangle or not
var triangleChecker = function(length1, length2, length3){
    if (
        (length1 + length2) > length3 ||
        (length2 + length3) > length1 ||
        (length3 + length1) > length2
        ) {
            return "not a triangle";
        }

};

//if no, then return a message indicating that the numbers they entered do not create a triangle

//if yes, then loop through sides to check to see if two sides are equal

    //if no, then return "scalene"

    //if yes, then check to see if one of those sides is equal to the third side

        //if no, then return "isosceles"

        //if yes, then return "equilateral"
