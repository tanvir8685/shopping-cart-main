/*
1 .add event listener to the case plus button
2. get the value inside the case number field(input field)
3.convert the number to an integer
4.calculate the new case number
5.set the value to the case number field 
*/

function updateCaseNumber(isIncrease){
    const caseNumberField=document.getElementById("case-number-field");
    const caseNumberString=caseNumberField.value ;
    const previousCaseNumber=parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease===true){
         newCaseNumber=previousCaseNumber+1;
      

        

    }

    else{
         newCaseNumber=previousCaseNumber-1;
        

        
    }
    // ai dke input field er value update kora hoise
    caseNumberField.value=newCaseNumber;

    // ai dke newCaseNumber ka return kore dicchi karon ai value er koita product kinbo ta ghun kora lagbe
    return newCaseNumber;
   

}
function updateCaseTotalPrice(newCaseNumber){
      const caseTotalPrice=newCaseNumber*59;
  const caseTotalElement=document.getElementById('case-total');
  caseTotalElement.innerText=caseTotalPrice;
  return caseTotalPrice;

}
document.getElementById("btn-case-plus").addEventListener('click',function(){
  
  const newCaseNumber=updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
//   const caseTotalPrice=newCaseNumber*59;
//   const caseTotalElement=document.getElementById('case-total');
//   caseTotalElement.innerText=caseTotalPrice;
})
document.getElementById("btn-case-minus").addEventListener('click',function(){
const newCaseNumber= updateCaseNumber(false);
updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();
// const caseTotalPrice=newCaseNumber*59;
// const caseTotalElement=document.getElementById('case-total');
// caseTotalElement.innerText=caseTotalPrice;


})