const arrayOfObjects = [
    {
      name: "John",
      age: 30,
      city: "New York"
    },
    {
      name: "Emily",
      age: 25,
      city: "Los Angeles"
    },
    {
      name: "Michael",
      age: 35,
      city: "Chicago"
    }
  ];

  var filterArray=[]

  for(let i=0;i<arrayOfObjects.length;i++){
    currentObj=arrayOfObjects[i]
    if(currentObj.age>=30){
        filterArray.push(currentObj)
    }
  }
  console.log(filterArray);