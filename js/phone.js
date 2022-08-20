function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;

    }

    else {
        newPhoneNumber = previousPhoneNumber - 1;



    }
    // ai dke input field er value update kora hoise
    phoneNumberField.value = newPhoneNumber;

    // ai dke newCaseNumber ka return kore dicchi karon ai value er koita product kinbo ta ghun kora lagbe
    return newPhoneNumber;


}
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
    return phoneTotalPrice;

}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

})
document.getElementById("btn-phone-minus").addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    // const caseTotalPrice=newCaseNumber*59;
    // const caseTotalElement=document.getElementById('case-total');
    // caseTotalElement.innerText=caseTotalPrice;


})