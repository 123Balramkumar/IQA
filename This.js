// In JavaScript, this is a specail type of keyword and  the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
   
obj.getName();


//this is the second example 
//in this exaplme there are two Object person and car if i want to display the outer object (car) property then 
//i can use object.propertyName if i want to access the same object in which the function is defined (person) then we can use this Keyword

let person={
    fName:"Balram",
    lName:"Kumar", 
    sayHello(){
        console.log("Hello i am "+ this.fName + " and i have " + car.brand + " car ") //output will be same 
        // console.log("Hello i am "+ person.fName + " and i have " + car.brand + " car ")


    }
}

let car ={
    brand: 'Tata',
    model: "Safari"
}

person.sayHello();