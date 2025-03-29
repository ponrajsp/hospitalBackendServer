# hospitalBackendServer

### Installation 
- Clone this repo 
- Do `npm i`

### start server
- npm start 

### Endpoint curl requests 
curl --location 'http://localhost:5000/api/userRegister' \
--header 'Content-Type: application/json' \
--data-raw '{
  "firstName": "cdc  test 22",
  "lastName": "hcl",
  "email": "cdcdcdc@gmail.com",
  "password": "password123",
  "type":"doctor"
}'

curl --location 'http://localhost:5000/api/userLogin' \
--header 'Content-Type: application/json' \
--data-raw '{
  "emailId": "test@gmail.com",
  "password": "password123"
}'

curl --location 'http://localhost:5000/api/beds' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Bed AA10",
  "status": "occupied",
  "type": "General",
  "createdDate": "2025-03-29T10:30:00Z",
  "updatedDate": "2025-03-29T10:30:00Z",
  "createdBy": "adminUser",
  "updatedBy": "adminUser"
}'

curl --location 'http://localhost:5000/api/beds'

curl --location --request PUT 'http://localhost:5000/api/beds/67e7d959dda27465dc888550' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Bed A102",
  "status": "reee",
  "type": "ICU",
  "updatedBy": "adminUser"
}'

API Hosted Link - https://hospitalbackendserver.onrender.com

Hosted url - https://hospitalbackendserver.onrender.com
