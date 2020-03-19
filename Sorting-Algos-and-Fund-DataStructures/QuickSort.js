//creating the pivot
function partition(array, start, end) {
  const pivot = array[end];
  const x = start - 1;
  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      x++;
      //put x in the place of array[i]
      //this ensures that all numbers less than the pivot
      //-> are within indexes less than that of the pivot
      swap(numbers, x, i);
    }
  }
  //put the pivot directly above the last value that
  //-> was lessThan the pivot
  swap(array, x + 1, end);
  //return pivot position
  return x + 1;
} //end function

function quickSort(array, start, end) {
  //if(array.length > 1){continue}
  //if(array.length == 1){start will == end}
  if (start < end) {
    //place partition in the middle
    let partitionIndex = partition(array, start, end);
    //sort beginning
    quickSort(array, start, partitionIndex - 1);
    //sort end
    quickSort(array, end, partitionIndex + 1);
  }
}

function swap(list, indexFrom, indexTo) {
  var temp = list[indexTo];
  list[indexTo] = list[indexFrom];
  list[indexFrom] = temp;
}
