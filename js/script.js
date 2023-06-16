
var fullName = 'Ankit Tanwar'; // global variable declare and initialixe 

console.log(fullName); // access the global variable outside the function block


//1 FUNCTION DEFINATION     

function myCarName() {


    //function body
    //statements
    // variable are defined inside a function is a local variable

    let car = 'Fortuner';  // local variable

    console.log(fullName); // access the global variablre inside the funvtion block


}

//2 funcion calling
myCarName();
//console.log(car); // local variable cann't the access the outside the function.