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
    "name"      : "string, no whistespace, alphanumeric, required",
    "email"     : "string, email, required",
    "password"  : "string, min:8, required",
}
```
- Response :
    - If Success
    ```json 
    {
        "status"    : "success",
        "data"      : {
            "id": "string UUID",
            "name": "string",
            "token": "string jwt",
        }
    }
    ```

    - If Failed
    ```json 
    {
        "status"    : "failed",
        "message"   : "error message",
    }
    ```

## Login

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
    "name"      : "string, no whistespace, alphanumeric, required",
    "email"     : "string, email, required",
    "password"  : "string, min:8, required",
}
```
- Response :
    - If Success
    ```json 
    {
        "status"    : "success",
        "data"      : {
            "id": "string UUID",
            "token": "string jwt",
        }
    }
    ```

    - If Failed
    ```json 
    {
        "status"    : "failed",
        "message"   : "error message",
    }
    ```
<br>