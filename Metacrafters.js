//solution for rectangle
const resultsRectangle = (l,w)=>{
    var perimeter = 2*(l+w);
    var area = l*w
    var result = {perimeter:perimeter,area:area};
    return result
};

//solution for circle
const resultCircle = (r,pi)=>{
    var perimeter = 2*pi*r;
    var area = pi*(Math.pow(r,2));
    var result = {perimeter:perimeter,area:area}
    return result
}

//change values here
var rectangle = {
    name:"card",
    length: 5,
    width: 5
};

var circle = {
    name:"plate",
    raduis: 3.25,
    pi: 3.14159
};

//this returns true or false
var isSquare = rectangle.length==rectangle.width

//aranging values here
const permiterRectangle = resultsRectangle(rectangle.length,rectangle.width);
const perimeterCircle = resultCircle(circle.raduis,circle.pi);

const outputRectangle = {
    "Name":rectangle.name,
    "Area":permiterRectangle.area,
    "Perimeter":permiterRectangle.perimeter,
    "isSquare":isSquare
};

const outputCircle = {
    "Name":circle.name,
    "Area":perimeterCircle.area,
    "Perimeter":perimeterCircle.perimeter
};

//outputs to console
console.log ("rectangle",outputRectangle)
console.log("circle",outputCircle)