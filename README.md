# ruby-vue-app

App was built following a youtube video to brush up on ruby on rails skills. Quite a fun little project!
https://www.youtube.com/watch?v=o_z5pol6vZE&list=PLQIWx2J-GIASpN2yzAtdwoxILS7qld1XJ&index=5


I didnt set up the tailwind correctly on this project because the basis was to brush up on ruby. His design is much more pleasant with tailwind than mine.

Credit goes to justalever
Github link to initial project: https://github.com/justalever/recordstore/tree/master

## Development
### Vue app
```cd ui && npm run dev```

## Rails
**Make sure to change origin in cors.rb to correct frontend port <http://localhost:8080>**
```cd backend && rails s```

## Redis
Application requires redis so have a redis server running in background on default port
