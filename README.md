# my pet project
Create backend and front end of pet game

## Tasks

#### UI (front end)
- [ ] create avatar
- [x] create needs buttons - want on the side of each need
- [x] use C3 to generate graph for needs level
- [x] user enters in name for pets
- [x] display pet name on page



#### App (back end)
- [x] capture button click and store in local storage - hunger
- [x] generate time difference from last clicked -hunger
- [x] capture button click and store in local storage - thirst
- [x] generate time difference from last clicked - thirst
- [x] capture button click and store in local storage - happiness
- [x] generate time difference from last clicked -happiness
- [x] capture button click and store in local storage - sleep
- [x] generate time difference from last clicked -sleep
- [x] increment age by day - age
- [x] provide prompt for user to enter in newPet's name
- [x] when user comes back to the page, needs levels with decrement
- [x] need to be able to call to the local storage
- [x] key: need
- [x] value - object; key = level: num/100 and key lastUpdated: datetime
- [x] create pet prototype with all the needs, let user enter in name
- [x] hunger - decay 1 per hour
- [x] thirst - decay 1 per hour
- [x] happiness - decay 1 per hour
- [x] age - start at 0; increments 1 per day
- [x] when any hunger, thirst, happiness or sleep reach 0, reset all values


#### Basic Reqs
- [x] need to store data in local storage
- [x] need to be able to figure out time difference


#### advanced
- [ ] user able to pick from list of avatars
- [ ] pet should age with time, avatar should change as it ages
- [ ] pet can start off as an egg or a seed and grow with time
- [ ] user can create multiple pets
- [ ] have background change per time of day