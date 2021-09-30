const myArray = [1, 3, 5, 10, 12];

const array = (myArray) => {
  if (myArray.find(e => e ===10)) {
    console.log('true');
  }
};

array(myArray)