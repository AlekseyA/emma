# Setup

create `.env` file from file `.env.sample`

create mysql database `emma`

install dependencies 
```
npm i
```

run migrations 
```
npm run migrate
```

run seeds 
```
npm run seeds
```

run service
```
npm run dev
```

make a test call to `localhost:8080/users/1?id=1&fromDate=2021-11-04&endDate=2021-11-10`

# Tips

## control memory 
can be done with --max-old-space-size=value to increace available memory for garbage collector

## cluster and load balancer
Main problem how to handle a lot of requests to huge number of data. And the first thing we can do here is to make a distributed system under the control of a load balancer in order to evenly distribute the load on server instances

## streams
since even if there are many instances, the memory on them is finite. therefore, to avoid problems, we can use streams

## smart caching
- one of idea is to save data for some periods and then compare them to avoid extra calls to DB (TBD)
- probably would be better to make one intance of cache layer per one nore intance

## cache invalidation
when new transactions for user are appeared we need to invalidate cache

## cache on DB level
I tried to implement smth like this https://github.com/AlekseyA/react-node-app/blob/master/services/cache.js (mine repo) but couldn't do that with streaming