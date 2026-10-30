const newUser = {
  name: "Ana Rocha",
  email: `qa_${Date.now()}@test.com`,
  password: "12345",
  firstName: "Ana",
  lastName: "Rocha",
  address: "Rua Teste, 123",
  country: "United States",
  state: "Goiás",
  city: "Goiânia",
  zipcode: "74000-000",
  mobileNumber: "62999999999"
}
const staticUser = {
  email: "testedaana@teste.com",
  password: "12345",
  name: "Teste da Ana"
};
const searchData = {
    validProduct: "Top"
};
const paymentData = {
    nameOnCard: 'Ana QA',
    cardNumber: '1234567890123456',
    cvc: '123',
    expirationMonth: '12',
    expirationYear: '2030'
};
export { newUser, staticUser, searchData, paymentData };