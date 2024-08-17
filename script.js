const busSits = document.getElementsByClassName("theSit");
for(const busSit of busSits){
    busSit.addEventListener("click",function(e){
        // console.log(e.target.innerText);
        const sitName = e.target.innerText;
        const sitClass = "Economy";
        const sitPrice = 550;
        const convSitPrice = parseInt(sitPrice);

        // script for not more than 40 sit system 
        // const sitBaki = convert("leftSit");
        // if(sitBaki+1 > 40){
        //     alert("limit over");
        //     return;
        // }

        const blankDiv = document.getElementById("theBlankDiv");

        const newDiv = document.createElement("div");
        newDiv.classList.add("nwDiv");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = sitName;
        p2.innerText = sitClass;
        p3.innerText = convSitPrice;

        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);

        blankDiv.appendChild(newDiv);
        

        // calling function for total cost 
        totalCost(convSitPrice);
        //calling function for grand total 
        grandTotal();
        //  calling function for sit add sit left 
        sitLeft();
        e.target.setAttribute("disabled",false);
        e.target.style.background = "green";
        e.target.style.color = "white";

    
    })
}
 