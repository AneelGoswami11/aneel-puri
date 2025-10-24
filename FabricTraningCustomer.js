const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data (in a real application, this would come from a database)
let users = [
  { id: 1, customerId :"C001" ,name: 'Mr Goswami', email: 'alice@example.com',phone:"123456789", address: "find me on google", branchId: "B001" },
  { id: 2, customerId :"C002",name: 'Aneel Puri', email: 'aneelgoswami@example.com',phone:"123456789", address: "find me on google",branchId: "B002" }
];

let customerDetails = [
  { openedDate: '1994-05-18', status: 'Active',nominee: "Mr Goswami"},
  {  openedDate: '1994-05-18', status: 'Active',nominee: "Aneel Puri"}
];

let accountDetails  = [
  { id: 1,  customerId :"C001" ,accountId: 'A0010', customerDetails:users[0] ,accountType: 'Savings',balance: "20500.75",balance: "B001", details:customerDetails[0]},
  { id: 1,  customerId :"C002" ,accountId: 'A0011',  customerDetails:users[0] ,account_type: 'Current',balance: "15000",balance: "B001", details:customerDetails[0]}
];


let customerData = [
  
];


  app.get('/api/users', (req, res) => {
    res.json(users);
  });


  

  app.get('/accounts/customer/:customerId', (req, res) => {
    const accountData = accountDetails.find(u => u.customerId === req.params.customerId);
      if (accountData) {
        res.json(accountData);
      } else {
        res.status(404).json({ message: 'Accounts not found' });
    }
  });


  app.get('/customer/:customerId', (req, res) => {
    const customerData = users.find(u =>u.customerId===req.params.customerId);
  if (customerData) {
      res.json(customerData);
    } else {
      res.status(404).json({ message: 'User not found please try again' });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});