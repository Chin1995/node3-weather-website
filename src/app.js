'use strict'
/*
//Webserver weather app Hello express
const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express!");
});
app.get("/help", (req, res) => {
  res.send("Help page");
});

// app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});



//Challenge
//Goal: setup two new routes
//1. Setup about route and render a page title
//2. Set up a weather route and render a page title
//3. Test your work by visiting both in the browser

const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express!");
});
app.get("/help", (req, res) => {
  res.send("Help page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/weather", (req, res) => {
  res.send("Weather page");
});
// app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});



//Serving Up HTML and JSON
const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Chin",
      age: 26,
    },
    {
      name: "Kzel",
      age: 27,
    },
  ]);
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/weather", (req, res) => {
  res.send("Weather page");
});
// app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

//Challenge for serving up HTML and JSON
//Goal; Update routes
//1. Setup about route to render a title with HTML
//2. Setup a weather route to send back JSON
//   -- object with forecast and location strings
// 3. Test your work by visiitng both in the browser

const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Chin",
      age: 26,
    },
    {
      name: "Kzel",
      age: 27,
    },
  ]);
});
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
app.get("/weather", (req, res) => {
  res.send({
    Location: "Batangas Philippines",
    Weather:
      "Partly cloudy expect rain, Current temperature is 28 but feels like 29",
  });
});
// app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

// Serving up static assets (kasabay nito ginawa yung index html sa public folder)
const path = require("path");
const express = require("express");
// console.log(__dirname);
// console.log(path.join(__dirname, "../public")); //binura na ito at yung directory ginawang const path
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Chin",
      age: 26,
    },
    {
      name: "Kzel",
      age: 27,
    },
  ]);
});
app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
app.get("/weather", (req, res) => {
  res.send({
    Location: "Batangas Philippines",
    Weather:
      "Partly cloudy expect rain, Current temperature is 28 but feels like 29",
  });
});
// app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

//Challenge
//Goal: Create two more HTML files
//1. Create HTML page for about with 'About' title
//2. Create a HTML page forhelp with 'Help' title
//3. Remove the old route handlers for both
//4. Visit both in the browser to test your work
const path = require("path");
const express = require("express");
// console.log(__dirname);
// console.log(path.join(__dirname, "../public")); //binura na ito at yung directory ginawang const path
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// app.get("", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });
// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Chin",
//       age: 26,
//     },
//     {
//       name: "Kzel",     remove all after gawan ng HTML
//       age: 27,
//     },
//   ]);
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });
app.get("/weather", (req, res) => {
  res.send({
    Location: "Batangas Philippines",
    Weather:
      "Partly cloudy expect rain, Current temperature is 28 but feels like 29",
  });
});
// app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


//Serving up CSS, JS, images and more //Dynamic pages with templating since wlaa binago dito

const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index');
});

app.get('/weather', (req, res) => {
  res.send({
    Location: 'Batangas Philippines',
    Weather:
      'Partly cloudy expect rain, Current temperature is 28 but feels like 29',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});


const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'Chin',
      age: 26,
    },
    {
      name: 'Kzel',
      age: 27,
    },
  ]);
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});
app.get('/weather', (req, res) => {
  res.send({
    Location: 'Batangas Philippines',
    Weather:
      'Partly cloudy expect rain, Current temperature is 28 but feels like 29',
  });
});
// app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});


const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
  res.send({
    Location: 'Batangas Philippines',
    Weather:
      'Partly cloudy expect rain, Current temperature is 28 but feels like 29',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});


const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index');
});

app.get('/weather', (req, res) => {
  res.send({
    Location: 'Batangas Philippines',
    Weather:
      'Partly cloudy expect rain, Current temperature is 28 but feels like 29',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});

const path = require("path");
const express = require("express");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");



// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);



// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "WeatherBAITO",
name: "CHIN",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "No one but me",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
title: "Help",
name: "This is some helpful text.",
});
});



app.get("/weather", (req, res) => {
res.send({
forecast: "It is snowing",
location: "Philadelphia",
});
});



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});



//Customizing the views directory
const path = require("path");
const express = require("express");
const hbs = require("hbs");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weatherdaw",
name: "CHIN",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "No one but me",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald Bauan",
});
});



app.get("/weather", (req, res) => {
res.send({
forecast: "It is snowing",
location: "Philadelphia",
});
});



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});


//Challenge
//Goal:Create a partial for the footer
//1. Setup the template for the footer partial "Created by Some Name"
//2. Render the partial at the bottom of all three pages
//3. Test your work by visiting all three pages.

//Customizing the views directory
const path = require("path");
const express = require("express");
const hbs = require("hbs");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "CHIN",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "No one but me",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald Bauan",
});
});



app.get("/weather", (req, res) => {
res.send({
forecast: "It is snowing",
location: "Philadelphia",
});
});



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});


//404 pages
const path = require("path");
const express = require("express");
const hbs = require("hbs");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "CHIN",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "No one but me",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald Bauan",
});
});



app.get("/weather", (req, res) => {
res.send({
forecast: "It is snowing",
location: "Philadelphia",
});
});

//error hbs
app.get('/help/*', (req, res) => {
  res.render('error', {
    text: 'Help article not found',
    name: "Jerald",
  })
})
app.get('*', (req, res) => {
  res.render('error', {
    text: 'Page not found',
    name: "Jerald",
  })
})



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});

//Challenge Goal: Create and render a 404 page with handlebars
//1. Setup the template to render the header and footer
//2. Setup the template to render an error message in a paragraph
//3. Render the template for both 404 routes
// -- Page not found
// -- Help article not found.
//4. Test your work. Visit /what and /help/units

const path = require("path");
const express = require("express");
const hbs = require("hbs");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "Jerald",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "Jerald",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald",
});
});



app.get("/weather", (req, res) => {
res.send({
forecast: "It is snowing",
location: "Philadelphia",
});
});

//error hbs
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Help article not found',
    name: "Jerald",
  })
})
app.get('*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Page not found',
    name: "Jerald",
  })
})



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});




const path = require("path");
const express = require("express");
const hbs = require("hbs");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "Jerald",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "Jerald",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald",
});
});



app.get("/weather", (req, res) => {
res.send({
forecast: "It is snowing",
location: "Philadelphia",
});
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
     return res.send({
        error: 'You must provide a search term'
      })
  }
  console.log(req.query.search);
  res.send({
    products: []
  })
})

//error hbs
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Help article not found',
    name: "Jerald",
  })
})
app.get('*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Page not found',
    name: "Jerald",
  })
})



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});



//The query string
//Goal: Update weather endpoint to accept address
//1. No address?Send back error message
//2. Address? Send back the static JSON
// - Add address property onto JSON which returns the provided address
//3. Test /weather and /weather/address=Philadelphia

const path = require("path");
const express = require("express");
const hbs = require("hbs");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "Jerald",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "Jerald",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald",
});
});



app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
       error: 'You must provide an'
     })
 }
 console.log(req.query.address);
 res.send({
   weather: {
     forecast: 'It will rain',
     location: 'Sa amin',
     address: req.query.address
   }
 })
})



app.get('/products', (req, res) => {
  if (!req.query.search) {
     return res.send({
        error: 'You must provide a search term'
      })
  }
  console.log(req.query.search);
  res.send({
    products: []
  })
})

//error hbs
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Help article not found',
    name: "Jerald",
  })
})
app.get('*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Page not found',
    name: "Jerald",
  })
})



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});









//Building JSON HTTP endpoint
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const path = require("path");
const express = require("express");
const hbs = require("hbs");



const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "Jerald",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "Jerald",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald",
});
});



app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
       error: 'You must provide an address'
     })
 }
 geocode(req.query.address, (error, { latitude, longitude,location } = {}) => {
    if (error) {
      return res.send ({ error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }

      res.send ({
        forecast: forecastData, location,
        address: req.query.address
      })
    })
 })
//  console.log(req.query.address);
//  res.send({
//    weather: {
//      forecast: 'It will rain',
//      location: 'Sa amin',
//      address: req.query.address
//    }
//  })
})
//Goal: Wire up /weather
//1. Requre geocode/forecast into app.js
//2. Use the address to geocode
//3. Use the coodinates to get forecast
//4. Send back the real forecast and location


app.get('/products', (req, res) => {
  if (!req.query.search) {
     return res.send({
        error: 'You must provide a search term'
      })
  }
  console.log(req.query.search);
  res.send({
    products: []
  })
})

//error hbs
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Help article not found',
    name: "Jerald",
  })
})
app.get('*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Page not found',
    name: "Jerald",
  })
})



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});


//Building JSON HTTP endpoint
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const { response } = require("express");
const e = require("express");
const app = express();



// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "Jerald",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "Jerald",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald",
});
});



app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
       error: 'You must provide an address'
     })
 }
 geocode(req.query.address, (error, { latitude, longitude,location } = {}) => {
    if (error) {
      return res.send ({ error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }

      res.send ({
        forecast: forecastData, location,
        address: req.query.address
      })
    })
 })
//  console.log(req.query.address);
//  res.send({
//    weather: {
//      forecast: 'It will rain',
//      location: 'Sa amin',
//      address: req.query.address
//    }
//  })
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
     return res.send({
        error: 'You must provide a search term'
      })
  }
  console.log(req.query.search);
  res.send({
    products: []
  })
})

//error hbs
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Help article not found',
    name: "Jerald",
  })
})
app.get('*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Page not found',
    name: "Jerald",
  })
})



app.listen(3000, () => {
console.log("Server is up on port 3000.");
});



//Deploying node js to Heroku


const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const { response } = require("express");
const e = require("express");
const app = express();
const port = process.env.PORT || 3000;


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectoryPath));



// index hbs
app.get("", (req, res) => {
res.render("index", {
title: "Weather",
name: "Jerald",
});
});



// about hbs
app.get("/about", (req, res) => {
res.render("about", {
title: "About Me",
name: "Jerald",
});
});



// help hbs
app.get("/help", (req, res) => {
res.render("Help", {
helptext: " This is some helpful text",
title: "Help",
name: "Jerald",
});
});



app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
       error: 'You must provide an address'
     })
 }
 geocode(req.query.address, (error, { latitude, longitude,location } = {}) => {
    if (error) {
      return res.send ({ error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }

      res.send ({
        forecast: forecastData, location,
        address: req.query.address
      })
    })
 })

})

app.get('/products', (req, res) => {
  if (!req.query.search) {
     return res.send({
        error: 'You must provide a search term'
      })
  }
  console.log(req.query.search);
  res.send({
    products: []
  })
})

//error hbs
app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Help article not found',
    name: "Jerald",
  })
})
app.get('*', (req, res) => {
  res.render('error', {
    title: 'ERROR 404: Give me your Money!',
    text: 'Page not found',
    name: "Jerald",
  })
})



app.listen(port, () => {
console.log("Server is up on port " + port);
});
*/