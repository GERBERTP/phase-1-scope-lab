var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
};

function setBestCustomer(){
    window.bestCustomer = "not bob"
};

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
};

const leastFavoriteCustomer = 'bobs dog'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bobs cat'
};