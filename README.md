# Code Challenge - Week 4 (SQL Databases)

## Overview

Your front-end developer has created all of the client-side code
necessary to view, add, update, and delete treats from the treats
database. In fact, said developer even stubbed out most of your server-side code, as well! The client side code has been minified, so you don't need to change these files at all. Just fork and clone this repo to get started.

## Database Setup

Create a database called `treatDB` and create the following table in it.

```SQL
CREATE TABLE treats (
	id SERIAL PRIMARY KEY,
	name varchar(255),
	description text,
	pic varchar(255)
);
```
Insert some starter data:

```SQL
INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg');
```

## TODO

### Baseline (Base Mode)
Before we can launch, we at least need to be able to view and add new treats. Finish implementing the following routes in the `routes/treats.js` file:

* `GET /treats` returns a list of potential treats (e.g. cupcakes, goldfish, etc) and their image URLs

* `POST /treats` expects a treat name, description and link to a url image

### Special Sauce (Hard Mode)
Our client will be ecstatic if we can also deliver the ability to update and delete, but consider these "nice-to-haves".

* `PUT /treats/:id` updates the treat description

### Eye of the Tiger (Pro Mode)
**If you're feeling fancy and have some time to spare**, try this one

* `DELETE /treats/:id` deletes a treat
