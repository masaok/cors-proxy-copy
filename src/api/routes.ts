import * as FetchService from '../services/FetchService'
import { cache } from '../utils/caching'
/**
 * Steps to add a new endpoint:
 *  - Add a route here
 *  - Add the corresponding function in the Controller, Service, and DAO
 *  - Add a function in api.js on the frontend
 */

// RESTful search
// https://stackoverflow.com/a/18933902/10415969

const routes = app => {
  // Public Test
  app.get('/public', (req, res) => {
    res.json('Public Test OK')
  })

  // Request handlers
  app.get('/test', (req, res) => {
    if (!req.user)
      return res.status(401).json({ success: false, message: 'Invalid user to access it.' })
    res.json('Welcome to the Node.js Tutorial! - ' + req.user.name)
  })

  // Any URL
  app.get('/raw/:url', cache(10), FetchService.fetchRaw)
  app.get('/raw/:url/:epoch', cache(10), FetchService.fetchRaw)

  // Post URL
  app.post('/post/:url', FetchService.postRaw)
}

export default routes
