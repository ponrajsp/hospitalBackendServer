# hospitalBackendServer

- This is the node js project

### Installation

- Clone this repo
- Run the command `npm i`

### start server

- npm start

### Endpoint curl requests

curl --location 'http://localhost:5000/api/userRegister' \
--header 'Content-Type: application/json' \
--data-raw '{
"firstName": "mockfirstname",
"lastName": "mocklastname",
"email": "mock@gmail.com",
"password": "password123",
"type":"doctor"
}'

curl --location 'http://localhost:5000/api/userLogin' \
--header 'Content-Type: application/json' \
--data-raw '{
"email": "mock@gmail.com",
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

curl --location --request PUT 'http://localhost:5000/api/beds/67e81aba4c2640c99eb01706' \
--header 'Content-Type: application/json' \
--data '{
"name": "Bed AA10",
"status": "reserved",
"type": "General"
}'

API Hosted Link - https://hospitalbackendserver.onrender.com
