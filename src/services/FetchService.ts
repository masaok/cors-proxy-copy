import fetch from 'node-fetch'
import { Request } from 'express'

export const fetchRaw = async (req: Request, res) => {
  const { url } = req.params

  const decoded = decodeURIComponent(url)

  const response = await fetch(decoded)
  const body = await response.text()

  res.set('Content-Type', 'text/plain')
  res.send(body)
}

export const postRaw = async (req: Request, res) => {
  // const { url } = req.params

  const url =
    'https%3A%2F%2Fus-west-2.aws.data.mongodb-api.com%2Fapp%2Fdata-ckdtn%2Fendpoint%2Fdata%2Fv1%2Faction%2Ffind'

  const decoded = decodeURIComponent(url)

  const response = await fetch(decoded, {
    method: 'POST',
  })
  const body = await response.text()

  res.set('Content-Type', 'text/plain')
  res.send(body)
}
