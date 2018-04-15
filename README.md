# first-ember

Ok, I'm just looking around at Ember.js. It's been a while since I've messed about with Handlebars.

Notes for myself:

* Made windows 10 run ember.js faster (but not really THAT fast - https://github.com/felixrieseberg/ember-cli-windows/issues/40)
* Got sass working with `ember install ember-cli-sass` (required a server restart)
* Added a static JSON file for the videos. 
* Got test docker container to work (Note: need to make all 'routes' point to index.html in the `default.conf` file)



## ToDo:

* add favorite sass includes to make purdy.
* load external data? (like from a server or even this github repo!?)
* Getting a liveReload error in the docker container. that shouldn't happen for production? Shouldn't even have that running, yeah?
* what abou the models?




## Running / Development

* `ember serve`
* app at [http://localhost:4200](http://localhost:4200).
* tests at [http://localhost:4200/tests](http://localhost:4200/tests).



### Building

* `ember build --env production`


### Run build in docker:
* `docker-compose -f docker_config/docker/docker-compose.yml up --build`
* navigate to [http://localhost:8088](http://localhost:8088) to see build results

