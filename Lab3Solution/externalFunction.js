
// 1- open existing small window and scroll it’s content to the end . 
        let myWindow=open("https://www.google.com" , "_blank")
        if(myWindow)
        myWindow.close();
        myWindow.scroll({
            behavior: "smooth",
            height:100
          });
          
    // a- check if the small window still opened, close it.

    // b- Try to write your name on the small window document using
        document.write("Youssef Ashraf")
        //output: it delete all in page and put what is the problem

// 2- Using document object method on the lecture’s HTML page
    // a- Find all images in page by two ways (document default collection and document methods).
        // 1-
            console.log(document.images)
        // 2
        console.log(document.getElementsByTagName("img"))


    //b- Find all options for City drop down list.
            for (let i = 0 ; i<document.getElementsByTagName("option").length ;i++ ){
                console.log(document.getElementsByTagName("option")[i].value)
            } 

    // c- Find all rows(tds) for second table in page.
           console.log(document.getElementsByTagName("table")[1].getElementsByTagName("td") )

    // d- Find all elements that contain class name fontBlue and BGrey.
            console.log(document.querySelectorAll(".fontBlue.Bgrey"))


//4- Display the date with time on the document title (document.title) which changed every second to show time with date. Note: use .toLocalString() method of the Date Object.
            let timerId = setInterval(() => {
              document.title = new Date().toLocaleString();
            }, 1000);

            function writeText(){
                let x = document.getElementById("Name");
                console.log(x.value);
                let y = document.getElementById("Age");
                console.log(y.value);
            }





