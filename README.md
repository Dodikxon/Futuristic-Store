## FIRST STEPS
##### Install PostgreSQL
##### Install NodeJS
##### Use `git clone https"//github.com/Dodikxon/Futuristic-Store.git`
##### Use `cd backend` and `npm i`
##### Use `cd frontend` and `npm i`
##### Change file .env on `Futuristic-Store/backend/`
___
##### Going http://localhost:3000
##### Register on site
##### Going http://localhost:3000/sale and create product
___
## API
#### Users:
##### http://localhost:5000/auth/login `POST` - login
##### http://localhost:5000/auth/registration `POST` - register
##### http://localhost:5000/auth/:token `GET` - decode token
##### http://localhost:5000/users `POST` - create user
##### http://localhost:5000/users `GET` - get all users
##### http://localhost:5000/users/:username `GET` - get user by username
___
#### Products:
##### http://localhost:5000/products/game/:game `GET` - get product by game
##### http://localhost:5000/products/product/:title `GET` - get product by title
##### http://localhost:5000/products/create `POST` - create product
##### http://localhost:5000/products `GET` - get all products
##### http://localhost:5000/products/:filename `GET` - get product image