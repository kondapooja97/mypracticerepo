//Remove duplicate characters from given string without using sort() or reverse() method.
const removeDuplicates = (str) => {
    const arr = str.split("");
    const arr2 = [];
    
    arr.forEach((el, i) => {
     if (!arr2.includes(el)) {
        arr2.push(el);
       }
     });
     return arr2.join("").replace(",", "").replace("", " ");
    };
    
    console.log(removeDuplicates( "Maharashtra"));