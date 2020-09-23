var express = require("express");
const fetch = require("node-fetch");
var app = express();

/**---------------------------------------
 * Check the env
 * ---------------------------------------
 */
if(process.env.NODE_ENV === "development") {
  var api_key = process.env.DEV_TOKEN;
  var serverHost = `http://${process.env.API_DEV_URL}`;
} else {
  var api_key = process.env.STAGING_TOKEN;
  var serverHost = `https://${process.env.API_STAGING_URL}`;
}

/**----------------------------------------
 * APP ENV
 * ----------------------------------------
 */
app.get('/myEnv', (req, res) => {
  res.send(process.env.NODE_ENV)
})


/**----------------------------------------
 * ACCOUNTS Routes
 * ----------------------------------------
 */
app.get('/accounts', (req, res) => {
  fetch(`${serverHost}/api/v1/accounts`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * CONTACTS Routes
 * ----------------------------------------
 */
app.get('/contacts', (req, res) => {
  fetch(`${serverHost}/api/v1/contacts`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * PRODUCTS Routes
 * ----------------------------------------
 */
// LIST
app.get('/products', (req, res) => {
  fetch(`${serverHost}/api/v1/products`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

// SHOW
app.get('/products/:product_id', (req, res) => {
  fetch(`${serverHost}/api/v1/products/${req.params.product_id}`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * ORDERS Routes
 * ----------------------------------------
 */
app.get('/orders', (req, res) => {
  fetch(`${serverHost}/api/v1/orders`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * INVOICES Routes
 * ----------------------------------------
 */
app.get('/invoices', (req, res) => {
  fetch(`${serverHost}/api/v1/invoices`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * TICKETS Routes
 * ----------------------------------------
 */
app.get('/tickets', (req, res) => {
  fetch(`${serverHost}/api/v1/tickets`)
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

/**----------------------------------------
 * COMMENTS Routes
 * ----------------------------------------
 */
app.get('/tickets/:ticket_id/comments', (req, res) => {
  fetch(`${serverHost}/api/v1/tickets/${req.params.ticket_id}/comments`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * CONVERSATIONS Routes
 * ----------------------------------------
 */
app.get('/conversations', (req, res) => {
  fetch(`${serverHost}/api/v1/conversations`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

/**----------------------------------------
 * MESSAGES Routes
 * ----------------------------------------
 */
app.get('/conversations/:conversation_id/messages', (req, res) => {
  fetch(`${serverHost}/api/v1/conversations/${req.params.conversation_id}/messages`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * ROLES Routes
 * ----------------------------------------
 */
app.get('/roles', (req, res) => {
  fetch(`${serverHost}/api/v1/roles`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * EVENTS Routes
 * ----------------------------------------
 */
app.get('/events', (req, res) => {
  fetch(`${serverHost}/api/v1/events`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})


/**----------------------------------------
 * APPOINTMEMTS Routes
 * ----------------------------------------
 */
app.get('/appointments', (req, res) => {
  fetch(`${serverHost}/api/v1/appointments`, {
    headers: {
      "Authorization": `Bearer ${api_key}`
    }
  })
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch((err) => console.log(err));
})

module.exports = {
  path: '/api/',
  handler: app
}