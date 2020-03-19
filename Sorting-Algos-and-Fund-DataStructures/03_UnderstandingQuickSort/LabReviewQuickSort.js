//LabReviewQuickSort.js

function swap(list, swapIndex, index) {
  //bigger value that's going to the back of the partition
  //-> goes into the temp value so the smaller number
  //-> can be moved to the front
  var temp = list[swapIndex];
  list[swapIndex] = list[index];
  list[index] = temp;
}

//creating the pivot
function partitionLabReview(array, start, end) {
  //delimiter for combined text field
  const delimiter = "(";

  //determine pivot
  const pivot = array[end]
    .querySelectorAll("td")[3]
    .textContent.slice(
      array[end].querySelectorAll("td")[3].textContent.indexOf(delimiter)
    );

  let x = start - 1;

  for (let i = start; i < end; i++) {
    //slice text to return content after delimiter
    let comparisonValue = array[i]
      .querySelectorAll("td")[3]
      .textContent.slice(
        array[i].querySelectorAll("td")[3].textContent.indexOf(delimiter)
      );

    if (
      //access the 3rd "td" element within the "table" element of the array of "tables"
      comparisonValue < pivot
    ) {
      x++;
      //put x in the place of array[i]
      //this ensures that all numbers less than the pivot
      //-> are within indexes less than that of the pivot
      swap(array, x, i);
    }
  }
  //put the pivot directly above the last value that
  //-> was lessThan the pivot
  swap(array, x + 1, end);
  //return pivot position
  return x + 1;
} //end function

function quickSortLabReview(array, start, end) {
  //if(array.length > 1){continue}
  //if(array.length == 1){start will == end}
  if (start < end) {
    //place partition in the middle
    let partitionIndex = partitionLabReview(array, start, end);
    //sort beginning
    quickSortLabReview(array, start, partitionIndex - 1);
    //sort end
    quickSortLabReview(array, end, partitionIndex + 1);
  }
  return array;
}

function deleteChildren(nodeWithChildren) {
  //define first or last child
  let lastChild = nodeWithChildren.lastElementChild;

  while (lastChild) {
    nodeWithChildren.removeChild(lastChild);
    lastChild = nodeWithChildren.lastElementChild;
  }
}

function addChildren(node, listOfNodes) {
  listOfNodes.forEach(function(element) {
    node.appendChild(element);
  });
}

//id: "ctl04n0Nodes",
function sortLabReview(idOfParentNodeOfList, childNodeListType) {
  let parentNode = document.querySelector(`#${idOfParentNodeOfList}`);
  let childNodeList = parentNode.querySelectorAll(childNodeListType);

  const sortedListOfNodes = quickSortLabReview(
    childNodeList,
    0,
    childNodeList.length - 1
  );

  deleteChildren(parentNode);
  addChildren(parentNode, sortedListOfNodes);
}

list.forEach(function(element) {
  const delimiter = "(";
  let text = element
    .querySelectorAll("td")[3]
    .textContent.slice(
      element.querySelectorAll("td")[3].textContent.indexOf(delimiter)
    );
  console.log(text);
});

function listArrayText(list) {
  const delimiter = "(";
  for (let i = 0; i < list.length - 1; i++) {
    let text = list[i]
      .querySelectorAll("td")[3]
      .textContent.slice(
        list[i].querySelectorAll("td")[3].textContent.indexOf(delimiter)
      );
    console.log(text);
  }
}

function listElementText(list, swapIndex, index) {
  const delimiter = "(";

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
}
