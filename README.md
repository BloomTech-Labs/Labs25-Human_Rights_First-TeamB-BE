# Human Rights First - Incidents of Excessive Use of Force by Police

### Enviornment Variables

- `PORT` - 8000
- `DS_API_URL` - 'http://hrf-teamb.eba-3253gq3h.us-east-1.elasticbeanstalk.com/getdata'

See .env.sample for example values


## Technologies used
   - Node.js
   - Express.js
   - Knex.js
   
## Endpoints
### GET
#### returns database as JSON type
---
Example: `get(api.example/api)`
```
ID: exampleIDstring
Event: {
    id: exampleIDstring,
    state: exampleState
    city: exampleCity
    date: exampleTime
    title: exampleTitle
    description: an example at example example happened near example where example example
}
```
