
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model clusterConfig
 * 
 */
export type clusterConfig = $Result.DefaultSelection<Prisma.$clusterConfigPayload>
/**
 * Model cluster
 * 
 */
export type cluster = $Result.DefaultSelection<Prisma.$clusterPayload>
/**
 * Model serviceNode
 * 
 */
export type serviceNode = $Result.DefaultSelection<Prisma.$serviceNodePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const clusterMode: {
  primary_standby: 'primary_standby',
  partial_primary_standby: 'partial_primary_standby'
};

export type clusterMode = (typeof clusterMode)[keyof typeof clusterMode]


export const loadBalancingType: {
  round_robin: 'round_robin',
  least_connections: 'least_connections',
  weighted_round_robin: 'weighted_round_robin',
  random: 'random',
  ip_hash: 'ip_hash',
  least_response_time: 'least_response_time',
  none: 'none'
};

export type loadBalancingType = (typeof loadBalancingType)[keyof typeof loadBalancingType]

}

export type clusterMode = $Enums.clusterMode

export const clusterMode: typeof $Enums.clusterMode

export type loadBalancingType = $Enums.loadBalancingType

export const loadBalancingType: typeof $Enums.loadBalancingType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs>;

  /**
   * `prisma.clusterConfig`: Exposes CRUD operations for the **clusterConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClusterConfigs
    * const clusterConfigs = await prisma.clusterConfig.findMany()
    * ```
    */
  get clusterConfig(): Prisma.clusterConfigDelegate<ExtArgs>;

  /**
   * `prisma.cluster`: Exposes CRUD operations for the **cluster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clusters
    * const clusters = await prisma.cluster.findMany()
    * ```
    */
  get cluster(): Prisma.clusterDelegate<ExtArgs>;

  /**
   * `prisma.serviceNode`: Exposes CRUD operations for the **serviceNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceNodes
    * const serviceNodes = await prisma.serviceNode.findMany()
    * ```
    */
  get serviceNode(): Prisma.serviceNodeDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    project: 'project',
    clusterConfig: 'clusterConfig',
    cluster: 'cluster',
    serviceNode: 'serviceNode',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "project" | "clusterConfig" | "cluster" | "serviceNode" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      clusterConfig: {
        payload: Prisma.$clusterConfigPayload<ExtArgs>
        fields: Prisma.clusterConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clusterConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clusterConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>
          }
          findFirst: {
            args: Prisma.clusterConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clusterConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>
          }
          findMany: {
            args: Prisma.clusterConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>[]
          }
          create: {
            args: Prisma.clusterConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>
          }
          createMany: {
            args: Prisma.clusterConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clusterConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>[]
          }
          delete: {
            args: Prisma.clusterConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>
          }
          update: {
            args: Prisma.clusterConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>
          }
          deleteMany: {
            args: Prisma.clusterConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clusterConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clusterConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterConfigPayload>
          }
          aggregate: {
            args: Prisma.ClusterConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClusterConfig>
          }
          groupBy: {
            args: Prisma.clusterConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.clusterConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterConfigCountAggregateOutputType> | number
          }
        }
      }
      cluster: {
        payload: Prisma.$clusterPayload<ExtArgs>
        fields: Prisma.clusterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clusterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clusterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>
          }
          findFirst: {
            args: Prisma.clusterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clusterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>
          }
          findMany: {
            args: Prisma.clusterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>[]
          }
          create: {
            args: Prisma.clusterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>
          }
          createMany: {
            args: Prisma.clusterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clusterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>[]
          }
          delete: {
            args: Prisma.clusterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>
          }
          update: {
            args: Prisma.clusterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>
          }
          deleteMany: {
            args: Prisma.clusterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clusterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clusterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clusterPayload>
          }
          aggregate: {
            args: Prisma.ClusterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCluster>
          }
          groupBy: {
            args: Prisma.clusterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClusterGroupByOutputType>[]
          }
          count: {
            args: Prisma.clusterCountArgs<ExtArgs>
            result: $Utils.Optional<ClusterCountAggregateOutputType> | number
          }
        }
      }
      serviceNode: {
        payload: Prisma.$serviceNodePayload<ExtArgs>
        fields: Prisma.serviceNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serviceNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serviceNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>
          }
          findFirst: {
            args: Prisma.serviceNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serviceNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>
          }
          findMany: {
            args: Prisma.serviceNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>[]
          }
          create: {
            args: Prisma.serviceNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>
          }
          createMany: {
            args: Prisma.serviceNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.serviceNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>[]
          }
          delete: {
            args: Prisma.serviceNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>
          }
          update: {
            args: Prisma.serviceNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>
          }
          deleteMany: {
            args: Prisma.serviceNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serviceNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.serviceNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceNodePayload>
          }
          aggregate: {
            args: Prisma.ServiceNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceNode>
          }
          groupBy: {
            args: Prisma.serviceNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.serviceNodeCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceNodeCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    clusters: number
    config: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clusters?: boolean | ProjectCountOutputTypeCountClustersArgs
    config?: boolean | ProjectCountOutputTypeCountConfigArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountClustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clusterWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clusterConfigWhereInput
  }


  /**
   * Count Type ClusterConfigCountOutputType
   */

  export type ClusterConfigCountOutputType = {
    clusters: number
  }

  export type ClusterConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clusters?: boolean | ClusterConfigCountOutputTypeCountClustersArgs
  }

  // Custom InputTypes
  /**
   * ClusterConfigCountOutputType without action
   */
  export type ClusterConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterConfigCountOutputType
     */
    select?: ClusterConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClusterConfigCountOutputType without action
   */
  export type ClusterConfigCountOutputTypeCountClustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clusterWhereInput
  }


  /**
   * Count Type ClusterCountOutputType
   */

  export type ClusterCountOutputType = {
    nodes: number
  }

  export type ClusterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | ClusterCountOutputTypeCountNodesArgs
  }

  // Custom InputTypes
  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClusterCountOutputType
     */
    select?: ClusterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClusterCountOutputType without action
   */
  export type ClusterCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceNodeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    description: string | null
    slug: string | null
    base_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    name: string | null
    description: string | null
    slug: string | null
    base_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    owner_id: number
    name: number
    description: number
    slug: number
    base_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
    slug?: true
    base_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
    slug?: true
    base_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    owner_id?: true
    name?: true
    description?: true
    slug?: true
    base_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    owner_id: string
    name: string
    description: string | null
    slug: string
    base_url: string
    created_at: Date
    updated_at: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    base_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    clusters?: boolean | project$clustersArgs<ExtArgs>
    config?: boolean | project$configArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type projectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    base_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["project"]>

  export type projectSelectScalar = {
    id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    slug?: boolean
    base_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clusters?: boolean | project$clustersArgs<ExtArgs>
    config?: boolean | project$configArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      clusters: Prisma.$clusterPayload<ExtArgs>[]
      config: Prisma.$clusterConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      name: string
      description: string | null
      slug: string
      base_url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {projectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectCreateManyAndReturnArgs>(args?: SelectSubset<T, projectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clusters<T extends project$clustersArgs<ExtArgs> = {}>(args?: Subset<T, project$clustersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findMany"> | Null>
    config<T extends project$configArgs<ExtArgs> = {}>(args?: Subset<T, project$configArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */ 
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'String'>
    readonly owner_id: FieldRef<"project", 'String'>
    readonly name: FieldRef<"project", 'String'>
    readonly description: FieldRef<"project", 'String'>
    readonly slug: FieldRef<"project", 'String'>
    readonly base_url: FieldRef<"project", 'String'>
    readonly created_at: FieldRef<"project", 'DateTime'>
    readonly updated_at: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project createManyAndReturn
   */
  export type projectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
  }

  /**
   * project.clusters
   */
  export type project$clustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    where?: clusterWhereInput
    orderBy?: clusterOrderByWithRelationInput | clusterOrderByWithRelationInput[]
    cursor?: clusterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * project.config
   */
  export type project$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    where?: clusterConfigWhereInput
    orderBy?: clusterConfigOrderByWithRelationInput | clusterConfigOrderByWithRelationInput[]
    cursor?: clusterConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClusterConfigScalarFieldEnum | ClusterConfigScalarFieldEnum[]
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model clusterConfig
   */

  export type AggregateClusterConfig = {
    _count: ClusterConfigCountAggregateOutputType | null
    _avg: ClusterConfigAvgAggregateOutputType | null
    _sum: ClusterConfigSumAggregateOutputType | null
    _min: ClusterConfigMinAggregateOutputType | null
    _max: ClusterConfigMaxAggregateOutputType | null
  }

  export type ClusterConfigAvgAggregateOutputType = {
    health_check_interval: number | null
  }

  export type ClusterConfigSumAggregateOutputType = {
    health_check_interval: number | null
  }

  export type ClusterConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    config_slug: string | null
    project_id: string | null
    clusterMode: $Enums.clusterMode | null
    load_balancing_type: $Enums.loadBalancingType | null
    health_check_interval: number | null
    failover_enabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClusterConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    config_slug: string | null
    project_id: string | null
    clusterMode: $Enums.clusterMode | null
    load_balancing_type: $Enums.loadBalancingType | null
    health_check_interval: number | null
    failover_enabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClusterConfigCountAggregateOutputType = {
    id: number
    name: number
    config_slug: number
    project_id: number
    clusterMode: number
    load_balancing_type: number
    health_check_interval: number
    failover_enabled: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClusterConfigAvgAggregateInputType = {
    health_check_interval?: true
  }

  export type ClusterConfigSumAggregateInputType = {
    health_check_interval?: true
  }

  export type ClusterConfigMinAggregateInputType = {
    id?: true
    name?: true
    config_slug?: true
    project_id?: true
    clusterMode?: true
    load_balancing_type?: true
    health_check_interval?: true
    failover_enabled?: true
    created_at?: true
    updated_at?: true
  }

  export type ClusterConfigMaxAggregateInputType = {
    id?: true
    name?: true
    config_slug?: true
    project_id?: true
    clusterMode?: true
    load_balancing_type?: true
    health_check_interval?: true
    failover_enabled?: true
    created_at?: true
    updated_at?: true
  }

  export type ClusterConfigCountAggregateInputType = {
    id?: true
    name?: true
    config_slug?: true
    project_id?: true
    clusterMode?: true
    load_balancing_type?: true
    health_check_interval?: true
    failover_enabled?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClusterConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clusterConfig to aggregate.
     */
    where?: clusterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusterConfigs to fetch.
     */
    orderBy?: clusterConfigOrderByWithRelationInput | clusterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clusterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusterConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clusterConfigs
    **/
    _count?: true | ClusterConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClusterConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClusterConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterConfigMaxAggregateInputType
  }

  export type GetClusterConfigAggregateType<T extends ClusterConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateClusterConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClusterConfig[P]>
      : GetScalarType<T[P], AggregateClusterConfig[P]>
  }




  export type clusterConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clusterConfigWhereInput
    orderBy?: clusterConfigOrderByWithAggregationInput | clusterConfigOrderByWithAggregationInput[]
    by: ClusterConfigScalarFieldEnum[] | ClusterConfigScalarFieldEnum
    having?: clusterConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterConfigCountAggregateInputType | true
    _avg?: ClusterConfigAvgAggregateInputType
    _sum?: ClusterConfigSumAggregateInputType
    _min?: ClusterConfigMinAggregateInputType
    _max?: ClusterConfigMaxAggregateInputType
  }

  export type ClusterConfigGroupByOutputType = {
    id: string
    name: string
    config_slug: string
    project_id: string
    clusterMode: $Enums.clusterMode
    load_balancing_type: $Enums.loadBalancingType
    health_check_interval: number
    failover_enabled: boolean
    created_at: Date
    updated_at: Date
    _count: ClusterConfigCountAggregateOutputType | null
    _avg: ClusterConfigAvgAggregateOutputType | null
    _sum: ClusterConfigSumAggregateOutputType | null
    _min: ClusterConfigMinAggregateOutputType | null
    _max: ClusterConfigMaxAggregateOutputType | null
  }

  type GetClusterConfigGroupByPayload<T extends clusterConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterConfigGroupByOutputType[P]>
        }
      >
    >


  export type clusterConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    config_slug?: boolean
    project_id?: boolean
    clusterMode?: boolean
    load_balancing_type?: boolean
    health_check_interval?: boolean
    failover_enabled?: boolean
    created_at?: boolean
    updated_at?: boolean
    clusters?: boolean | clusterConfig$clustersArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    _count?: boolean | ClusterConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clusterConfig"]>

  export type clusterConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    config_slug?: boolean
    project_id?: boolean
    clusterMode?: boolean
    load_balancing_type?: boolean
    health_check_interval?: boolean
    failover_enabled?: boolean
    created_at?: boolean
    updated_at?: boolean
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clusterConfig"]>

  export type clusterConfigSelectScalar = {
    id?: boolean
    name?: boolean
    config_slug?: boolean
    project_id?: boolean
    clusterMode?: boolean
    load_balancing_type?: boolean
    health_check_interval?: boolean
    failover_enabled?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type clusterConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clusters?: boolean | clusterConfig$clustersArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    _count?: boolean | ClusterConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clusterConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $clusterConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clusterConfig"
    objects: {
      clusters: Prisma.$clusterPayload<ExtArgs>[]
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      config_slug: string
      project_id: string
      clusterMode: $Enums.clusterMode
      load_balancing_type: $Enums.loadBalancingType
      health_check_interval: number
      failover_enabled: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["clusterConfig"]>
    composites: {}
  }

  type clusterConfigGetPayload<S extends boolean | null | undefined | clusterConfigDefaultArgs> = $Result.GetResult<Prisma.$clusterConfigPayload, S>

  type clusterConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clusterConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClusterConfigCountAggregateInputType | true
    }

  export interface clusterConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clusterConfig'], meta: { name: 'clusterConfig' } }
    /**
     * Find zero or one ClusterConfig that matches the filter.
     * @param {clusterConfigFindUniqueArgs} args - Arguments to find a ClusterConfig
     * @example
     * // Get one ClusterConfig
     * const clusterConfig = await prisma.clusterConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clusterConfigFindUniqueArgs>(args: SelectSubset<T, clusterConfigFindUniqueArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClusterConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clusterConfigFindUniqueOrThrowArgs} args - Arguments to find a ClusterConfig
     * @example
     * // Get one ClusterConfig
     * const clusterConfig = await prisma.clusterConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clusterConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, clusterConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClusterConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterConfigFindFirstArgs} args - Arguments to find a ClusterConfig
     * @example
     * // Get one ClusterConfig
     * const clusterConfig = await prisma.clusterConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clusterConfigFindFirstArgs>(args?: SelectSubset<T, clusterConfigFindFirstArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClusterConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterConfigFindFirstOrThrowArgs} args - Arguments to find a ClusterConfig
     * @example
     * // Get one ClusterConfig
     * const clusterConfig = await prisma.clusterConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clusterConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, clusterConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClusterConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClusterConfigs
     * const clusterConfigs = await prisma.clusterConfig.findMany()
     * 
     * // Get first 10 ClusterConfigs
     * const clusterConfigs = await prisma.clusterConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clusterConfigWithIdOnly = await prisma.clusterConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clusterConfigFindManyArgs>(args?: SelectSubset<T, clusterConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClusterConfig.
     * @param {clusterConfigCreateArgs} args - Arguments to create a ClusterConfig.
     * @example
     * // Create one ClusterConfig
     * const ClusterConfig = await prisma.clusterConfig.create({
     *   data: {
     *     // ... data to create a ClusterConfig
     *   }
     * })
     * 
     */
    create<T extends clusterConfigCreateArgs>(args: SelectSubset<T, clusterConfigCreateArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClusterConfigs.
     * @param {clusterConfigCreateManyArgs} args - Arguments to create many ClusterConfigs.
     * @example
     * // Create many ClusterConfigs
     * const clusterConfig = await prisma.clusterConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clusterConfigCreateManyArgs>(args?: SelectSubset<T, clusterConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClusterConfigs and returns the data saved in the database.
     * @param {clusterConfigCreateManyAndReturnArgs} args - Arguments to create many ClusterConfigs.
     * @example
     * // Create many ClusterConfigs
     * const clusterConfig = await prisma.clusterConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClusterConfigs and only return the `id`
     * const clusterConfigWithIdOnly = await prisma.clusterConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clusterConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, clusterConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClusterConfig.
     * @param {clusterConfigDeleteArgs} args - Arguments to delete one ClusterConfig.
     * @example
     * // Delete one ClusterConfig
     * const ClusterConfig = await prisma.clusterConfig.delete({
     *   where: {
     *     // ... filter to delete one ClusterConfig
     *   }
     * })
     * 
     */
    delete<T extends clusterConfigDeleteArgs>(args: SelectSubset<T, clusterConfigDeleteArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClusterConfig.
     * @param {clusterConfigUpdateArgs} args - Arguments to update one ClusterConfig.
     * @example
     * // Update one ClusterConfig
     * const clusterConfig = await prisma.clusterConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clusterConfigUpdateArgs>(args: SelectSubset<T, clusterConfigUpdateArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClusterConfigs.
     * @param {clusterConfigDeleteManyArgs} args - Arguments to filter ClusterConfigs to delete.
     * @example
     * // Delete a few ClusterConfigs
     * const { count } = await prisma.clusterConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clusterConfigDeleteManyArgs>(args?: SelectSubset<T, clusterConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClusterConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClusterConfigs
     * const clusterConfig = await prisma.clusterConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clusterConfigUpdateManyArgs>(args: SelectSubset<T, clusterConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClusterConfig.
     * @param {clusterConfigUpsertArgs} args - Arguments to update or create a ClusterConfig.
     * @example
     * // Update or create a ClusterConfig
     * const clusterConfig = await prisma.clusterConfig.upsert({
     *   create: {
     *     // ... data to create a ClusterConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClusterConfig we want to update
     *   }
     * })
     */
    upsert<T extends clusterConfigUpsertArgs>(args: SelectSubset<T, clusterConfigUpsertArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClusterConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterConfigCountArgs} args - Arguments to filter ClusterConfigs to count.
     * @example
     * // Count the number of ClusterConfigs
     * const count = await prisma.clusterConfig.count({
     *   where: {
     *     // ... the filter for the ClusterConfigs we want to count
     *   }
     * })
    **/
    count<T extends clusterConfigCountArgs>(
      args?: Subset<T, clusterConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClusterConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClusterConfigAggregateArgs>(args: Subset<T, ClusterConfigAggregateArgs>): Prisma.PrismaPromise<GetClusterConfigAggregateType<T>>

    /**
     * Group by ClusterConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clusterConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clusterConfigGroupByArgs['orderBy'] }
        : { orderBy?: clusterConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clusterConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clusterConfig model
   */
  readonly fields: clusterConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clusterConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clusterConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clusters<T extends clusterConfig$clustersArgs<ExtArgs> = {}>(args?: Subset<T, clusterConfig$clustersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findMany"> | Null>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clusterConfig model
   */ 
  interface clusterConfigFieldRefs {
    readonly id: FieldRef<"clusterConfig", 'String'>
    readonly name: FieldRef<"clusterConfig", 'String'>
    readonly config_slug: FieldRef<"clusterConfig", 'String'>
    readonly project_id: FieldRef<"clusterConfig", 'String'>
    readonly clusterMode: FieldRef<"clusterConfig", 'clusterMode'>
    readonly load_balancing_type: FieldRef<"clusterConfig", 'loadBalancingType'>
    readonly health_check_interval: FieldRef<"clusterConfig", 'Int'>
    readonly failover_enabled: FieldRef<"clusterConfig", 'Boolean'>
    readonly created_at: FieldRef<"clusterConfig", 'DateTime'>
    readonly updated_at: FieldRef<"clusterConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clusterConfig findUnique
   */
  export type clusterConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * Filter, which clusterConfig to fetch.
     */
    where: clusterConfigWhereUniqueInput
  }

  /**
   * clusterConfig findUniqueOrThrow
   */
  export type clusterConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * Filter, which clusterConfig to fetch.
     */
    where: clusterConfigWhereUniqueInput
  }

  /**
   * clusterConfig findFirst
   */
  export type clusterConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * Filter, which clusterConfig to fetch.
     */
    where?: clusterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusterConfigs to fetch.
     */
    orderBy?: clusterConfigOrderByWithRelationInput | clusterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clusterConfigs.
     */
    cursor?: clusterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusterConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clusterConfigs.
     */
    distinct?: ClusterConfigScalarFieldEnum | ClusterConfigScalarFieldEnum[]
  }

  /**
   * clusterConfig findFirstOrThrow
   */
  export type clusterConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * Filter, which clusterConfig to fetch.
     */
    where?: clusterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusterConfigs to fetch.
     */
    orderBy?: clusterConfigOrderByWithRelationInput | clusterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clusterConfigs.
     */
    cursor?: clusterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusterConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clusterConfigs.
     */
    distinct?: ClusterConfigScalarFieldEnum | ClusterConfigScalarFieldEnum[]
  }

  /**
   * clusterConfig findMany
   */
  export type clusterConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * Filter, which clusterConfigs to fetch.
     */
    where?: clusterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusterConfigs to fetch.
     */
    orderBy?: clusterConfigOrderByWithRelationInput | clusterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clusterConfigs.
     */
    cursor?: clusterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusterConfigs.
     */
    skip?: number
    distinct?: ClusterConfigScalarFieldEnum | ClusterConfigScalarFieldEnum[]
  }

  /**
   * clusterConfig create
   */
  export type clusterConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a clusterConfig.
     */
    data: XOR<clusterConfigCreateInput, clusterConfigUncheckedCreateInput>
  }

  /**
   * clusterConfig createMany
   */
  export type clusterConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clusterConfigs.
     */
    data: clusterConfigCreateManyInput | clusterConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clusterConfig createManyAndReturn
   */
  export type clusterConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many clusterConfigs.
     */
    data: clusterConfigCreateManyInput | clusterConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * clusterConfig update
   */
  export type clusterConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a clusterConfig.
     */
    data: XOR<clusterConfigUpdateInput, clusterConfigUncheckedUpdateInput>
    /**
     * Choose, which clusterConfig to update.
     */
    where: clusterConfigWhereUniqueInput
  }

  /**
   * clusterConfig updateMany
   */
  export type clusterConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clusterConfigs.
     */
    data: XOR<clusterConfigUpdateManyMutationInput, clusterConfigUncheckedUpdateManyInput>
    /**
     * Filter which clusterConfigs to update
     */
    where?: clusterConfigWhereInput
  }

  /**
   * clusterConfig upsert
   */
  export type clusterConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the clusterConfig to update in case it exists.
     */
    where: clusterConfigWhereUniqueInput
    /**
     * In case the clusterConfig found by the `where` argument doesn't exist, create a new clusterConfig with this data.
     */
    create: XOR<clusterConfigCreateInput, clusterConfigUncheckedCreateInput>
    /**
     * In case the clusterConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clusterConfigUpdateInput, clusterConfigUncheckedUpdateInput>
  }

  /**
   * clusterConfig delete
   */
  export type clusterConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    /**
     * Filter which clusterConfig to delete.
     */
    where: clusterConfigWhereUniqueInput
  }

  /**
   * clusterConfig deleteMany
   */
  export type clusterConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clusterConfigs to delete
     */
    where?: clusterConfigWhereInput
  }

  /**
   * clusterConfig.clusters
   */
  export type clusterConfig$clustersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    where?: clusterWhereInput
    orderBy?: clusterOrderByWithRelationInput | clusterOrderByWithRelationInput[]
    cursor?: clusterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * clusterConfig without action
   */
  export type clusterConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
  }


  /**
   * Model cluster
   */

  export type AggregateCluster = {
    _count: ClusterCountAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  export type ClusterMinAggregateOutputType = {
    id: string | null
    project_id: string | null
    name: string | null
    description: string | null
    cluster_slug: string | null
    cluster_url: string | null
    created_at: Date | null
    updated_at: Date | null
    config_id: string | null
  }

  export type ClusterMaxAggregateOutputType = {
    id: string | null
    project_id: string | null
    name: string | null
    description: string | null
    cluster_slug: string | null
    cluster_url: string | null
    created_at: Date | null
    updated_at: Date | null
    config_id: string | null
  }

  export type ClusterCountAggregateOutputType = {
    id: number
    project_id: number
    name: number
    description: number
    cluster_slug: number
    cluster_url: number
    created_at: number
    updated_at: number
    config_id: number
    _all: number
  }


  export type ClusterMinAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    description?: true
    cluster_slug?: true
    cluster_url?: true
    created_at?: true
    updated_at?: true
    config_id?: true
  }

  export type ClusterMaxAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    description?: true
    cluster_slug?: true
    cluster_url?: true
    created_at?: true
    updated_at?: true
    config_id?: true
  }

  export type ClusterCountAggregateInputType = {
    id?: true
    project_id?: true
    name?: true
    description?: true
    cluster_slug?: true
    cluster_url?: true
    created_at?: true
    updated_at?: true
    config_id?: true
    _all?: true
  }

  export type ClusterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cluster to aggregate.
     */
    where?: clusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusters to fetch.
     */
    orderBy?: clusterOrderByWithRelationInput | clusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clusters
    **/
    _count?: true | ClusterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClusterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClusterMaxAggregateInputType
  }

  export type GetClusterAggregateType<T extends ClusterAggregateArgs> = {
        [P in keyof T & keyof AggregateCluster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCluster[P]>
      : GetScalarType<T[P], AggregateCluster[P]>
  }




  export type clusterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clusterWhereInput
    orderBy?: clusterOrderByWithAggregationInput | clusterOrderByWithAggregationInput[]
    by: ClusterScalarFieldEnum[] | ClusterScalarFieldEnum
    having?: clusterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClusterCountAggregateInputType | true
    _min?: ClusterMinAggregateInputType
    _max?: ClusterMaxAggregateInputType
  }

  export type ClusterGroupByOutputType = {
    id: string
    project_id: string
    name: string
    description: string | null
    cluster_slug: string
    cluster_url: string
    created_at: Date
    updated_at: Date
    config_id: string | null
    _count: ClusterCountAggregateOutputType | null
    _min: ClusterMinAggregateOutputType | null
    _max: ClusterMaxAggregateOutputType | null
  }

  type GetClusterGroupByPayload<T extends clusterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClusterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClusterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClusterGroupByOutputType[P]>
            : GetScalarType<T[P], ClusterGroupByOutputType[P]>
        }
      >
    >


  export type clusterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    description?: boolean
    cluster_slug?: boolean
    cluster_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    config_id?: boolean
    nodes?: boolean | cluster$nodesArgs<ExtArgs>
    config?: boolean | cluster$configArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type clusterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    name?: boolean
    description?: boolean
    cluster_slug?: boolean
    cluster_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    config_id?: boolean
    config?: boolean | cluster$configArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cluster"]>

  export type clusterSelectScalar = {
    id?: boolean
    project_id?: boolean
    name?: boolean
    description?: boolean
    cluster_slug?: boolean
    cluster_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    config_id?: boolean
  }

  export type clusterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | cluster$nodesArgs<ExtArgs>
    config?: boolean | cluster$configArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
    _count?: boolean | ClusterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clusterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | cluster$configArgs<ExtArgs>
    project?: boolean | projectDefaultArgs<ExtArgs>
  }

  export type $clusterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cluster"
    objects: {
      nodes: Prisma.$serviceNodePayload<ExtArgs>[]
      config: Prisma.$clusterConfigPayload<ExtArgs> | null
      project: Prisma.$projectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      project_id: string
      name: string
      description: string | null
      cluster_slug: string
      cluster_url: string
      created_at: Date
      updated_at: Date
      config_id: string | null
    }, ExtArgs["result"]["cluster"]>
    composites: {}
  }

  type clusterGetPayload<S extends boolean | null | undefined | clusterDefaultArgs> = $Result.GetResult<Prisma.$clusterPayload, S>

  type clusterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clusterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClusterCountAggregateInputType | true
    }

  export interface clusterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cluster'], meta: { name: 'cluster' } }
    /**
     * Find zero or one Cluster that matches the filter.
     * @param {clusterFindUniqueArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clusterFindUniqueArgs>(args: SelectSubset<T, clusterFindUniqueArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cluster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clusterFindUniqueOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clusterFindUniqueOrThrowArgs>(args: SelectSubset<T, clusterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cluster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterFindFirstArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clusterFindFirstArgs>(args?: SelectSubset<T, clusterFindFirstArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cluster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterFindFirstOrThrowArgs} args - Arguments to find a Cluster
     * @example
     * // Get one Cluster
     * const cluster = await prisma.cluster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clusterFindFirstOrThrowArgs>(args?: SelectSubset<T, clusterFindFirstOrThrowArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clusters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clusters
     * const clusters = await prisma.cluster.findMany()
     * 
     * // Get first 10 Clusters
     * const clusters = await prisma.cluster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clusterWithIdOnly = await prisma.cluster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clusterFindManyArgs>(args?: SelectSubset<T, clusterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cluster.
     * @param {clusterCreateArgs} args - Arguments to create a Cluster.
     * @example
     * // Create one Cluster
     * const Cluster = await prisma.cluster.create({
     *   data: {
     *     // ... data to create a Cluster
     *   }
     * })
     * 
     */
    create<T extends clusterCreateArgs>(args: SelectSubset<T, clusterCreateArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clusters.
     * @param {clusterCreateManyArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clusterCreateManyArgs>(args?: SelectSubset<T, clusterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clusters and returns the data saved in the database.
     * @param {clusterCreateManyAndReturnArgs} args - Arguments to create many Clusters.
     * @example
     * // Create many Clusters
     * const cluster = await prisma.cluster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clusters and only return the `id`
     * const clusterWithIdOnly = await prisma.cluster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clusterCreateManyAndReturnArgs>(args?: SelectSubset<T, clusterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cluster.
     * @param {clusterDeleteArgs} args - Arguments to delete one Cluster.
     * @example
     * // Delete one Cluster
     * const Cluster = await prisma.cluster.delete({
     *   where: {
     *     // ... filter to delete one Cluster
     *   }
     * })
     * 
     */
    delete<T extends clusterDeleteArgs>(args: SelectSubset<T, clusterDeleteArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cluster.
     * @param {clusterUpdateArgs} args - Arguments to update one Cluster.
     * @example
     * // Update one Cluster
     * const cluster = await prisma.cluster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clusterUpdateArgs>(args: SelectSubset<T, clusterUpdateArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clusters.
     * @param {clusterDeleteManyArgs} args - Arguments to filter Clusters to delete.
     * @example
     * // Delete a few Clusters
     * const { count } = await prisma.cluster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clusterDeleteManyArgs>(args?: SelectSubset<T, clusterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clusters
     * const cluster = await prisma.cluster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clusterUpdateManyArgs>(args: SelectSubset<T, clusterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cluster.
     * @param {clusterUpsertArgs} args - Arguments to update or create a Cluster.
     * @example
     * // Update or create a Cluster
     * const cluster = await prisma.cluster.upsert({
     *   create: {
     *     // ... data to create a Cluster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cluster we want to update
     *   }
     * })
     */
    upsert<T extends clusterUpsertArgs>(args: SelectSubset<T, clusterUpsertArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clusters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterCountArgs} args - Arguments to filter Clusters to count.
     * @example
     * // Count the number of Clusters
     * const count = await prisma.cluster.count({
     *   where: {
     *     // ... the filter for the Clusters we want to count
     *   }
     * })
    **/
    count<T extends clusterCountArgs>(
      args?: Subset<T, clusterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClusterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClusterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClusterAggregateArgs>(args: Subset<T, ClusterAggregateArgs>): Prisma.PrismaPromise<GetClusterAggregateType<T>>

    /**
     * Group by Cluster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clusterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clusterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clusterGroupByArgs['orderBy'] }
        : { orderBy?: clusterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clusterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClusterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cluster model
   */
  readonly fields: clusterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cluster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clusterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nodes<T extends cluster$nodesArgs<ExtArgs> = {}>(args?: Subset<T, cluster$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "findMany"> | Null>
    config<T extends cluster$configArgs<ExtArgs> = {}>(args?: Subset<T, cluster$configArgs<ExtArgs>>): Prisma__clusterConfigClient<$Result.GetResult<Prisma.$clusterConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    project<T extends projectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectDefaultArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cluster model
   */ 
  interface clusterFieldRefs {
    readonly id: FieldRef<"cluster", 'String'>
    readonly project_id: FieldRef<"cluster", 'String'>
    readonly name: FieldRef<"cluster", 'String'>
    readonly description: FieldRef<"cluster", 'String'>
    readonly cluster_slug: FieldRef<"cluster", 'String'>
    readonly cluster_url: FieldRef<"cluster", 'String'>
    readonly created_at: FieldRef<"cluster", 'DateTime'>
    readonly updated_at: FieldRef<"cluster", 'DateTime'>
    readonly config_id: FieldRef<"cluster", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cluster findUnique
   */
  export type clusterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * Filter, which cluster to fetch.
     */
    where: clusterWhereUniqueInput
  }

  /**
   * cluster findUniqueOrThrow
   */
  export type clusterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * Filter, which cluster to fetch.
     */
    where: clusterWhereUniqueInput
  }

  /**
   * cluster findFirst
   */
  export type clusterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * Filter, which cluster to fetch.
     */
    where?: clusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusters to fetch.
     */
    orderBy?: clusterOrderByWithRelationInput | clusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clusters.
     */
    cursor?: clusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * cluster findFirstOrThrow
   */
  export type clusterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * Filter, which cluster to fetch.
     */
    where?: clusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusters to fetch.
     */
    orderBy?: clusterOrderByWithRelationInput | clusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clusters.
     */
    cursor?: clusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clusters.
     */
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * cluster findMany
   */
  export type clusterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * Filter, which clusters to fetch.
     */
    where?: clusterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clusters to fetch.
     */
    orderBy?: clusterOrderByWithRelationInput | clusterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clusters.
     */
    cursor?: clusterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clusters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clusters.
     */
    skip?: number
    distinct?: ClusterScalarFieldEnum | ClusterScalarFieldEnum[]
  }

  /**
   * cluster create
   */
  export type clusterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * The data needed to create a cluster.
     */
    data: XOR<clusterCreateInput, clusterUncheckedCreateInput>
  }

  /**
   * cluster createMany
   */
  export type clusterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clusters.
     */
    data: clusterCreateManyInput | clusterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cluster createManyAndReturn
   */
  export type clusterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many clusters.
     */
    data: clusterCreateManyInput | clusterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cluster update
   */
  export type clusterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * The data needed to update a cluster.
     */
    data: XOR<clusterUpdateInput, clusterUncheckedUpdateInput>
    /**
     * Choose, which cluster to update.
     */
    where: clusterWhereUniqueInput
  }

  /**
   * cluster updateMany
   */
  export type clusterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clusters.
     */
    data: XOR<clusterUpdateManyMutationInput, clusterUncheckedUpdateManyInput>
    /**
     * Filter which clusters to update
     */
    where?: clusterWhereInput
  }

  /**
   * cluster upsert
   */
  export type clusterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * The filter to search for the cluster to update in case it exists.
     */
    where: clusterWhereUniqueInput
    /**
     * In case the cluster found by the `where` argument doesn't exist, create a new cluster with this data.
     */
    create: XOR<clusterCreateInput, clusterUncheckedCreateInput>
    /**
     * In case the cluster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clusterUpdateInput, clusterUncheckedUpdateInput>
  }

  /**
   * cluster delete
   */
  export type clusterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
    /**
     * Filter which cluster to delete.
     */
    where: clusterWhereUniqueInput
  }

  /**
   * cluster deleteMany
   */
  export type clusterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clusters to delete
     */
    where?: clusterWhereInput
  }

  /**
   * cluster.nodes
   */
  export type cluster$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    where?: serviceNodeWhereInput
    orderBy?: serviceNodeOrderByWithRelationInput | serviceNodeOrderByWithRelationInput[]
    cursor?: serviceNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceNodeScalarFieldEnum | ServiceNodeScalarFieldEnum[]
  }

  /**
   * cluster.config
   */
  export type cluster$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clusterConfig
     */
    select?: clusterConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterConfigInclude<ExtArgs> | null
    where?: clusterConfigWhereInput
  }

  /**
   * cluster without action
   */
  export type clusterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cluster
     */
    select?: clusterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clusterInclude<ExtArgs> | null
  }


  /**
   * Model serviceNode
   */

  export type AggregateServiceNode = {
    _count: ServiceNodeCountAggregateOutputType | null
    _avg: ServiceNodeAvgAggregateOutputType | null
    _sum: ServiceNodeSumAggregateOutputType | null
    _min: ServiceNodeMinAggregateOutputType | null
    _max: ServiceNodeMaxAggregateOutputType | null
  }

  export type ServiceNodeAvgAggregateOutputType = {
    weight: number | null
  }

  export type ServiceNodeSumAggregateOutputType = {
    weight: number | null
  }

  export type ServiceNodeMinAggregateOutputType = {
    id: string | null
    proxy_url: string | null
    description: string | null
    cluster_id: string | null
    is_healthy: boolean | null
    is_primary: boolean | null
    weight: number | null
    created_at: Date | null
    updated_at: Date | null
    active: boolean | null
  }

  export type ServiceNodeMaxAggregateOutputType = {
    id: string | null
    proxy_url: string | null
    description: string | null
    cluster_id: string | null
    is_healthy: boolean | null
    is_primary: boolean | null
    weight: number | null
    created_at: Date | null
    updated_at: Date | null
    active: boolean | null
  }

  export type ServiceNodeCountAggregateOutputType = {
    id: number
    proxy_url: number
    description: number
    cluster_id: number
    is_healthy: number
    is_primary: number
    weight: number
    created_at: number
    updated_at: number
    active: number
    _all: number
  }


  export type ServiceNodeAvgAggregateInputType = {
    weight?: true
  }

  export type ServiceNodeSumAggregateInputType = {
    weight?: true
  }

  export type ServiceNodeMinAggregateInputType = {
    id?: true
    proxy_url?: true
    description?: true
    cluster_id?: true
    is_healthy?: true
    is_primary?: true
    weight?: true
    created_at?: true
    updated_at?: true
    active?: true
  }

  export type ServiceNodeMaxAggregateInputType = {
    id?: true
    proxy_url?: true
    description?: true
    cluster_id?: true
    is_healthy?: true
    is_primary?: true
    weight?: true
    created_at?: true
    updated_at?: true
    active?: true
  }

  export type ServiceNodeCountAggregateInputType = {
    id?: true
    proxy_url?: true
    description?: true
    cluster_id?: true
    is_healthy?: true
    is_primary?: true
    weight?: true
    created_at?: true
    updated_at?: true
    active?: true
    _all?: true
  }

  export type ServiceNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which serviceNode to aggregate.
     */
    where?: serviceNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceNodes to fetch.
     */
    orderBy?: serviceNodeOrderByWithRelationInput | serviceNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviceNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned serviceNodes
    **/
    _count?: true | ServiceNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceNodeMaxAggregateInputType
  }

  export type GetServiceNodeAggregateType<T extends ServiceNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceNode[P]>
      : GetScalarType<T[P], AggregateServiceNode[P]>
  }




  export type serviceNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceNodeWhereInput
    orderBy?: serviceNodeOrderByWithAggregationInput | serviceNodeOrderByWithAggregationInput[]
    by: ServiceNodeScalarFieldEnum[] | ServiceNodeScalarFieldEnum
    having?: serviceNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceNodeCountAggregateInputType | true
    _avg?: ServiceNodeAvgAggregateInputType
    _sum?: ServiceNodeSumAggregateInputType
    _min?: ServiceNodeMinAggregateInputType
    _max?: ServiceNodeMaxAggregateInputType
  }

  export type ServiceNodeGroupByOutputType = {
    id: string
    proxy_url: string
    description: string | null
    cluster_id: string
    is_healthy: boolean
    is_primary: boolean
    weight: number | null
    created_at: Date
    updated_at: Date
    active: boolean
    _count: ServiceNodeCountAggregateOutputType | null
    _avg: ServiceNodeAvgAggregateOutputType | null
    _sum: ServiceNodeSumAggregateOutputType | null
    _min: ServiceNodeMinAggregateOutputType | null
    _max: ServiceNodeMaxAggregateOutputType | null
  }

  type GetServiceNodeGroupByPayload<T extends serviceNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceNodeGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceNodeGroupByOutputType[P]>
        }
      >
    >


  export type serviceNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proxy_url?: boolean
    description?: boolean
    cluster_id?: boolean
    is_healthy?: boolean
    is_primary?: boolean
    weight?: boolean
    created_at?: boolean
    updated_at?: boolean
    active?: boolean
    cluster?: boolean | clusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceNode"]>

  export type serviceNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proxy_url?: boolean
    description?: boolean
    cluster_id?: boolean
    is_healthy?: boolean
    is_primary?: boolean
    weight?: boolean
    created_at?: boolean
    updated_at?: boolean
    active?: boolean
    cluster?: boolean | clusterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceNode"]>

  export type serviceNodeSelectScalar = {
    id?: boolean
    proxy_url?: boolean
    description?: boolean
    cluster_id?: boolean
    is_healthy?: boolean
    is_primary?: boolean
    weight?: boolean
    created_at?: boolean
    updated_at?: boolean
    active?: boolean
  }

  export type serviceNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | clusterDefaultArgs<ExtArgs>
  }
  export type serviceNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cluster?: boolean | clusterDefaultArgs<ExtArgs>
  }

  export type $serviceNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "serviceNode"
    objects: {
      cluster: Prisma.$clusterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      proxy_url: string
      description: string | null
      cluster_id: string
      is_healthy: boolean
      is_primary: boolean
      weight: number | null
      created_at: Date
      updated_at: Date
      active: boolean
    }, ExtArgs["result"]["serviceNode"]>
    composites: {}
  }

  type serviceNodeGetPayload<S extends boolean | null | undefined | serviceNodeDefaultArgs> = $Result.GetResult<Prisma.$serviceNodePayload, S>

  type serviceNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<serviceNodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceNodeCountAggregateInputType | true
    }

  export interface serviceNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['serviceNode'], meta: { name: 'serviceNode' } }
    /**
     * Find zero or one ServiceNode that matches the filter.
     * @param {serviceNodeFindUniqueArgs} args - Arguments to find a ServiceNode
     * @example
     * // Get one ServiceNode
     * const serviceNode = await prisma.serviceNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serviceNodeFindUniqueArgs>(args: SelectSubset<T, serviceNodeFindUniqueArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceNode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {serviceNodeFindUniqueOrThrowArgs} args - Arguments to find a ServiceNode
     * @example
     * // Get one ServiceNode
     * const serviceNode = await prisma.serviceNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serviceNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, serviceNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceNodeFindFirstArgs} args - Arguments to find a ServiceNode
     * @example
     * // Get one ServiceNode
     * const serviceNode = await prisma.serviceNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serviceNodeFindFirstArgs>(args?: SelectSubset<T, serviceNodeFindFirstArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceNodeFindFirstOrThrowArgs} args - Arguments to find a ServiceNode
     * @example
     * // Get one ServiceNode
     * const serviceNode = await prisma.serviceNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serviceNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, serviceNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceNodes
     * const serviceNodes = await prisma.serviceNode.findMany()
     * 
     * // Get first 10 ServiceNodes
     * const serviceNodes = await prisma.serviceNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceNodeWithIdOnly = await prisma.serviceNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends serviceNodeFindManyArgs>(args?: SelectSubset<T, serviceNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceNode.
     * @param {serviceNodeCreateArgs} args - Arguments to create a ServiceNode.
     * @example
     * // Create one ServiceNode
     * const ServiceNode = await prisma.serviceNode.create({
     *   data: {
     *     // ... data to create a ServiceNode
     *   }
     * })
     * 
     */
    create<T extends serviceNodeCreateArgs>(args: SelectSubset<T, serviceNodeCreateArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceNodes.
     * @param {serviceNodeCreateManyArgs} args - Arguments to create many ServiceNodes.
     * @example
     * // Create many ServiceNodes
     * const serviceNode = await prisma.serviceNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serviceNodeCreateManyArgs>(args?: SelectSubset<T, serviceNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceNodes and returns the data saved in the database.
     * @param {serviceNodeCreateManyAndReturnArgs} args - Arguments to create many ServiceNodes.
     * @example
     * // Create many ServiceNodes
     * const serviceNode = await prisma.serviceNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceNodes and only return the `id`
     * const serviceNodeWithIdOnly = await prisma.serviceNode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends serviceNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, serviceNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceNode.
     * @param {serviceNodeDeleteArgs} args - Arguments to delete one ServiceNode.
     * @example
     * // Delete one ServiceNode
     * const ServiceNode = await prisma.serviceNode.delete({
     *   where: {
     *     // ... filter to delete one ServiceNode
     *   }
     * })
     * 
     */
    delete<T extends serviceNodeDeleteArgs>(args: SelectSubset<T, serviceNodeDeleteArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceNode.
     * @param {serviceNodeUpdateArgs} args - Arguments to update one ServiceNode.
     * @example
     * // Update one ServiceNode
     * const serviceNode = await prisma.serviceNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serviceNodeUpdateArgs>(args: SelectSubset<T, serviceNodeUpdateArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceNodes.
     * @param {serviceNodeDeleteManyArgs} args - Arguments to filter ServiceNodes to delete.
     * @example
     * // Delete a few ServiceNodes
     * const { count } = await prisma.serviceNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serviceNodeDeleteManyArgs>(args?: SelectSubset<T, serviceNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceNodes
     * const serviceNode = await prisma.serviceNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serviceNodeUpdateManyArgs>(args: SelectSubset<T, serviceNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceNode.
     * @param {serviceNodeUpsertArgs} args - Arguments to update or create a ServiceNode.
     * @example
     * // Update or create a ServiceNode
     * const serviceNode = await prisma.serviceNode.upsert({
     *   create: {
     *     // ... data to create a ServiceNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceNode we want to update
     *   }
     * })
     */
    upsert<T extends serviceNodeUpsertArgs>(args: SelectSubset<T, serviceNodeUpsertArgs<ExtArgs>>): Prisma__serviceNodeClient<$Result.GetResult<Prisma.$serviceNodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceNodeCountArgs} args - Arguments to filter ServiceNodes to count.
     * @example
     * // Count the number of ServiceNodes
     * const count = await prisma.serviceNode.count({
     *   where: {
     *     // ... the filter for the ServiceNodes we want to count
     *   }
     * })
    **/
    count<T extends serviceNodeCountArgs>(
      args?: Subset<T, serviceNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceNodeAggregateArgs>(args: Subset<T, ServiceNodeAggregateArgs>): Prisma.PrismaPromise<GetServiceNodeAggregateType<T>>

    /**
     * Group by ServiceNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends serviceNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviceNodeGroupByArgs['orderBy'] }
        : { orderBy?: serviceNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, serviceNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the serviceNode model
   */
  readonly fields: serviceNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for serviceNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviceNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cluster<T extends clusterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clusterDefaultArgs<ExtArgs>>): Prisma__clusterClient<$Result.GetResult<Prisma.$clusterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the serviceNode model
   */ 
  interface serviceNodeFieldRefs {
    readonly id: FieldRef<"serviceNode", 'String'>
    readonly proxy_url: FieldRef<"serviceNode", 'String'>
    readonly description: FieldRef<"serviceNode", 'String'>
    readonly cluster_id: FieldRef<"serviceNode", 'String'>
    readonly is_healthy: FieldRef<"serviceNode", 'Boolean'>
    readonly is_primary: FieldRef<"serviceNode", 'Boolean'>
    readonly weight: FieldRef<"serviceNode", 'Int'>
    readonly created_at: FieldRef<"serviceNode", 'DateTime'>
    readonly updated_at: FieldRef<"serviceNode", 'DateTime'>
    readonly active: FieldRef<"serviceNode", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * serviceNode findUnique
   */
  export type serviceNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * Filter, which serviceNode to fetch.
     */
    where: serviceNodeWhereUniqueInput
  }

  /**
   * serviceNode findUniqueOrThrow
   */
  export type serviceNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * Filter, which serviceNode to fetch.
     */
    where: serviceNodeWhereUniqueInput
  }

  /**
   * serviceNode findFirst
   */
  export type serviceNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * Filter, which serviceNode to fetch.
     */
    where?: serviceNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceNodes to fetch.
     */
    orderBy?: serviceNodeOrderByWithRelationInput | serviceNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for serviceNodes.
     */
    cursor?: serviceNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of serviceNodes.
     */
    distinct?: ServiceNodeScalarFieldEnum | ServiceNodeScalarFieldEnum[]
  }

  /**
   * serviceNode findFirstOrThrow
   */
  export type serviceNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * Filter, which serviceNode to fetch.
     */
    where?: serviceNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceNodes to fetch.
     */
    orderBy?: serviceNodeOrderByWithRelationInput | serviceNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for serviceNodes.
     */
    cursor?: serviceNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of serviceNodes.
     */
    distinct?: ServiceNodeScalarFieldEnum | ServiceNodeScalarFieldEnum[]
  }

  /**
   * serviceNode findMany
   */
  export type serviceNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * Filter, which serviceNodes to fetch.
     */
    where?: serviceNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceNodes to fetch.
     */
    orderBy?: serviceNodeOrderByWithRelationInput | serviceNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing serviceNodes.
     */
    cursor?: serviceNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceNodes.
     */
    skip?: number
    distinct?: ServiceNodeScalarFieldEnum | ServiceNodeScalarFieldEnum[]
  }

  /**
   * serviceNode create
   */
  export type serviceNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a serviceNode.
     */
    data: XOR<serviceNodeCreateInput, serviceNodeUncheckedCreateInput>
  }

  /**
   * serviceNode createMany
   */
  export type serviceNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many serviceNodes.
     */
    data: serviceNodeCreateManyInput | serviceNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * serviceNode createManyAndReturn
   */
  export type serviceNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many serviceNodes.
     */
    data: serviceNodeCreateManyInput | serviceNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * serviceNode update
   */
  export type serviceNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a serviceNode.
     */
    data: XOR<serviceNodeUpdateInput, serviceNodeUncheckedUpdateInput>
    /**
     * Choose, which serviceNode to update.
     */
    where: serviceNodeWhereUniqueInput
  }

  /**
   * serviceNode updateMany
   */
  export type serviceNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update serviceNodes.
     */
    data: XOR<serviceNodeUpdateManyMutationInput, serviceNodeUncheckedUpdateManyInput>
    /**
     * Filter which serviceNodes to update
     */
    where?: serviceNodeWhereInput
  }

  /**
   * serviceNode upsert
   */
  export type serviceNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the serviceNode to update in case it exists.
     */
    where: serviceNodeWhereUniqueInput
    /**
     * In case the serviceNode found by the `where` argument doesn't exist, create a new serviceNode with this data.
     */
    create: XOR<serviceNodeCreateInput, serviceNodeUncheckedCreateInput>
    /**
     * In case the serviceNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceNodeUpdateInput, serviceNodeUncheckedUpdateInput>
  }

  /**
   * serviceNode delete
   */
  export type serviceNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
    /**
     * Filter which serviceNode to delete.
     */
    where: serviceNodeWhereUniqueInput
  }

  /**
   * serviceNode deleteMany
   */
  export type serviceNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which serviceNodes to delete
     */
    where?: serviceNodeWhereInput
  }

  /**
   * serviceNode without action
   */
  export type serviceNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceNode
     */
    select?: serviceNodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceNodeInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    name: 'name',
    description: 'description',
    slug: 'slug',
    base_url: 'base_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ClusterConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    config_slug: 'config_slug',
    project_id: 'project_id',
    clusterMode: 'clusterMode',
    load_balancing_type: 'load_balancing_type',
    health_check_interval: 'health_check_interval',
    failover_enabled: 'failover_enabled',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClusterConfigScalarFieldEnum = (typeof ClusterConfigScalarFieldEnum)[keyof typeof ClusterConfigScalarFieldEnum]


  export const ClusterScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    name: 'name',
    description: 'description',
    cluster_slug: 'cluster_slug',
    cluster_url: 'cluster_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    config_id: 'config_id'
  };

  export type ClusterScalarFieldEnum = (typeof ClusterScalarFieldEnum)[keyof typeof ClusterScalarFieldEnum]


  export const ServiceNodeScalarFieldEnum: {
    id: 'id',
    proxy_url: 'proxy_url',
    description: 'description',
    cluster_id: 'cluster_id',
    is_healthy: 'is_healthy',
    is_primary: 'is_primary',
    weight: 'weight',
    created_at: 'created_at',
    updated_at: 'updated_at',
    active: 'active'
  };

  export type ServiceNodeScalarFieldEnum = (typeof ServiceNodeScalarFieldEnum)[keyof typeof ServiceNodeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'clusterMode'
   */
  export type EnumclusterModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'clusterMode'>
    


  /**
   * Reference to a field of type 'clusterMode[]'
   */
  export type ListEnumclusterModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'clusterMode[]'>
    


  /**
   * Reference to a field of type 'loadBalancingType'
   */
  export type EnumloadBalancingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'loadBalancingType'>
    


  /**
   * Reference to a field of type 'loadBalancingType[]'
   */
  export type ListEnumloadBalancingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'loadBalancingType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: UuidFilter<"project"> | string
    owner_id?: StringFilter<"project"> | string
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    slug?: StringFilter<"project"> | string
    base_url?: StringFilter<"project"> | string
    created_at?: DateTimeFilter<"project"> | Date | string
    updated_at?: DateTimeFilter<"project"> | Date | string
    clusters?: ClusterListRelationFilter
    config?: ClusterConfigListRelationFilter
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clusters?: clusterOrderByRelationAggregateInput
    config?: clusterConfigOrderByRelationAggregateInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    base_url?: string
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    owner_id?: StringFilter<"project"> | string
    name?: StringFilter<"project"> | string
    description?: StringNullableFilter<"project"> | string | null
    created_at?: DateTimeFilter<"project"> | Date | string
    updated_at?: DateTimeFilter<"project"> | Date | string
    clusters?: ClusterListRelationFilter
    config?: ClusterConfigListRelationFilter
  }, "id" | "slug" | "base_url">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slug?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"project"> | string
    owner_id?: StringWithAggregatesFilter<"project"> | string
    name?: StringWithAggregatesFilter<"project"> | string
    description?: StringNullableWithAggregatesFilter<"project"> | string | null
    slug?: StringWithAggregatesFilter<"project"> | string
    base_url?: StringWithAggregatesFilter<"project"> | string
    created_at?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"project"> | Date | string
  }

  export type clusterConfigWhereInput = {
    AND?: clusterConfigWhereInput | clusterConfigWhereInput[]
    OR?: clusterConfigWhereInput[]
    NOT?: clusterConfigWhereInput | clusterConfigWhereInput[]
    id?: UuidFilter<"clusterConfig"> | string
    name?: StringFilter<"clusterConfig"> | string
    config_slug?: StringFilter<"clusterConfig"> | string
    project_id?: UuidFilter<"clusterConfig"> | string
    clusterMode?: EnumclusterModeFilter<"clusterConfig"> | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFilter<"clusterConfig"> | $Enums.loadBalancingType
    health_check_interval?: IntFilter<"clusterConfig"> | number
    failover_enabled?: BoolFilter<"clusterConfig"> | boolean
    created_at?: DateTimeFilter<"clusterConfig"> | Date | string
    updated_at?: DateTimeFilter<"clusterConfig"> | Date | string
    clusters?: ClusterListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type clusterConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    config_slug?: SortOrder
    project_id?: SortOrder
    clusterMode?: SortOrder
    load_balancing_type?: SortOrder
    health_check_interval?: SortOrder
    failover_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    clusters?: clusterOrderByRelationAggregateInput
    project?: projectOrderByWithRelationInput
  }

  export type clusterConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: clusterConfigWhereInput | clusterConfigWhereInput[]
    OR?: clusterConfigWhereInput[]
    NOT?: clusterConfigWhereInput | clusterConfigWhereInput[]
    name?: StringFilter<"clusterConfig"> | string
    config_slug?: StringFilter<"clusterConfig"> | string
    project_id?: UuidFilter<"clusterConfig"> | string
    clusterMode?: EnumclusterModeFilter<"clusterConfig"> | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFilter<"clusterConfig"> | $Enums.loadBalancingType
    health_check_interval?: IntFilter<"clusterConfig"> | number
    failover_enabled?: BoolFilter<"clusterConfig"> | boolean
    created_at?: DateTimeFilter<"clusterConfig"> | Date | string
    updated_at?: DateTimeFilter<"clusterConfig"> | Date | string
    clusters?: ClusterListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id">

  export type clusterConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    config_slug?: SortOrder
    project_id?: SortOrder
    clusterMode?: SortOrder
    load_balancing_type?: SortOrder
    health_check_interval?: SortOrder
    failover_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: clusterConfigCountOrderByAggregateInput
    _avg?: clusterConfigAvgOrderByAggregateInput
    _max?: clusterConfigMaxOrderByAggregateInput
    _min?: clusterConfigMinOrderByAggregateInput
    _sum?: clusterConfigSumOrderByAggregateInput
  }

  export type clusterConfigScalarWhereWithAggregatesInput = {
    AND?: clusterConfigScalarWhereWithAggregatesInput | clusterConfigScalarWhereWithAggregatesInput[]
    OR?: clusterConfigScalarWhereWithAggregatesInput[]
    NOT?: clusterConfigScalarWhereWithAggregatesInput | clusterConfigScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"clusterConfig"> | string
    name?: StringWithAggregatesFilter<"clusterConfig"> | string
    config_slug?: StringWithAggregatesFilter<"clusterConfig"> | string
    project_id?: UuidWithAggregatesFilter<"clusterConfig"> | string
    clusterMode?: EnumclusterModeWithAggregatesFilter<"clusterConfig"> | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeWithAggregatesFilter<"clusterConfig"> | $Enums.loadBalancingType
    health_check_interval?: IntWithAggregatesFilter<"clusterConfig"> | number
    failover_enabled?: BoolWithAggregatesFilter<"clusterConfig"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"clusterConfig"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"clusterConfig"> | Date | string
  }

  export type clusterWhereInput = {
    AND?: clusterWhereInput | clusterWhereInput[]
    OR?: clusterWhereInput[]
    NOT?: clusterWhereInput | clusterWhereInput[]
    id?: UuidFilter<"cluster"> | string
    project_id?: UuidFilter<"cluster"> | string
    name?: StringFilter<"cluster"> | string
    description?: StringNullableFilter<"cluster"> | string | null
    cluster_slug?: StringFilter<"cluster"> | string
    cluster_url?: StringFilter<"cluster"> | string
    created_at?: DateTimeFilter<"cluster"> | Date | string
    updated_at?: DateTimeFilter<"cluster"> | Date | string
    config_id?: UuidNullableFilter<"cluster"> | string | null
    nodes?: ServiceNodeListRelationFilter
    config?: XOR<ClusterConfigNullableScalarRelationFilter, clusterConfigWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }

  export type clusterOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cluster_slug?: SortOrder
    cluster_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    config_id?: SortOrderInput | SortOrder
    nodes?: serviceNodeOrderByRelationAggregateInput
    config?: clusterConfigOrderByWithRelationInput
    project?: projectOrderByWithRelationInput
  }

  export type clusterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cluster_url?: string
    AND?: clusterWhereInput | clusterWhereInput[]
    OR?: clusterWhereInput[]
    NOT?: clusterWhereInput | clusterWhereInput[]
    project_id?: UuidFilter<"cluster"> | string
    name?: StringFilter<"cluster"> | string
    description?: StringNullableFilter<"cluster"> | string | null
    cluster_slug?: StringFilter<"cluster"> | string
    created_at?: DateTimeFilter<"cluster"> | Date | string
    updated_at?: DateTimeFilter<"cluster"> | Date | string
    config_id?: UuidNullableFilter<"cluster"> | string | null
    nodes?: ServiceNodeListRelationFilter
    config?: XOR<ClusterConfigNullableScalarRelationFilter, clusterConfigWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, projectWhereInput>
  }, "id" | "cluster_url">

  export type clusterOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    cluster_slug?: SortOrder
    cluster_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    config_id?: SortOrderInput | SortOrder
    _count?: clusterCountOrderByAggregateInput
    _max?: clusterMaxOrderByAggregateInput
    _min?: clusterMinOrderByAggregateInput
  }

  export type clusterScalarWhereWithAggregatesInput = {
    AND?: clusterScalarWhereWithAggregatesInput | clusterScalarWhereWithAggregatesInput[]
    OR?: clusterScalarWhereWithAggregatesInput[]
    NOT?: clusterScalarWhereWithAggregatesInput | clusterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"cluster"> | string
    project_id?: UuidWithAggregatesFilter<"cluster"> | string
    name?: StringWithAggregatesFilter<"cluster"> | string
    description?: StringNullableWithAggregatesFilter<"cluster"> | string | null
    cluster_slug?: StringWithAggregatesFilter<"cluster"> | string
    cluster_url?: StringWithAggregatesFilter<"cluster"> | string
    created_at?: DateTimeWithAggregatesFilter<"cluster"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"cluster"> | Date | string
    config_id?: UuidNullableWithAggregatesFilter<"cluster"> | string | null
  }

  export type serviceNodeWhereInput = {
    AND?: serviceNodeWhereInput | serviceNodeWhereInput[]
    OR?: serviceNodeWhereInput[]
    NOT?: serviceNodeWhereInput | serviceNodeWhereInput[]
    id?: UuidFilter<"serviceNode"> | string
    proxy_url?: StringFilter<"serviceNode"> | string
    description?: StringNullableFilter<"serviceNode"> | string | null
    cluster_id?: UuidFilter<"serviceNode"> | string
    is_healthy?: BoolFilter<"serviceNode"> | boolean
    is_primary?: BoolFilter<"serviceNode"> | boolean
    weight?: IntNullableFilter<"serviceNode"> | number | null
    created_at?: DateTimeFilter<"serviceNode"> | Date | string
    updated_at?: DateTimeFilter<"serviceNode"> | Date | string
    active?: BoolFilter<"serviceNode"> | boolean
    cluster?: XOR<ClusterScalarRelationFilter, clusterWhereInput>
  }

  export type serviceNodeOrderByWithRelationInput = {
    id?: SortOrder
    proxy_url?: SortOrder
    description?: SortOrderInput | SortOrder
    cluster_id?: SortOrder
    is_healthy?: SortOrder
    is_primary?: SortOrder
    weight?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    active?: SortOrder
    cluster?: clusterOrderByWithRelationInput
  }

  export type serviceNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: serviceNodeWhereInput | serviceNodeWhereInput[]
    OR?: serviceNodeWhereInput[]
    NOT?: serviceNodeWhereInput | serviceNodeWhereInput[]
    proxy_url?: StringFilter<"serviceNode"> | string
    description?: StringNullableFilter<"serviceNode"> | string | null
    cluster_id?: UuidFilter<"serviceNode"> | string
    is_healthy?: BoolFilter<"serviceNode"> | boolean
    is_primary?: BoolFilter<"serviceNode"> | boolean
    weight?: IntNullableFilter<"serviceNode"> | number | null
    created_at?: DateTimeFilter<"serviceNode"> | Date | string
    updated_at?: DateTimeFilter<"serviceNode"> | Date | string
    active?: BoolFilter<"serviceNode"> | boolean
    cluster?: XOR<ClusterScalarRelationFilter, clusterWhereInput>
  }, "id">

  export type serviceNodeOrderByWithAggregationInput = {
    id?: SortOrder
    proxy_url?: SortOrder
    description?: SortOrderInput | SortOrder
    cluster_id?: SortOrder
    is_healthy?: SortOrder
    is_primary?: SortOrder
    weight?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    active?: SortOrder
    _count?: serviceNodeCountOrderByAggregateInput
    _avg?: serviceNodeAvgOrderByAggregateInput
    _max?: serviceNodeMaxOrderByAggregateInput
    _min?: serviceNodeMinOrderByAggregateInput
    _sum?: serviceNodeSumOrderByAggregateInput
  }

  export type serviceNodeScalarWhereWithAggregatesInput = {
    AND?: serviceNodeScalarWhereWithAggregatesInput | serviceNodeScalarWhereWithAggregatesInput[]
    OR?: serviceNodeScalarWhereWithAggregatesInput[]
    NOT?: serviceNodeScalarWhereWithAggregatesInput | serviceNodeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"serviceNode"> | string
    proxy_url?: StringWithAggregatesFilter<"serviceNode"> | string
    description?: StringNullableWithAggregatesFilter<"serviceNode"> | string | null
    cluster_id?: UuidWithAggregatesFilter<"serviceNode"> | string
    is_healthy?: BoolWithAggregatesFilter<"serviceNode"> | boolean
    is_primary?: BoolWithAggregatesFilter<"serviceNode"> | boolean
    weight?: IntNullableWithAggregatesFilter<"serviceNode"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"serviceNode"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"serviceNode"> | Date | string
    active?: BoolWithAggregatesFilter<"serviceNode"> | boolean
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: UuidFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type projectCreateInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    slug: string
    base_url: string
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterCreateNestedManyWithoutProjectInput
    config?: clusterConfigCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    slug: string
    base_url: string
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterUncheckedCreateNestedManyWithoutProjectInput
    config?: clusterConfigUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUpdateManyWithoutProjectNestedInput
    config?: clusterConfigUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUncheckedUpdateManyWithoutProjectNestedInput
    config?: clusterConfigUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type projectCreateManyInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    slug: string
    base_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type projectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clusterConfigCreateInput = {
    id?: string
    name: string
    config_slug: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterCreateNestedManyWithoutConfigInput
    project: projectCreateNestedOneWithoutConfigInput
  }

  export type clusterConfigUncheckedCreateInput = {
    id?: string
    name: string
    config_slug: string
    project_id: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterUncheckedCreateNestedManyWithoutConfigInput
  }

  export type clusterConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUpdateManyWithoutConfigNestedInput
    project?: projectUpdateOneRequiredWithoutConfigNestedInput
  }

  export type clusterConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type clusterConfigCreateManyInput = {
    id?: string
    name: string
    config_slug: string
    project_id: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clusterConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clusterConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clusterCreateInput = {
    id?: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: serviceNodeCreateNestedManyWithoutClusterInput
    config?: clusterConfigCreateNestedOneWithoutClustersInput
    project: projectCreateNestedOneWithoutClustersInput
  }

  export type clusterUncheckedCreateInput = {
    id?: string
    project_id: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config_id?: string | null
    nodes?: serviceNodeUncheckedCreateNestedManyWithoutClusterInput
  }

  export type clusterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: serviceNodeUpdateManyWithoutClusterNestedInput
    config?: clusterConfigUpdateOneWithoutClustersNestedInput
    project?: projectUpdateOneRequiredWithoutClustersNestedInput
  }

  export type clusterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config_id?: NullableStringFieldUpdateOperationsInput | string | null
    nodes?: serviceNodeUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type clusterCreateManyInput = {
    id?: string
    project_id: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config_id?: string | null
  }

  export type clusterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clusterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type serviceNodeCreateInput = {
    id?: string
    proxy_url: string
    description?: string | null
    is_healthy?: boolean
    is_primary?: boolean
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    active?: boolean
    cluster: clusterCreateNestedOneWithoutNodesInput
  }

  export type serviceNodeUncheckedCreateInput = {
    id?: string
    proxy_url: string
    description?: string | null
    cluster_id: string
    is_healthy?: boolean
    is_primary?: boolean
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    active?: boolean
  }

  export type serviceNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proxy_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_healthy?: BoolFieldUpdateOperationsInput | boolean
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    cluster?: clusterUpdateOneRequiredWithoutNodesNestedInput
  }

  export type serviceNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proxy_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_id?: StringFieldUpdateOperationsInput | string
    is_healthy?: BoolFieldUpdateOperationsInput | boolean
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type serviceNodeCreateManyInput = {
    id?: string
    proxy_url: string
    description?: string | null
    cluster_id: string
    is_healthy?: boolean
    is_primary?: boolean
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    active?: boolean
  }

  export type serviceNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    proxy_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_healthy?: BoolFieldUpdateOperationsInput | boolean
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type serviceNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    proxy_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_id?: StringFieldUpdateOperationsInput | string
    is_healthy?: BoolFieldUpdateOperationsInput | boolean
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClusterListRelationFilter = {
    every?: clusterWhereInput
    some?: clusterWhereInput
    none?: clusterWhereInput
  }

  export type ClusterConfigListRelationFilter = {
    every?: clusterConfigWhereInput
    some?: clusterConfigWhereInput
    none?: clusterConfigWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type clusterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clusterConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slug?: SortOrder
    base_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumclusterModeFilter<$PrismaModel = never> = {
    equals?: $Enums.clusterMode | EnumclusterModeFieldRefInput<$PrismaModel>
    in?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    not?: NestedEnumclusterModeFilter<$PrismaModel> | $Enums.clusterMode
  }

  export type EnumloadBalancingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.loadBalancingType | EnumloadBalancingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumloadBalancingTypeFilter<$PrismaModel> | $Enums.loadBalancingType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectScalarRelationFilter = {
    is?: projectWhereInput
    isNot?: projectWhereInput
  }

  export type clusterConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    config_slug?: SortOrder
    project_id?: SortOrder
    clusterMode?: SortOrder
    load_balancing_type?: SortOrder
    health_check_interval?: SortOrder
    failover_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clusterConfigAvgOrderByAggregateInput = {
    health_check_interval?: SortOrder
  }

  export type clusterConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    config_slug?: SortOrder
    project_id?: SortOrder
    clusterMode?: SortOrder
    load_balancing_type?: SortOrder
    health_check_interval?: SortOrder
    failover_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clusterConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    config_slug?: SortOrder
    project_id?: SortOrder
    clusterMode?: SortOrder
    load_balancing_type?: SortOrder
    health_check_interval?: SortOrder
    failover_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clusterConfigSumOrderByAggregateInput = {
    health_check_interval?: SortOrder
  }

  export type EnumclusterModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.clusterMode | EnumclusterModeFieldRefInput<$PrismaModel>
    in?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    not?: NestedEnumclusterModeWithAggregatesFilter<$PrismaModel> | $Enums.clusterMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclusterModeFilter<$PrismaModel>
    _max?: NestedEnumclusterModeFilter<$PrismaModel>
  }

  export type EnumloadBalancingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.loadBalancingType | EnumloadBalancingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumloadBalancingTypeWithAggregatesFilter<$PrismaModel> | $Enums.loadBalancingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumloadBalancingTypeFilter<$PrismaModel>
    _max?: NestedEnumloadBalancingTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type ServiceNodeListRelationFilter = {
    every?: serviceNodeWhereInput
    some?: serviceNodeWhereInput
    none?: serviceNodeWhereInput
  }

  export type ClusterConfigNullableScalarRelationFilter = {
    is?: clusterConfigWhereInput | null
    isNot?: clusterConfigWhereInput | null
  }

  export type serviceNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clusterCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cluster_slug?: SortOrder
    cluster_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    config_id?: SortOrder
  }

  export type clusterMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cluster_slug?: SortOrder
    cluster_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    config_id?: SortOrder
  }

  export type clusterMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    cluster_slug?: SortOrder
    cluster_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    config_id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClusterScalarRelationFilter = {
    is?: clusterWhereInput
    isNot?: clusterWhereInput
  }

  export type serviceNodeCountOrderByAggregateInput = {
    id?: SortOrder
    proxy_url?: SortOrder
    description?: SortOrder
    cluster_id?: SortOrder
    is_healthy?: SortOrder
    is_primary?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    active?: SortOrder
  }

  export type serviceNodeAvgOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type serviceNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    proxy_url?: SortOrder
    description?: SortOrder
    cluster_id?: SortOrder
    is_healthy?: SortOrder
    is_primary?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    active?: SortOrder
  }

  export type serviceNodeMinOrderByAggregateInput = {
    id?: SortOrder
    proxy_url?: SortOrder
    description?: SortOrder
    cluster_id?: SortOrder
    is_healthy?: SortOrder
    is_primary?: SortOrder
    weight?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    active?: SortOrder
  }

  export type serviceNodeSumOrderByAggregateInput = {
    weight?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type clusterCreateNestedManyWithoutProjectInput = {
    create?: XOR<clusterCreateWithoutProjectInput, clusterUncheckedCreateWithoutProjectInput> | clusterCreateWithoutProjectInput[] | clusterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutProjectInput | clusterCreateOrConnectWithoutProjectInput[]
    createMany?: clusterCreateManyProjectInputEnvelope
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
  }

  export type clusterConfigCreateNestedManyWithoutProjectInput = {
    create?: XOR<clusterConfigCreateWithoutProjectInput, clusterConfigUncheckedCreateWithoutProjectInput> | clusterConfigCreateWithoutProjectInput[] | clusterConfigUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterConfigCreateOrConnectWithoutProjectInput | clusterConfigCreateOrConnectWithoutProjectInput[]
    createMany?: clusterConfigCreateManyProjectInputEnvelope
    connect?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
  }

  export type clusterUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<clusterCreateWithoutProjectInput, clusterUncheckedCreateWithoutProjectInput> | clusterCreateWithoutProjectInput[] | clusterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutProjectInput | clusterCreateOrConnectWithoutProjectInput[]
    createMany?: clusterCreateManyProjectInputEnvelope
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
  }

  export type clusterConfigUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<clusterConfigCreateWithoutProjectInput, clusterConfigUncheckedCreateWithoutProjectInput> | clusterConfigCreateWithoutProjectInput[] | clusterConfigUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterConfigCreateOrConnectWithoutProjectInput | clusterConfigCreateOrConnectWithoutProjectInput[]
    createMany?: clusterConfigCreateManyProjectInputEnvelope
    connect?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type clusterUpdateManyWithoutProjectNestedInput = {
    create?: XOR<clusterCreateWithoutProjectInput, clusterUncheckedCreateWithoutProjectInput> | clusterCreateWithoutProjectInput[] | clusterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutProjectInput | clusterCreateOrConnectWithoutProjectInput[]
    upsert?: clusterUpsertWithWhereUniqueWithoutProjectInput | clusterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: clusterCreateManyProjectInputEnvelope
    set?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    disconnect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    delete?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    update?: clusterUpdateWithWhereUniqueWithoutProjectInput | clusterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: clusterUpdateManyWithWhereWithoutProjectInput | clusterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: clusterScalarWhereInput | clusterScalarWhereInput[]
  }

  export type clusterConfigUpdateManyWithoutProjectNestedInput = {
    create?: XOR<clusterConfigCreateWithoutProjectInput, clusterConfigUncheckedCreateWithoutProjectInput> | clusterConfigCreateWithoutProjectInput[] | clusterConfigUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterConfigCreateOrConnectWithoutProjectInput | clusterConfigCreateOrConnectWithoutProjectInput[]
    upsert?: clusterConfigUpsertWithWhereUniqueWithoutProjectInput | clusterConfigUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: clusterConfigCreateManyProjectInputEnvelope
    set?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    disconnect?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    delete?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    connect?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    update?: clusterConfigUpdateWithWhereUniqueWithoutProjectInput | clusterConfigUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: clusterConfigUpdateManyWithWhereWithoutProjectInput | clusterConfigUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: clusterConfigScalarWhereInput | clusterConfigScalarWhereInput[]
  }

  export type clusterUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<clusterCreateWithoutProjectInput, clusterUncheckedCreateWithoutProjectInput> | clusterCreateWithoutProjectInput[] | clusterUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutProjectInput | clusterCreateOrConnectWithoutProjectInput[]
    upsert?: clusterUpsertWithWhereUniqueWithoutProjectInput | clusterUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: clusterCreateManyProjectInputEnvelope
    set?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    disconnect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    delete?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    update?: clusterUpdateWithWhereUniqueWithoutProjectInput | clusterUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: clusterUpdateManyWithWhereWithoutProjectInput | clusterUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: clusterScalarWhereInput | clusterScalarWhereInput[]
  }

  export type clusterConfigUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<clusterConfigCreateWithoutProjectInput, clusterConfigUncheckedCreateWithoutProjectInput> | clusterConfigCreateWithoutProjectInput[] | clusterConfigUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: clusterConfigCreateOrConnectWithoutProjectInput | clusterConfigCreateOrConnectWithoutProjectInput[]
    upsert?: clusterConfigUpsertWithWhereUniqueWithoutProjectInput | clusterConfigUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: clusterConfigCreateManyProjectInputEnvelope
    set?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    disconnect?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    delete?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    connect?: clusterConfigWhereUniqueInput | clusterConfigWhereUniqueInput[]
    update?: clusterConfigUpdateWithWhereUniqueWithoutProjectInput | clusterConfigUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: clusterConfigUpdateManyWithWhereWithoutProjectInput | clusterConfigUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: clusterConfigScalarWhereInput | clusterConfigScalarWhereInput[]
  }

  export type clusterCreateNestedManyWithoutConfigInput = {
    create?: XOR<clusterCreateWithoutConfigInput, clusterUncheckedCreateWithoutConfigInput> | clusterCreateWithoutConfigInput[] | clusterUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutConfigInput | clusterCreateOrConnectWithoutConfigInput[]
    createMany?: clusterCreateManyConfigInputEnvelope
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
  }

  export type projectCreateNestedOneWithoutConfigInput = {
    create?: XOR<projectCreateWithoutConfigInput, projectUncheckedCreateWithoutConfigInput>
    connectOrCreate?: projectCreateOrConnectWithoutConfigInput
    connect?: projectWhereUniqueInput
  }

  export type clusterUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<clusterCreateWithoutConfigInput, clusterUncheckedCreateWithoutConfigInput> | clusterCreateWithoutConfigInput[] | clusterUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutConfigInput | clusterCreateOrConnectWithoutConfigInput[]
    createMany?: clusterCreateManyConfigInputEnvelope
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
  }

  export type EnumclusterModeFieldUpdateOperationsInput = {
    set?: $Enums.clusterMode
  }

  export type EnumloadBalancingTypeFieldUpdateOperationsInput = {
    set?: $Enums.loadBalancingType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type clusterUpdateManyWithoutConfigNestedInput = {
    create?: XOR<clusterCreateWithoutConfigInput, clusterUncheckedCreateWithoutConfigInput> | clusterCreateWithoutConfigInput[] | clusterUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutConfigInput | clusterCreateOrConnectWithoutConfigInput[]
    upsert?: clusterUpsertWithWhereUniqueWithoutConfigInput | clusterUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: clusterCreateManyConfigInputEnvelope
    set?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    disconnect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    delete?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    update?: clusterUpdateWithWhereUniqueWithoutConfigInput | clusterUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: clusterUpdateManyWithWhereWithoutConfigInput | clusterUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: clusterScalarWhereInput | clusterScalarWhereInput[]
  }

  export type projectUpdateOneRequiredWithoutConfigNestedInput = {
    create?: XOR<projectCreateWithoutConfigInput, projectUncheckedCreateWithoutConfigInput>
    connectOrCreate?: projectCreateOrConnectWithoutConfigInput
    upsert?: projectUpsertWithoutConfigInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutConfigInput, projectUpdateWithoutConfigInput>, projectUncheckedUpdateWithoutConfigInput>
  }

  export type clusterUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<clusterCreateWithoutConfigInput, clusterUncheckedCreateWithoutConfigInput> | clusterCreateWithoutConfigInput[] | clusterUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: clusterCreateOrConnectWithoutConfigInput | clusterCreateOrConnectWithoutConfigInput[]
    upsert?: clusterUpsertWithWhereUniqueWithoutConfigInput | clusterUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: clusterCreateManyConfigInputEnvelope
    set?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    disconnect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    delete?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    connect?: clusterWhereUniqueInput | clusterWhereUniqueInput[]
    update?: clusterUpdateWithWhereUniqueWithoutConfigInput | clusterUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: clusterUpdateManyWithWhereWithoutConfigInput | clusterUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: clusterScalarWhereInput | clusterScalarWhereInput[]
  }

  export type serviceNodeCreateNestedManyWithoutClusterInput = {
    create?: XOR<serviceNodeCreateWithoutClusterInput, serviceNodeUncheckedCreateWithoutClusterInput> | serviceNodeCreateWithoutClusterInput[] | serviceNodeUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: serviceNodeCreateOrConnectWithoutClusterInput | serviceNodeCreateOrConnectWithoutClusterInput[]
    createMany?: serviceNodeCreateManyClusterInputEnvelope
    connect?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
  }

  export type clusterConfigCreateNestedOneWithoutClustersInput = {
    create?: XOR<clusterConfigCreateWithoutClustersInput, clusterConfigUncheckedCreateWithoutClustersInput>
    connectOrCreate?: clusterConfigCreateOrConnectWithoutClustersInput
    connect?: clusterConfigWhereUniqueInput
  }

  export type projectCreateNestedOneWithoutClustersInput = {
    create?: XOR<projectCreateWithoutClustersInput, projectUncheckedCreateWithoutClustersInput>
    connectOrCreate?: projectCreateOrConnectWithoutClustersInput
    connect?: projectWhereUniqueInput
  }

  export type serviceNodeUncheckedCreateNestedManyWithoutClusterInput = {
    create?: XOR<serviceNodeCreateWithoutClusterInput, serviceNodeUncheckedCreateWithoutClusterInput> | serviceNodeCreateWithoutClusterInput[] | serviceNodeUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: serviceNodeCreateOrConnectWithoutClusterInput | serviceNodeCreateOrConnectWithoutClusterInput[]
    createMany?: serviceNodeCreateManyClusterInputEnvelope
    connect?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
  }

  export type serviceNodeUpdateManyWithoutClusterNestedInput = {
    create?: XOR<serviceNodeCreateWithoutClusterInput, serviceNodeUncheckedCreateWithoutClusterInput> | serviceNodeCreateWithoutClusterInput[] | serviceNodeUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: serviceNodeCreateOrConnectWithoutClusterInput | serviceNodeCreateOrConnectWithoutClusterInput[]
    upsert?: serviceNodeUpsertWithWhereUniqueWithoutClusterInput | serviceNodeUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: serviceNodeCreateManyClusterInputEnvelope
    set?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    disconnect?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    delete?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    connect?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    update?: serviceNodeUpdateWithWhereUniqueWithoutClusterInput | serviceNodeUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: serviceNodeUpdateManyWithWhereWithoutClusterInput | serviceNodeUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: serviceNodeScalarWhereInput | serviceNodeScalarWhereInput[]
  }

  export type clusterConfigUpdateOneWithoutClustersNestedInput = {
    create?: XOR<clusterConfigCreateWithoutClustersInput, clusterConfigUncheckedCreateWithoutClustersInput>
    connectOrCreate?: clusterConfigCreateOrConnectWithoutClustersInput
    upsert?: clusterConfigUpsertWithoutClustersInput
    disconnect?: clusterConfigWhereInput | boolean
    delete?: clusterConfigWhereInput | boolean
    connect?: clusterConfigWhereUniqueInput
    update?: XOR<XOR<clusterConfigUpdateToOneWithWhereWithoutClustersInput, clusterConfigUpdateWithoutClustersInput>, clusterConfigUncheckedUpdateWithoutClustersInput>
  }

  export type projectUpdateOneRequiredWithoutClustersNestedInput = {
    create?: XOR<projectCreateWithoutClustersInput, projectUncheckedCreateWithoutClustersInput>
    connectOrCreate?: projectCreateOrConnectWithoutClustersInput
    upsert?: projectUpsertWithoutClustersInput
    connect?: projectWhereUniqueInput
    update?: XOR<XOR<projectUpdateToOneWithWhereWithoutClustersInput, projectUpdateWithoutClustersInput>, projectUncheckedUpdateWithoutClustersInput>
  }

  export type serviceNodeUncheckedUpdateManyWithoutClusterNestedInput = {
    create?: XOR<serviceNodeCreateWithoutClusterInput, serviceNodeUncheckedCreateWithoutClusterInput> | serviceNodeCreateWithoutClusterInput[] | serviceNodeUncheckedCreateWithoutClusterInput[]
    connectOrCreate?: serviceNodeCreateOrConnectWithoutClusterInput | serviceNodeCreateOrConnectWithoutClusterInput[]
    upsert?: serviceNodeUpsertWithWhereUniqueWithoutClusterInput | serviceNodeUpsertWithWhereUniqueWithoutClusterInput[]
    createMany?: serviceNodeCreateManyClusterInputEnvelope
    set?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    disconnect?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    delete?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    connect?: serviceNodeWhereUniqueInput | serviceNodeWhereUniqueInput[]
    update?: serviceNodeUpdateWithWhereUniqueWithoutClusterInput | serviceNodeUpdateWithWhereUniqueWithoutClusterInput[]
    updateMany?: serviceNodeUpdateManyWithWhereWithoutClusterInput | serviceNodeUpdateManyWithWhereWithoutClusterInput[]
    deleteMany?: serviceNodeScalarWhereInput | serviceNodeScalarWhereInput[]
  }

  export type clusterCreateNestedOneWithoutNodesInput = {
    create?: XOR<clusterCreateWithoutNodesInput, clusterUncheckedCreateWithoutNodesInput>
    connectOrCreate?: clusterCreateOrConnectWithoutNodesInput
    connect?: clusterWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clusterUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<clusterCreateWithoutNodesInput, clusterUncheckedCreateWithoutNodesInput>
    connectOrCreate?: clusterCreateOrConnectWithoutNodesInput
    upsert?: clusterUpsertWithoutNodesInput
    connect?: clusterWhereUniqueInput
    update?: XOR<XOR<clusterUpdateToOneWithWhereWithoutNodesInput, clusterUpdateWithoutNodesInput>, clusterUncheckedUpdateWithoutNodesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumclusterModeFilter<$PrismaModel = never> = {
    equals?: $Enums.clusterMode | EnumclusterModeFieldRefInput<$PrismaModel>
    in?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    not?: NestedEnumclusterModeFilter<$PrismaModel> | $Enums.clusterMode
  }

  export type NestedEnumloadBalancingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.loadBalancingType | EnumloadBalancingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumloadBalancingTypeFilter<$PrismaModel> | $Enums.loadBalancingType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumclusterModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.clusterMode | EnumclusterModeFieldRefInput<$PrismaModel>
    in?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.clusterMode[] | ListEnumclusterModeFieldRefInput<$PrismaModel>
    not?: NestedEnumclusterModeWithAggregatesFilter<$PrismaModel> | $Enums.clusterMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclusterModeFilter<$PrismaModel>
    _max?: NestedEnumclusterModeFilter<$PrismaModel>
  }

  export type NestedEnumloadBalancingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.loadBalancingType | EnumloadBalancingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.loadBalancingType[] | ListEnumloadBalancingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumloadBalancingTypeWithAggregatesFilter<$PrismaModel> | $Enums.loadBalancingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumloadBalancingTypeFilter<$PrismaModel>
    _max?: NestedEnumloadBalancingTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type clusterCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: serviceNodeCreateNestedManyWithoutClusterInput
    config?: clusterConfigCreateNestedOneWithoutClustersInput
  }

  export type clusterUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config_id?: string | null
    nodes?: serviceNodeUncheckedCreateNestedManyWithoutClusterInput
  }

  export type clusterCreateOrConnectWithoutProjectInput = {
    where: clusterWhereUniqueInput
    create: XOR<clusterCreateWithoutProjectInput, clusterUncheckedCreateWithoutProjectInput>
  }

  export type clusterCreateManyProjectInputEnvelope = {
    data: clusterCreateManyProjectInput | clusterCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type clusterConfigCreateWithoutProjectInput = {
    id?: string
    name: string
    config_slug: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterCreateNestedManyWithoutConfigInput
  }

  export type clusterConfigUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    config_slug: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterUncheckedCreateNestedManyWithoutConfigInput
  }

  export type clusterConfigCreateOrConnectWithoutProjectInput = {
    where: clusterConfigWhereUniqueInput
    create: XOR<clusterConfigCreateWithoutProjectInput, clusterConfigUncheckedCreateWithoutProjectInput>
  }

  export type clusterConfigCreateManyProjectInputEnvelope = {
    data: clusterConfigCreateManyProjectInput | clusterConfigCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type clusterUpsertWithWhereUniqueWithoutProjectInput = {
    where: clusterWhereUniqueInput
    update: XOR<clusterUpdateWithoutProjectInput, clusterUncheckedUpdateWithoutProjectInput>
    create: XOR<clusterCreateWithoutProjectInput, clusterUncheckedCreateWithoutProjectInput>
  }

  export type clusterUpdateWithWhereUniqueWithoutProjectInput = {
    where: clusterWhereUniqueInput
    data: XOR<clusterUpdateWithoutProjectInput, clusterUncheckedUpdateWithoutProjectInput>
  }

  export type clusterUpdateManyWithWhereWithoutProjectInput = {
    where: clusterScalarWhereInput
    data: XOR<clusterUpdateManyMutationInput, clusterUncheckedUpdateManyWithoutProjectInput>
  }

  export type clusterScalarWhereInput = {
    AND?: clusterScalarWhereInput | clusterScalarWhereInput[]
    OR?: clusterScalarWhereInput[]
    NOT?: clusterScalarWhereInput | clusterScalarWhereInput[]
    id?: UuidFilter<"cluster"> | string
    project_id?: UuidFilter<"cluster"> | string
    name?: StringFilter<"cluster"> | string
    description?: StringNullableFilter<"cluster"> | string | null
    cluster_slug?: StringFilter<"cluster"> | string
    cluster_url?: StringFilter<"cluster"> | string
    created_at?: DateTimeFilter<"cluster"> | Date | string
    updated_at?: DateTimeFilter<"cluster"> | Date | string
    config_id?: UuidNullableFilter<"cluster"> | string | null
  }

  export type clusterConfigUpsertWithWhereUniqueWithoutProjectInput = {
    where: clusterConfigWhereUniqueInput
    update: XOR<clusterConfigUpdateWithoutProjectInput, clusterConfigUncheckedUpdateWithoutProjectInput>
    create: XOR<clusterConfigCreateWithoutProjectInput, clusterConfigUncheckedCreateWithoutProjectInput>
  }

  export type clusterConfigUpdateWithWhereUniqueWithoutProjectInput = {
    where: clusterConfigWhereUniqueInput
    data: XOR<clusterConfigUpdateWithoutProjectInput, clusterConfigUncheckedUpdateWithoutProjectInput>
  }

  export type clusterConfigUpdateManyWithWhereWithoutProjectInput = {
    where: clusterConfigScalarWhereInput
    data: XOR<clusterConfigUpdateManyMutationInput, clusterConfigUncheckedUpdateManyWithoutProjectInput>
  }

  export type clusterConfigScalarWhereInput = {
    AND?: clusterConfigScalarWhereInput | clusterConfigScalarWhereInput[]
    OR?: clusterConfigScalarWhereInput[]
    NOT?: clusterConfigScalarWhereInput | clusterConfigScalarWhereInput[]
    id?: UuidFilter<"clusterConfig"> | string
    name?: StringFilter<"clusterConfig"> | string
    config_slug?: StringFilter<"clusterConfig"> | string
    project_id?: UuidFilter<"clusterConfig"> | string
    clusterMode?: EnumclusterModeFilter<"clusterConfig"> | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFilter<"clusterConfig"> | $Enums.loadBalancingType
    health_check_interval?: IntFilter<"clusterConfig"> | number
    failover_enabled?: BoolFilter<"clusterConfig"> | boolean
    created_at?: DateTimeFilter<"clusterConfig"> | Date | string
    updated_at?: DateTimeFilter<"clusterConfig"> | Date | string
  }

  export type clusterCreateWithoutConfigInput = {
    id?: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: serviceNodeCreateNestedManyWithoutClusterInput
    project: projectCreateNestedOneWithoutClustersInput
  }

  export type clusterUncheckedCreateWithoutConfigInput = {
    id?: string
    project_id: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: serviceNodeUncheckedCreateNestedManyWithoutClusterInput
  }

  export type clusterCreateOrConnectWithoutConfigInput = {
    where: clusterWhereUniqueInput
    create: XOR<clusterCreateWithoutConfigInput, clusterUncheckedCreateWithoutConfigInput>
  }

  export type clusterCreateManyConfigInputEnvelope = {
    data: clusterCreateManyConfigInput | clusterCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type projectCreateWithoutConfigInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    slug: string
    base_url: string
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutConfigInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    slug: string
    base_url: string
    created_at?: Date | string
    updated_at?: Date | string
    clusters?: clusterUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutConfigInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutConfigInput, projectUncheckedCreateWithoutConfigInput>
  }

  export type clusterUpsertWithWhereUniqueWithoutConfigInput = {
    where: clusterWhereUniqueInput
    update: XOR<clusterUpdateWithoutConfigInput, clusterUncheckedUpdateWithoutConfigInput>
    create: XOR<clusterCreateWithoutConfigInput, clusterUncheckedCreateWithoutConfigInput>
  }

  export type clusterUpdateWithWhereUniqueWithoutConfigInput = {
    where: clusterWhereUniqueInput
    data: XOR<clusterUpdateWithoutConfigInput, clusterUncheckedUpdateWithoutConfigInput>
  }

  export type clusterUpdateManyWithWhereWithoutConfigInput = {
    where: clusterScalarWhereInput
    data: XOR<clusterUpdateManyMutationInput, clusterUncheckedUpdateManyWithoutConfigInput>
  }

  export type projectUpsertWithoutConfigInput = {
    update: XOR<projectUpdateWithoutConfigInput, projectUncheckedUpdateWithoutConfigInput>
    create: XOR<projectCreateWithoutConfigInput, projectUncheckedCreateWithoutConfigInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutConfigInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutConfigInput, projectUncheckedUpdateWithoutConfigInput>
  }

  export type projectUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type serviceNodeCreateWithoutClusterInput = {
    id?: string
    proxy_url: string
    description?: string | null
    is_healthy?: boolean
    is_primary?: boolean
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    active?: boolean
  }

  export type serviceNodeUncheckedCreateWithoutClusterInput = {
    id?: string
    proxy_url: string
    description?: string | null
    is_healthy?: boolean
    is_primary?: boolean
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    active?: boolean
  }

  export type serviceNodeCreateOrConnectWithoutClusterInput = {
    where: serviceNodeWhereUniqueInput
    create: XOR<serviceNodeCreateWithoutClusterInput, serviceNodeUncheckedCreateWithoutClusterInput>
  }

  export type serviceNodeCreateManyClusterInputEnvelope = {
    data: serviceNodeCreateManyClusterInput | serviceNodeCreateManyClusterInput[]
    skipDuplicates?: boolean
  }

  export type clusterConfigCreateWithoutClustersInput = {
    id?: string
    name: string
    config_slug: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    project: projectCreateNestedOneWithoutConfigInput
  }

  export type clusterConfigUncheckedCreateWithoutClustersInput = {
    id?: string
    name: string
    config_slug: string
    project_id: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clusterConfigCreateOrConnectWithoutClustersInput = {
    where: clusterConfigWhereUniqueInput
    create: XOR<clusterConfigCreateWithoutClustersInput, clusterConfigUncheckedCreateWithoutClustersInput>
  }

  export type projectCreateWithoutClustersInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    slug: string
    base_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config?: clusterConfigCreateNestedManyWithoutProjectInput
  }

  export type projectUncheckedCreateWithoutClustersInput = {
    id?: string
    owner_id: string
    name: string
    description?: string | null
    slug: string
    base_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config?: clusterConfigUncheckedCreateNestedManyWithoutProjectInput
  }

  export type projectCreateOrConnectWithoutClustersInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutClustersInput, projectUncheckedCreateWithoutClustersInput>
  }

  export type serviceNodeUpsertWithWhereUniqueWithoutClusterInput = {
    where: serviceNodeWhereUniqueInput
    update: XOR<serviceNodeUpdateWithoutClusterInput, serviceNodeUncheckedUpdateWithoutClusterInput>
    create: XOR<serviceNodeCreateWithoutClusterInput, serviceNodeUncheckedCreateWithoutClusterInput>
  }

  export type serviceNodeUpdateWithWhereUniqueWithoutClusterInput = {
    where: serviceNodeWhereUniqueInput
    data: XOR<serviceNodeUpdateWithoutClusterInput, serviceNodeUncheckedUpdateWithoutClusterInput>
  }

  export type serviceNodeUpdateManyWithWhereWithoutClusterInput = {
    where: serviceNodeScalarWhereInput
    data: XOR<serviceNodeUpdateManyMutationInput, serviceNodeUncheckedUpdateManyWithoutClusterInput>
  }

  export type serviceNodeScalarWhereInput = {
    AND?: serviceNodeScalarWhereInput | serviceNodeScalarWhereInput[]
    OR?: serviceNodeScalarWhereInput[]
    NOT?: serviceNodeScalarWhereInput | serviceNodeScalarWhereInput[]
    id?: UuidFilter<"serviceNode"> | string
    proxy_url?: StringFilter<"serviceNode"> | string
    description?: StringNullableFilter<"serviceNode"> | string | null
    cluster_id?: UuidFilter<"serviceNode"> | string
    is_healthy?: BoolFilter<"serviceNode"> | boolean
    is_primary?: BoolFilter<"serviceNode"> | boolean
    weight?: IntNullableFilter<"serviceNode"> | number | null
    created_at?: DateTimeFilter<"serviceNode"> | Date | string
    updated_at?: DateTimeFilter<"serviceNode"> | Date | string
    active?: BoolFilter<"serviceNode"> | boolean
  }

  export type clusterConfigUpsertWithoutClustersInput = {
    update: XOR<clusterConfigUpdateWithoutClustersInput, clusterConfigUncheckedUpdateWithoutClustersInput>
    create: XOR<clusterConfigCreateWithoutClustersInput, clusterConfigUncheckedCreateWithoutClustersInput>
    where?: clusterConfigWhereInput
  }

  export type clusterConfigUpdateToOneWithWhereWithoutClustersInput = {
    where?: clusterConfigWhereInput
    data: XOR<clusterConfigUpdateWithoutClustersInput, clusterConfigUncheckedUpdateWithoutClustersInput>
  }

  export type clusterConfigUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: projectUpdateOneRequiredWithoutConfigNestedInput
  }

  export type clusterConfigUncheckedUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUpsertWithoutClustersInput = {
    update: XOR<projectUpdateWithoutClustersInput, projectUncheckedUpdateWithoutClustersInput>
    create: XOR<projectCreateWithoutClustersInput, projectUncheckedCreateWithoutClustersInput>
    where?: projectWhereInput
  }

  export type projectUpdateToOneWithWhereWithoutClustersInput = {
    where?: projectWhereInput
    data: XOR<projectUpdateWithoutClustersInput, projectUncheckedUpdateWithoutClustersInput>
  }

  export type projectUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: clusterConfigUpdateManyWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateWithoutClustersInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    base_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: clusterConfigUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type clusterCreateWithoutNodesInput = {
    id?: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config?: clusterConfigCreateNestedOneWithoutClustersInput
    project: projectCreateNestedOneWithoutClustersInput
  }

  export type clusterUncheckedCreateWithoutNodesInput = {
    id?: string
    project_id: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config_id?: string | null
  }

  export type clusterCreateOrConnectWithoutNodesInput = {
    where: clusterWhereUniqueInput
    create: XOR<clusterCreateWithoutNodesInput, clusterUncheckedCreateWithoutNodesInput>
  }

  export type clusterUpsertWithoutNodesInput = {
    update: XOR<clusterUpdateWithoutNodesInput, clusterUncheckedUpdateWithoutNodesInput>
    create: XOR<clusterCreateWithoutNodesInput, clusterUncheckedCreateWithoutNodesInput>
    where?: clusterWhereInput
  }

  export type clusterUpdateToOneWithWhereWithoutNodesInput = {
    where?: clusterWhereInput
    data: XOR<clusterUpdateWithoutNodesInput, clusterUncheckedUpdateWithoutNodesInput>
  }

  export type clusterUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: clusterConfigUpdateOneWithoutClustersNestedInput
    project?: projectUpdateOneRequiredWithoutClustersNestedInput
  }

  export type clusterUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clusterCreateManyProjectInput = {
    id?: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
    config_id?: string | null
  }

  export type clusterConfigCreateManyProjectInput = {
    id?: string
    name: string
    config_slug: string
    clusterMode?: $Enums.clusterMode
    load_balancing_type?: $Enums.loadBalancingType
    health_check_interval?: number
    failover_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clusterUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: serviceNodeUpdateManyWithoutClusterNestedInput
    config?: clusterConfigUpdateOneWithoutClustersNestedInput
  }

  export type clusterUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config_id?: NullableStringFieldUpdateOperationsInput | string | null
    nodes?: serviceNodeUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type clusterUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    config_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clusterConfigUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUpdateManyWithoutConfigNestedInput
  }

  export type clusterConfigUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clusters?: clusterUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type clusterConfigUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config_slug?: StringFieldUpdateOperationsInput | string
    clusterMode?: EnumclusterModeFieldUpdateOperationsInput | $Enums.clusterMode
    load_balancing_type?: EnumloadBalancingTypeFieldUpdateOperationsInput | $Enums.loadBalancingType
    health_check_interval?: IntFieldUpdateOperationsInput | number
    failover_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clusterCreateManyConfigInput = {
    id?: string
    project_id: string
    name: string
    description?: string | null
    cluster_slug: string
    cluster_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clusterUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: serviceNodeUpdateManyWithoutClusterNestedInput
    project?: projectUpdateOneRequiredWithoutClustersNestedInput
  }

  export type clusterUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: serviceNodeUncheckedUpdateManyWithoutClusterNestedInput
  }

  export type clusterUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cluster_slug?: StringFieldUpdateOperationsInput | string
    cluster_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type serviceNodeCreateManyClusterInput = {
    id?: string
    proxy_url: string
    description?: string | null
    is_healthy?: boolean
    is_primary?: boolean
    weight?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    active?: boolean
  }

  export type serviceNodeUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    proxy_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_healthy?: BoolFieldUpdateOperationsInput | boolean
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type serviceNodeUncheckedUpdateWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    proxy_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_healthy?: BoolFieldUpdateOperationsInput | boolean
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type serviceNodeUncheckedUpdateManyWithoutClusterInput = {
    id?: StringFieldUpdateOperationsInput | string
    proxy_url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_healthy?: BoolFieldUpdateOperationsInput | boolean
    is_primary?: BoolFieldUpdateOperationsInput | boolean
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}