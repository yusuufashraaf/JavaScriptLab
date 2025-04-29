// 1 function to make pascal case
function pascalCase(str =''){
    let str2 = str.split(' ')
    for(let i = 0 ; i< str2.length ; i++){
      str2[i] = str2[i].charAt(0).toUpperCase ()+  str2[i].substring(1).toLowerCase();
    }
    return str2.join(' ');
    }
    


// 2 function to get longest word
let longestWord = (str ='') => {
    let splitting = str.split(" ");
    let wordIndex = 0;
    for (let i = 1; i < splitting.length; i++) {
        if (splitting[i].length > splitting[wordIndex].length) {
            wordIndex = i;
        }
    }

    return splitting[wordIndex];
}


// 3 function to sort string
let sortingStr = (str ='') => {
    let strSplit = str.split('');
    let strSplitSorting = strSplit.sort();
    let strJoin = strSplitSorting.join('');
    return strJoin;
}

// 4 function to get common element
let getElements =(arr1  =[], arr2 =[]) =>{
    let str1 = arr1.join(',');
    let commonElements=[];

    for (let i = 0; i < arr2.length; i++){
        if (str1.indexOf(arr2[i]) !== -1){
            commonElements.push(arr2[i])
        }
    }
    return commonElements;
}

// 5 function to remove the duplicates
let removingDuplicates = (arr=[])  =>{
    let arrSort = arr.sort((a,b)=> a - b);
    let element=[];

    for (let i = 0; i < arrSort.length; i++) {
        if (arrSort[i] !== arrSort[i + 1]) { 
            element.push(arrSort[i]);
        }
    }
    return element;
}