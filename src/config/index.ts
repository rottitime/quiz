//TODO: Prevent this running on every import
import * as dotenv from 'dotenv'
dotenv.config({ path: process.env.NODE_ENV === 'prodcuction' ? '.env.prod' : '.env.dev' })

export type KeyProps = {
  pusherAppId: string
  pusherKey: string
  pusherSecret: string
  pusherCluster: string
  mysqlDb: string
  mysqlHost: string
  mysqlUser: string
  mySqlPassword: string
  mongoURI: string
  port: number
}

const config: KeyProps = {
  pusherAppId: process.env.PUSHERAPPID || '',
  pusherKey: process.env.PUSHERKEY || '',
  pusherSecret: process.env.PUSHERSECRET || '',
  pusherCluster: process.env.PUSHERCLUSTER || '',
  mysqlDb: process.env.MYSQLDB || '',
  mysqlHost: process.env.MYSQLHOST || '',
  mysqlUser: process.env.MYSQLUSER || '',
  mySqlPassword: process.env.MYSQLPASSWORD || '',
  mongoURI: process.env.MONGOURI || '',
  port: Number(process.env.PORT) || 5000
}

export default config
