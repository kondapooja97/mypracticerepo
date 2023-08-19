//without using sort or reverse method convert array into decending order 
function sortDescending(arr) 
{
   var len = arr.length;
    for (var i = 0; i < len - 1; i++) 
    {
      for (var j = 0; j < len - i - 1; j++) 
      {
        if (arr[j] < arr[j + 1]) 
        {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  var numbers = [5, 2, 8, 1, 9];
  sortDescending(numbers);
  console.log(numbers); // Output: [9, 8, 5, 2, 1]
