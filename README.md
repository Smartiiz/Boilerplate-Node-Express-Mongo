# Typescript-node-mongo-boilerplate

Template for fast development Typescript NodeJS Express Mongo (T-NEM)

Before start please follow and execute this command bellow

Run `npm install`  *for initialize application*

# Architecture 


- src/route `for each new api start endpoint create new route file and record it into the /route/index.ts`
- src/controller `controller file is called by route file usually is a class named with the same name as route`
- src/modele `modele contain classic modele file (usually a class) used into controller`;


## How that work ? 

Set your configuration : 

- src/config/index.ts  (Containt default app configuration)
- src/config/cors.ts   (Default configuration for cors, update this if you need some header)
- src/config/mongo.ts  (Default configuration for mongodb (login, host, password etc...))

Do not touch or modify !!! 
- src/config/strategy.ts  (except if you want to modify mongo strategy (add hash to password or something like this))

*** Actually this app allow only mongodb method, but in future mysql, psql, mssql will be add ***


### Code Example 
Hello world example : 

- Create a file named hello.ts in route folder and put this :
 
```
import {express} from "../global"
import {HelloController} from "../controller/Hello";   

const Hello: express.Router = express.Router();

Hello.post("/", HelloController.Sample);
Hello.post("/:name", HelloController.Name);

export {Hello}
```

- Create a file named Hello.ts in Controller folder and put this :

```
import {express} from "../global"

class HelloController {

    public static Sample(req : express.Request, res : express.Response) {
        res.send('Hello world');
    }

    public static Name(req : express.Request, res : express.Response) {
        if (req.params && req.params.name) {
           res.send('Hello '+req.params.name);
        }   
    }
} 
export {HelloController}
```

Now we are ready just type in terminal :

`npm run build start`

Your build project is available in `/dist`

## Try login 

- Dont forget to setup your mongo database configuration. `src/config/mongo.ts`
    - Host
    - Username
    - Password
    - Database 
    - Port
    
- Open Postman and try a post at this endpoint : 
    - Endpoint : http://localhost:3001/login
    - Data : ```
    {
        username : "admin",
        password : "admin
    }
           ```
    - Should return you an object like : ```{ passport : "...", 
    user : { Name : "...", ...}
    }```
- By default the application will create automatically an user table and table. You can look for this into
`src/config/database/mongo.ts`
