/* Description: Final Sprint - JavaScript
Author: Sarah Murphy
Date(s): July 31, 2024 - August 2, 2024 */


fetch('./info.json')
    .then((response) => response.json())
    .then(data => {
      let listToHtml = '';
      data.forEach(info => {
         listToHtml += `<p>${fullName(info)}</p>
         <p>${priceDiff(info)}</p>
         <p>${getBirthYear(info)}</p><hr>`
      })

      document.getElementById("scriptcontent").innerHTML = listToHtml;

      data.forEach(info => {
         console.log(fullName(info));
         console.log(priceDiff(info));
         console.log(getBirthYear(info));
      });
    })

    .catch(error => console.error(error));


   // Function to get the full name of the customer
   function fullName(info) {
      return `This customer's name is: ${info.firstname} ${info.lastname}.`;
   }

   // Function to get the price difference in the cost of the house
   function priceDiff(info) {
      return `The difference in the cost of their house from purchase date to today's date is: $${info.housecostcurr - info.housecostpurch}.`;
   }

   // Function to get the customer's birth year
   function getBirthYear(info) {
      const currentYear = new Date().getFullYear();
      return `${info.firstname} is ${info.age}, meaning they were born in ${currentYear - info.age}.`;
   } 