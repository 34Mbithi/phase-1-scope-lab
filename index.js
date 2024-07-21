var customerName = `bob`;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = `not bob`;

}

function overwriteBestCustomer() {
    bestCustomer = `maybe bob`;
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will cause an error because `leastFavoriteCustomer` is a constant
}