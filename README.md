## Authentication

## Register

- Endpoint :
    - /signup
- Method :
    - POST
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :
```json 
{
    "username" : "string, no whistespace, alphanumeric, required",
    "email" : "string, email, required",
    "password" : "string, min:8, required",
}
```
- Response :
```json 
{
    "message" : "User created successfully."
}
```
<br>