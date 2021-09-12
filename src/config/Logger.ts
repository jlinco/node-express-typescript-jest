import pino from 'pino'

export const logger = pino({
  name: 'application-server',     // replace this with the name of your application server
  level: 'info',
  prettyPrint: {
    colorize: true,
    translateTime: true
  },
  serializers: {
    req(req) {
      req.body = req.raw.body
      return req
    }
  }
})