// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("schedule"))
console.log(matchArr);

var addfav=JSON.parse(localStorage.getItem("favourites"))||[];

// function handleFilter() {
//     var selected = document.getElementById("filterVenue").value;
//     console.log(selected);
//     var filteredList = matchArr.filter(function (elem) {
//       return elem.matchNo == selected;
//     });
//     console.log(filteredList);
//     displayData(filteredList);
//   }


displayMatch(matchArr)

function displayMatch(data)
{
    data.forEach(function(elem){
     
        var tr=document.createElement("tr");
        

        var td1=document.createElement("td");
        td1.innerText=elem.matchNo;
        
        var td2=document.createElement("td");
        td2.innerText=elem.teamA;
       
        var td3=document.createElement("td");
        td3.innerText=elem.teamB;
      
        var td4=document.createElement("td");
        td4.innerText=elem.date;
        var td5=document.createElement("td");
        td5.innerText=elem.venue;

        var td6=document.createElement("td");
         td6.innerText="Add as Favourites";
         td6.style.color="green";
         td6.style.cursor="pointer";
         td6.addEventListener("click",function(){
          addFavourate(elem);
         })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    });
}
   function addFavourate(elem)
   {
    addfav.push(elem);
    localStorage.setItem("favourites",JSON.stringify(addfav));
   }