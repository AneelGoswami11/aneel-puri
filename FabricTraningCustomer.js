const express = require('express');
const app = express();
//const PORT = 3000;

const PORT = process.env.PORT=3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data (in a real application, this would come from a database)
let users = [
  { id: 1, customerId :"C001" ,name: 'Mr Goswami', email: 'alice@example.com',phone:"123456789", address: "find me on google", branchId: "B001" },
  { id: 2, customerId :"C002",name: 'Aneel Puri', email: 'aneelgoswami@example.com',phone:"123456789", address: "find me on google",branchId: "B002" }
];

let customerDetails = [
  { accountId: 'A0010',openedDate: '1994-05-18', status: 'Active',nominee: "Mr Goswami"},
  {  accountId: 'A0011',openedDate: '1994-05-18', status: 'Active',nominee: "Aneel Puri"}
];

let accountDetails  = [
  { id: 1, customerId :"C001" ,accountId: 'A0010', accountType: 'Savings',balance: "20000.75",balance: "B001"},
  { id: 2, customerId :"C001" ,accountId: 'A0011',accountType: 'Current',balance: "150000",balance: "B001"},
  { id: 3, customerId :"C002" ,accountId: 'A0010', accountType: 'Savings',balance: "50000.75",balance: "B001"},
  { id: 4, customerId :"C002" ,accountId: 'A0011',accountType: 'Current',balance: "550000",balance: "B001"}
  
];

 app.get('/account-details/:accountId', (req, res) => {
  const accountData = customerDetails.find(u => u.accountId === req.params.accountId);
    if (accountData) {
        res.json(accountData);
      } else {
        res.status(404).json({ message: 'Accounts not found' });
    }
  });
  
  app.get('/api/users', (req, res) => {
    res.json(users);
  });


  

  app.get('/accounts/customer/:customerId', (req, res) => {
    const accountData = accountDetails.filter(u => u.customerId === req.params.customerId);
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
