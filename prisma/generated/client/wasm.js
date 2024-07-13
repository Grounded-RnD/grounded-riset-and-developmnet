
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.1
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.1",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  fullname: 'fullname',
  slug: 'slug',
  phone: 'phone',
  user_img: 'user_img',
  addrress: 'addrress',
  member_since: 'member_since',
  jabatan: 'jabatan',
  bidang: 'bidang',
  role: 'role',
  experience: 'experience',
  created_at: 'created_at'
};

exports.Prisma.UserAuthScalarFieldEnum = {
  id: 'id',
  userEmail: 'userEmail',
  password: 'password',
  last_login: 'last_login'
};

exports.Prisma.ProjectsScalarFieldEnum = {
  id: 'id',
  imgUrl: 'imgUrl',
  title: 'title',
  desc: 'desc',
  link: 'link',
  type: 'type'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Role = exports.$Enums.Role = {
  Users: 'Users',
  Member: 'Member',
  CoFounder: 'CoFounder'
};

exports.Prisma.ModelName = {
  User: 'User',
  UserAuth: 'UserAuth',
  Projects: 'Projects'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\SMK TELKOM 003\\OneDrive\\Documents\\Grounded Workspace\\grounded-riset-and-developmnet\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\SMK TELKOM 003\\OneDrive\\Documents\\Grounded Workspace\\grounded-riset-and-developmnet\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.16.1",
  "engineVersion": "34ace0eb2704183d2c05b60b52fba5c43c13f303",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"./generated/client\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"mongodb\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum Role {\n  Users\n  Member\n  CoFounder\n}\n\ntype SocialLink {\n  title String\n  href  String\n}\n\ntype skillType {\n  skill      String\n  tech_stack String[]\n}\n\nmodel User {\n  id           String      @id @default(auto()) @map(\"_id\") @db.ObjectId\n  email        String      @unique\n  fullname     String\n  userAuth     UserAuth?\n  slug         String?\n  phone        String?\n  user_img     String?\n  addrress     String?\n  member_since String?\n  jabatan      String?\n  bidang       String?\n  role         Role        @default(Users)\n  web          SocialLink?\n  linkedin     SocialLink?\n  instagram    SocialLink?\n  github       SocialLink?\n  whatsapp     SocialLink?\n  skills       skillType[]\n  experience   String[]\n  created_at   DateTime    @default(now())\n}\n\nmodel UserAuth {\n  id         String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userEmail  String    @unique\n  password   String?\n  last_login DateTime?\n  user       User      @relation(references: [email], fields: [userEmail], onDelete: Cascade)\n}\n\nmodel Projects {\n  id     String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  imgUrl String?\n  title  String\n  desc   String?\n  link   String?\n  type   String[]\n}\n",
  "inlineSchemaHash": "c40e7cffc75c97d607d90158c9d83a29f4e151b0800c75664abec0f04dcb45ef",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"_id\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fullname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userAuth\",\"kind\":\"object\",\"type\":\"UserAuth\",\"relationName\":\"UserToUserAuth\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user_img\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"addrress\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"member_since\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jabatan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bidang\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"web\",\"kind\":\"object\",\"type\":\"SocialLink\"},{\"name\":\"linkedin\",\"kind\":\"object\",\"type\":\"SocialLink\"},{\"name\":\"instagram\",\"kind\":\"object\",\"type\":\"SocialLink\"},{\"name\":\"github\",\"kind\":\"object\",\"type\":\"SocialLink\"},{\"name\":\"whatsapp\",\"kind\":\"object\",\"type\":\"SocialLink\"},{\"name\":\"skills\",\"kind\":\"object\",\"type\":\"skillType\"},{\"name\":\"experience\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"created_at\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"UserAuth\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"_id\"},{\"name\":\"userEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"last_login\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserAuth\"}],\"dbName\":null},\"Projects\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"_id\"},{\"name\":\"imgUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"desc\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"link\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    try {
      // try loading the Wasm module from a conditionally module tag
      const loader = (await import('#wasm-engine-loader')).default
      const engine = (await loader).default
      return engine
    } catch (e) {
      // if the conditional module tag is not found, load the Wasm module directly.
      // This will work on Cloudflare, but not on Vercel.
      if (e instanceof Error && e.message.includes('No such module')) {
        const engine = (await import('./query_engine_bg.wasm')).default
        return engine
      }
      throw e
    }
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

