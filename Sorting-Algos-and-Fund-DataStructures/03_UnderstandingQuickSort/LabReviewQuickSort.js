//LabReviewQuickSort.js

function UILabReview() {}

function SortAlgorithm() {}

//define the list of nodes and the parentId
let list = document.querySelector("#ctl04n0Nodes").querySelectorAll("table");
let parentOfNodeList = document.querySelector("#ctl04n0Nodes");
let parentOfNodeListId = "ctl04n0Nodes";

SortAlgorithm.swap = function(list, swapIndex, index, isInnerHTML) {
  //bigger value that's going to the back of the partition
  //-> goes into the temp value so the smaller number
  //-> can be moved to the front

  var temp;

  if (isInnerHTML) {
    temp = list[swapIndex].innerHTML;
    list[swapIndex].innerHTML = list[index].innerHTML;
    list[index].innerHTML = temp;
  } else {
    temp = list[swapIndex];
    list[swapIndex] = list[index];
    list[index] = temp;
  }
  return list;
};

//gets 4th index of 'td' and returns innerHTML
UILabReview.getInnerHTML = function(listItemOfTheDOM) {
  return listItemOfTheDOM.querySelectorAll("td")[3].innerHTML;
};

//gets 4th index of 'td' and returns textContent
UILabReview.getTextContent = function(listItemOfTheDOM) {
  return listItemOfTheDOM.querySelectorAll("td")[3].textContent;
};

UILabReview.getProviderValue = function(listItemOfTheDOM) {
  const delimiter = "(";
  return UILabReview.getTextContent(listItemOfTheDOM).slice(
    UILabReview.getTextContent(listItemOfTheDOM).indexOf(delimiter)
  );
};

//creating the pivot
// function passed in should return the value to be compared for sorting
SortAlgorithm.partition = function(array, start, end, textContentFunction) {
  //determine pivot
  let pivot;
  if (textContentFunction) {
    pivot = textContentFunction(array[end]);
  } else {
    pivot = array[end];
  }

  let x = start - 1;

  for (let i = start; i < end; i++) {
    let comparisonValue;
    if (textContentFunction) {
      //slice text to return content after delimiter
      comparisonValue = textContentFunction(array[i]);
    } else {
      comparisonvalue = array[i];
    }

    if (
      //access the 3rd "td" element within the "table" element of the array of "tables"
      comparisonValue < pivot
    ) {
      x++;
      //put x in the place of array[i]
      //this ensures that all numbers less than the pivot
      //-> are within indexes less than that of the
      if (textContentFunction) {
        SortAlgorithm.swap(array, x, i, true);
      } else {
        SortAlgorithm.swap(array, x, i);
      }
    }
  }
  //put the pivot directly above the last value that
  //-> was lessThan the pivot
  if (textContentFunction) {
    SortAlgorithm.swap(array, x + 1, end, true);
  } else {
    SortAlgorithm.swap(array, x + 1, end);
  }
  //return pivot position
  return x + 1;
}; //end function

SortAlgorithm.quickSort = function(array, start, end, derivitiveFunction) {
  //if(array.length > 1){continue}
  //if(array.length == 1){start will == end}
  if (start < end) {
    //place partition in the middle
    // pass in function if value needs to be derived from the array value
    let partitionIndex = SortAlgorithm.partition(
      array,
      start,
      end,
      derivitiveFunction
    );
    //sort beginning
    SortAlgorithm.quickSort(
      array,
      start,
      partitionIndex - 1,
      derivitiveFunction
    );
    //sort end
    SortAlgorithm.quickSort(array, partitionIndex + 1, end, derivitiveFunction);
  }
  return array;
};

//UILabReview//UILabReview//UILabReview

UILabReview.deleteChildren = function(nodeWithChildren) {
  //define first or last child
  let lastChild = nodeWithChildren.lastElementChild;

  while (lastChild) {
    nodeWithChildren.removeChild(lastChild);
    lastChild = nodeWithChildren.lastElementChild;
  }
};

UILabReview.addChildren = function(node, listOfNodes) {
  listOfNodes.forEach(function(element) {
    node.appendChild(element);
  });
};

//run this to sort the values
UILabReview.sortLabReview = function(idOfParentNodeOfList, childNodeListType) {
  let parentNode = document.querySelector(`#${idOfParentNodeOfList}`);
  let childNodeList = parentNode.querySelectorAll(childNodeListType);

  const sortedListOfNodes = SortAlgorithm.quickSort(
    childNodeList,
    0,
    childNodeList.length - 1,
    UILabReview.getProviderValue
  );
};

// list.forEach(function(element) {
//   const delimiter = "(";
//   let text = element
//     .querySelectorAll("td")[3]
//     .textContent.slice(
//       element.querySelectorAll("td")[3].textContent.indexOf(delimiter)
//     );
//   console.log(text);
// });

UILabReview.listArrayText = function(list) {
  const delimiter = "(";
  for (let i = 0; i < list.length - 1; i++) {
    let text = list[i]
      .querySelectorAll("td")[3]
      .textContent.slice(
        list[i].querySelectorAll("td")[3].textContent.indexOf(delimiter)
      );
    console.log(text);
  }
};

UILabReview.listElementText = function(listOfElements, swapIndex, index) {
  const delimiter = "(";
  let list;
  list = listOfElements;
  let swapText = list[swapIndex]
    .querySelectorAll("td")[3]
    .textContent.slice(
      list[swapIndex].querySelectorAll("td")[3].textContent.indexOf(delimiter)
    );
  console.log(`swap: ${swapText}`);

  let indexText = list[index]
    .querySelectorAll("td")[3]
    .textContent.slice(
      list[index].querySelectorAll("td")[3].textContent.indexOf(delimiter)
    );
  console.log(`index: ${indexText}`);
};
