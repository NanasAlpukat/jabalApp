
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Biodata
 * 
 */
export type Biodata = $Result.DefaultSelection<Prisma.$BiodataPayload>
/**
 * Model Jurusan
 * 
 */
export type Jurusan = $Result.DefaultSelection<Prisma.$JurusanPayload>
/**
 * Model Kelas
 * 
 */
export type Kelas = $Result.DefaultSelection<Prisma.$KelasPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Mapel
 * 
 */
export type Mapel = $Result.DefaultSelection<Prisma.$MapelPayload>
/**
 * Model Nilai
 * 
 */
export type Nilai = $Result.DefaultSelection<Prisma.$NilaiPayload>
/**
 * Model Penilaian
 * 
 */
export type Penilaian = $Result.DefaultSelection<Prisma.$PenilaianPayload>
/**
 * Model HasilSAW
 * 
 */
export type HasilSAW = $Result.DefaultSelection<Prisma.$HasilSAWPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  teacher: 'teacher',
  student: 'student'
};

export type Role = (typeof Role)[keyof typeof Role]


export const KodeKelas: {
  K10: 'K10',
  K11: 'K11',
  K12: 'K12'
};

export type KodeKelas = (typeof KodeKelas)[keyof typeof KodeKelas]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type KodeKelas = $Enums.KodeKelas

export const KodeKelas: typeof $Enums.KodeKelas

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biodata`: Exposes CRUD operations for the **Biodata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Biodata
    * const biodata = await prisma.biodata.findMany()
    * ```
    */
  get biodata(): Prisma.BiodataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jurusan`: Exposes CRUD operations for the **Jurusan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jurusans
    * const jurusans = await prisma.jurusan.findMany()
    * ```
    */
  get jurusan(): Prisma.JurusanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **Kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.KelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapel`: Exposes CRUD operations for the **Mapel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mapels
    * const mapels = await prisma.mapel.findMany()
    * ```
    */
  get mapel(): Prisma.MapelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nilai`: Exposes CRUD operations for the **Nilai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nilais
    * const nilais = await prisma.nilai.findMany()
    * ```
    */
  get nilai(): Prisma.NilaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penilaian`: Exposes CRUD operations for the **Penilaian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penilaians
    * const penilaians = await prisma.penilaian.findMany()
    * ```
    */
  get penilaian(): Prisma.PenilaianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hasilSAW`: Exposes CRUD operations for the **HasilSAW** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HasilSAWS
    * const hasilSAWS = await prisma.hasilSAW.findMany()
    * ```
    */
  get hasilSAW(): Prisma.HasilSAWDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Biodata: 'Biodata',
    Jurusan: 'Jurusan',
    Kelas: 'Kelas',
    Student: 'Student',
    Teacher: 'Teacher',
    Mapel: 'Mapel',
    Nilai: 'Nilai',
    Penilaian: 'Penilaian',
    HasilSAW: 'HasilSAW',
    Token: 'Token'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "biodata" | "jurusan" | "kelas" | "student" | "teacher" | "mapel" | "nilai" | "penilaian" | "hasilSAW" | "token"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Biodata: {
        payload: Prisma.$BiodataPayload<ExtArgs>
        fields: Prisma.BiodataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiodataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiodataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>
          }
          findFirst: {
            args: Prisma.BiodataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiodataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>
          }
          findMany: {
            args: Prisma.BiodataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>[]
          }
          create: {
            args: Prisma.BiodataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>
          }
          createMany: {
            args: Prisma.BiodataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiodataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>[]
          }
          delete: {
            args: Prisma.BiodataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>
          }
          update: {
            args: Prisma.BiodataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>
          }
          deleteMany: {
            args: Prisma.BiodataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiodataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiodataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>[]
          }
          upsert: {
            args: Prisma.BiodataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiodataPayload>
          }
          aggregate: {
            args: Prisma.BiodataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiodata>
          }
          groupBy: {
            args: Prisma.BiodataGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiodataGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiodataCountArgs<ExtArgs>
            result: $Utils.Optional<BiodataCountAggregateOutputType> | number
          }
        }
      }
      Jurusan: {
        payload: Prisma.$JurusanPayload<ExtArgs>
        fields: Prisma.JurusanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JurusanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JurusanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>
          }
          findFirst: {
            args: Prisma.JurusanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JurusanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>
          }
          findMany: {
            args: Prisma.JurusanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>[]
          }
          create: {
            args: Prisma.JurusanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>
          }
          createMany: {
            args: Prisma.JurusanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JurusanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>[]
          }
          delete: {
            args: Prisma.JurusanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>
          }
          update: {
            args: Prisma.JurusanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>
          }
          deleteMany: {
            args: Prisma.JurusanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JurusanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JurusanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>[]
          }
          upsert: {
            args: Prisma.JurusanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JurusanPayload>
          }
          aggregate: {
            args: Prisma.JurusanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJurusan>
          }
          groupBy: {
            args: Prisma.JurusanGroupByArgs<ExtArgs>
            result: $Utils.Optional<JurusanGroupByOutputType>[]
          }
          count: {
            args: Prisma.JurusanCountArgs<ExtArgs>
            result: $Utils.Optional<JurusanCountAggregateOutputType> | number
          }
        }
      }
      Kelas: {
        payload: Prisma.$KelasPayload<ExtArgs>
        fields: Prisma.KelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findFirst: {
            args: Prisma.KelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findMany: {
            args: Prisma.KelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          create: {
            args: Prisma.KelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          createMany: {
            args: Prisma.KelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          delete: {
            args: Prisma.KelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          update: {
            args: Prisma.KelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          deleteMany: {
            args: Prisma.KelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          upsert: {
            args: Prisma.KelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.KelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.KelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Mapel: {
        payload: Prisma.$MapelPayload<ExtArgs>
        fields: Prisma.MapelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>
          }
          findFirst: {
            args: Prisma.MapelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>
          }
          findMany: {
            args: Prisma.MapelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>[]
          }
          create: {
            args: Prisma.MapelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>
          }
          createMany: {
            args: Prisma.MapelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>[]
          }
          delete: {
            args: Prisma.MapelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>
          }
          update: {
            args: Prisma.MapelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>
          }
          deleteMany: {
            args: Prisma.MapelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>[]
          }
          upsert: {
            args: Prisma.MapelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapelPayload>
          }
          aggregate: {
            args: Prisma.MapelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapel>
          }
          groupBy: {
            args: Prisma.MapelGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapelGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapelCountArgs<ExtArgs>
            result: $Utils.Optional<MapelCountAggregateOutputType> | number
          }
        }
      }
      Nilai: {
        payload: Prisma.$NilaiPayload<ExtArgs>
        fields: Prisma.NilaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NilaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NilaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          findFirst: {
            args: Prisma.NilaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NilaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          findMany: {
            args: Prisma.NilaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          create: {
            args: Prisma.NilaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          createMany: {
            args: Prisma.NilaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NilaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          delete: {
            args: Prisma.NilaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          update: {
            args: Prisma.NilaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          deleteMany: {
            args: Prisma.NilaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NilaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NilaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>[]
          }
          upsert: {
            args: Prisma.NilaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NilaiPayload>
          }
          aggregate: {
            args: Prisma.NilaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNilai>
          }
          groupBy: {
            args: Prisma.NilaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NilaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NilaiCountArgs<ExtArgs>
            result: $Utils.Optional<NilaiCountAggregateOutputType> | number
          }
        }
      }
      Penilaian: {
        payload: Prisma.$PenilaianPayload<ExtArgs>
        fields: Prisma.PenilaianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenilaianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenilaianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          findFirst: {
            args: Prisma.PenilaianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenilaianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          findMany: {
            args: Prisma.PenilaianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>[]
          }
          create: {
            args: Prisma.PenilaianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          createMany: {
            args: Prisma.PenilaianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenilaianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>[]
          }
          delete: {
            args: Prisma.PenilaianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          update: {
            args: Prisma.PenilaianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          deleteMany: {
            args: Prisma.PenilaianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenilaianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenilaianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>[]
          }
          upsert: {
            args: Prisma.PenilaianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenilaianPayload>
          }
          aggregate: {
            args: Prisma.PenilaianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenilaian>
          }
          groupBy: {
            args: Prisma.PenilaianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenilaianGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenilaianCountArgs<ExtArgs>
            result: $Utils.Optional<PenilaianCountAggregateOutputType> | number
          }
        }
      }
      HasilSAW: {
        payload: Prisma.$HasilSAWPayload<ExtArgs>
        fields: Prisma.HasilSAWFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HasilSAWFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HasilSAWFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>
          }
          findFirst: {
            args: Prisma.HasilSAWFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HasilSAWFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>
          }
          findMany: {
            args: Prisma.HasilSAWFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>[]
          }
          create: {
            args: Prisma.HasilSAWCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>
          }
          createMany: {
            args: Prisma.HasilSAWCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HasilSAWCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>[]
          }
          delete: {
            args: Prisma.HasilSAWDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>
          }
          update: {
            args: Prisma.HasilSAWUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>
          }
          deleteMany: {
            args: Prisma.HasilSAWDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HasilSAWUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HasilSAWUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>[]
          }
          upsert: {
            args: Prisma.HasilSAWUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HasilSAWPayload>
          }
          aggregate: {
            args: Prisma.HasilSAWAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHasilSAW>
          }
          groupBy: {
            args: Prisma.HasilSAWGroupByArgs<ExtArgs>
            result: $Utils.Optional<HasilSAWGroupByOutputType>[]
          }
          count: {
            args: Prisma.HasilSAWCountArgs<ExtArgs>
            result: $Utils.Optional<HasilSAWCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    biodata?: BiodataOmit
    jurusan?: JurusanOmit
    kelas?: KelasOmit
    student?: StudentOmit
    teacher?: TeacherOmit
    mapel?: MapelOmit
    nilai?: NilaiOmit
    penilaian?: PenilaianOmit
    hasilSAW?: HasilSAWOmit
    token?: TokenOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type JurusanCountOutputType
   */

  export type JurusanCountOutputType = {
    students: number
  }

  export type JurusanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | JurusanCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * JurusanCountOutputType without action
   */
  export type JurusanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JurusanCountOutputType
     */
    select?: JurusanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JurusanCountOutputType without action
   */
  export type JurusanCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    students: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | KelasCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    mapel: number
    nilai: number
    penilaian: number
    haasilSAW: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapel?: boolean | StudentCountOutputTypeCountMapelArgs
    nilai?: boolean | StudentCountOutputTypeCountNilaiArgs
    penilaian?: boolean | StudentCountOutputTypeCountPenilaianArgs
    haasilSAW?: boolean | StudentCountOutputTypeCountHaasilSAWArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMapelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapelWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountNilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPenilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenilaianWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountHaasilSAWArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilSAWWhereInput
  }


  /**
   * Count Type MapelCountOutputType
   */

  export type MapelCountOutputType = {
    teachers: number
    students: number
    nilai: number
  }

  export type MapelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | MapelCountOutputTypeCountTeachersArgs
    students?: boolean | MapelCountOutputTypeCountStudentsArgs
    nilai?: boolean | MapelCountOutputTypeCountNilaiArgs
  }

  // Custom InputTypes
  /**
   * MapelCountOutputType without action
   */
  export type MapelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapelCountOutputType
     */
    select?: MapelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapelCountOutputType without action
   */
  export type MapelCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
  }

  /**
   * MapelCountOutputType without action
   */
  export type MapelCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * MapelCountOutputType without action
   */
  export type MapelCountOutputTypeCountNilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    biodata?: boolean | User$biodataArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    teacher?: boolean | User$teacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    biodata?: boolean | User$biodataArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    student?: boolean | User$studentArgs<ExtArgs>
    teacher?: boolean | User$teacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      biodata: Prisma.$BiodataPayload<ExtArgs> | null
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs> | null
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    biodata<T extends User$biodataArgs<ExtArgs> = {}>(args?: Subset<T, User$biodataArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teacher<T extends User$teacherArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.biodata
   */
  export type User$biodataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    where?: BiodataWhereInput
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.teacher
   */
  export type User$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Biodata
   */

  export type AggregateBiodata = {
    _count: BiodataCountAggregateOutputType | null
    _min: BiodataMinAggregateOutputType | null
    _max: BiodataMaxAggregateOutputType | null
  }

  export type BiodataMinAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    birthDate: Date | null
    userId: string | null
  }

  export type BiodataMaxAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    birthDate: Date | null
    userId: string | null
  }

  export type BiodataCountAggregateOutputType = {
    id: number
    address: number
    phone: number
    birthDate: number
    userId: number
    _all: number
  }


  export type BiodataMinAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    birthDate?: true
    userId?: true
  }

  export type BiodataMaxAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    birthDate?: true
    userId?: true
  }

  export type BiodataCountAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    birthDate?: true
    userId?: true
    _all?: true
  }

  export type BiodataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Biodata to aggregate.
     */
    where?: BiodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biodata to fetch.
     */
    orderBy?: BiodataOrderByWithRelationInput | BiodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biodata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Biodata
    **/
    _count?: true | BiodataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiodataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiodataMaxAggregateInputType
  }

  export type GetBiodataAggregateType<T extends BiodataAggregateArgs> = {
        [P in keyof T & keyof AggregateBiodata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiodata[P]>
      : GetScalarType<T[P], AggregateBiodata[P]>
  }




  export type BiodataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiodataWhereInput
    orderBy?: BiodataOrderByWithAggregationInput | BiodataOrderByWithAggregationInput[]
    by: BiodataScalarFieldEnum[] | BiodataScalarFieldEnum
    having?: BiodataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiodataCountAggregateInputType | true
    _min?: BiodataMinAggregateInputType
    _max?: BiodataMaxAggregateInputType
  }

  export type BiodataGroupByOutputType = {
    id: string
    address: string
    phone: string
    birthDate: Date
    userId: string
    _count: BiodataCountAggregateOutputType | null
    _min: BiodataMinAggregateOutputType | null
    _max: BiodataMaxAggregateOutputType | null
  }

  type GetBiodataGroupByPayload<T extends BiodataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiodataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiodataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiodataGroupByOutputType[P]>
            : GetScalarType<T[P], BiodataGroupByOutputType[P]>
        }
      >
    >


  export type BiodataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    birthDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biodata"]>

  export type BiodataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    birthDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biodata"]>

  export type BiodataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    birthDate?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biodata"]>

  export type BiodataSelectScalar = {
    id?: boolean
    address?: boolean
    phone?: boolean
    birthDate?: boolean
    userId?: boolean
  }

  export type BiodataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "phone" | "birthDate" | "userId", ExtArgs["result"]["biodata"]>
  export type BiodataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BiodataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BiodataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BiodataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Biodata"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      phone: string
      birthDate: Date
      userId: string
    }, ExtArgs["result"]["biodata"]>
    composites: {}
  }

  type BiodataGetPayload<S extends boolean | null | undefined | BiodataDefaultArgs> = $Result.GetResult<Prisma.$BiodataPayload, S>

  type BiodataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiodataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiodataCountAggregateInputType | true
    }

  export interface BiodataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Biodata'], meta: { name: 'Biodata' } }
    /**
     * Find zero or one Biodata that matches the filter.
     * @param {BiodataFindUniqueArgs} args - Arguments to find a Biodata
     * @example
     * // Get one Biodata
     * const biodata = await prisma.biodata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiodataFindUniqueArgs>(args: SelectSubset<T, BiodataFindUniqueArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Biodata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiodataFindUniqueOrThrowArgs} args - Arguments to find a Biodata
     * @example
     * // Get one Biodata
     * const biodata = await prisma.biodata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiodataFindUniqueOrThrowArgs>(args: SelectSubset<T, BiodataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Biodata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataFindFirstArgs} args - Arguments to find a Biodata
     * @example
     * // Get one Biodata
     * const biodata = await prisma.biodata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiodataFindFirstArgs>(args?: SelectSubset<T, BiodataFindFirstArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Biodata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataFindFirstOrThrowArgs} args - Arguments to find a Biodata
     * @example
     * // Get one Biodata
     * const biodata = await prisma.biodata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiodataFindFirstOrThrowArgs>(args?: SelectSubset<T, BiodataFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Biodata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Biodata
     * const biodata = await prisma.biodata.findMany()
     * 
     * // Get first 10 Biodata
     * const biodata = await prisma.biodata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biodataWithIdOnly = await prisma.biodata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiodataFindManyArgs>(args?: SelectSubset<T, BiodataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Biodata.
     * @param {BiodataCreateArgs} args - Arguments to create a Biodata.
     * @example
     * // Create one Biodata
     * const Biodata = await prisma.biodata.create({
     *   data: {
     *     // ... data to create a Biodata
     *   }
     * })
     * 
     */
    create<T extends BiodataCreateArgs>(args: SelectSubset<T, BiodataCreateArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Biodata.
     * @param {BiodataCreateManyArgs} args - Arguments to create many Biodata.
     * @example
     * // Create many Biodata
     * const biodata = await prisma.biodata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiodataCreateManyArgs>(args?: SelectSubset<T, BiodataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Biodata and returns the data saved in the database.
     * @param {BiodataCreateManyAndReturnArgs} args - Arguments to create many Biodata.
     * @example
     * // Create many Biodata
     * const biodata = await prisma.biodata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Biodata and only return the `id`
     * const biodataWithIdOnly = await prisma.biodata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiodataCreateManyAndReturnArgs>(args?: SelectSubset<T, BiodataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Biodata.
     * @param {BiodataDeleteArgs} args - Arguments to delete one Biodata.
     * @example
     * // Delete one Biodata
     * const Biodata = await prisma.biodata.delete({
     *   where: {
     *     // ... filter to delete one Biodata
     *   }
     * })
     * 
     */
    delete<T extends BiodataDeleteArgs>(args: SelectSubset<T, BiodataDeleteArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Biodata.
     * @param {BiodataUpdateArgs} args - Arguments to update one Biodata.
     * @example
     * // Update one Biodata
     * const biodata = await prisma.biodata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiodataUpdateArgs>(args: SelectSubset<T, BiodataUpdateArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Biodata.
     * @param {BiodataDeleteManyArgs} args - Arguments to filter Biodata to delete.
     * @example
     * // Delete a few Biodata
     * const { count } = await prisma.biodata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiodataDeleteManyArgs>(args?: SelectSubset<T, BiodataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Biodata
     * const biodata = await prisma.biodata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiodataUpdateManyArgs>(args: SelectSubset<T, BiodataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Biodata and returns the data updated in the database.
     * @param {BiodataUpdateManyAndReturnArgs} args - Arguments to update many Biodata.
     * @example
     * // Update many Biodata
     * const biodata = await prisma.biodata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Biodata and only return the `id`
     * const biodataWithIdOnly = await prisma.biodata.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BiodataUpdateManyAndReturnArgs>(args: SelectSubset<T, BiodataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Biodata.
     * @param {BiodataUpsertArgs} args - Arguments to update or create a Biodata.
     * @example
     * // Update or create a Biodata
     * const biodata = await prisma.biodata.upsert({
     *   create: {
     *     // ... data to create a Biodata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Biodata we want to update
     *   }
     * })
     */
    upsert<T extends BiodataUpsertArgs>(args: SelectSubset<T, BiodataUpsertArgs<ExtArgs>>): Prisma__BiodataClient<$Result.GetResult<Prisma.$BiodataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataCountArgs} args - Arguments to filter Biodata to count.
     * @example
     * // Count the number of Biodata
     * const count = await prisma.biodata.count({
     *   where: {
     *     // ... the filter for the Biodata we want to count
     *   }
     * })
    **/
    count<T extends BiodataCountArgs>(
      args?: Subset<T, BiodataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiodataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BiodataAggregateArgs>(args: Subset<T, BiodataAggregateArgs>): Prisma.PrismaPromise<GetBiodataAggregateType<T>>

    /**
     * Group by Biodata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodataGroupByArgs} args - Group by arguments.
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
      T extends BiodataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiodataGroupByArgs['orderBy'] }
        : { orderBy?: BiodataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BiodataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiodataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Biodata model
   */
  readonly fields: BiodataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Biodata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiodataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Biodata model
   */
  interface BiodataFieldRefs {
    readonly id: FieldRef<"Biodata", 'String'>
    readonly address: FieldRef<"Biodata", 'String'>
    readonly phone: FieldRef<"Biodata", 'String'>
    readonly birthDate: FieldRef<"Biodata", 'DateTime'>
    readonly userId: FieldRef<"Biodata", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Biodata findUnique
   */
  export type BiodataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * Filter, which Biodata to fetch.
     */
    where: BiodataWhereUniqueInput
  }

  /**
   * Biodata findUniqueOrThrow
   */
  export type BiodataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * Filter, which Biodata to fetch.
     */
    where: BiodataWhereUniqueInput
  }

  /**
   * Biodata findFirst
   */
  export type BiodataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * Filter, which Biodata to fetch.
     */
    where?: BiodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biodata to fetch.
     */
    orderBy?: BiodataOrderByWithRelationInput | BiodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Biodata.
     */
    cursor?: BiodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biodata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Biodata.
     */
    distinct?: BiodataScalarFieldEnum | BiodataScalarFieldEnum[]
  }

  /**
   * Biodata findFirstOrThrow
   */
  export type BiodataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * Filter, which Biodata to fetch.
     */
    where?: BiodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biodata to fetch.
     */
    orderBy?: BiodataOrderByWithRelationInput | BiodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Biodata.
     */
    cursor?: BiodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biodata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Biodata.
     */
    distinct?: BiodataScalarFieldEnum | BiodataScalarFieldEnum[]
  }

  /**
   * Biodata findMany
   */
  export type BiodataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * Filter, which Biodata to fetch.
     */
    where?: BiodataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biodata to fetch.
     */
    orderBy?: BiodataOrderByWithRelationInput | BiodataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Biodata.
     */
    cursor?: BiodataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biodata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biodata.
     */
    skip?: number
    distinct?: BiodataScalarFieldEnum | BiodataScalarFieldEnum[]
  }

  /**
   * Biodata create
   */
  export type BiodataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * The data needed to create a Biodata.
     */
    data: XOR<BiodataCreateInput, BiodataUncheckedCreateInput>
  }

  /**
   * Biodata createMany
   */
  export type BiodataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Biodata.
     */
    data: BiodataCreateManyInput | BiodataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Biodata createManyAndReturn
   */
  export type BiodataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * The data used to create many Biodata.
     */
    data: BiodataCreateManyInput | BiodataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Biodata update
   */
  export type BiodataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * The data needed to update a Biodata.
     */
    data: XOR<BiodataUpdateInput, BiodataUncheckedUpdateInput>
    /**
     * Choose, which Biodata to update.
     */
    where: BiodataWhereUniqueInput
  }

  /**
   * Biodata updateMany
   */
  export type BiodataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Biodata.
     */
    data: XOR<BiodataUpdateManyMutationInput, BiodataUncheckedUpdateManyInput>
    /**
     * Filter which Biodata to update
     */
    where?: BiodataWhereInput
    /**
     * Limit how many Biodata to update.
     */
    limit?: number
  }

  /**
   * Biodata updateManyAndReturn
   */
  export type BiodataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * The data used to update Biodata.
     */
    data: XOR<BiodataUpdateManyMutationInput, BiodataUncheckedUpdateManyInput>
    /**
     * Filter which Biodata to update
     */
    where?: BiodataWhereInput
    /**
     * Limit how many Biodata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Biodata upsert
   */
  export type BiodataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * The filter to search for the Biodata to update in case it exists.
     */
    where: BiodataWhereUniqueInput
    /**
     * In case the Biodata found by the `where` argument doesn't exist, create a new Biodata with this data.
     */
    create: XOR<BiodataCreateInput, BiodataUncheckedCreateInput>
    /**
     * In case the Biodata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiodataUpdateInput, BiodataUncheckedUpdateInput>
  }

  /**
   * Biodata delete
   */
  export type BiodataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
    /**
     * Filter which Biodata to delete.
     */
    where: BiodataWhereUniqueInput
  }

  /**
   * Biodata deleteMany
   */
  export type BiodataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Biodata to delete
     */
    where?: BiodataWhereInput
    /**
     * Limit how many Biodata to delete.
     */
    limit?: number
  }

  /**
   * Biodata without action
   */
  export type BiodataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biodata
     */
    select?: BiodataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biodata
     */
    omit?: BiodataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiodataInclude<ExtArgs> | null
  }


  /**
   * Model Jurusan
   */

  export type AggregateJurusan = {
    _count: JurusanCountAggregateOutputType | null
    _min: JurusanMinAggregateOutputType | null
    _max: JurusanMaxAggregateOutputType | null
  }

  export type JurusanMinAggregateOutputType = {
    id: string | null
    nama: string | null
    kode: string | null
  }

  export type JurusanMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    kode: string | null
  }

  export type JurusanCountAggregateOutputType = {
    id: number
    nama: number
    kode: number
    _all: number
  }


  export type JurusanMinAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
  }

  export type JurusanMaxAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
  }

  export type JurusanCountAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    _all?: true
  }

  export type JurusanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jurusan to aggregate.
     */
    where?: JurusanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jurusans to fetch.
     */
    orderBy?: JurusanOrderByWithRelationInput | JurusanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JurusanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jurusans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jurusans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jurusans
    **/
    _count?: true | JurusanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JurusanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JurusanMaxAggregateInputType
  }

  export type GetJurusanAggregateType<T extends JurusanAggregateArgs> = {
        [P in keyof T & keyof AggregateJurusan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJurusan[P]>
      : GetScalarType<T[P], AggregateJurusan[P]>
  }




  export type JurusanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JurusanWhereInput
    orderBy?: JurusanOrderByWithAggregationInput | JurusanOrderByWithAggregationInput[]
    by: JurusanScalarFieldEnum[] | JurusanScalarFieldEnum
    having?: JurusanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JurusanCountAggregateInputType | true
    _min?: JurusanMinAggregateInputType
    _max?: JurusanMaxAggregateInputType
  }

  export type JurusanGroupByOutputType = {
    id: string
    nama: string
    kode: string
    _count: JurusanCountAggregateOutputType | null
    _min: JurusanMinAggregateOutputType | null
    _max: JurusanMaxAggregateOutputType | null
  }

  type GetJurusanGroupByPayload<T extends JurusanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JurusanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JurusanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JurusanGroupByOutputType[P]>
            : GetScalarType<T[P], JurusanGroupByOutputType[P]>
        }
      >
    >


  export type JurusanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    students?: boolean | Jurusan$studentsArgs<ExtArgs>
    _count?: boolean | JurusanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jurusan"]>

  export type JurusanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
  }, ExtArgs["result"]["jurusan"]>

  export type JurusanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
  }, ExtArgs["result"]["jurusan"]>

  export type JurusanSelectScalar = {
    id?: boolean
    nama?: boolean
    kode?: boolean
  }

  export type JurusanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kode", ExtArgs["result"]["jurusan"]>
  export type JurusanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Jurusan$studentsArgs<ExtArgs>
    _count?: boolean | JurusanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JurusanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type JurusanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $JurusanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jurusan"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      kode: string
    }, ExtArgs["result"]["jurusan"]>
    composites: {}
  }

  type JurusanGetPayload<S extends boolean | null | undefined | JurusanDefaultArgs> = $Result.GetResult<Prisma.$JurusanPayload, S>

  type JurusanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JurusanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JurusanCountAggregateInputType | true
    }

  export interface JurusanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jurusan'], meta: { name: 'Jurusan' } }
    /**
     * Find zero or one Jurusan that matches the filter.
     * @param {JurusanFindUniqueArgs} args - Arguments to find a Jurusan
     * @example
     * // Get one Jurusan
     * const jurusan = await prisma.jurusan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JurusanFindUniqueArgs>(args: SelectSubset<T, JurusanFindUniqueArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jurusan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JurusanFindUniqueOrThrowArgs} args - Arguments to find a Jurusan
     * @example
     * // Get one Jurusan
     * const jurusan = await prisma.jurusan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JurusanFindUniqueOrThrowArgs>(args: SelectSubset<T, JurusanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jurusan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JurusanFindFirstArgs} args - Arguments to find a Jurusan
     * @example
     * // Get one Jurusan
     * const jurusan = await prisma.jurusan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JurusanFindFirstArgs>(args?: SelectSubset<T, JurusanFindFirstArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jurusan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JurusanFindFirstOrThrowArgs} args - Arguments to find a Jurusan
     * @example
     * // Get one Jurusan
     * const jurusan = await prisma.jurusan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JurusanFindFirstOrThrowArgs>(args?: SelectSubset<T, JurusanFindFirstOrThrowArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jurusans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JurusanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jurusans
     * const jurusans = await prisma.jurusan.findMany()
     * 
     * // Get first 10 Jurusans
     * const jurusans = await prisma.jurusan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jurusanWithIdOnly = await prisma.jurusan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JurusanFindManyArgs>(args?: SelectSubset<T, JurusanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jurusan.
     * @param {JurusanCreateArgs} args - Arguments to create a Jurusan.
     * @example
     * // Create one Jurusan
     * const Jurusan = await prisma.jurusan.create({
     *   data: {
     *     // ... data to create a Jurusan
     *   }
     * })
     * 
     */
    create<T extends JurusanCreateArgs>(args: SelectSubset<T, JurusanCreateArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jurusans.
     * @param {JurusanCreateManyArgs} args - Arguments to create many Jurusans.
     * @example
     * // Create many Jurusans
     * const jurusan = await prisma.jurusan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JurusanCreateManyArgs>(args?: SelectSubset<T, JurusanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jurusans and returns the data saved in the database.
     * @param {JurusanCreateManyAndReturnArgs} args - Arguments to create many Jurusans.
     * @example
     * // Create many Jurusans
     * const jurusan = await prisma.jurusan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jurusans and only return the `id`
     * const jurusanWithIdOnly = await prisma.jurusan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JurusanCreateManyAndReturnArgs>(args?: SelectSubset<T, JurusanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jurusan.
     * @param {JurusanDeleteArgs} args - Arguments to delete one Jurusan.
     * @example
     * // Delete one Jurusan
     * const Jurusan = await prisma.jurusan.delete({
     *   where: {
     *     // ... filter to delete one Jurusan
     *   }
     * })
     * 
     */
    delete<T extends JurusanDeleteArgs>(args: SelectSubset<T, JurusanDeleteArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jurusan.
     * @param {JurusanUpdateArgs} args - Arguments to update one Jurusan.
     * @example
     * // Update one Jurusan
     * const jurusan = await prisma.jurusan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JurusanUpdateArgs>(args: SelectSubset<T, JurusanUpdateArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jurusans.
     * @param {JurusanDeleteManyArgs} args - Arguments to filter Jurusans to delete.
     * @example
     * // Delete a few Jurusans
     * const { count } = await prisma.jurusan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JurusanDeleteManyArgs>(args?: SelectSubset<T, JurusanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jurusans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JurusanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jurusans
     * const jurusan = await prisma.jurusan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JurusanUpdateManyArgs>(args: SelectSubset<T, JurusanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jurusans and returns the data updated in the database.
     * @param {JurusanUpdateManyAndReturnArgs} args - Arguments to update many Jurusans.
     * @example
     * // Update many Jurusans
     * const jurusan = await prisma.jurusan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jurusans and only return the `id`
     * const jurusanWithIdOnly = await prisma.jurusan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JurusanUpdateManyAndReturnArgs>(args: SelectSubset<T, JurusanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jurusan.
     * @param {JurusanUpsertArgs} args - Arguments to update or create a Jurusan.
     * @example
     * // Update or create a Jurusan
     * const jurusan = await prisma.jurusan.upsert({
     *   create: {
     *     // ... data to create a Jurusan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jurusan we want to update
     *   }
     * })
     */
    upsert<T extends JurusanUpsertArgs>(args: SelectSubset<T, JurusanUpsertArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jurusans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JurusanCountArgs} args - Arguments to filter Jurusans to count.
     * @example
     * // Count the number of Jurusans
     * const count = await prisma.jurusan.count({
     *   where: {
     *     // ... the filter for the Jurusans we want to count
     *   }
     * })
    **/
    count<T extends JurusanCountArgs>(
      args?: Subset<T, JurusanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JurusanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jurusan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JurusanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JurusanAggregateArgs>(args: Subset<T, JurusanAggregateArgs>): Prisma.PrismaPromise<GetJurusanAggregateType<T>>

    /**
     * Group by Jurusan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JurusanGroupByArgs} args - Group by arguments.
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
      T extends JurusanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JurusanGroupByArgs['orderBy'] }
        : { orderBy?: JurusanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JurusanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJurusanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jurusan model
   */
  readonly fields: JurusanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jurusan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JurusanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Jurusan$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Jurusan$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Jurusan model
   */
  interface JurusanFieldRefs {
    readonly id: FieldRef<"Jurusan", 'String'>
    readonly nama: FieldRef<"Jurusan", 'String'>
    readonly kode: FieldRef<"Jurusan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jurusan findUnique
   */
  export type JurusanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * Filter, which Jurusan to fetch.
     */
    where: JurusanWhereUniqueInput
  }

  /**
   * Jurusan findUniqueOrThrow
   */
  export type JurusanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * Filter, which Jurusan to fetch.
     */
    where: JurusanWhereUniqueInput
  }

  /**
   * Jurusan findFirst
   */
  export type JurusanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * Filter, which Jurusan to fetch.
     */
    where?: JurusanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jurusans to fetch.
     */
    orderBy?: JurusanOrderByWithRelationInput | JurusanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jurusans.
     */
    cursor?: JurusanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jurusans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jurusans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jurusans.
     */
    distinct?: JurusanScalarFieldEnum | JurusanScalarFieldEnum[]
  }

  /**
   * Jurusan findFirstOrThrow
   */
  export type JurusanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * Filter, which Jurusan to fetch.
     */
    where?: JurusanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jurusans to fetch.
     */
    orderBy?: JurusanOrderByWithRelationInput | JurusanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jurusans.
     */
    cursor?: JurusanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jurusans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jurusans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jurusans.
     */
    distinct?: JurusanScalarFieldEnum | JurusanScalarFieldEnum[]
  }

  /**
   * Jurusan findMany
   */
  export type JurusanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * Filter, which Jurusans to fetch.
     */
    where?: JurusanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jurusans to fetch.
     */
    orderBy?: JurusanOrderByWithRelationInput | JurusanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jurusans.
     */
    cursor?: JurusanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jurusans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jurusans.
     */
    skip?: number
    distinct?: JurusanScalarFieldEnum | JurusanScalarFieldEnum[]
  }

  /**
   * Jurusan create
   */
  export type JurusanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * The data needed to create a Jurusan.
     */
    data: XOR<JurusanCreateInput, JurusanUncheckedCreateInput>
  }

  /**
   * Jurusan createMany
   */
  export type JurusanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jurusans.
     */
    data: JurusanCreateManyInput | JurusanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jurusan createManyAndReturn
   */
  export type JurusanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * The data used to create many Jurusans.
     */
    data: JurusanCreateManyInput | JurusanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jurusan update
   */
  export type JurusanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * The data needed to update a Jurusan.
     */
    data: XOR<JurusanUpdateInput, JurusanUncheckedUpdateInput>
    /**
     * Choose, which Jurusan to update.
     */
    where: JurusanWhereUniqueInput
  }

  /**
   * Jurusan updateMany
   */
  export type JurusanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jurusans.
     */
    data: XOR<JurusanUpdateManyMutationInput, JurusanUncheckedUpdateManyInput>
    /**
     * Filter which Jurusans to update
     */
    where?: JurusanWhereInput
    /**
     * Limit how many Jurusans to update.
     */
    limit?: number
  }

  /**
   * Jurusan updateManyAndReturn
   */
  export type JurusanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * The data used to update Jurusans.
     */
    data: XOR<JurusanUpdateManyMutationInput, JurusanUncheckedUpdateManyInput>
    /**
     * Filter which Jurusans to update
     */
    where?: JurusanWhereInput
    /**
     * Limit how many Jurusans to update.
     */
    limit?: number
  }

  /**
   * Jurusan upsert
   */
  export type JurusanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * The filter to search for the Jurusan to update in case it exists.
     */
    where: JurusanWhereUniqueInput
    /**
     * In case the Jurusan found by the `where` argument doesn't exist, create a new Jurusan with this data.
     */
    create: XOR<JurusanCreateInput, JurusanUncheckedCreateInput>
    /**
     * In case the Jurusan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JurusanUpdateInput, JurusanUncheckedUpdateInput>
  }

  /**
   * Jurusan delete
   */
  export type JurusanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
    /**
     * Filter which Jurusan to delete.
     */
    where: JurusanWhereUniqueInput
  }

  /**
   * Jurusan deleteMany
   */
  export type JurusanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jurusans to delete
     */
    where?: JurusanWhereInput
    /**
     * Limit how many Jurusans to delete.
     */
    limit?: number
  }

  /**
   * Jurusan.students
   */
  export type Jurusan$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Jurusan without action
   */
  export type JurusanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jurusan
     */
    select?: JurusanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jurusan
     */
    omit?: JurusanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JurusanInclude<ExtArgs> | null
  }


  /**
   * Model Kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasMinAggregateOutputType = {
    id: string | null
    kode: $Enums.KodeKelas | null
  }

  export type KelasMaxAggregateOutputType = {
    id: string | null
    kode: $Enums.KodeKelas | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    kode: number
    _all: number
  }


  export type KelasMinAggregateInputType = {
    id?: true
    kode?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    kode?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    kode?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to aggregate.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type KelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithAggregationInput | KelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: KelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: string
    kode: $Enums.KodeKelas
    _count: KelasCountAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends KelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type KelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    students?: boolean | Kelas$studentsArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectScalar = {
    id?: boolean
    kode?: boolean
  }

  export type KelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode", ExtArgs["result"]["kelas"]>
  export type KelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Kelas$studentsArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kode: $Enums.KodeKelas
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type KelasGetPayload<S extends boolean | null | undefined | KelasDefaultArgs> = $Result.GetResult<Prisma.$KelasPayload, S>

  type KelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface KelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelas'], meta: { name: 'Kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {KelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KelasFindUniqueArgs>(args: SelectSubset<T, KelasFindUniqueArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KelasFindUniqueOrThrowArgs>(args: SelectSubset<T, KelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KelasFindFirstArgs>(args?: SelectSubset<T, KelasFindFirstArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KelasFindFirstOrThrowArgs>(args?: SelectSubset<T, KelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KelasFindManyArgs>(args?: SelectSubset<T, KelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {KelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends KelasCreateArgs>(args: SelectSubset<T, KelasCreateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {KelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KelasCreateManyArgs>(args?: SelectSubset<T, KelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {KelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KelasCreateManyAndReturnArgs>(args?: SelectSubset<T, KelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelas.
     * @param {KelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends KelasDeleteArgs>(args: SelectSubset<T, KelasDeleteArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {KelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KelasUpdateArgs>(args: SelectSubset<T, KelasUpdateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {KelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KelasDeleteManyArgs>(args?: SelectSubset<T, KelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KelasUpdateManyArgs>(args: SelectSubset<T, KelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {KelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KelasUpdateManyAndReturnArgs>(args: SelectSubset<T, KelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelas.
     * @param {KelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends KelasUpsertArgs>(args: SelectSubset<T, KelasUpsertArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends KelasCountArgs>(
      args?: Subset<T, KelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasGroupByArgs} args - Group by arguments.
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
      T extends KelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KelasGroupByArgs['orderBy'] }
        : { orderBy?: KelasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kelas model
   */
  readonly fields: KelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Kelas$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kelas model
   */
  interface KelasFieldRefs {
    readonly id: FieldRef<"Kelas", 'String'>
    readonly kode: FieldRef<"Kelas", 'KodeKelas'>
  }
    

  // Custom InputTypes
  /**
   * Kelas findUnique
   */
  export type KelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findUniqueOrThrow
   */
  export type KelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findFirst
   */
  export type KelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findFirstOrThrow
   */
  export type KelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findMany
   */
  export type KelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas create
   */
  export type KelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelas.
     */
    data: XOR<KelasCreateInput, KelasUncheckedCreateInput>
  }

  /**
   * Kelas createMany
   */
  export type KelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas createManyAndReturn
   */
  export type KelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas update
   */
  export type KelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelas.
     */
    data: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
    /**
     * Choose, which Kelas to update.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas updateMany
   */
  export type KelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas updateManyAndReturn
   */
  export type KelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas upsert
   */
  export type KelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelas to update in case it exists.
     */
    where: KelasWhereUniqueInput
    /**
     * In case the Kelas found by the `where` argument doesn't exist, create a new Kelas with this data.
     */
    create: XOR<KelasCreateInput, KelasUncheckedCreateInput>
    /**
     * In case the Kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
  }

  /**
   * Kelas delete
   */
  export type KelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter which Kelas to delete.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas deleteMany
   */
  export type KelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to delete
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to delete.
     */
    limit?: number
  }

  /**
   * Kelas.students
   */
  export type Kelas$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Kelas without action
   */
  export type KelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    nis: number | null
    tahunMasuk: number | null
    penhasilanOrtu: number | null
    skorSAW: number | null
    rankBeasiswa: number | null
  }

  export type StudentSumAggregateOutputType = {
    nis: number | null
    tahunMasuk: number | null
    penhasilanOrtu: number | null
    skorSAW: number | null
    rankBeasiswa: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nis: number | null
    jurusanId: string | null
    kelasId: string | null
    tahunMasuk: number | null
    penhasilanOrtu: number | null
    statusBeasiswa: boolean | null
    skorSAW: number | null
    rankBeasiswa: number | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nis: number | null
    jurusanId: string | null
    kelasId: string | null
    tahunMasuk: number | null
    penhasilanOrtu: number | null
    statusBeasiswa: boolean | null
    skorSAW: number | null
    rankBeasiswa: number | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    nis: number
    jurusanId: number
    kelasId: number
    tahunMasuk: number
    penhasilanOrtu: number
    statusBeasiswa: number
    skorSAW: number
    rankBeasiswa: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    nis?: true
    tahunMasuk?: true
    penhasilanOrtu?: true
    skorSAW?: true
    rankBeasiswa?: true
  }

  export type StudentSumAggregateInputType = {
    nis?: true
    tahunMasuk?: true
    penhasilanOrtu?: true
    skorSAW?: true
    rankBeasiswa?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    nis?: true
    jurusanId?: true
    kelasId?: true
    tahunMasuk?: true
    penhasilanOrtu?: true
    statusBeasiswa?: true
    skorSAW?: true
    rankBeasiswa?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    nis?: true
    jurusanId?: true
    kelasId?: true
    tahunMasuk?: true
    penhasilanOrtu?: true
    statusBeasiswa?: true
    skorSAW?: true
    rankBeasiswa?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    nis?: true
    jurusanId?: true
    kelasId?: true
    tahunMasuk?: true
    penhasilanOrtu?: true
    statusBeasiswa?: true
    skorSAW?: true
    rankBeasiswa?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu: number | null
    statusBeasiswa: boolean | null
    skorSAW: number | null
    rankBeasiswa: number | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nis?: boolean
    jurusanId?: boolean
    kelasId?: boolean
    tahunMasuk?: boolean
    penhasilanOrtu?: boolean
    statusBeasiswa?: boolean
    skorSAW?: boolean
    rankBeasiswa?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jurusan?: boolean | JurusanDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | Student$mapelArgs<ExtArgs>
    nilai?: boolean | Student$nilaiArgs<ExtArgs>
    penilaian?: boolean | Student$penilaianArgs<ExtArgs>
    haasilSAW?: boolean | Student$haasilSAWArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nis?: boolean
    jurusanId?: boolean
    kelasId?: boolean
    tahunMasuk?: boolean
    penhasilanOrtu?: boolean
    statusBeasiswa?: boolean
    skorSAW?: boolean
    rankBeasiswa?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jurusan?: boolean | JurusanDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nis?: boolean
    jurusanId?: boolean
    kelasId?: boolean
    tahunMasuk?: boolean
    penhasilanOrtu?: boolean
    statusBeasiswa?: boolean
    skorSAW?: boolean
    rankBeasiswa?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jurusan?: boolean | JurusanDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    nis?: boolean
    jurusanId?: boolean
    kelasId?: boolean
    tahunMasuk?: boolean
    penhasilanOrtu?: boolean
    statusBeasiswa?: boolean
    skorSAW?: boolean
    rankBeasiswa?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nis" | "jurusanId" | "kelasId" | "tahunMasuk" | "penhasilanOrtu" | "statusBeasiswa" | "skorSAW" | "rankBeasiswa", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jurusan?: boolean | JurusanDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | Student$mapelArgs<ExtArgs>
    nilai?: boolean | Student$nilaiArgs<ExtArgs>
    penilaian?: boolean | Student$penilaianArgs<ExtArgs>
    haasilSAW?: boolean | Student$haasilSAWArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jurusan?: boolean | JurusanDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jurusan?: boolean | JurusanDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jurusan: Prisma.$JurusanPayload<ExtArgs>
      kelas: Prisma.$KelasPayload<ExtArgs>
      mapel: Prisma.$MapelPayload<ExtArgs>[]
      nilai: Prisma.$NilaiPayload<ExtArgs>[]
      penilaian: Prisma.$PenilaianPayload<ExtArgs>[]
      haasilSAW: Prisma.$HasilSAWPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nis: number
      jurusanId: string
      kelasId: string
      tahunMasuk: number
      penhasilanOrtu: number | null
      statusBeasiswa: boolean | null
      skorSAW: number | null
      rankBeasiswa: number | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jurusan<T extends JurusanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JurusanDefaultArgs<ExtArgs>>): Prisma__JurusanClient<$Result.GetResult<Prisma.$JurusanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mapel<T extends Student$mapelArgs<ExtArgs> = {}>(args?: Subset<T, Student$mapelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nilai<T extends Student$nilaiArgs<ExtArgs> = {}>(args?: Subset<T, Student$nilaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    penilaian<T extends Student$penilaianArgs<ExtArgs> = {}>(args?: Subset<T, Student$penilaianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    haasilSAW<T extends Student$haasilSAWArgs<ExtArgs> = {}>(args?: Subset<T, Student$haasilSAWArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly nis: FieldRef<"Student", 'Int'>
    readonly jurusanId: FieldRef<"Student", 'String'>
    readonly kelasId: FieldRef<"Student", 'String'>
    readonly tahunMasuk: FieldRef<"Student", 'Int'>
    readonly penhasilanOrtu: FieldRef<"Student", 'Int'>
    readonly statusBeasiswa: FieldRef<"Student", 'Boolean'>
    readonly skorSAW: FieldRef<"Student", 'Float'>
    readonly rankBeasiswa: FieldRef<"Student", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.mapel
   */
  export type Student$mapelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    where?: MapelWhereInput
    orderBy?: MapelOrderByWithRelationInput | MapelOrderByWithRelationInput[]
    cursor?: MapelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapelScalarFieldEnum | MapelScalarFieldEnum[]
  }

  /**
   * Student.nilai
   */
  export type Student$nilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    cursor?: NilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Student.penilaian
   */
  export type Student$penilaianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    where?: PenilaianWhereInput
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    cursor?: PenilaianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Student.haasilSAW
   */
  export type Student$haasilSAWArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    where?: HasilSAWWhereInput
    orderBy?: HasilSAWOrderByWithRelationInput | HasilSAWOrderByWithRelationInput[]
    cursor?: HasilSAWWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HasilSAWScalarFieldEnum | HasilSAWScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    nik: number | null
  }

  export type TeacherSumAggregateOutputType = {
    nik: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nik: number | null
    kodeMapel: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nik: number | null
    kodeMapel: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    nik: number
    kodeMapel: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    nik?: true
  }

  export type TeacherSumAggregateInputType = {
    nik?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
    nik?: true
    kodeMapel?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
    nik?: true
    kodeMapel?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    nik?: true
    kodeMapel?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    userId: string
    nik: number
    kodeMapel: string | null
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nik?: boolean
    kodeMapel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mapels?: boolean | Teacher$mapelsArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nik?: boolean
    kodeMapel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mapels?: boolean | Teacher$mapelsArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nik?: boolean
    kodeMapel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mapels?: boolean | Teacher$mapelsArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
    nik?: boolean
    kodeMapel?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nik" | "kodeMapel", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mapels?: boolean | Teacher$mapelsArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mapels?: boolean | Teacher$mapelsArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mapels?: boolean | Teacher$mapelsArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mapels: Prisma.$MapelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      nik: number
      kodeMapel: string | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mapels<T extends Teacher$mapelsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$mapelsArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly userId: FieldRef<"Teacher", 'String'>
    readonly nik: FieldRef<"Teacher", 'Int'>
    readonly kodeMapel: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.mapels
   */
  export type Teacher$mapelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    where?: MapelWhereInput
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Mapel
   */

  export type AggregateMapel = {
    _count: MapelCountAggregateOutputType | null
    _min: MapelMinAggregateOutputType | null
    _max: MapelMaxAggregateOutputType | null
  }

  export type MapelMinAggregateOutputType = {
    id: string | null
    nama: string | null
    kode: string | null
  }

  export type MapelMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    kode: string | null
  }

  export type MapelCountAggregateOutputType = {
    id: number
    nama: number
    kode: number
    _all: number
  }


  export type MapelMinAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
  }

  export type MapelMaxAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
  }

  export type MapelCountAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    _all?: true
  }

  export type MapelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mapel to aggregate.
     */
    where?: MapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mapels to fetch.
     */
    orderBy?: MapelOrderByWithRelationInput | MapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mapels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mapels
    **/
    _count?: true | MapelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapelMaxAggregateInputType
  }

  export type GetMapelAggregateType<T extends MapelAggregateArgs> = {
        [P in keyof T & keyof AggregateMapel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapel[P]>
      : GetScalarType<T[P], AggregateMapel[P]>
  }




  export type MapelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapelWhereInput
    orderBy?: MapelOrderByWithAggregationInput | MapelOrderByWithAggregationInput[]
    by: MapelScalarFieldEnum[] | MapelScalarFieldEnum
    having?: MapelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapelCountAggregateInputType | true
    _min?: MapelMinAggregateInputType
    _max?: MapelMaxAggregateInputType
  }

  export type MapelGroupByOutputType = {
    id: string
    nama: string
    kode: string
    _count: MapelCountAggregateOutputType | null
    _min: MapelMinAggregateOutputType | null
    _max: MapelMaxAggregateOutputType | null
  }

  type GetMapelGroupByPayload<T extends MapelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapelGroupByOutputType[P]>
            : GetScalarType<T[P], MapelGroupByOutputType[P]>
        }
      >
    >


  export type MapelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    teachers?: boolean | Mapel$teachersArgs<ExtArgs>
    students?: boolean | Mapel$studentsArgs<ExtArgs>
    nilai?: boolean | Mapel$nilaiArgs<ExtArgs>
    _count?: boolean | MapelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapel"]>

  export type MapelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
  }, ExtArgs["result"]["mapel"]>

  export type MapelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
  }, ExtArgs["result"]["mapel"]>

  export type MapelSelectScalar = {
    id?: boolean
    nama?: boolean
    kode?: boolean
  }

  export type MapelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kode", ExtArgs["result"]["mapel"]>
  export type MapelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | Mapel$teachersArgs<ExtArgs>
    students?: boolean | Mapel$studentsArgs<ExtArgs>
    nilai?: boolean | Mapel$nilaiArgs<ExtArgs>
    _count?: boolean | MapelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MapelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MapelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MapelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mapel"
    objects: {
      teachers: Prisma.$TeacherPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      nilai: Prisma.$NilaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      kode: string
    }, ExtArgs["result"]["mapel"]>
    composites: {}
  }

  type MapelGetPayload<S extends boolean | null | undefined | MapelDefaultArgs> = $Result.GetResult<Prisma.$MapelPayload, S>

  type MapelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapelCountAggregateInputType | true
    }

  export interface MapelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mapel'], meta: { name: 'Mapel' } }
    /**
     * Find zero or one Mapel that matches the filter.
     * @param {MapelFindUniqueArgs} args - Arguments to find a Mapel
     * @example
     * // Get one Mapel
     * const mapel = await prisma.mapel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapelFindUniqueArgs>(args: SelectSubset<T, MapelFindUniqueArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mapel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapelFindUniqueOrThrowArgs} args - Arguments to find a Mapel
     * @example
     * // Get one Mapel
     * const mapel = await prisma.mapel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapelFindUniqueOrThrowArgs>(args: SelectSubset<T, MapelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapelFindFirstArgs} args - Arguments to find a Mapel
     * @example
     * // Get one Mapel
     * const mapel = await prisma.mapel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapelFindFirstArgs>(args?: SelectSubset<T, MapelFindFirstArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapelFindFirstOrThrowArgs} args - Arguments to find a Mapel
     * @example
     * // Get one Mapel
     * const mapel = await prisma.mapel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapelFindFirstOrThrowArgs>(args?: SelectSubset<T, MapelFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mapels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mapels
     * const mapels = await prisma.mapel.findMany()
     * 
     * // Get first 10 Mapels
     * const mapels = await prisma.mapel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapelWithIdOnly = await prisma.mapel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapelFindManyArgs>(args?: SelectSubset<T, MapelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mapel.
     * @param {MapelCreateArgs} args - Arguments to create a Mapel.
     * @example
     * // Create one Mapel
     * const Mapel = await prisma.mapel.create({
     *   data: {
     *     // ... data to create a Mapel
     *   }
     * })
     * 
     */
    create<T extends MapelCreateArgs>(args: SelectSubset<T, MapelCreateArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mapels.
     * @param {MapelCreateManyArgs} args - Arguments to create many Mapels.
     * @example
     * // Create many Mapels
     * const mapel = await prisma.mapel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapelCreateManyArgs>(args?: SelectSubset<T, MapelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mapels and returns the data saved in the database.
     * @param {MapelCreateManyAndReturnArgs} args - Arguments to create many Mapels.
     * @example
     * // Create many Mapels
     * const mapel = await prisma.mapel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mapels and only return the `id`
     * const mapelWithIdOnly = await prisma.mapel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapelCreateManyAndReturnArgs>(args?: SelectSubset<T, MapelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mapel.
     * @param {MapelDeleteArgs} args - Arguments to delete one Mapel.
     * @example
     * // Delete one Mapel
     * const Mapel = await prisma.mapel.delete({
     *   where: {
     *     // ... filter to delete one Mapel
     *   }
     * })
     * 
     */
    delete<T extends MapelDeleteArgs>(args: SelectSubset<T, MapelDeleteArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mapel.
     * @param {MapelUpdateArgs} args - Arguments to update one Mapel.
     * @example
     * // Update one Mapel
     * const mapel = await prisma.mapel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapelUpdateArgs>(args: SelectSubset<T, MapelUpdateArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mapels.
     * @param {MapelDeleteManyArgs} args - Arguments to filter Mapels to delete.
     * @example
     * // Delete a few Mapels
     * const { count } = await prisma.mapel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapelDeleteManyArgs>(args?: SelectSubset<T, MapelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mapels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mapels
     * const mapel = await prisma.mapel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapelUpdateManyArgs>(args: SelectSubset<T, MapelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mapels and returns the data updated in the database.
     * @param {MapelUpdateManyAndReturnArgs} args - Arguments to update many Mapels.
     * @example
     * // Update many Mapels
     * const mapel = await prisma.mapel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mapels and only return the `id`
     * const mapelWithIdOnly = await prisma.mapel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MapelUpdateManyAndReturnArgs>(args: SelectSubset<T, MapelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mapel.
     * @param {MapelUpsertArgs} args - Arguments to update or create a Mapel.
     * @example
     * // Update or create a Mapel
     * const mapel = await prisma.mapel.upsert({
     *   create: {
     *     // ... data to create a Mapel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mapel we want to update
     *   }
     * })
     */
    upsert<T extends MapelUpsertArgs>(args: SelectSubset<T, MapelUpsertArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mapels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapelCountArgs} args - Arguments to filter Mapels to count.
     * @example
     * // Count the number of Mapels
     * const count = await prisma.mapel.count({
     *   where: {
     *     // ... the filter for the Mapels we want to count
     *   }
     * })
    **/
    count<T extends MapelCountArgs>(
      args?: Subset<T, MapelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mapel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapelAggregateArgs>(args: Subset<T, MapelAggregateArgs>): Prisma.PrismaPromise<GetMapelAggregateType<T>>

    /**
     * Group by Mapel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapelGroupByArgs} args - Group by arguments.
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
      T extends MapelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapelGroupByArgs['orderBy'] }
        : { orderBy?: MapelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mapel model
   */
  readonly fields: MapelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mapel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachers<T extends Mapel$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Mapel$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Mapel$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Mapel$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nilai<T extends Mapel$nilaiArgs<ExtArgs> = {}>(args?: Subset<T, Mapel$nilaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mapel model
   */
  interface MapelFieldRefs {
    readonly id: FieldRef<"Mapel", 'String'>
    readonly nama: FieldRef<"Mapel", 'String'>
    readonly kode: FieldRef<"Mapel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mapel findUnique
   */
  export type MapelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * Filter, which Mapel to fetch.
     */
    where: MapelWhereUniqueInput
  }

  /**
   * Mapel findUniqueOrThrow
   */
  export type MapelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * Filter, which Mapel to fetch.
     */
    where: MapelWhereUniqueInput
  }

  /**
   * Mapel findFirst
   */
  export type MapelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * Filter, which Mapel to fetch.
     */
    where?: MapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mapels to fetch.
     */
    orderBy?: MapelOrderByWithRelationInput | MapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mapels.
     */
    cursor?: MapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mapels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mapels.
     */
    distinct?: MapelScalarFieldEnum | MapelScalarFieldEnum[]
  }

  /**
   * Mapel findFirstOrThrow
   */
  export type MapelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * Filter, which Mapel to fetch.
     */
    where?: MapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mapels to fetch.
     */
    orderBy?: MapelOrderByWithRelationInput | MapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mapels.
     */
    cursor?: MapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mapels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mapels.
     */
    distinct?: MapelScalarFieldEnum | MapelScalarFieldEnum[]
  }

  /**
   * Mapel findMany
   */
  export type MapelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * Filter, which Mapels to fetch.
     */
    where?: MapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mapels to fetch.
     */
    orderBy?: MapelOrderByWithRelationInput | MapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mapels.
     */
    cursor?: MapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mapels.
     */
    skip?: number
    distinct?: MapelScalarFieldEnum | MapelScalarFieldEnum[]
  }

  /**
   * Mapel create
   */
  export type MapelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * The data needed to create a Mapel.
     */
    data: XOR<MapelCreateInput, MapelUncheckedCreateInput>
  }

  /**
   * Mapel createMany
   */
  export type MapelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mapels.
     */
    data: MapelCreateManyInput | MapelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mapel createManyAndReturn
   */
  export type MapelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * The data used to create many Mapels.
     */
    data: MapelCreateManyInput | MapelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mapel update
   */
  export type MapelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * The data needed to update a Mapel.
     */
    data: XOR<MapelUpdateInput, MapelUncheckedUpdateInput>
    /**
     * Choose, which Mapel to update.
     */
    where: MapelWhereUniqueInput
  }

  /**
   * Mapel updateMany
   */
  export type MapelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mapels.
     */
    data: XOR<MapelUpdateManyMutationInput, MapelUncheckedUpdateManyInput>
    /**
     * Filter which Mapels to update
     */
    where?: MapelWhereInput
    /**
     * Limit how many Mapels to update.
     */
    limit?: number
  }

  /**
   * Mapel updateManyAndReturn
   */
  export type MapelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * The data used to update Mapels.
     */
    data: XOR<MapelUpdateManyMutationInput, MapelUncheckedUpdateManyInput>
    /**
     * Filter which Mapels to update
     */
    where?: MapelWhereInput
    /**
     * Limit how many Mapels to update.
     */
    limit?: number
  }

  /**
   * Mapel upsert
   */
  export type MapelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * The filter to search for the Mapel to update in case it exists.
     */
    where: MapelWhereUniqueInput
    /**
     * In case the Mapel found by the `where` argument doesn't exist, create a new Mapel with this data.
     */
    create: XOR<MapelCreateInput, MapelUncheckedCreateInput>
    /**
     * In case the Mapel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapelUpdateInput, MapelUncheckedUpdateInput>
  }

  /**
   * Mapel delete
   */
  export type MapelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
    /**
     * Filter which Mapel to delete.
     */
    where: MapelWhereUniqueInput
  }

  /**
   * Mapel deleteMany
   */
  export type MapelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mapels to delete
     */
    where?: MapelWhereInput
    /**
     * Limit how many Mapels to delete.
     */
    limit?: number
  }

  /**
   * Mapel.teachers
   */
  export type Mapel$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    cursor?: TeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Mapel.students
   */
  export type Mapel$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Mapel.nilai
   */
  export type Mapel$nilaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    cursor?: NilaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Mapel without action
   */
  export type MapelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mapel
     */
    select?: MapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mapel
     */
    omit?: MapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapelInclude<ExtArgs> | null
  }


  /**
   * Model Nilai
   */

  export type AggregateNilai = {
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  export type NilaiAvgAggregateOutputType = {
    upsensi: number | null
    nilai: number | null
  }

  export type NilaiSumAggregateOutputType = {
    upsensi: number | null
    nilai: number | null
  }

  export type NilaiMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    mapelId: string | null
    upsensi: number | null
    nilai: number | null
  }

  export type NilaiMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    mapelId: string | null
    upsensi: number | null
    nilai: number | null
  }

  export type NilaiCountAggregateOutputType = {
    id: number
    studentId: number
    mapelId: number
    upsensi: number
    nilai: number
    _all: number
  }


  export type NilaiAvgAggregateInputType = {
    upsensi?: true
    nilai?: true
  }

  export type NilaiSumAggregateInputType = {
    upsensi?: true
    nilai?: true
  }

  export type NilaiMinAggregateInputType = {
    id?: true
    studentId?: true
    mapelId?: true
    upsensi?: true
    nilai?: true
  }

  export type NilaiMaxAggregateInputType = {
    id?: true
    studentId?: true
    mapelId?: true
    upsensi?: true
    nilai?: true
  }

  export type NilaiCountAggregateInputType = {
    id?: true
    studentId?: true
    mapelId?: true
    upsensi?: true
    nilai?: true
    _all?: true
  }

  export type NilaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nilai to aggregate.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nilais
    **/
    _count?: true | NilaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NilaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NilaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NilaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NilaiMaxAggregateInputType
  }

  export type GetNilaiAggregateType<T extends NilaiAggregateArgs> = {
        [P in keyof T & keyof AggregateNilai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNilai[P]>
      : GetScalarType<T[P], AggregateNilai[P]>
  }




  export type NilaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NilaiWhereInput
    orderBy?: NilaiOrderByWithAggregationInput | NilaiOrderByWithAggregationInput[]
    by: NilaiScalarFieldEnum[] | NilaiScalarFieldEnum
    having?: NilaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NilaiCountAggregateInputType | true
    _avg?: NilaiAvgAggregateInputType
    _sum?: NilaiSumAggregateInputType
    _min?: NilaiMinAggregateInputType
    _max?: NilaiMaxAggregateInputType
  }

  export type NilaiGroupByOutputType = {
    id: string
    studentId: string
    mapelId: string
    upsensi: number
    nilai: number
    _count: NilaiCountAggregateOutputType | null
    _avg: NilaiAvgAggregateOutputType | null
    _sum: NilaiSumAggregateOutputType | null
    _min: NilaiMinAggregateOutputType | null
    _max: NilaiMaxAggregateOutputType | null
  }

  type GetNilaiGroupByPayload<T extends NilaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NilaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NilaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NilaiGroupByOutputType[P]>
            : GetScalarType<T[P], NilaiGroupByOutputType[P]>
        }
      >
    >


  export type NilaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    mapelId?: boolean
    upsensi?: boolean
    nilai?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    mapel?: boolean | MapelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    mapelId?: boolean
    upsensi?: boolean
    nilai?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    mapel?: boolean | MapelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    mapelId?: boolean
    upsensi?: boolean
    nilai?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    mapel?: boolean | MapelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nilai"]>

  export type NilaiSelectScalar = {
    id?: boolean
    studentId?: boolean
    mapelId?: boolean
    upsensi?: boolean
    nilai?: boolean
  }

  export type NilaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "mapelId" | "upsensi" | "nilai", ExtArgs["result"]["nilai"]>
  export type NilaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    mapel?: boolean | MapelDefaultArgs<ExtArgs>
  }
  export type NilaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    mapel?: boolean | MapelDefaultArgs<ExtArgs>
  }
  export type NilaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    mapel?: boolean | MapelDefaultArgs<ExtArgs>
  }

  export type $NilaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nilai"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      mapel: Prisma.$MapelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      mapelId: string
      upsensi: number
      nilai: number
    }, ExtArgs["result"]["nilai"]>
    composites: {}
  }

  type NilaiGetPayload<S extends boolean | null | undefined | NilaiDefaultArgs> = $Result.GetResult<Prisma.$NilaiPayload, S>

  type NilaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NilaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NilaiCountAggregateInputType | true
    }

  export interface NilaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nilai'], meta: { name: 'Nilai' } }
    /**
     * Find zero or one Nilai that matches the filter.
     * @param {NilaiFindUniqueArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NilaiFindUniqueArgs>(args: SelectSubset<T, NilaiFindUniqueArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nilai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NilaiFindUniqueOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NilaiFindUniqueOrThrowArgs>(args: SelectSubset<T, NilaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindFirstArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NilaiFindFirstArgs>(args?: SelectSubset<T, NilaiFindFirstArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nilai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindFirstOrThrowArgs} args - Arguments to find a Nilai
     * @example
     * // Get one Nilai
     * const nilai = await prisma.nilai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NilaiFindFirstOrThrowArgs>(args?: SelectSubset<T, NilaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nilais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nilais
     * const nilais = await prisma.nilai.findMany()
     * 
     * // Get first 10 Nilais
     * const nilais = await prisma.nilai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nilaiWithIdOnly = await prisma.nilai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NilaiFindManyArgs>(args?: SelectSubset<T, NilaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nilai.
     * @param {NilaiCreateArgs} args - Arguments to create a Nilai.
     * @example
     * // Create one Nilai
     * const Nilai = await prisma.nilai.create({
     *   data: {
     *     // ... data to create a Nilai
     *   }
     * })
     * 
     */
    create<T extends NilaiCreateArgs>(args: SelectSubset<T, NilaiCreateArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nilais.
     * @param {NilaiCreateManyArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NilaiCreateManyArgs>(args?: SelectSubset<T, NilaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nilais and returns the data saved in the database.
     * @param {NilaiCreateManyAndReturnArgs} args - Arguments to create many Nilais.
     * @example
     * // Create many Nilais
     * const nilai = await prisma.nilai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NilaiCreateManyAndReturnArgs>(args?: SelectSubset<T, NilaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nilai.
     * @param {NilaiDeleteArgs} args - Arguments to delete one Nilai.
     * @example
     * // Delete one Nilai
     * const Nilai = await prisma.nilai.delete({
     *   where: {
     *     // ... filter to delete one Nilai
     *   }
     * })
     * 
     */
    delete<T extends NilaiDeleteArgs>(args: SelectSubset<T, NilaiDeleteArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nilai.
     * @param {NilaiUpdateArgs} args - Arguments to update one Nilai.
     * @example
     * // Update one Nilai
     * const nilai = await prisma.nilai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NilaiUpdateArgs>(args: SelectSubset<T, NilaiUpdateArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nilais.
     * @param {NilaiDeleteManyArgs} args - Arguments to filter Nilais to delete.
     * @example
     * // Delete a few Nilais
     * const { count } = await prisma.nilai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NilaiDeleteManyArgs>(args?: SelectSubset<T, NilaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NilaiUpdateManyArgs>(args: SelectSubset<T, NilaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nilais and returns the data updated in the database.
     * @param {NilaiUpdateManyAndReturnArgs} args - Arguments to update many Nilais.
     * @example
     * // Update many Nilais
     * const nilai = await prisma.nilai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nilais and only return the `id`
     * const nilaiWithIdOnly = await prisma.nilai.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NilaiUpdateManyAndReturnArgs>(args: SelectSubset<T, NilaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nilai.
     * @param {NilaiUpsertArgs} args - Arguments to update or create a Nilai.
     * @example
     * // Update or create a Nilai
     * const nilai = await prisma.nilai.upsert({
     *   create: {
     *     // ... data to create a Nilai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nilai we want to update
     *   }
     * })
     */
    upsert<T extends NilaiUpsertArgs>(args: SelectSubset<T, NilaiUpsertArgs<ExtArgs>>): Prisma__NilaiClient<$Result.GetResult<Prisma.$NilaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nilais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiCountArgs} args - Arguments to filter Nilais to count.
     * @example
     * // Count the number of Nilais
     * const count = await prisma.nilai.count({
     *   where: {
     *     // ... the filter for the Nilais we want to count
     *   }
     * })
    **/
    count<T extends NilaiCountArgs>(
      args?: Subset<T, NilaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NilaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NilaiAggregateArgs>(args: Subset<T, NilaiAggregateArgs>): Prisma.PrismaPromise<GetNilaiAggregateType<T>>

    /**
     * Group by Nilai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiGroupByArgs} args - Group by arguments.
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
      T extends NilaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NilaiGroupByArgs['orderBy'] }
        : { orderBy?: NilaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NilaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNilaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nilai model
   */
  readonly fields: NilaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nilai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NilaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mapel<T extends MapelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapelDefaultArgs<ExtArgs>>): Prisma__MapelClient<$Result.GetResult<Prisma.$MapelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Nilai model
   */
  interface NilaiFieldRefs {
    readonly id: FieldRef<"Nilai", 'String'>
    readonly studentId: FieldRef<"Nilai", 'String'>
    readonly mapelId: FieldRef<"Nilai", 'String'>
    readonly upsensi: FieldRef<"Nilai", 'Int'>
    readonly nilai: FieldRef<"Nilai", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Nilai findUnique
   */
  export type NilaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai findUniqueOrThrow
   */
  export type NilaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai findFirst
   */
  export type NilaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai findFirstOrThrow
   */
  export type NilaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilai to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nilais.
     */
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai findMany
   */
  export type NilaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter, which Nilais to fetch.
     */
    where?: NilaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nilais to fetch.
     */
    orderBy?: NilaiOrderByWithRelationInput | NilaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nilais.
     */
    cursor?: NilaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nilais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nilais.
     */
    skip?: number
    distinct?: NilaiScalarFieldEnum | NilaiScalarFieldEnum[]
  }

  /**
   * Nilai create
   */
  export type NilaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The data needed to create a Nilai.
     */
    data: XOR<NilaiCreateInput, NilaiUncheckedCreateInput>
  }

  /**
   * Nilai createMany
   */
  export type NilaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nilais.
     */
    data: NilaiCreateManyInput | NilaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nilai createManyAndReturn
   */
  export type NilaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * The data used to create many Nilais.
     */
    data: NilaiCreateManyInput | NilaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nilai update
   */
  export type NilaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The data needed to update a Nilai.
     */
    data: XOR<NilaiUpdateInput, NilaiUncheckedUpdateInput>
    /**
     * Choose, which Nilai to update.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai updateMany
   */
  export type NilaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nilais.
     */
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyInput>
    /**
     * Filter which Nilais to update
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to update.
     */
    limit?: number
  }

  /**
   * Nilai updateManyAndReturn
   */
  export type NilaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * The data used to update Nilais.
     */
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyInput>
    /**
     * Filter which Nilais to update
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Nilai upsert
   */
  export type NilaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * The filter to search for the Nilai to update in case it exists.
     */
    where: NilaiWhereUniqueInput
    /**
     * In case the Nilai found by the `where` argument doesn't exist, create a new Nilai with this data.
     */
    create: XOR<NilaiCreateInput, NilaiUncheckedCreateInput>
    /**
     * In case the Nilai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NilaiUpdateInput, NilaiUncheckedUpdateInput>
  }

  /**
   * Nilai delete
   */
  export type NilaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
    /**
     * Filter which Nilai to delete.
     */
    where: NilaiWhereUniqueInput
  }

  /**
   * Nilai deleteMany
   */
  export type NilaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nilais to delete
     */
    where?: NilaiWhereInput
    /**
     * Limit how many Nilais to delete.
     */
    limit?: number
  }

  /**
   * Nilai without action
   */
  export type NilaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nilai
     */
    select?: NilaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nilai
     */
    omit?: NilaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NilaiInclude<ExtArgs> | null
  }


  /**
   * Model Penilaian
   */

  export type AggregatePenilaian = {
    _count: PenilaianCountAggregateOutputType | null
    _avg: PenilaianAvgAggregateOutputType | null
    _sum: PenilaianSumAggregateOutputType | null
    _min: PenilaianMinAggregateOutputType | null
    _max: PenilaianMaxAggregateOutputType | null
  }

  export type PenilaianAvgAggregateOutputType = {
    nilai: number | null
  }

  export type PenilaianSumAggregateOutputType = {
    nilai: number | null
  }

  export type PenilaianMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    kriteria: string | null
    nilai: number | null
  }

  export type PenilaianMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    kriteria: string | null
    nilai: number | null
  }

  export type PenilaianCountAggregateOutputType = {
    id: number
    studentId: number
    kriteria: number
    nilai: number
    _all: number
  }


  export type PenilaianAvgAggregateInputType = {
    nilai?: true
  }

  export type PenilaianSumAggregateInputType = {
    nilai?: true
  }

  export type PenilaianMinAggregateInputType = {
    id?: true
    studentId?: true
    kriteria?: true
    nilai?: true
  }

  export type PenilaianMaxAggregateInputType = {
    id?: true
    studentId?: true
    kriteria?: true
    nilai?: true
  }

  export type PenilaianCountAggregateInputType = {
    id?: true
    studentId?: true
    kriteria?: true
    nilai?: true
    _all?: true
  }

  export type PenilaianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penilaian to aggregate.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penilaians
    **/
    _count?: true | PenilaianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenilaianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenilaianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenilaianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenilaianMaxAggregateInputType
  }

  export type GetPenilaianAggregateType<T extends PenilaianAggregateArgs> = {
        [P in keyof T & keyof AggregatePenilaian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenilaian[P]>
      : GetScalarType<T[P], AggregatePenilaian[P]>
  }




  export type PenilaianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenilaianWhereInput
    orderBy?: PenilaianOrderByWithAggregationInput | PenilaianOrderByWithAggregationInput[]
    by: PenilaianScalarFieldEnum[] | PenilaianScalarFieldEnum
    having?: PenilaianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenilaianCountAggregateInputType | true
    _avg?: PenilaianAvgAggregateInputType
    _sum?: PenilaianSumAggregateInputType
    _min?: PenilaianMinAggregateInputType
    _max?: PenilaianMaxAggregateInputType
  }

  export type PenilaianGroupByOutputType = {
    id: string
    studentId: string
    kriteria: string
    nilai: number
    _count: PenilaianCountAggregateOutputType | null
    _avg: PenilaianAvgAggregateOutputType | null
    _sum: PenilaianSumAggregateOutputType | null
    _min: PenilaianMinAggregateOutputType | null
    _max: PenilaianMaxAggregateOutputType | null
  }

  type GetPenilaianGroupByPayload<T extends PenilaianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenilaianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenilaianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenilaianGroupByOutputType[P]>
            : GetScalarType<T[P], PenilaianGroupByOutputType[P]>
        }
      >
    >


  export type PenilaianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    kriteria?: boolean
    nilai?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penilaian"]>

  export type PenilaianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    kriteria?: boolean
    nilai?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penilaian"]>

  export type PenilaianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    kriteria?: boolean
    nilai?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penilaian"]>

  export type PenilaianSelectScalar = {
    id?: boolean
    studentId?: boolean
    kriteria?: boolean
    nilai?: boolean
  }

  export type PenilaianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "kriteria" | "nilai", ExtArgs["result"]["penilaian"]>
  export type PenilaianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PenilaianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type PenilaianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $PenilaianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penilaian"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      kriteria: string
      nilai: number
    }, ExtArgs["result"]["penilaian"]>
    composites: {}
  }

  type PenilaianGetPayload<S extends boolean | null | undefined | PenilaianDefaultArgs> = $Result.GetResult<Prisma.$PenilaianPayload, S>

  type PenilaianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenilaianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenilaianCountAggregateInputType | true
    }

  export interface PenilaianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penilaian'], meta: { name: 'Penilaian' } }
    /**
     * Find zero or one Penilaian that matches the filter.
     * @param {PenilaianFindUniqueArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenilaianFindUniqueArgs>(args: SelectSubset<T, PenilaianFindUniqueArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penilaian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenilaianFindUniqueOrThrowArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenilaianFindUniqueOrThrowArgs>(args: SelectSubset<T, PenilaianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penilaian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianFindFirstArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenilaianFindFirstArgs>(args?: SelectSubset<T, PenilaianFindFirstArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penilaian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianFindFirstOrThrowArgs} args - Arguments to find a Penilaian
     * @example
     * // Get one Penilaian
     * const penilaian = await prisma.penilaian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenilaianFindFirstOrThrowArgs>(args?: SelectSubset<T, PenilaianFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penilaians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penilaians
     * const penilaians = await prisma.penilaian.findMany()
     * 
     * // Get first 10 Penilaians
     * const penilaians = await prisma.penilaian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penilaianWithIdOnly = await prisma.penilaian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenilaianFindManyArgs>(args?: SelectSubset<T, PenilaianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penilaian.
     * @param {PenilaianCreateArgs} args - Arguments to create a Penilaian.
     * @example
     * // Create one Penilaian
     * const Penilaian = await prisma.penilaian.create({
     *   data: {
     *     // ... data to create a Penilaian
     *   }
     * })
     * 
     */
    create<T extends PenilaianCreateArgs>(args: SelectSubset<T, PenilaianCreateArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penilaians.
     * @param {PenilaianCreateManyArgs} args - Arguments to create many Penilaians.
     * @example
     * // Create many Penilaians
     * const penilaian = await prisma.penilaian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenilaianCreateManyArgs>(args?: SelectSubset<T, PenilaianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penilaians and returns the data saved in the database.
     * @param {PenilaianCreateManyAndReturnArgs} args - Arguments to create many Penilaians.
     * @example
     * // Create many Penilaians
     * const penilaian = await prisma.penilaian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penilaians and only return the `id`
     * const penilaianWithIdOnly = await prisma.penilaian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenilaianCreateManyAndReturnArgs>(args?: SelectSubset<T, PenilaianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Penilaian.
     * @param {PenilaianDeleteArgs} args - Arguments to delete one Penilaian.
     * @example
     * // Delete one Penilaian
     * const Penilaian = await prisma.penilaian.delete({
     *   where: {
     *     // ... filter to delete one Penilaian
     *   }
     * })
     * 
     */
    delete<T extends PenilaianDeleteArgs>(args: SelectSubset<T, PenilaianDeleteArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penilaian.
     * @param {PenilaianUpdateArgs} args - Arguments to update one Penilaian.
     * @example
     * // Update one Penilaian
     * const penilaian = await prisma.penilaian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenilaianUpdateArgs>(args: SelectSubset<T, PenilaianUpdateArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penilaians.
     * @param {PenilaianDeleteManyArgs} args - Arguments to filter Penilaians to delete.
     * @example
     * // Delete a few Penilaians
     * const { count } = await prisma.penilaian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenilaianDeleteManyArgs>(args?: SelectSubset<T, PenilaianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penilaians
     * const penilaian = await prisma.penilaian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenilaianUpdateManyArgs>(args: SelectSubset<T, PenilaianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penilaians and returns the data updated in the database.
     * @param {PenilaianUpdateManyAndReturnArgs} args - Arguments to update many Penilaians.
     * @example
     * // Update many Penilaians
     * const penilaian = await prisma.penilaian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penilaians and only return the `id`
     * const penilaianWithIdOnly = await prisma.penilaian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PenilaianUpdateManyAndReturnArgs>(args: SelectSubset<T, PenilaianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Penilaian.
     * @param {PenilaianUpsertArgs} args - Arguments to update or create a Penilaian.
     * @example
     * // Update or create a Penilaian
     * const penilaian = await prisma.penilaian.upsert({
     *   create: {
     *     // ... data to create a Penilaian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penilaian we want to update
     *   }
     * })
     */
    upsert<T extends PenilaianUpsertArgs>(args: SelectSubset<T, PenilaianUpsertArgs<ExtArgs>>): Prisma__PenilaianClient<$Result.GetResult<Prisma.$PenilaianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penilaians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianCountArgs} args - Arguments to filter Penilaians to count.
     * @example
     * // Count the number of Penilaians
     * const count = await prisma.penilaian.count({
     *   where: {
     *     // ... the filter for the Penilaians we want to count
     *   }
     * })
    **/
    count<T extends PenilaianCountArgs>(
      args?: Subset<T, PenilaianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenilaianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenilaianAggregateArgs>(args: Subset<T, PenilaianAggregateArgs>): Prisma.PrismaPromise<GetPenilaianAggregateType<T>>

    /**
     * Group by Penilaian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenilaianGroupByArgs} args - Group by arguments.
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
      T extends PenilaianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenilaianGroupByArgs['orderBy'] }
        : { orderBy?: PenilaianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenilaianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenilaianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penilaian model
   */
  readonly fields: PenilaianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penilaian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenilaianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Penilaian model
   */
  interface PenilaianFieldRefs {
    readonly id: FieldRef<"Penilaian", 'String'>
    readonly studentId: FieldRef<"Penilaian", 'String'>
    readonly kriteria: FieldRef<"Penilaian", 'String'>
    readonly nilai: FieldRef<"Penilaian", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Penilaian findUnique
   */
  export type PenilaianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian findUniqueOrThrow
   */
  export type PenilaianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian findFirst
   */
  export type PenilaianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penilaians.
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penilaians.
     */
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Penilaian findFirstOrThrow
   */
  export type PenilaianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaian to fetch.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penilaians.
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penilaians.
     */
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Penilaian findMany
   */
  export type PenilaianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter, which Penilaians to fetch.
     */
    where?: PenilaianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penilaians to fetch.
     */
    orderBy?: PenilaianOrderByWithRelationInput | PenilaianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penilaians.
     */
    cursor?: PenilaianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penilaians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penilaians.
     */
    skip?: number
    distinct?: PenilaianScalarFieldEnum | PenilaianScalarFieldEnum[]
  }

  /**
   * Penilaian create
   */
  export type PenilaianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * The data needed to create a Penilaian.
     */
    data: XOR<PenilaianCreateInput, PenilaianUncheckedCreateInput>
  }

  /**
   * Penilaian createMany
   */
  export type PenilaianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penilaians.
     */
    data: PenilaianCreateManyInput | PenilaianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penilaian createManyAndReturn
   */
  export type PenilaianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * The data used to create many Penilaians.
     */
    data: PenilaianCreateManyInput | PenilaianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penilaian update
   */
  export type PenilaianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * The data needed to update a Penilaian.
     */
    data: XOR<PenilaianUpdateInput, PenilaianUncheckedUpdateInput>
    /**
     * Choose, which Penilaian to update.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian updateMany
   */
  export type PenilaianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penilaians.
     */
    data: XOR<PenilaianUpdateManyMutationInput, PenilaianUncheckedUpdateManyInput>
    /**
     * Filter which Penilaians to update
     */
    where?: PenilaianWhereInput
    /**
     * Limit how many Penilaians to update.
     */
    limit?: number
  }

  /**
   * Penilaian updateManyAndReturn
   */
  export type PenilaianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * The data used to update Penilaians.
     */
    data: XOR<PenilaianUpdateManyMutationInput, PenilaianUncheckedUpdateManyInput>
    /**
     * Filter which Penilaians to update
     */
    where?: PenilaianWhereInput
    /**
     * Limit how many Penilaians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Penilaian upsert
   */
  export type PenilaianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * The filter to search for the Penilaian to update in case it exists.
     */
    where: PenilaianWhereUniqueInput
    /**
     * In case the Penilaian found by the `where` argument doesn't exist, create a new Penilaian with this data.
     */
    create: XOR<PenilaianCreateInput, PenilaianUncheckedCreateInput>
    /**
     * In case the Penilaian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenilaianUpdateInput, PenilaianUncheckedUpdateInput>
  }

  /**
   * Penilaian delete
   */
  export type PenilaianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
    /**
     * Filter which Penilaian to delete.
     */
    where: PenilaianWhereUniqueInput
  }

  /**
   * Penilaian deleteMany
   */
  export type PenilaianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penilaians to delete
     */
    where?: PenilaianWhereInput
    /**
     * Limit how many Penilaians to delete.
     */
    limit?: number
  }

  /**
   * Penilaian without action
   */
  export type PenilaianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penilaian
     */
    select?: PenilaianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penilaian
     */
    omit?: PenilaianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenilaianInclude<ExtArgs> | null
  }


  /**
   * Model HasilSAW
   */

  export type AggregateHasilSAW = {
    _count: HasilSAWCountAggregateOutputType | null
    _avg: HasilSAWAvgAggregateOutputType | null
    _sum: HasilSAWSumAggregateOutputType | null
    _min: HasilSAWMinAggregateOutputType | null
    _max: HasilSAWMaxAggregateOutputType | null
  }

  export type HasilSAWAvgAggregateOutputType = {
    skor: number | null
  }

  export type HasilSAWSumAggregateOutputType = {
    skor: number | null
  }

  export type HasilSAWMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    skor: number | null
  }

  export type HasilSAWMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    skor: number | null
  }

  export type HasilSAWCountAggregateOutputType = {
    id: number
    studentId: number
    skor: number
    _all: number
  }


  export type HasilSAWAvgAggregateInputType = {
    skor?: true
  }

  export type HasilSAWSumAggregateInputType = {
    skor?: true
  }

  export type HasilSAWMinAggregateInputType = {
    id?: true
    studentId?: true
    skor?: true
  }

  export type HasilSAWMaxAggregateInputType = {
    id?: true
    studentId?: true
    skor?: true
  }

  export type HasilSAWCountAggregateInputType = {
    id?: true
    studentId?: true
    skor?: true
    _all?: true
  }

  export type HasilSAWAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HasilSAW to aggregate.
     */
    where?: HasilSAWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilSAWS to fetch.
     */
    orderBy?: HasilSAWOrderByWithRelationInput | HasilSAWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HasilSAWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilSAWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilSAWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HasilSAWS
    **/
    _count?: true | HasilSAWCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HasilSAWAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HasilSAWSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HasilSAWMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HasilSAWMaxAggregateInputType
  }

  export type GetHasilSAWAggregateType<T extends HasilSAWAggregateArgs> = {
        [P in keyof T & keyof AggregateHasilSAW]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHasilSAW[P]>
      : GetScalarType<T[P], AggregateHasilSAW[P]>
  }




  export type HasilSAWGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HasilSAWWhereInput
    orderBy?: HasilSAWOrderByWithAggregationInput | HasilSAWOrderByWithAggregationInput[]
    by: HasilSAWScalarFieldEnum[] | HasilSAWScalarFieldEnum
    having?: HasilSAWScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HasilSAWCountAggregateInputType | true
    _avg?: HasilSAWAvgAggregateInputType
    _sum?: HasilSAWSumAggregateInputType
    _min?: HasilSAWMinAggregateInputType
    _max?: HasilSAWMaxAggregateInputType
  }

  export type HasilSAWGroupByOutputType = {
    id: string
    studentId: string
    skor: number
    _count: HasilSAWCountAggregateOutputType | null
    _avg: HasilSAWAvgAggregateOutputType | null
    _sum: HasilSAWSumAggregateOutputType | null
    _min: HasilSAWMinAggregateOutputType | null
    _max: HasilSAWMaxAggregateOutputType | null
  }

  type GetHasilSAWGroupByPayload<T extends HasilSAWGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HasilSAWGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HasilSAWGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HasilSAWGroupByOutputType[P]>
            : GetScalarType<T[P], HasilSAWGroupByOutputType[P]>
        }
      >
    >


  export type HasilSAWSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    skor?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilSAW"]>

  export type HasilSAWSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    skor?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilSAW"]>

  export type HasilSAWSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    skor?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hasilSAW"]>

  export type HasilSAWSelectScalar = {
    id?: boolean
    studentId?: boolean
    skor?: boolean
  }

  export type HasilSAWOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "skor", ExtArgs["result"]["hasilSAW"]>
  export type HasilSAWInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type HasilSAWIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type HasilSAWIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $HasilSAWPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HasilSAW"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      skor: number
    }, ExtArgs["result"]["hasilSAW"]>
    composites: {}
  }

  type HasilSAWGetPayload<S extends boolean | null | undefined | HasilSAWDefaultArgs> = $Result.GetResult<Prisma.$HasilSAWPayload, S>

  type HasilSAWCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HasilSAWFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HasilSAWCountAggregateInputType | true
    }

  export interface HasilSAWDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HasilSAW'], meta: { name: 'HasilSAW' } }
    /**
     * Find zero or one HasilSAW that matches the filter.
     * @param {HasilSAWFindUniqueArgs} args - Arguments to find a HasilSAW
     * @example
     * // Get one HasilSAW
     * const hasilSAW = await prisma.hasilSAW.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HasilSAWFindUniqueArgs>(args: SelectSubset<T, HasilSAWFindUniqueArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HasilSAW that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HasilSAWFindUniqueOrThrowArgs} args - Arguments to find a HasilSAW
     * @example
     * // Get one HasilSAW
     * const hasilSAW = await prisma.hasilSAW.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HasilSAWFindUniqueOrThrowArgs>(args: SelectSubset<T, HasilSAWFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HasilSAW that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilSAWFindFirstArgs} args - Arguments to find a HasilSAW
     * @example
     * // Get one HasilSAW
     * const hasilSAW = await prisma.hasilSAW.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HasilSAWFindFirstArgs>(args?: SelectSubset<T, HasilSAWFindFirstArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HasilSAW that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilSAWFindFirstOrThrowArgs} args - Arguments to find a HasilSAW
     * @example
     * // Get one HasilSAW
     * const hasilSAW = await prisma.hasilSAW.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HasilSAWFindFirstOrThrowArgs>(args?: SelectSubset<T, HasilSAWFindFirstOrThrowArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HasilSAWS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilSAWFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HasilSAWS
     * const hasilSAWS = await prisma.hasilSAW.findMany()
     * 
     * // Get first 10 HasilSAWS
     * const hasilSAWS = await prisma.hasilSAW.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hasilSAWWithIdOnly = await prisma.hasilSAW.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HasilSAWFindManyArgs>(args?: SelectSubset<T, HasilSAWFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HasilSAW.
     * @param {HasilSAWCreateArgs} args - Arguments to create a HasilSAW.
     * @example
     * // Create one HasilSAW
     * const HasilSAW = await prisma.hasilSAW.create({
     *   data: {
     *     // ... data to create a HasilSAW
     *   }
     * })
     * 
     */
    create<T extends HasilSAWCreateArgs>(args: SelectSubset<T, HasilSAWCreateArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HasilSAWS.
     * @param {HasilSAWCreateManyArgs} args - Arguments to create many HasilSAWS.
     * @example
     * // Create many HasilSAWS
     * const hasilSAW = await prisma.hasilSAW.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HasilSAWCreateManyArgs>(args?: SelectSubset<T, HasilSAWCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HasilSAWS and returns the data saved in the database.
     * @param {HasilSAWCreateManyAndReturnArgs} args - Arguments to create many HasilSAWS.
     * @example
     * // Create many HasilSAWS
     * const hasilSAW = await prisma.hasilSAW.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HasilSAWS and only return the `id`
     * const hasilSAWWithIdOnly = await prisma.hasilSAW.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HasilSAWCreateManyAndReturnArgs>(args?: SelectSubset<T, HasilSAWCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HasilSAW.
     * @param {HasilSAWDeleteArgs} args - Arguments to delete one HasilSAW.
     * @example
     * // Delete one HasilSAW
     * const HasilSAW = await prisma.hasilSAW.delete({
     *   where: {
     *     // ... filter to delete one HasilSAW
     *   }
     * })
     * 
     */
    delete<T extends HasilSAWDeleteArgs>(args: SelectSubset<T, HasilSAWDeleteArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HasilSAW.
     * @param {HasilSAWUpdateArgs} args - Arguments to update one HasilSAW.
     * @example
     * // Update one HasilSAW
     * const hasilSAW = await prisma.hasilSAW.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HasilSAWUpdateArgs>(args: SelectSubset<T, HasilSAWUpdateArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HasilSAWS.
     * @param {HasilSAWDeleteManyArgs} args - Arguments to filter HasilSAWS to delete.
     * @example
     * // Delete a few HasilSAWS
     * const { count } = await prisma.hasilSAW.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HasilSAWDeleteManyArgs>(args?: SelectSubset<T, HasilSAWDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HasilSAWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilSAWUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HasilSAWS
     * const hasilSAW = await prisma.hasilSAW.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HasilSAWUpdateManyArgs>(args: SelectSubset<T, HasilSAWUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HasilSAWS and returns the data updated in the database.
     * @param {HasilSAWUpdateManyAndReturnArgs} args - Arguments to update many HasilSAWS.
     * @example
     * // Update many HasilSAWS
     * const hasilSAW = await prisma.hasilSAW.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HasilSAWS and only return the `id`
     * const hasilSAWWithIdOnly = await prisma.hasilSAW.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HasilSAWUpdateManyAndReturnArgs>(args: SelectSubset<T, HasilSAWUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HasilSAW.
     * @param {HasilSAWUpsertArgs} args - Arguments to update or create a HasilSAW.
     * @example
     * // Update or create a HasilSAW
     * const hasilSAW = await prisma.hasilSAW.upsert({
     *   create: {
     *     // ... data to create a HasilSAW
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HasilSAW we want to update
     *   }
     * })
     */
    upsert<T extends HasilSAWUpsertArgs>(args: SelectSubset<T, HasilSAWUpsertArgs<ExtArgs>>): Prisma__HasilSAWClient<$Result.GetResult<Prisma.$HasilSAWPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HasilSAWS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilSAWCountArgs} args - Arguments to filter HasilSAWS to count.
     * @example
     * // Count the number of HasilSAWS
     * const count = await prisma.hasilSAW.count({
     *   where: {
     *     // ... the filter for the HasilSAWS we want to count
     *   }
     * })
    **/
    count<T extends HasilSAWCountArgs>(
      args?: Subset<T, HasilSAWCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HasilSAWCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HasilSAW.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilSAWAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HasilSAWAggregateArgs>(args: Subset<T, HasilSAWAggregateArgs>): Prisma.PrismaPromise<GetHasilSAWAggregateType<T>>

    /**
     * Group by HasilSAW.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HasilSAWGroupByArgs} args - Group by arguments.
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
      T extends HasilSAWGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HasilSAWGroupByArgs['orderBy'] }
        : { orderBy?: HasilSAWGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HasilSAWGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHasilSAWGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HasilSAW model
   */
  readonly fields: HasilSAWFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HasilSAW.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HasilSAWClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HasilSAW model
   */
  interface HasilSAWFieldRefs {
    readonly id: FieldRef<"HasilSAW", 'String'>
    readonly studentId: FieldRef<"HasilSAW", 'String'>
    readonly skor: FieldRef<"HasilSAW", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * HasilSAW findUnique
   */
  export type HasilSAWFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * Filter, which HasilSAW to fetch.
     */
    where: HasilSAWWhereUniqueInput
  }

  /**
   * HasilSAW findUniqueOrThrow
   */
  export type HasilSAWFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * Filter, which HasilSAW to fetch.
     */
    where: HasilSAWWhereUniqueInput
  }

  /**
   * HasilSAW findFirst
   */
  export type HasilSAWFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * Filter, which HasilSAW to fetch.
     */
    where?: HasilSAWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilSAWS to fetch.
     */
    orderBy?: HasilSAWOrderByWithRelationInput | HasilSAWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HasilSAWS.
     */
    cursor?: HasilSAWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilSAWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilSAWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HasilSAWS.
     */
    distinct?: HasilSAWScalarFieldEnum | HasilSAWScalarFieldEnum[]
  }

  /**
   * HasilSAW findFirstOrThrow
   */
  export type HasilSAWFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * Filter, which HasilSAW to fetch.
     */
    where?: HasilSAWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilSAWS to fetch.
     */
    orderBy?: HasilSAWOrderByWithRelationInput | HasilSAWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HasilSAWS.
     */
    cursor?: HasilSAWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilSAWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilSAWS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HasilSAWS.
     */
    distinct?: HasilSAWScalarFieldEnum | HasilSAWScalarFieldEnum[]
  }

  /**
   * HasilSAW findMany
   */
  export type HasilSAWFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * Filter, which HasilSAWS to fetch.
     */
    where?: HasilSAWWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HasilSAWS to fetch.
     */
    orderBy?: HasilSAWOrderByWithRelationInput | HasilSAWOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HasilSAWS.
     */
    cursor?: HasilSAWWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HasilSAWS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HasilSAWS.
     */
    skip?: number
    distinct?: HasilSAWScalarFieldEnum | HasilSAWScalarFieldEnum[]
  }

  /**
   * HasilSAW create
   */
  export type HasilSAWCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * The data needed to create a HasilSAW.
     */
    data: XOR<HasilSAWCreateInput, HasilSAWUncheckedCreateInput>
  }

  /**
   * HasilSAW createMany
   */
  export type HasilSAWCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HasilSAWS.
     */
    data: HasilSAWCreateManyInput | HasilSAWCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HasilSAW createManyAndReturn
   */
  export type HasilSAWCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * The data used to create many HasilSAWS.
     */
    data: HasilSAWCreateManyInput | HasilSAWCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HasilSAW update
   */
  export type HasilSAWUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * The data needed to update a HasilSAW.
     */
    data: XOR<HasilSAWUpdateInput, HasilSAWUncheckedUpdateInput>
    /**
     * Choose, which HasilSAW to update.
     */
    where: HasilSAWWhereUniqueInput
  }

  /**
   * HasilSAW updateMany
   */
  export type HasilSAWUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HasilSAWS.
     */
    data: XOR<HasilSAWUpdateManyMutationInput, HasilSAWUncheckedUpdateManyInput>
    /**
     * Filter which HasilSAWS to update
     */
    where?: HasilSAWWhereInput
    /**
     * Limit how many HasilSAWS to update.
     */
    limit?: number
  }

  /**
   * HasilSAW updateManyAndReturn
   */
  export type HasilSAWUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * The data used to update HasilSAWS.
     */
    data: XOR<HasilSAWUpdateManyMutationInput, HasilSAWUncheckedUpdateManyInput>
    /**
     * Filter which HasilSAWS to update
     */
    where?: HasilSAWWhereInput
    /**
     * Limit how many HasilSAWS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HasilSAW upsert
   */
  export type HasilSAWUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * The filter to search for the HasilSAW to update in case it exists.
     */
    where: HasilSAWWhereUniqueInput
    /**
     * In case the HasilSAW found by the `where` argument doesn't exist, create a new HasilSAW with this data.
     */
    create: XOR<HasilSAWCreateInput, HasilSAWUncheckedCreateInput>
    /**
     * In case the HasilSAW was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HasilSAWUpdateInput, HasilSAWUncheckedUpdateInput>
  }

  /**
   * HasilSAW delete
   */
  export type HasilSAWDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
    /**
     * Filter which HasilSAW to delete.
     */
    where: HasilSAWWhereUniqueInput
  }

  /**
   * HasilSAW deleteMany
   */
  export type HasilSAWDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HasilSAWS to delete
     */
    where?: HasilSAWWhereInput
    /**
     * Limit how many HasilSAWS to delete.
     */
    limit?: number
  }

  /**
   * HasilSAW without action
   */
  export type HasilSAWDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HasilSAW
     */
    select?: HasilSAWSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HasilSAW
     */
    omit?: HasilSAWOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HasilSAWInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    userId: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    userId: string
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      userId: string
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BiodataScalarFieldEnum: {
    id: 'id',
    address: 'address',
    phone: 'phone',
    birthDate: 'birthDate',
    userId: 'userId'
  };

  export type BiodataScalarFieldEnum = (typeof BiodataScalarFieldEnum)[keyof typeof BiodataScalarFieldEnum]


  export const JurusanScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kode: 'kode'
  };

  export type JurusanScalarFieldEnum = (typeof JurusanScalarFieldEnum)[keyof typeof JurusanScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    kode: 'kode'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nis: 'nis',
    jurusanId: 'jurusanId',
    kelasId: 'kelasId',
    tahunMasuk: 'tahunMasuk',
    penhasilanOrtu: 'penhasilanOrtu',
    statusBeasiswa: 'statusBeasiswa',
    skorSAW: 'skorSAW',
    rankBeasiswa: 'rankBeasiswa'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nik: 'nik',
    kodeMapel: 'kodeMapel'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const MapelScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kode: 'kode'
  };

  export type MapelScalarFieldEnum = (typeof MapelScalarFieldEnum)[keyof typeof MapelScalarFieldEnum]


  export const NilaiScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    mapelId: 'mapelId',
    upsensi: 'upsensi',
    nilai: 'nilai'
  };

  export type NilaiScalarFieldEnum = (typeof NilaiScalarFieldEnum)[keyof typeof NilaiScalarFieldEnum]


  export const PenilaianScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    kriteria: 'kriteria',
    nilai: 'nilai'
  };

  export type PenilaianScalarFieldEnum = (typeof PenilaianScalarFieldEnum)[keyof typeof PenilaianScalarFieldEnum]


  export const HasilSAWScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    skor: 'skor'
  };

  export type HasilSAWScalarFieldEnum = (typeof HasilSAWScalarFieldEnum)[keyof typeof HasilSAWScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'KodeKelas'
   */
  export type EnumKodeKelasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KodeKelas'>
    


  /**
   * Reference to a field of type 'KodeKelas[]'
   */
  export type ListEnumKodeKelasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KodeKelas[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    biodata?: XOR<BiodataNullableScalarRelationFilter, BiodataWhereInput> | null
    tokens?: TokenListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    biodata?: BiodataOrderByWithRelationInput
    tokens?: TokenOrderByRelationAggregateInput
    student?: StudentOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    biodata?: XOR<BiodataNullableScalarRelationFilter, BiodataWhereInput> | null
    tokens?: TokenListRelationFilter
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BiodataWhereInput = {
    AND?: BiodataWhereInput | BiodataWhereInput[]
    OR?: BiodataWhereInput[]
    NOT?: BiodataWhereInput | BiodataWhereInput[]
    id?: StringFilter<"Biodata"> | string
    address?: StringFilter<"Biodata"> | string
    phone?: StringFilter<"Biodata"> | string
    birthDate?: DateTimeFilter<"Biodata"> | Date | string
    userId?: StringFilter<"Biodata"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BiodataOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BiodataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BiodataWhereInput | BiodataWhereInput[]
    OR?: BiodataWhereInput[]
    NOT?: BiodataWhereInput | BiodataWhereInput[]
    address?: StringFilter<"Biodata"> | string
    phone?: StringFilter<"Biodata"> | string
    birthDate?: DateTimeFilter<"Biodata"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BiodataOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
    _count?: BiodataCountOrderByAggregateInput
    _max?: BiodataMaxOrderByAggregateInput
    _min?: BiodataMinOrderByAggregateInput
  }

  export type BiodataScalarWhereWithAggregatesInput = {
    AND?: BiodataScalarWhereWithAggregatesInput | BiodataScalarWhereWithAggregatesInput[]
    OR?: BiodataScalarWhereWithAggregatesInput[]
    NOT?: BiodataScalarWhereWithAggregatesInput | BiodataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Biodata"> | string
    address?: StringWithAggregatesFilter<"Biodata"> | string
    phone?: StringWithAggregatesFilter<"Biodata"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Biodata"> | Date | string
    userId?: StringWithAggregatesFilter<"Biodata"> | string
  }

  export type JurusanWhereInput = {
    AND?: JurusanWhereInput | JurusanWhereInput[]
    OR?: JurusanWhereInput[]
    NOT?: JurusanWhereInput | JurusanWhereInput[]
    id?: StringFilter<"Jurusan"> | string
    nama?: StringFilter<"Jurusan"> | string
    kode?: StringFilter<"Jurusan"> | string
    students?: StudentListRelationFilter
  }

  export type JurusanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type JurusanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kode?: string
    AND?: JurusanWhereInput | JurusanWhereInput[]
    OR?: JurusanWhereInput[]
    NOT?: JurusanWhereInput | JurusanWhereInput[]
    nama?: StringFilter<"Jurusan"> | string
    students?: StudentListRelationFilter
  }, "id" | "kode">

  export type JurusanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    _count?: JurusanCountOrderByAggregateInput
    _max?: JurusanMaxOrderByAggregateInput
    _min?: JurusanMinOrderByAggregateInput
  }

  export type JurusanScalarWhereWithAggregatesInput = {
    AND?: JurusanScalarWhereWithAggregatesInput | JurusanScalarWhereWithAggregatesInput[]
    OR?: JurusanScalarWhereWithAggregatesInput[]
    NOT?: JurusanScalarWhereWithAggregatesInput | JurusanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jurusan"> | string
    nama?: StringWithAggregatesFilter<"Jurusan"> | string
    kode?: StringWithAggregatesFilter<"Jurusan"> | string
  }

  export type KelasWhereInput = {
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    id?: StringFilter<"Kelas"> | string
    kode?: EnumKodeKelasFilter<"Kelas"> | $Enums.KodeKelas
    students?: StudentListRelationFilter
  }

  export type KelasOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kode?: $Enums.KodeKelas
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    students?: StudentListRelationFilter
  }, "id" | "kode">

  export type KelasOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrder
    _count?: KelasCountOrderByAggregateInput
    _max?: KelasMaxOrderByAggregateInput
    _min?: KelasMinOrderByAggregateInput
  }

  export type KelasScalarWhereWithAggregatesInput = {
    AND?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    OR?: KelasScalarWhereWithAggregatesInput[]
    NOT?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kelas"> | string
    kode?: EnumKodeKelasWithAggregatesFilter<"Kelas"> | $Enums.KodeKelas
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    nis?: IntFilter<"Student"> | number
    jurusanId?: StringFilter<"Student"> | string
    kelasId?: StringFilter<"Student"> | string
    tahunMasuk?: IntFilter<"Student"> | number
    penhasilanOrtu?: IntNullableFilter<"Student"> | number | null
    statusBeasiswa?: BoolNullableFilter<"Student"> | boolean | null
    skorSAW?: FloatNullableFilter<"Student"> | number | null
    rankBeasiswa?: IntNullableFilter<"Student"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jurusan?: XOR<JurusanScalarRelationFilter, JurusanWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mapel?: MapelListRelationFilter
    nilai?: NilaiListRelationFilter
    penilaian?: PenilaianListRelationFilter
    haasilSAW?: HasilSAWListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nis?: SortOrder
    jurusanId?: SortOrder
    kelasId?: SortOrder
    tahunMasuk?: SortOrder
    penhasilanOrtu?: SortOrderInput | SortOrder
    statusBeasiswa?: SortOrderInput | SortOrder
    skorSAW?: SortOrderInput | SortOrder
    rankBeasiswa?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    jurusan?: JurusanOrderByWithRelationInput
    kelas?: KelasOrderByWithRelationInput
    mapel?: MapelOrderByRelationAggregateInput
    nilai?: NilaiOrderByRelationAggregateInput
    penilaian?: PenilaianOrderByRelationAggregateInput
    haasilSAW?: HasilSAWOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    nis?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    jurusanId?: StringFilter<"Student"> | string
    kelasId?: StringFilter<"Student"> | string
    tahunMasuk?: IntFilter<"Student"> | number
    penhasilanOrtu?: IntNullableFilter<"Student"> | number | null
    statusBeasiswa?: BoolNullableFilter<"Student"> | boolean | null
    skorSAW?: FloatNullableFilter<"Student"> | number | null
    rankBeasiswa?: IntNullableFilter<"Student"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jurusan?: XOR<JurusanScalarRelationFilter, JurusanWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mapel?: MapelListRelationFilter
    nilai?: NilaiListRelationFilter
    penilaian?: PenilaianListRelationFilter
    haasilSAW?: HasilSAWListRelationFilter
  }, "id" | "userId" | "nis">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nis?: SortOrder
    jurusanId?: SortOrder
    kelasId?: SortOrder
    tahunMasuk?: SortOrder
    penhasilanOrtu?: SortOrderInput | SortOrder
    statusBeasiswa?: SortOrderInput | SortOrder
    skorSAW?: SortOrderInput | SortOrder
    rankBeasiswa?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
    nis?: IntWithAggregatesFilter<"Student"> | number
    jurusanId?: StringWithAggregatesFilter<"Student"> | string
    kelasId?: StringWithAggregatesFilter<"Student"> | string
    tahunMasuk?: IntWithAggregatesFilter<"Student"> | number
    penhasilanOrtu?: IntNullableWithAggregatesFilter<"Student"> | number | null
    statusBeasiswa?: BoolNullableWithAggregatesFilter<"Student"> | boolean | null
    skorSAW?: FloatNullableWithAggregatesFilter<"Student"> | number | null
    rankBeasiswa?: IntNullableWithAggregatesFilter<"Student"> | number | null
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    userId?: StringFilter<"Teacher"> | string
    nik?: IntFilter<"Teacher"> | number
    kodeMapel?: StringNullableFilter<"Teacher"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mapels?: XOR<MapelNullableScalarRelationFilter, MapelWhereInput> | null
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    kodeMapel?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    mapels?: MapelOrderByWithRelationInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    nik?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    kodeMapel?: StringNullableFilter<"Teacher"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mapels?: XOR<MapelNullableScalarRelationFilter, MapelWhereInput> | null
  }, "id" | "userId" | "nik">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    kodeMapel?: SortOrderInput | SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    userId?: StringWithAggregatesFilter<"Teacher"> | string
    nik?: IntWithAggregatesFilter<"Teacher"> | number
    kodeMapel?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
  }

  export type MapelWhereInput = {
    AND?: MapelWhereInput | MapelWhereInput[]
    OR?: MapelWhereInput[]
    NOT?: MapelWhereInput | MapelWhereInput[]
    id?: StringFilter<"Mapel"> | string
    nama?: StringFilter<"Mapel"> | string
    kode?: StringFilter<"Mapel"> | string
    teachers?: TeacherListRelationFilter
    students?: StudentListRelationFilter
    nilai?: NilaiListRelationFilter
  }

  export type MapelOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    teachers?: TeacherOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    nilai?: NilaiOrderByRelationAggregateInput
  }

  export type MapelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kode?: string
    AND?: MapelWhereInput | MapelWhereInput[]
    OR?: MapelWhereInput[]
    NOT?: MapelWhereInput | MapelWhereInput[]
    nama?: StringFilter<"Mapel"> | string
    teachers?: TeacherListRelationFilter
    students?: StudentListRelationFilter
    nilai?: NilaiListRelationFilter
  }, "id" | "kode">

  export type MapelOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    _count?: MapelCountOrderByAggregateInput
    _max?: MapelMaxOrderByAggregateInput
    _min?: MapelMinOrderByAggregateInput
  }

  export type MapelScalarWhereWithAggregatesInput = {
    AND?: MapelScalarWhereWithAggregatesInput | MapelScalarWhereWithAggregatesInput[]
    OR?: MapelScalarWhereWithAggregatesInput[]
    NOT?: MapelScalarWhereWithAggregatesInput | MapelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mapel"> | string
    nama?: StringWithAggregatesFilter<"Mapel"> | string
    kode?: StringWithAggregatesFilter<"Mapel"> | string
  }

  export type NilaiWhereInput = {
    AND?: NilaiWhereInput | NilaiWhereInput[]
    OR?: NilaiWhereInput[]
    NOT?: NilaiWhereInput | NilaiWhereInput[]
    id?: StringFilter<"Nilai"> | string
    studentId?: StringFilter<"Nilai"> | string
    mapelId?: StringFilter<"Nilai"> | string
    upsensi?: IntFilter<"Nilai"> | number
    nilai?: IntFilter<"Nilai"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    mapel?: XOR<MapelScalarRelationFilter, MapelWhereInput>
  }

  export type NilaiOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    mapelId?: SortOrder
    upsensi?: SortOrder
    nilai?: SortOrder
    student?: StudentOrderByWithRelationInput
    mapel?: MapelOrderByWithRelationInput
  }

  export type NilaiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_mapelId?: NilaiStudentIdMapelIdCompoundUniqueInput
    AND?: NilaiWhereInput | NilaiWhereInput[]
    OR?: NilaiWhereInput[]
    NOT?: NilaiWhereInput | NilaiWhereInput[]
    studentId?: StringFilter<"Nilai"> | string
    mapelId?: StringFilter<"Nilai"> | string
    upsensi?: IntFilter<"Nilai"> | number
    nilai?: IntFilter<"Nilai"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    mapel?: XOR<MapelScalarRelationFilter, MapelWhereInput>
  }, "id" | "studentId_mapelId">

  export type NilaiOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    mapelId?: SortOrder
    upsensi?: SortOrder
    nilai?: SortOrder
    _count?: NilaiCountOrderByAggregateInput
    _avg?: NilaiAvgOrderByAggregateInput
    _max?: NilaiMaxOrderByAggregateInput
    _min?: NilaiMinOrderByAggregateInput
    _sum?: NilaiSumOrderByAggregateInput
  }

  export type NilaiScalarWhereWithAggregatesInput = {
    AND?: NilaiScalarWhereWithAggregatesInput | NilaiScalarWhereWithAggregatesInput[]
    OR?: NilaiScalarWhereWithAggregatesInput[]
    NOT?: NilaiScalarWhereWithAggregatesInput | NilaiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Nilai"> | string
    studentId?: StringWithAggregatesFilter<"Nilai"> | string
    mapelId?: StringWithAggregatesFilter<"Nilai"> | string
    upsensi?: IntWithAggregatesFilter<"Nilai"> | number
    nilai?: IntWithAggregatesFilter<"Nilai"> | number
  }

  export type PenilaianWhereInput = {
    AND?: PenilaianWhereInput | PenilaianWhereInput[]
    OR?: PenilaianWhereInput[]
    NOT?: PenilaianWhereInput | PenilaianWhereInput[]
    id?: StringFilter<"Penilaian"> | string
    studentId?: StringFilter<"Penilaian"> | string
    kriteria?: StringFilter<"Penilaian"> | string
    nilai?: FloatFilter<"Penilaian"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type PenilaianOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    kriteria?: SortOrder
    nilai?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type PenilaianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_kriteria?: PenilaianStudentIdKriteriaCompoundUniqueInput
    AND?: PenilaianWhereInput | PenilaianWhereInput[]
    OR?: PenilaianWhereInput[]
    NOT?: PenilaianWhereInput | PenilaianWhereInput[]
    studentId?: StringFilter<"Penilaian"> | string
    kriteria?: StringFilter<"Penilaian"> | string
    nilai?: FloatFilter<"Penilaian"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId_kriteria">

  export type PenilaianOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    kriteria?: SortOrder
    nilai?: SortOrder
    _count?: PenilaianCountOrderByAggregateInput
    _avg?: PenilaianAvgOrderByAggregateInput
    _max?: PenilaianMaxOrderByAggregateInput
    _min?: PenilaianMinOrderByAggregateInput
    _sum?: PenilaianSumOrderByAggregateInput
  }

  export type PenilaianScalarWhereWithAggregatesInput = {
    AND?: PenilaianScalarWhereWithAggregatesInput | PenilaianScalarWhereWithAggregatesInput[]
    OR?: PenilaianScalarWhereWithAggregatesInput[]
    NOT?: PenilaianScalarWhereWithAggregatesInput | PenilaianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Penilaian"> | string
    studentId?: StringWithAggregatesFilter<"Penilaian"> | string
    kriteria?: StringWithAggregatesFilter<"Penilaian"> | string
    nilai?: FloatWithAggregatesFilter<"Penilaian"> | number
  }

  export type HasilSAWWhereInput = {
    AND?: HasilSAWWhereInput | HasilSAWWhereInput[]
    OR?: HasilSAWWhereInput[]
    NOT?: HasilSAWWhereInput | HasilSAWWhereInput[]
    id?: StringFilter<"HasilSAW"> | string
    studentId?: StringFilter<"HasilSAW"> | string
    skor?: FloatFilter<"HasilSAW"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type HasilSAWOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    skor?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type HasilSAWWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: HasilSAWWhereInput | HasilSAWWhereInput[]
    OR?: HasilSAWWhereInput[]
    NOT?: HasilSAWWhereInput | HasilSAWWhereInput[]
    skor?: FloatFilter<"HasilSAW"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId">

  export type HasilSAWOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    skor?: SortOrder
    _count?: HasilSAWCountOrderByAggregateInput
    _avg?: HasilSAWAvgOrderByAggregateInput
    _max?: HasilSAWMaxOrderByAggregateInput
    _min?: HasilSAWMinOrderByAggregateInput
    _sum?: HasilSAWSumOrderByAggregateInput
  }

  export type HasilSAWScalarWhereWithAggregatesInput = {
    AND?: HasilSAWScalarWhereWithAggregatesInput | HasilSAWScalarWhereWithAggregatesInput[]
    OR?: HasilSAWScalarWhereWithAggregatesInput[]
    NOT?: HasilSAWScalarWhereWithAggregatesInput | HasilSAWScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HasilSAW"> | string
    studentId?: StringWithAggregatesFilter<"HasilSAW"> | string
    skor?: FloatWithAggregatesFilter<"HasilSAW"> | number
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: StringWithAggregatesFilter<"Token"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataCreateNestedOneWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataUncheckedCreateNestedOneWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUpdateOneWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUncheckedUpdateOneWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiodataCreateInput = {
    id?: string
    address: string
    phone: string
    birthDate: Date | string
    user: UserCreateNestedOneWithoutBiodataInput
  }

  export type BiodataUncheckedCreateInput = {
    id?: string
    address: string
    phone: string
    birthDate: Date | string
    userId: string
  }

  export type BiodataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBiodataNestedInput
  }

  export type BiodataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BiodataCreateManyInput = {
    id?: string
    address: string
    phone: string
    birthDate: Date | string
    userId: string
  }

  export type BiodataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiodataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type JurusanCreateInput = {
    id?: string
    nama: string
    kode: string
    students?: StudentCreateNestedManyWithoutJurusanInput
  }

  export type JurusanUncheckedCreateInput = {
    id?: string
    nama: string
    kode: string
    students?: StudentUncheckedCreateNestedManyWithoutJurusanInput
  }

  export type JurusanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutJurusanNestedInput
  }

  export type JurusanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutJurusanNestedInput
  }

  export type JurusanCreateManyInput = {
    id?: string
    nama: string
    kode: string
  }

  export type JurusanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type JurusanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type KelasCreateInput = {
    id?: string
    kode: $Enums.KodeKelas
    students?: StudentCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateInput = {
    id?: string
    kode: $Enums.KodeKelas
    students?: StudentUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: EnumKodeKelasFieldUpdateOperationsInput | $Enums.KodeKelas
    students?: StudentUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: EnumKodeKelasFieldUpdateOperationsInput | $Enums.KodeKelas
    students?: StudentUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateManyInput = {
    id?: string
    kode: $Enums.KodeKelas
  }

  export type KelasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: EnumKodeKelasFieldUpdateOperationsInput | $Enums.KodeKelas
  }

  export type KelasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: EnumKodeKelasFieldUpdateOperationsInput | $Enums.KodeKelas
  }

  export type StudentCreateInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    jurusan: JurusanCreateNestedOneWithoutStudentsInput
    kelas: KelasCreateNestedOneWithoutStudentsInput
    mapel?: MapelCreateNestedManyWithoutStudentsInput
    nilai?: NilaiCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    mapel?: MapelUncheckedCreateNestedManyWithoutStudentsInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianUncheckedCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    jurusan?: JurusanUpdateOneRequiredWithoutStudentsNestedInput
    kelas?: KelasUpdateOneRequiredWithoutStudentsNestedInput
    mapel?: MapelUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    mapel?: MapelUncheckedUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUncheckedUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeacherCreateInput = {
    id?: string
    nik: number
    user: UserCreateNestedOneWithoutTeacherInput
    mapels?: MapelCreateNestedOneWithoutTeachersInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    userId: string
    nik: number
    kodeMapel?: string | null
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    mapels?: MapelUpdateOneWithoutTeachersNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    kodeMapel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateManyInput = {
    id?: string
    userId: string
    nik: number
    kodeMapel?: string | null
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    kodeMapel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MapelCreateInput = {
    id?: string
    nama: string
    kode: string
    teachers?: TeacherCreateNestedManyWithoutMapelsInput
    students?: StudentCreateNestedManyWithoutMapelInput
    nilai?: NilaiCreateNestedManyWithoutMapelInput
  }

  export type MapelUncheckedCreateInput = {
    id?: string
    nama: string
    kode: string
    teachers?: TeacherUncheckedCreateNestedManyWithoutMapelsInput
    students?: StudentUncheckedCreateNestedManyWithoutMapelInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutMapelInput
  }

  export type MapelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    teachers?: TeacherUpdateManyWithoutMapelsNestedInput
    students?: StudentUpdateManyWithoutMapelNestedInput
    nilai?: NilaiUpdateManyWithoutMapelNestedInput
  }

  export type MapelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    teachers?: TeacherUncheckedUpdateManyWithoutMapelsNestedInput
    students?: StudentUncheckedUpdateManyWithoutMapelNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutMapelNestedInput
  }

  export type MapelCreateManyInput = {
    id?: string
    nama: string
    kode: string
  }

  export type MapelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type MapelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiCreateInput = {
    id?: string
    upsensi: number
    nilai: number
    student: StudentCreateNestedOneWithoutNilaiInput
    mapel: MapelCreateNestedOneWithoutNilaiInput
  }

  export type NilaiUncheckedCreateInput = {
    id?: string
    studentId: string
    mapelId: string
    upsensi: number
    nilai: number
  }

  export type NilaiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutNilaiNestedInput
    mapel?: MapelUpdateOneRequiredWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
  }

  export type NilaiCreateManyInput = {
    id?: string
    studentId: string
    mapelId: string
    upsensi: number
    nilai: number
  }

  export type NilaiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
  }

  export type NilaiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
  }

  export type PenilaianCreateInput = {
    id?: string
    kriteria: string
    nilai: number
    student: StudentCreateNestedOneWithoutPenilaianInput
  }

  export type PenilaianUncheckedCreateInput = {
    id?: string
    studentId: string
    kriteria: string
    nilai: number
  }

  export type PenilaianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kriteria?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutPenilaianNestedInput
  }

  export type PenilaianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    kriteria?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
  }

  export type PenilaianCreateManyInput = {
    id?: string
    studentId: string
    kriteria: string
    nilai: number
  }

  export type PenilaianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kriteria?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
  }

  export type PenilaianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    kriteria?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
  }

  export type HasilSAWCreateInput = {
    id?: string
    skor: number
    student: StudentCreateNestedOneWithoutHaasilSAWInput
  }

  export type HasilSAWUncheckedCreateInput = {
    id?: string
    studentId: string
    skor: number
  }

  export type HasilSAWUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: FloatFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutHaasilSAWNestedInput
  }

  export type HasilSAWUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    skor?: FloatFieldUpdateOperationsInput | number
  }

  export type HasilSAWCreateManyInput = {
    id?: string
    studentId: string
    skor: number
  }

  export type HasilSAWUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: FloatFieldUpdateOperationsInput | number
  }

  export type HasilSAWUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    skor?: FloatFieldUpdateOperationsInput | number
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type BiodataNullableScalarRelationFilter = {
    is?: BiodataWhereInput | null
    isNot?: BiodataWhereInput | null
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BiodataCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
  }

  export type BiodataMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
  }

  export type BiodataMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    userId?: SortOrder
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JurusanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
  }

  export type JurusanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
  }

  export type JurusanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
  }

  export type EnumKodeKelasFilter<$PrismaModel = never> = {
    equals?: $Enums.KodeKelas | EnumKodeKelasFieldRefInput<$PrismaModel>
    in?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKodeKelasFilter<$PrismaModel> | $Enums.KodeKelas
  }

  export type KelasCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
  }

  export type KelasMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
  }

  export type KelasMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
  }

  export type EnumKodeKelasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KodeKelas | EnumKodeKelasFieldRefInput<$PrismaModel>
    in?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKodeKelasWithAggregatesFilter<$PrismaModel> | $Enums.KodeKelas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKodeKelasFilter<$PrismaModel>
    _max?: NestedEnumKodeKelasFilter<$PrismaModel>
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type JurusanScalarRelationFilter = {
    is?: JurusanWhereInput
    isNot?: JurusanWhereInput
  }

  export type KelasScalarRelationFilter = {
    is?: KelasWhereInput
    isNot?: KelasWhereInput
  }

  export type MapelListRelationFilter = {
    every?: MapelWhereInput
    some?: MapelWhereInput
    none?: MapelWhereInput
  }

  export type NilaiListRelationFilter = {
    every?: NilaiWhereInput
    some?: NilaiWhereInput
    none?: NilaiWhereInput
  }

  export type PenilaianListRelationFilter = {
    every?: PenilaianWhereInput
    some?: PenilaianWhereInput
    none?: PenilaianWhereInput
  }

  export type HasilSAWListRelationFilter = {
    every?: HasilSAWWhereInput
    some?: HasilSAWWhereInput
    none?: HasilSAWWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MapelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NilaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenilaianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HasilSAWOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nis?: SortOrder
    jurusanId?: SortOrder
    kelasId?: SortOrder
    tahunMasuk?: SortOrder
    penhasilanOrtu?: SortOrder
    statusBeasiswa?: SortOrder
    skorSAW?: SortOrder
    rankBeasiswa?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    nis?: SortOrder
    tahunMasuk?: SortOrder
    penhasilanOrtu?: SortOrder
    skorSAW?: SortOrder
    rankBeasiswa?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nis?: SortOrder
    jurusanId?: SortOrder
    kelasId?: SortOrder
    tahunMasuk?: SortOrder
    penhasilanOrtu?: SortOrder
    statusBeasiswa?: SortOrder
    skorSAW?: SortOrder
    rankBeasiswa?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nis?: SortOrder
    jurusanId?: SortOrder
    kelasId?: SortOrder
    tahunMasuk?: SortOrder
    penhasilanOrtu?: SortOrder
    statusBeasiswa?: SortOrder
    skorSAW?: SortOrder
    rankBeasiswa?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    nis?: SortOrder
    tahunMasuk?: SortOrder
    penhasilanOrtu?: SortOrder
    skorSAW?: SortOrder
    rankBeasiswa?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type MapelNullableScalarRelationFilter = {
    is?: MapelWhereInput | null
    isNot?: MapelWhereInput | null
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    kodeMapel?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    nik?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    kodeMapel?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nik?: SortOrder
    kodeMapel?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    nik?: SortOrder
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

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapelCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
  }

  export type MapelMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
  }

  export type MapelMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type MapelScalarRelationFilter = {
    is?: MapelWhereInput
    isNot?: MapelWhereInput
  }

  export type NilaiStudentIdMapelIdCompoundUniqueInput = {
    studentId: string
    mapelId: string
  }

  export type NilaiCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    mapelId?: SortOrder
    upsensi?: SortOrder
    nilai?: SortOrder
  }

  export type NilaiAvgOrderByAggregateInput = {
    upsensi?: SortOrder
    nilai?: SortOrder
  }

  export type NilaiMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    mapelId?: SortOrder
    upsensi?: SortOrder
    nilai?: SortOrder
  }

  export type NilaiMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    mapelId?: SortOrder
    upsensi?: SortOrder
    nilai?: SortOrder
  }

  export type NilaiSumOrderByAggregateInput = {
    upsensi?: SortOrder
    nilai?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PenilaianStudentIdKriteriaCompoundUniqueInput = {
    studentId: string
    kriteria: string
  }

  export type PenilaianCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    kriteria?: SortOrder
    nilai?: SortOrder
  }

  export type PenilaianAvgOrderByAggregateInput = {
    nilai?: SortOrder
  }

  export type PenilaianMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    kriteria?: SortOrder
    nilai?: SortOrder
  }

  export type PenilaianMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    kriteria?: SortOrder
    nilai?: SortOrder
  }

  export type PenilaianSumOrderByAggregateInput = {
    nilai?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type HasilSAWCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skor?: SortOrder
  }

  export type HasilSAWAvgOrderByAggregateInput = {
    skor?: SortOrder
  }

  export type HasilSAWMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skor?: SortOrder
  }

  export type HasilSAWMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skor?: SortOrder
  }

  export type HasilSAWSumOrderByAggregateInput = {
    skor?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type BiodataCreateNestedOneWithoutUserInput = {
    create?: XOR<BiodataCreateWithoutUserInput, BiodataUncheckedCreateWithoutUserInput>
    connectOrCreate?: BiodataCreateOrConnectWithoutUserInput
    connect?: BiodataWhereUniqueInput
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type BiodataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BiodataCreateWithoutUserInput, BiodataUncheckedCreateWithoutUserInput>
    connectOrCreate?: BiodataCreateOrConnectWithoutUserInput
    connect?: BiodataWhereUniqueInput
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BiodataUpdateOneWithoutUserNestedInput = {
    create?: XOR<BiodataCreateWithoutUserInput, BiodataUncheckedCreateWithoutUserInput>
    connectOrCreate?: BiodataCreateOrConnectWithoutUserInput
    upsert?: BiodataUpsertWithoutUserInput
    disconnect?: BiodataWhereInput | boolean
    delete?: BiodataWhereInput | boolean
    connect?: BiodataWhereUniqueInput
    update?: XOR<XOR<BiodataUpdateToOneWithWhereWithoutUserInput, BiodataUpdateWithoutUserInput>, BiodataUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type BiodataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BiodataCreateWithoutUserInput, BiodataUncheckedCreateWithoutUserInput>
    connectOrCreate?: BiodataCreateOrConnectWithoutUserInput
    upsert?: BiodataUpsertWithoutUserInput
    disconnect?: BiodataWhereInput | boolean
    delete?: BiodataWhereInput | boolean
    connect?: BiodataWhereUniqueInput
    update?: XOR<XOR<BiodataUpdateToOneWithWhereWithoutUserInput, BiodataUpdateWithoutUserInput>, BiodataUncheckedUpdateWithoutUserInput>
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutBiodataInput = {
    create?: XOR<UserCreateWithoutBiodataInput, UserUncheckedCreateWithoutBiodataInput>
    connectOrCreate?: UserCreateOrConnectWithoutBiodataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBiodataNestedInput = {
    create?: XOR<UserCreateWithoutBiodataInput, UserUncheckedCreateWithoutBiodataInput>
    connectOrCreate?: UserCreateOrConnectWithoutBiodataInput
    upsert?: UserUpsertWithoutBiodataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBiodataInput, UserUpdateWithoutBiodataInput>, UserUncheckedUpdateWithoutBiodataInput>
  }

  export type StudentCreateNestedManyWithoutJurusanInput = {
    create?: XOR<StudentCreateWithoutJurusanInput, StudentUncheckedCreateWithoutJurusanInput> | StudentCreateWithoutJurusanInput[] | StudentUncheckedCreateWithoutJurusanInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutJurusanInput | StudentCreateOrConnectWithoutJurusanInput[]
    createMany?: StudentCreateManyJurusanInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutJurusanInput = {
    create?: XOR<StudentCreateWithoutJurusanInput, StudentUncheckedCreateWithoutJurusanInput> | StudentCreateWithoutJurusanInput[] | StudentUncheckedCreateWithoutJurusanInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutJurusanInput | StudentCreateOrConnectWithoutJurusanInput[]
    createMany?: StudentCreateManyJurusanInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUpdateManyWithoutJurusanNestedInput = {
    create?: XOR<StudentCreateWithoutJurusanInput, StudentUncheckedCreateWithoutJurusanInput> | StudentCreateWithoutJurusanInput[] | StudentUncheckedCreateWithoutJurusanInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutJurusanInput | StudentCreateOrConnectWithoutJurusanInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutJurusanInput | StudentUpsertWithWhereUniqueWithoutJurusanInput[]
    createMany?: StudentCreateManyJurusanInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutJurusanInput | StudentUpdateWithWhereUniqueWithoutJurusanInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutJurusanInput | StudentUpdateManyWithWhereWithoutJurusanInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutJurusanNestedInput = {
    create?: XOR<StudentCreateWithoutJurusanInput, StudentUncheckedCreateWithoutJurusanInput> | StudentCreateWithoutJurusanInput[] | StudentUncheckedCreateWithoutJurusanInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutJurusanInput | StudentCreateOrConnectWithoutJurusanInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutJurusanInput | StudentUpsertWithWhereUniqueWithoutJurusanInput[]
    createMany?: StudentCreateManyJurusanInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutJurusanInput | StudentUpdateWithWhereUniqueWithoutJurusanInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutJurusanInput | StudentUpdateManyWithWhereWithoutJurusanInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentCreateNestedManyWithoutKelasInput = {
    create?: XOR<StudentCreateWithoutKelasInput, StudentUncheckedCreateWithoutKelasInput> | StudentCreateWithoutKelasInput[] | StudentUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutKelasInput | StudentCreateOrConnectWithoutKelasInput[]
    createMany?: StudentCreateManyKelasInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<StudentCreateWithoutKelasInput, StudentUncheckedCreateWithoutKelasInput> | StudentCreateWithoutKelasInput[] | StudentUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutKelasInput | StudentCreateOrConnectWithoutKelasInput[]
    createMany?: StudentCreateManyKelasInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumKodeKelasFieldUpdateOperationsInput = {
    set?: $Enums.KodeKelas
  }

  export type StudentUpdateManyWithoutKelasNestedInput = {
    create?: XOR<StudentCreateWithoutKelasInput, StudentUncheckedCreateWithoutKelasInput> | StudentCreateWithoutKelasInput[] | StudentUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutKelasInput | StudentCreateOrConnectWithoutKelasInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutKelasInput | StudentUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: StudentCreateManyKelasInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutKelasInput | StudentUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutKelasInput | StudentUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<StudentCreateWithoutKelasInput, StudentUncheckedCreateWithoutKelasInput> | StudentCreateWithoutKelasInput[] | StudentUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutKelasInput | StudentCreateOrConnectWithoutKelasInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutKelasInput | StudentUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: StudentCreateManyKelasInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutKelasInput | StudentUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutKelasInput | StudentUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type JurusanCreateNestedOneWithoutStudentsInput = {
    create?: XOR<JurusanCreateWithoutStudentsInput, JurusanUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: JurusanCreateOrConnectWithoutStudentsInput
    connect?: JurusanWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutStudentsInput = {
    create?: XOR<KelasCreateWithoutStudentsInput, KelasUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: KelasCreateOrConnectWithoutStudentsInput
    connect?: KelasWhereUniqueInput
  }

  export type MapelCreateNestedManyWithoutStudentsInput = {
    create?: XOR<MapelCreateWithoutStudentsInput, MapelUncheckedCreateWithoutStudentsInput> | MapelCreateWithoutStudentsInput[] | MapelUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: MapelCreateOrConnectWithoutStudentsInput | MapelCreateOrConnectWithoutStudentsInput[]
    connect?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
  }

  export type NilaiCreateNestedManyWithoutStudentInput = {
    create?: XOR<NilaiCreateWithoutStudentInput, NilaiUncheckedCreateWithoutStudentInput> | NilaiCreateWithoutStudentInput[] | NilaiUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutStudentInput | NilaiCreateOrConnectWithoutStudentInput[]
    createMany?: NilaiCreateManyStudentInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type PenilaianCreateNestedManyWithoutStudentInput = {
    create?: XOR<PenilaianCreateWithoutStudentInput, PenilaianUncheckedCreateWithoutStudentInput> | PenilaianCreateWithoutStudentInput[] | PenilaianUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutStudentInput | PenilaianCreateOrConnectWithoutStudentInput[]
    createMany?: PenilaianCreateManyStudentInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type HasilSAWCreateNestedManyWithoutStudentInput = {
    create?: XOR<HasilSAWCreateWithoutStudentInput, HasilSAWUncheckedCreateWithoutStudentInput> | HasilSAWCreateWithoutStudentInput[] | HasilSAWUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HasilSAWCreateOrConnectWithoutStudentInput | HasilSAWCreateOrConnectWithoutStudentInput[]
    createMany?: HasilSAWCreateManyStudentInputEnvelope
    connect?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
  }

  export type MapelUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<MapelCreateWithoutStudentsInput, MapelUncheckedCreateWithoutStudentsInput> | MapelCreateWithoutStudentsInput[] | MapelUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: MapelCreateOrConnectWithoutStudentsInput | MapelCreateOrConnectWithoutStudentsInput[]
    connect?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
  }

  export type NilaiUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<NilaiCreateWithoutStudentInput, NilaiUncheckedCreateWithoutStudentInput> | NilaiCreateWithoutStudentInput[] | NilaiUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutStudentInput | NilaiCreateOrConnectWithoutStudentInput[]
    createMany?: NilaiCreateManyStudentInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type PenilaianUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PenilaianCreateWithoutStudentInput, PenilaianUncheckedCreateWithoutStudentInput> | PenilaianCreateWithoutStudentInput[] | PenilaianUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutStudentInput | PenilaianCreateOrConnectWithoutStudentInput[]
    createMany?: PenilaianCreateManyStudentInputEnvelope
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
  }

  export type HasilSAWUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<HasilSAWCreateWithoutStudentInput, HasilSAWUncheckedCreateWithoutStudentInput> | HasilSAWCreateWithoutStudentInput[] | HasilSAWUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HasilSAWCreateOrConnectWithoutStudentInput | HasilSAWCreateOrConnectWithoutStudentInput[]
    createMany?: HasilSAWCreateManyStudentInputEnvelope
    connect?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type JurusanUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<JurusanCreateWithoutStudentsInput, JurusanUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: JurusanCreateOrConnectWithoutStudentsInput
    upsert?: JurusanUpsertWithoutStudentsInput
    connect?: JurusanWhereUniqueInput
    update?: XOR<XOR<JurusanUpdateToOneWithWhereWithoutStudentsInput, JurusanUpdateWithoutStudentsInput>, JurusanUncheckedUpdateWithoutStudentsInput>
  }

  export type KelasUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<KelasCreateWithoutStudentsInput, KelasUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: KelasCreateOrConnectWithoutStudentsInput
    upsert?: KelasUpsertWithoutStudentsInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutStudentsInput, KelasUpdateWithoutStudentsInput>, KelasUncheckedUpdateWithoutStudentsInput>
  }

  export type MapelUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<MapelCreateWithoutStudentsInput, MapelUncheckedCreateWithoutStudentsInput> | MapelCreateWithoutStudentsInput[] | MapelUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: MapelCreateOrConnectWithoutStudentsInput | MapelCreateOrConnectWithoutStudentsInput[]
    upsert?: MapelUpsertWithWhereUniqueWithoutStudentsInput | MapelUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    disconnect?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    delete?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    connect?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    update?: MapelUpdateWithWhereUniqueWithoutStudentsInput | MapelUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: MapelUpdateManyWithWhereWithoutStudentsInput | MapelUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: MapelScalarWhereInput | MapelScalarWhereInput[]
  }

  export type NilaiUpdateManyWithoutStudentNestedInput = {
    create?: XOR<NilaiCreateWithoutStudentInput, NilaiUncheckedCreateWithoutStudentInput> | NilaiCreateWithoutStudentInput[] | NilaiUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutStudentInput | NilaiCreateOrConnectWithoutStudentInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutStudentInput | NilaiUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: NilaiCreateManyStudentInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutStudentInput | NilaiUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutStudentInput | NilaiUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type PenilaianUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PenilaianCreateWithoutStudentInput, PenilaianUncheckedCreateWithoutStudentInput> | PenilaianCreateWithoutStudentInput[] | PenilaianUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutStudentInput | PenilaianCreateOrConnectWithoutStudentInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutStudentInput | PenilaianUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PenilaianCreateManyStudentInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutStudentInput | PenilaianUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutStudentInput | PenilaianUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type HasilSAWUpdateManyWithoutStudentNestedInput = {
    create?: XOR<HasilSAWCreateWithoutStudentInput, HasilSAWUncheckedCreateWithoutStudentInput> | HasilSAWCreateWithoutStudentInput[] | HasilSAWUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HasilSAWCreateOrConnectWithoutStudentInput | HasilSAWCreateOrConnectWithoutStudentInput[]
    upsert?: HasilSAWUpsertWithWhereUniqueWithoutStudentInput | HasilSAWUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: HasilSAWCreateManyStudentInputEnvelope
    set?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    disconnect?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    delete?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    connect?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    update?: HasilSAWUpdateWithWhereUniqueWithoutStudentInput | HasilSAWUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: HasilSAWUpdateManyWithWhereWithoutStudentInput | HasilSAWUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: HasilSAWScalarWhereInput | HasilSAWScalarWhereInput[]
  }

  export type MapelUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<MapelCreateWithoutStudentsInput, MapelUncheckedCreateWithoutStudentsInput> | MapelCreateWithoutStudentsInput[] | MapelUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: MapelCreateOrConnectWithoutStudentsInput | MapelCreateOrConnectWithoutStudentsInput[]
    upsert?: MapelUpsertWithWhereUniqueWithoutStudentsInput | MapelUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    disconnect?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    delete?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    connect?: MapelWhereUniqueInput | MapelWhereUniqueInput[]
    update?: MapelUpdateWithWhereUniqueWithoutStudentsInput | MapelUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: MapelUpdateManyWithWhereWithoutStudentsInput | MapelUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: MapelScalarWhereInput | MapelScalarWhereInput[]
  }

  export type NilaiUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<NilaiCreateWithoutStudentInput, NilaiUncheckedCreateWithoutStudentInput> | NilaiCreateWithoutStudentInput[] | NilaiUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutStudentInput | NilaiCreateOrConnectWithoutStudentInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutStudentInput | NilaiUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: NilaiCreateManyStudentInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutStudentInput | NilaiUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutStudentInput | NilaiUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type PenilaianUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PenilaianCreateWithoutStudentInput, PenilaianUncheckedCreateWithoutStudentInput> | PenilaianCreateWithoutStudentInput[] | PenilaianUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PenilaianCreateOrConnectWithoutStudentInput | PenilaianCreateOrConnectWithoutStudentInput[]
    upsert?: PenilaianUpsertWithWhereUniqueWithoutStudentInput | PenilaianUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PenilaianCreateManyStudentInputEnvelope
    set?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    disconnect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    delete?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    connect?: PenilaianWhereUniqueInput | PenilaianWhereUniqueInput[]
    update?: PenilaianUpdateWithWhereUniqueWithoutStudentInput | PenilaianUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PenilaianUpdateManyWithWhereWithoutStudentInput | PenilaianUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
  }

  export type HasilSAWUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<HasilSAWCreateWithoutStudentInput, HasilSAWUncheckedCreateWithoutStudentInput> | HasilSAWCreateWithoutStudentInput[] | HasilSAWUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HasilSAWCreateOrConnectWithoutStudentInput | HasilSAWCreateOrConnectWithoutStudentInput[]
    upsert?: HasilSAWUpsertWithWhereUniqueWithoutStudentInput | HasilSAWUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: HasilSAWCreateManyStudentInputEnvelope
    set?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    disconnect?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    delete?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    connect?: HasilSAWWhereUniqueInput | HasilSAWWhereUniqueInput[]
    update?: HasilSAWUpdateWithWhereUniqueWithoutStudentInput | HasilSAWUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: HasilSAWUpdateManyWithWhereWithoutStudentInput | HasilSAWUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: HasilSAWScalarWhereInput | HasilSAWScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type MapelCreateNestedOneWithoutTeachersInput = {
    create?: XOR<MapelCreateWithoutTeachersInput, MapelUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: MapelCreateOrConnectWithoutTeachersInput
    connect?: MapelWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type MapelUpdateOneWithoutTeachersNestedInput = {
    create?: XOR<MapelCreateWithoutTeachersInput, MapelUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: MapelCreateOrConnectWithoutTeachersInput
    upsert?: MapelUpsertWithoutTeachersInput
    disconnect?: MapelWhereInput | boolean
    delete?: MapelWhereInput | boolean
    connect?: MapelWhereUniqueInput
    update?: XOR<XOR<MapelUpdateToOneWithWhereWithoutTeachersInput, MapelUpdateWithoutTeachersInput>, MapelUncheckedUpdateWithoutTeachersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TeacherCreateNestedManyWithoutMapelsInput = {
    create?: XOR<TeacherCreateWithoutMapelsInput, TeacherUncheckedCreateWithoutMapelsInput> | TeacherCreateWithoutMapelsInput[] | TeacherUncheckedCreateWithoutMapelsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutMapelsInput | TeacherCreateOrConnectWithoutMapelsInput[]
    createMany?: TeacherCreateManyMapelsInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutMapelInput = {
    create?: XOR<StudentCreateWithoutMapelInput, StudentUncheckedCreateWithoutMapelInput> | StudentCreateWithoutMapelInput[] | StudentUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMapelInput | StudentCreateOrConnectWithoutMapelInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type NilaiCreateNestedManyWithoutMapelInput = {
    create?: XOR<NilaiCreateWithoutMapelInput, NilaiUncheckedCreateWithoutMapelInput> | NilaiCreateWithoutMapelInput[] | NilaiUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMapelInput | NilaiCreateOrConnectWithoutMapelInput[]
    createMany?: NilaiCreateManyMapelInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedManyWithoutMapelsInput = {
    create?: XOR<TeacherCreateWithoutMapelsInput, TeacherUncheckedCreateWithoutMapelsInput> | TeacherCreateWithoutMapelsInput[] | TeacherUncheckedCreateWithoutMapelsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutMapelsInput | TeacherCreateOrConnectWithoutMapelsInput[]
    createMany?: TeacherCreateManyMapelsInputEnvelope
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutMapelInput = {
    create?: XOR<StudentCreateWithoutMapelInput, StudentUncheckedCreateWithoutMapelInput> | StudentCreateWithoutMapelInput[] | StudentUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMapelInput | StudentCreateOrConnectWithoutMapelInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type NilaiUncheckedCreateNestedManyWithoutMapelInput = {
    create?: XOR<NilaiCreateWithoutMapelInput, NilaiUncheckedCreateWithoutMapelInput> | NilaiCreateWithoutMapelInput[] | NilaiUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMapelInput | NilaiCreateOrConnectWithoutMapelInput[]
    createMany?: NilaiCreateManyMapelInputEnvelope
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
  }

  export type TeacherUpdateManyWithoutMapelsNestedInput = {
    create?: XOR<TeacherCreateWithoutMapelsInput, TeacherUncheckedCreateWithoutMapelsInput> | TeacherCreateWithoutMapelsInput[] | TeacherUncheckedCreateWithoutMapelsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutMapelsInput | TeacherCreateOrConnectWithoutMapelsInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutMapelsInput | TeacherUpsertWithWhereUniqueWithoutMapelsInput[]
    createMany?: TeacherCreateManyMapelsInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutMapelsInput | TeacherUpdateWithWhereUniqueWithoutMapelsInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutMapelsInput | TeacherUpdateManyWithWhereWithoutMapelsInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutMapelNestedInput = {
    create?: XOR<StudentCreateWithoutMapelInput, StudentUncheckedCreateWithoutMapelInput> | StudentCreateWithoutMapelInput[] | StudentUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMapelInput | StudentCreateOrConnectWithoutMapelInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMapelInput | StudentUpsertWithWhereUniqueWithoutMapelInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMapelInput | StudentUpdateWithWhereUniqueWithoutMapelInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMapelInput | StudentUpdateManyWithWhereWithoutMapelInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type NilaiUpdateManyWithoutMapelNestedInput = {
    create?: XOR<NilaiCreateWithoutMapelInput, NilaiUncheckedCreateWithoutMapelInput> | NilaiCreateWithoutMapelInput[] | NilaiUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMapelInput | NilaiCreateOrConnectWithoutMapelInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutMapelInput | NilaiUpsertWithWhereUniqueWithoutMapelInput[]
    createMany?: NilaiCreateManyMapelInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutMapelInput | NilaiUpdateWithWhereUniqueWithoutMapelInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutMapelInput | NilaiUpdateManyWithWhereWithoutMapelInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateManyWithoutMapelsNestedInput = {
    create?: XOR<TeacherCreateWithoutMapelsInput, TeacherUncheckedCreateWithoutMapelsInput> | TeacherCreateWithoutMapelsInput[] | TeacherUncheckedCreateWithoutMapelsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutMapelsInput | TeacherCreateOrConnectWithoutMapelsInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutMapelsInput | TeacherUpsertWithWhereUniqueWithoutMapelsInput[]
    createMany?: TeacherCreateManyMapelsInputEnvelope
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutMapelsInput | TeacherUpdateWithWhereUniqueWithoutMapelsInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutMapelsInput | TeacherUpdateManyWithWhereWithoutMapelsInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutMapelNestedInput = {
    create?: XOR<StudentCreateWithoutMapelInput, StudentUncheckedCreateWithoutMapelInput> | StudentCreateWithoutMapelInput[] | StudentUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutMapelInput | StudentCreateOrConnectWithoutMapelInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutMapelInput | StudentUpsertWithWhereUniqueWithoutMapelInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutMapelInput | StudentUpdateWithWhereUniqueWithoutMapelInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutMapelInput | StudentUpdateManyWithWhereWithoutMapelInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type NilaiUncheckedUpdateManyWithoutMapelNestedInput = {
    create?: XOR<NilaiCreateWithoutMapelInput, NilaiUncheckedCreateWithoutMapelInput> | NilaiCreateWithoutMapelInput[] | NilaiUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: NilaiCreateOrConnectWithoutMapelInput | NilaiCreateOrConnectWithoutMapelInput[]
    upsert?: NilaiUpsertWithWhereUniqueWithoutMapelInput | NilaiUpsertWithWhereUniqueWithoutMapelInput[]
    createMany?: NilaiCreateManyMapelInputEnvelope
    set?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    disconnect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    delete?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    connect?: NilaiWhereUniqueInput | NilaiWhereUniqueInput[]
    update?: NilaiUpdateWithWhereUniqueWithoutMapelInput | NilaiUpdateWithWhereUniqueWithoutMapelInput[]
    updateMany?: NilaiUpdateManyWithWhereWithoutMapelInput | NilaiUpdateManyWithWhereWithoutMapelInput[]
    deleteMany?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutNilaiInput = {
    create?: XOR<StudentCreateWithoutNilaiInput, StudentUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: StudentCreateOrConnectWithoutNilaiInput
    connect?: StudentWhereUniqueInput
  }

  export type MapelCreateNestedOneWithoutNilaiInput = {
    create?: XOR<MapelCreateWithoutNilaiInput, MapelUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: MapelCreateOrConnectWithoutNilaiInput
    connect?: MapelWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutNilaiNestedInput = {
    create?: XOR<StudentCreateWithoutNilaiInput, StudentUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: StudentCreateOrConnectWithoutNilaiInput
    upsert?: StudentUpsertWithoutNilaiInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutNilaiInput, StudentUpdateWithoutNilaiInput>, StudentUncheckedUpdateWithoutNilaiInput>
  }

  export type MapelUpdateOneRequiredWithoutNilaiNestedInput = {
    create?: XOR<MapelCreateWithoutNilaiInput, MapelUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: MapelCreateOrConnectWithoutNilaiInput
    upsert?: MapelUpsertWithoutNilaiInput
    connect?: MapelWhereUniqueInput
    update?: XOR<XOR<MapelUpdateToOneWithWhereWithoutNilaiInput, MapelUpdateWithoutNilaiInput>, MapelUncheckedUpdateWithoutNilaiInput>
  }

  export type StudentCreateNestedOneWithoutPenilaianInput = {
    create?: XOR<StudentCreateWithoutPenilaianInput, StudentUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPenilaianInput
    connect?: StudentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneRequiredWithoutPenilaianNestedInput = {
    create?: XOR<StudentCreateWithoutPenilaianInput, StudentUncheckedCreateWithoutPenilaianInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPenilaianInput
    upsert?: StudentUpsertWithoutPenilaianInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPenilaianInput, StudentUpdateWithoutPenilaianInput>, StudentUncheckedUpdateWithoutPenilaianInput>
  }

  export type StudentCreateNestedOneWithoutHaasilSAWInput = {
    create?: XOR<StudentCreateWithoutHaasilSAWInput, StudentUncheckedCreateWithoutHaasilSAWInput>
    connectOrCreate?: StudentCreateOrConnectWithoutHaasilSAWInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutHaasilSAWNestedInput = {
    create?: XOR<StudentCreateWithoutHaasilSAWInput, StudentUncheckedCreateWithoutHaasilSAWInput>
    connectOrCreate?: StudentCreateOrConnectWithoutHaasilSAWInput
    upsert?: StudentUpsertWithoutHaasilSAWInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutHaasilSAWInput, StudentUpdateWithoutHaasilSAWInput>, StudentUncheckedUpdateWithoutHaasilSAWInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumKodeKelasFilter<$PrismaModel = never> = {
    equals?: $Enums.KodeKelas | EnumKodeKelasFieldRefInput<$PrismaModel>
    in?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKodeKelasFilter<$PrismaModel> | $Enums.KodeKelas
  }

  export type NestedEnumKodeKelasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KodeKelas | EnumKodeKelasFieldRefInput<$PrismaModel>
    in?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    notIn?: $Enums.KodeKelas[] | ListEnumKodeKelasFieldRefInput<$PrismaModel>
    not?: NestedEnumKodeKelasWithAggregatesFilter<$PrismaModel> | $Enums.KodeKelas
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKodeKelasFilter<$PrismaModel>
    _max?: NestedEnumKodeKelasFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BiodataCreateWithoutUserInput = {
    id?: string
    address: string
    phone: string
    birthDate: Date | string
  }

  export type BiodataUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    phone: string
    birthDate: Date | string
  }

  export type BiodataCreateOrConnectWithoutUserInput = {
    where: BiodataWhereUniqueInput
    create: XOR<BiodataCreateWithoutUserInput, BiodataUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    jurusan: JurusanCreateNestedOneWithoutStudentsInput
    kelas: KelasCreateNestedOneWithoutStudentsInput
    mapel?: MapelCreateNestedManyWithoutStudentsInput
    nilai?: NilaiCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    mapel?: MapelUncheckedCreateNestedManyWithoutStudentsInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianUncheckedCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateWithoutUserInput = {
    id?: string
    nik: number
    mapels?: MapelCreateNestedOneWithoutTeachersInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: string
    nik: number
    kodeMapel?: string | null
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type BiodataUpsertWithoutUserInput = {
    update: XOR<BiodataUpdateWithoutUserInput, BiodataUncheckedUpdateWithoutUserInput>
    create: XOR<BiodataCreateWithoutUserInput, BiodataUncheckedCreateWithoutUserInput>
    where?: BiodataWhereInput
  }

  export type BiodataUpdateToOneWithWhereWithoutUserInput = {
    where?: BiodataWhereInput
    data: XOR<BiodataUpdateWithoutUserInput, BiodataUncheckedUpdateWithoutUserInput>
  }

  export type BiodataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiodataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    userId?: StringFilter<"Token"> | string
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    jurusan?: JurusanUpdateOneRequiredWithoutStudentsNestedInput
    kelas?: KelasUpdateOneRequiredWithoutStudentsNestedInput
    mapel?: MapelUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    mapel?: MapelUncheckedUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUncheckedUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    mapels?: MapelUpdateOneWithoutTeachersNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    kodeMapel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutBiodataInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBiodataInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBiodataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBiodataInput, UserUncheckedCreateWithoutBiodataInput>
  }

  export type UserUpsertWithoutBiodataInput = {
    update: XOR<UserUpdateWithoutBiodataInput, UserUncheckedUpdateWithoutBiodataInput>
    create: XOR<UserCreateWithoutBiodataInput, UserUncheckedCreateWithoutBiodataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBiodataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBiodataInput, UserUncheckedUpdateWithoutBiodataInput>
  }

  export type UserUpdateWithoutBiodataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBiodataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type StudentCreateWithoutJurusanInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    kelas: KelasCreateNestedOneWithoutStudentsInput
    mapel?: MapelCreateNestedManyWithoutStudentsInput
    nilai?: NilaiCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutJurusanInput = {
    id?: string
    userId: string
    nis: number
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    mapel?: MapelUncheckedCreateNestedManyWithoutStudentsInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianUncheckedCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutJurusanInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutJurusanInput, StudentUncheckedCreateWithoutJurusanInput>
  }

  export type StudentCreateManyJurusanInputEnvelope = {
    data: StudentCreateManyJurusanInput | StudentCreateManyJurusanInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutJurusanInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutJurusanInput, StudentUncheckedUpdateWithoutJurusanInput>
    create: XOR<StudentCreateWithoutJurusanInput, StudentUncheckedCreateWithoutJurusanInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutJurusanInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutJurusanInput, StudentUncheckedUpdateWithoutJurusanInput>
  }

  export type StudentUpdateManyWithWhereWithoutJurusanInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutJurusanInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    nis?: IntFilter<"Student"> | number
    jurusanId?: StringFilter<"Student"> | string
    kelasId?: StringFilter<"Student"> | string
    tahunMasuk?: IntFilter<"Student"> | number
    penhasilanOrtu?: IntNullableFilter<"Student"> | number | null
    statusBeasiswa?: BoolNullableFilter<"Student"> | boolean | null
    skorSAW?: FloatNullableFilter<"Student"> | number | null
    rankBeasiswa?: IntNullableFilter<"Student"> | number | null
  }

  export type StudentCreateWithoutKelasInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    jurusan: JurusanCreateNestedOneWithoutStudentsInput
    mapel?: MapelCreateNestedManyWithoutStudentsInput
    nilai?: NilaiCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutKelasInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    mapel?: MapelUncheckedCreateNestedManyWithoutStudentsInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianUncheckedCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutKelasInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutKelasInput, StudentUncheckedCreateWithoutKelasInput>
  }

  export type StudentCreateManyKelasInputEnvelope = {
    data: StudentCreateManyKelasInput | StudentCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutKelasInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutKelasInput, StudentUncheckedUpdateWithoutKelasInput>
    create: XOR<StudentCreateWithoutKelasInput, StudentUncheckedCreateWithoutKelasInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutKelasInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutKelasInput, StudentUncheckedUpdateWithoutKelasInput>
  }

  export type StudentUpdateManyWithWhereWithoutKelasInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutKelasInput>
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataCreateNestedOneWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataUncheckedCreateNestedOneWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type JurusanCreateWithoutStudentsInput = {
    id?: string
    nama: string
    kode: string
  }

  export type JurusanUncheckedCreateWithoutStudentsInput = {
    id?: string
    nama: string
    kode: string
  }

  export type JurusanCreateOrConnectWithoutStudentsInput = {
    where: JurusanWhereUniqueInput
    create: XOR<JurusanCreateWithoutStudentsInput, JurusanUncheckedCreateWithoutStudentsInput>
  }

  export type KelasCreateWithoutStudentsInput = {
    id?: string
    kode: $Enums.KodeKelas
  }

  export type KelasUncheckedCreateWithoutStudentsInput = {
    id?: string
    kode: $Enums.KodeKelas
  }

  export type KelasCreateOrConnectWithoutStudentsInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutStudentsInput, KelasUncheckedCreateWithoutStudentsInput>
  }

  export type MapelCreateWithoutStudentsInput = {
    id?: string
    nama: string
    kode: string
    teachers?: TeacherCreateNestedManyWithoutMapelsInput
    nilai?: NilaiCreateNestedManyWithoutMapelInput
  }

  export type MapelUncheckedCreateWithoutStudentsInput = {
    id?: string
    nama: string
    kode: string
    teachers?: TeacherUncheckedCreateNestedManyWithoutMapelsInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutMapelInput
  }

  export type MapelCreateOrConnectWithoutStudentsInput = {
    where: MapelWhereUniqueInput
    create: XOR<MapelCreateWithoutStudentsInput, MapelUncheckedCreateWithoutStudentsInput>
  }

  export type NilaiCreateWithoutStudentInput = {
    id?: string
    upsensi: number
    nilai: number
    mapel: MapelCreateNestedOneWithoutNilaiInput
  }

  export type NilaiUncheckedCreateWithoutStudentInput = {
    id?: string
    mapelId: string
    upsensi: number
    nilai: number
  }

  export type NilaiCreateOrConnectWithoutStudentInput = {
    where: NilaiWhereUniqueInput
    create: XOR<NilaiCreateWithoutStudentInput, NilaiUncheckedCreateWithoutStudentInput>
  }

  export type NilaiCreateManyStudentInputEnvelope = {
    data: NilaiCreateManyStudentInput | NilaiCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PenilaianCreateWithoutStudentInput = {
    id?: string
    kriteria: string
    nilai: number
  }

  export type PenilaianUncheckedCreateWithoutStudentInput = {
    id?: string
    kriteria: string
    nilai: number
  }

  export type PenilaianCreateOrConnectWithoutStudentInput = {
    where: PenilaianWhereUniqueInput
    create: XOR<PenilaianCreateWithoutStudentInput, PenilaianUncheckedCreateWithoutStudentInput>
  }

  export type PenilaianCreateManyStudentInputEnvelope = {
    data: PenilaianCreateManyStudentInput | PenilaianCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type HasilSAWCreateWithoutStudentInput = {
    id?: string
    skor: number
  }

  export type HasilSAWUncheckedCreateWithoutStudentInput = {
    id?: string
    skor: number
  }

  export type HasilSAWCreateOrConnectWithoutStudentInput = {
    where: HasilSAWWhereUniqueInput
    create: XOR<HasilSAWCreateWithoutStudentInput, HasilSAWUncheckedCreateWithoutStudentInput>
  }

  export type HasilSAWCreateManyStudentInputEnvelope = {
    data: HasilSAWCreateManyStudentInput | HasilSAWCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUpdateOneWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUncheckedUpdateOneWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type JurusanUpsertWithoutStudentsInput = {
    update: XOR<JurusanUpdateWithoutStudentsInput, JurusanUncheckedUpdateWithoutStudentsInput>
    create: XOR<JurusanCreateWithoutStudentsInput, JurusanUncheckedCreateWithoutStudentsInput>
    where?: JurusanWhereInput
  }

  export type JurusanUpdateToOneWithWhereWithoutStudentsInput = {
    where?: JurusanWhereInput
    data: XOR<JurusanUpdateWithoutStudentsInput, JurusanUncheckedUpdateWithoutStudentsInput>
  }

  export type JurusanUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type JurusanUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type KelasUpsertWithoutStudentsInput = {
    update: XOR<KelasUpdateWithoutStudentsInput, KelasUncheckedUpdateWithoutStudentsInput>
    create: XOR<KelasCreateWithoutStudentsInput, KelasUncheckedCreateWithoutStudentsInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutStudentsInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutStudentsInput, KelasUncheckedUpdateWithoutStudentsInput>
  }

  export type KelasUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: EnumKodeKelasFieldUpdateOperationsInput | $Enums.KodeKelas
  }

  export type KelasUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: EnumKodeKelasFieldUpdateOperationsInput | $Enums.KodeKelas
  }

  export type MapelUpsertWithWhereUniqueWithoutStudentsInput = {
    where: MapelWhereUniqueInput
    update: XOR<MapelUpdateWithoutStudentsInput, MapelUncheckedUpdateWithoutStudentsInput>
    create: XOR<MapelCreateWithoutStudentsInput, MapelUncheckedCreateWithoutStudentsInput>
  }

  export type MapelUpdateWithWhereUniqueWithoutStudentsInput = {
    where: MapelWhereUniqueInput
    data: XOR<MapelUpdateWithoutStudentsInput, MapelUncheckedUpdateWithoutStudentsInput>
  }

  export type MapelUpdateManyWithWhereWithoutStudentsInput = {
    where: MapelScalarWhereInput
    data: XOR<MapelUpdateManyMutationInput, MapelUncheckedUpdateManyWithoutStudentsInput>
  }

  export type MapelScalarWhereInput = {
    AND?: MapelScalarWhereInput | MapelScalarWhereInput[]
    OR?: MapelScalarWhereInput[]
    NOT?: MapelScalarWhereInput | MapelScalarWhereInput[]
    id?: StringFilter<"Mapel"> | string
    nama?: StringFilter<"Mapel"> | string
    kode?: StringFilter<"Mapel"> | string
  }

  export type NilaiUpsertWithWhereUniqueWithoutStudentInput = {
    where: NilaiWhereUniqueInput
    update: XOR<NilaiUpdateWithoutStudentInput, NilaiUncheckedUpdateWithoutStudentInput>
    create: XOR<NilaiCreateWithoutStudentInput, NilaiUncheckedCreateWithoutStudentInput>
  }

  export type NilaiUpdateWithWhereUniqueWithoutStudentInput = {
    where: NilaiWhereUniqueInput
    data: XOR<NilaiUpdateWithoutStudentInput, NilaiUncheckedUpdateWithoutStudentInput>
  }

  export type NilaiUpdateManyWithWhereWithoutStudentInput = {
    where: NilaiScalarWhereInput
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyWithoutStudentInput>
  }

  export type NilaiScalarWhereInput = {
    AND?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
    OR?: NilaiScalarWhereInput[]
    NOT?: NilaiScalarWhereInput | NilaiScalarWhereInput[]
    id?: StringFilter<"Nilai"> | string
    studentId?: StringFilter<"Nilai"> | string
    mapelId?: StringFilter<"Nilai"> | string
    upsensi?: IntFilter<"Nilai"> | number
    nilai?: IntFilter<"Nilai"> | number
  }

  export type PenilaianUpsertWithWhereUniqueWithoutStudentInput = {
    where: PenilaianWhereUniqueInput
    update: XOR<PenilaianUpdateWithoutStudentInput, PenilaianUncheckedUpdateWithoutStudentInput>
    create: XOR<PenilaianCreateWithoutStudentInput, PenilaianUncheckedCreateWithoutStudentInput>
  }

  export type PenilaianUpdateWithWhereUniqueWithoutStudentInput = {
    where: PenilaianWhereUniqueInput
    data: XOR<PenilaianUpdateWithoutStudentInput, PenilaianUncheckedUpdateWithoutStudentInput>
  }

  export type PenilaianUpdateManyWithWhereWithoutStudentInput = {
    where: PenilaianScalarWhereInput
    data: XOR<PenilaianUpdateManyMutationInput, PenilaianUncheckedUpdateManyWithoutStudentInput>
  }

  export type PenilaianScalarWhereInput = {
    AND?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
    OR?: PenilaianScalarWhereInput[]
    NOT?: PenilaianScalarWhereInput | PenilaianScalarWhereInput[]
    id?: StringFilter<"Penilaian"> | string
    studentId?: StringFilter<"Penilaian"> | string
    kriteria?: StringFilter<"Penilaian"> | string
    nilai?: FloatFilter<"Penilaian"> | number
  }

  export type HasilSAWUpsertWithWhereUniqueWithoutStudentInput = {
    where: HasilSAWWhereUniqueInput
    update: XOR<HasilSAWUpdateWithoutStudentInput, HasilSAWUncheckedUpdateWithoutStudentInput>
    create: XOR<HasilSAWCreateWithoutStudentInput, HasilSAWUncheckedCreateWithoutStudentInput>
  }

  export type HasilSAWUpdateWithWhereUniqueWithoutStudentInput = {
    where: HasilSAWWhereUniqueInput
    data: XOR<HasilSAWUpdateWithoutStudentInput, HasilSAWUncheckedUpdateWithoutStudentInput>
  }

  export type HasilSAWUpdateManyWithWhereWithoutStudentInput = {
    where: HasilSAWScalarWhereInput
    data: XOR<HasilSAWUpdateManyMutationInput, HasilSAWUncheckedUpdateManyWithoutStudentInput>
  }

  export type HasilSAWScalarWhereInput = {
    AND?: HasilSAWScalarWhereInput | HasilSAWScalarWhereInput[]
    OR?: HasilSAWScalarWhereInput[]
    NOT?: HasilSAWScalarWhereInput | HasilSAWScalarWhereInput[]
    id?: StringFilter<"HasilSAW"> | string
    studentId?: StringFilter<"HasilSAW"> | string
    skor?: FloatFilter<"HasilSAW"> | number
  }

  export type UserCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataCreateNestedOneWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataUncheckedCreateNestedOneWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type MapelCreateWithoutTeachersInput = {
    id?: string
    nama: string
    kode: string
    students?: StudentCreateNestedManyWithoutMapelInput
    nilai?: NilaiCreateNestedManyWithoutMapelInput
  }

  export type MapelUncheckedCreateWithoutTeachersInput = {
    id?: string
    nama: string
    kode: string
    students?: StudentUncheckedCreateNestedManyWithoutMapelInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutMapelInput
  }

  export type MapelCreateOrConnectWithoutTeachersInput = {
    where: MapelWhereUniqueInput
    create: XOR<MapelCreateWithoutTeachersInput, MapelUncheckedCreateWithoutTeachersInput>
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUpdateOneWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUncheckedUpdateOneWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MapelUpsertWithoutTeachersInput = {
    update: XOR<MapelUpdateWithoutTeachersInput, MapelUncheckedUpdateWithoutTeachersInput>
    create: XOR<MapelCreateWithoutTeachersInput, MapelUncheckedCreateWithoutTeachersInput>
    where?: MapelWhereInput
  }

  export type MapelUpdateToOneWithWhereWithoutTeachersInput = {
    where?: MapelWhereInput
    data: XOR<MapelUpdateWithoutTeachersInput, MapelUncheckedUpdateWithoutTeachersInput>
  }

  export type MapelUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutMapelNestedInput
    nilai?: NilaiUpdateManyWithoutMapelNestedInput
  }

  export type MapelUncheckedUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutMapelNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutMapelNestedInput
  }

  export type TeacherCreateWithoutMapelsInput = {
    id?: string
    nik: number
    user: UserCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutMapelsInput = {
    id?: string
    userId: string
    nik: number
  }

  export type TeacherCreateOrConnectWithoutMapelsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutMapelsInput, TeacherUncheckedCreateWithoutMapelsInput>
  }

  export type TeacherCreateManyMapelsInputEnvelope = {
    data: TeacherCreateManyMapelsInput | TeacherCreateManyMapelsInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutMapelInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    jurusan: JurusanCreateNestedOneWithoutStudentsInput
    kelas: KelasCreateNestedOneWithoutStudentsInput
    nilai?: NilaiCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMapelInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    nilai?: NilaiUncheckedCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianUncheckedCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMapelInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMapelInput, StudentUncheckedCreateWithoutMapelInput>
  }

  export type NilaiCreateWithoutMapelInput = {
    id?: string
    upsensi: number
    nilai: number
    student: StudentCreateNestedOneWithoutNilaiInput
  }

  export type NilaiUncheckedCreateWithoutMapelInput = {
    id?: string
    studentId: string
    upsensi: number
    nilai: number
  }

  export type NilaiCreateOrConnectWithoutMapelInput = {
    where: NilaiWhereUniqueInput
    create: XOR<NilaiCreateWithoutMapelInput, NilaiUncheckedCreateWithoutMapelInput>
  }

  export type NilaiCreateManyMapelInputEnvelope = {
    data: NilaiCreateManyMapelInput | NilaiCreateManyMapelInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithWhereUniqueWithoutMapelsInput = {
    where: TeacherWhereUniqueInput
    update: XOR<TeacherUpdateWithoutMapelsInput, TeacherUncheckedUpdateWithoutMapelsInput>
    create: XOR<TeacherCreateWithoutMapelsInput, TeacherUncheckedCreateWithoutMapelsInput>
  }

  export type TeacherUpdateWithWhereUniqueWithoutMapelsInput = {
    where: TeacherWhereUniqueInput
    data: XOR<TeacherUpdateWithoutMapelsInput, TeacherUncheckedUpdateWithoutMapelsInput>
  }

  export type TeacherUpdateManyWithWhereWithoutMapelsInput = {
    where: TeacherScalarWhereInput
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyWithoutMapelsInput>
  }

  export type TeacherScalarWhereInput = {
    AND?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    OR?: TeacherScalarWhereInput[]
    NOT?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    id?: StringFilter<"Teacher"> | string
    userId?: StringFilter<"Teacher"> | string
    nik?: IntFilter<"Teacher"> | number
    kodeMapel?: StringNullableFilter<"Teacher"> | string | null
  }

  export type StudentUpsertWithWhereUniqueWithoutMapelInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutMapelInput, StudentUncheckedUpdateWithoutMapelInput>
    create: XOR<StudentCreateWithoutMapelInput, StudentUncheckedCreateWithoutMapelInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutMapelInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutMapelInput, StudentUncheckedUpdateWithoutMapelInput>
  }

  export type StudentUpdateManyWithWhereWithoutMapelInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutMapelInput>
  }

  export type NilaiUpsertWithWhereUniqueWithoutMapelInput = {
    where: NilaiWhereUniqueInput
    update: XOR<NilaiUpdateWithoutMapelInput, NilaiUncheckedUpdateWithoutMapelInput>
    create: XOR<NilaiCreateWithoutMapelInput, NilaiUncheckedCreateWithoutMapelInput>
  }

  export type NilaiUpdateWithWhereUniqueWithoutMapelInput = {
    where: NilaiWhereUniqueInput
    data: XOR<NilaiUpdateWithoutMapelInput, NilaiUncheckedUpdateWithoutMapelInput>
  }

  export type NilaiUpdateManyWithWhereWithoutMapelInput = {
    where: NilaiScalarWhereInput
    data: XOR<NilaiUpdateManyMutationInput, NilaiUncheckedUpdateManyWithoutMapelInput>
  }

  export type StudentCreateWithoutNilaiInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    jurusan: JurusanCreateNestedOneWithoutStudentsInput
    kelas: KelasCreateNestedOneWithoutStudentsInput
    mapel?: MapelCreateNestedManyWithoutStudentsInput
    penilaian?: PenilaianCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutNilaiInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    mapel?: MapelUncheckedCreateNestedManyWithoutStudentsInput
    penilaian?: PenilaianUncheckedCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutNilaiInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutNilaiInput, StudentUncheckedCreateWithoutNilaiInput>
  }

  export type MapelCreateWithoutNilaiInput = {
    id?: string
    nama: string
    kode: string
    teachers?: TeacherCreateNestedManyWithoutMapelsInput
    students?: StudentCreateNestedManyWithoutMapelInput
  }

  export type MapelUncheckedCreateWithoutNilaiInput = {
    id?: string
    nama: string
    kode: string
    teachers?: TeacherUncheckedCreateNestedManyWithoutMapelsInput
    students?: StudentUncheckedCreateNestedManyWithoutMapelInput
  }

  export type MapelCreateOrConnectWithoutNilaiInput = {
    where: MapelWhereUniqueInput
    create: XOR<MapelCreateWithoutNilaiInput, MapelUncheckedCreateWithoutNilaiInput>
  }

  export type StudentUpsertWithoutNilaiInput = {
    update: XOR<StudentUpdateWithoutNilaiInput, StudentUncheckedUpdateWithoutNilaiInput>
    create: XOR<StudentCreateWithoutNilaiInput, StudentUncheckedCreateWithoutNilaiInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutNilaiInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutNilaiInput, StudentUncheckedUpdateWithoutNilaiInput>
  }

  export type StudentUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    jurusan?: JurusanUpdateOneRequiredWithoutStudentsNestedInput
    kelas?: KelasUpdateOneRequiredWithoutStudentsNestedInput
    mapel?: MapelUpdateManyWithoutStudentsNestedInput
    penilaian?: PenilaianUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    mapel?: MapelUncheckedUpdateManyWithoutStudentsNestedInput
    penilaian?: PenilaianUncheckedUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type MapelUpsertWithoutNilaiInput = {
    update: XOR<MapelUpdateWithoutNilaiInput, MapelUncheckedUpdateWithoutNilaiInput>
    create: XOR<MapelCreateWithoutNilaiInput, MapelUncheckedCreateWithoutNilaiInput>
    where?: MapelWhereInput
  }

  export type MapelUpdateToOneWithWhereWithoutNilaiInput = {
    where?: MapelWhereInput
    data: XOR<MapelUpdateWithoutNilaiInput, MapelUncheckedUpdateWithoutNilaiInput>
  }

  export type MapelUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    teachers?: TeacherUpdateManyWithoutMapelsNestedInput
    students?: StudentUpdateManyWithoutMapelNestedInput
  }

  export type MapelUncheckedUpdateWithoutNilaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    teachers?: TeacherUncheckedUpdateManyWithoutMapelsNestedInput
    students?: StudentUncheckedUpdateManyWithoutMapelNestedInput
  }

  export type StudentCreateWithoutPenilaianInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    jurusan: JurusanCreateNestedOneWithoutStudentsInput
    kelas: KelasCreateNestedOneWithoutStudentsInput
    mapel?: MapelCreateNestedManyWithoutStudentsInput
    nilai?: NilaiCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPenilaianInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    mapel?: MapelUncheckedCreateNestedManyWithoutStudentsInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutStudentInput
    haasilSAW?: HasilSAWUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPenilaianInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPenilaianInput, StudentUncheckedCreateWithoutPenilaianInput>
  }

  export type StudentUpsertWithoutPenilaianInput = {
    update: XOR<StudentUpdateWithoutPenilaianInput, StudentUncheckedUpdateWithoutPenilaianInput>
    create: XOR<StudentCreateWithoutPenilaianInput, StudentUncheckedCreateWithoutPenilaianInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPenilaianInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPenilaianInput, StudentUncheckedUpdateWithoutPenilaianInput>
  }

  export type StudentUpdateWithoutPenilaianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    jurusan?: JurusanUpdateOneRequiredWithoutStudentsNestedInput
    kelas?: KelasUpdateOneRequiredWithoutStudentsNestedInput
    mapel?: MapelUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPenilaianInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    mapel?: MapelUncheckedUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutHaasilSAWInput = {
    id?: string
    nis: number
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    user: UserCreateNestedOneWithoutStudentInput
    jurusan: JurusanCreateNestedOneWithoutStudentsInput
    kelas: KelasCreateNestedOneWithoutStudentsInput
    mapel?: MapelCreateNestedManyWithoutStudentsInput
    nilai?: NilaiCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutHaasilSAWInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
    mapel?: MapelUncheckedCreateNestedManyWithoutStudentsInput
    nilai?: NilaiUncheckedCreateNestedManyWithoutStudentInput
    penilaian?: PenilaianUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutHaasilSAWInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutHaasilSAWInput, StudentUncheckedCreateWithoutHaasilSAWInput>
  }

  export type StudentUpsertWithoutHaasilSAWInput = {
    update: XOR<StudentUpdateWithoutHaasilSAWInput, StudentUncheckedUpdateWithoutHaasilSAWInput>
    create: XOR<StudentCreateWithoutHaasilSAWInput, StudentUncheckedCreateWithoutHaasilSAWInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutHaasilSAWInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutHaasilSAWInput, StudentUncheckedUpdateWithoutHaasilSAWInput>
  }

  export type StudentUpdateWithoutHaasilSAWInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    jurusan?: JurusanUpdateOneRequiredWithoutStudentsNestedInput
    kelas?: KelasUpdateOneRequiredWithoutStudentsNestedInput
    mapel?: MapelUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutHaasilSAWInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    mapel?: MapelUncheckedUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataCreateNestedOneWithoutUserInput
    student?: StudentCreateNestedOneWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    biodata?: BiodataUncheckedCreateNestedOneWithoutUserInput
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUpdateOneWithoutUserNestedInput
    student?: StudentUpdateOneWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: BiodataUncheckedUpdateOneWithoutUserNestedInput
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyJurusanInput = {
    id?: string
    userId: string
    nis: number
    kelasId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
  }

  export type StudentUpdateWithoutJurusanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    kelas?: KelasUpdateOneRequiredWithoutStudentsNestedInput
    mapel?: MapelUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutJurusanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    mapel?: MapelUncheckedUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUncheckedUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutJurusanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentCreateManyKelasInput = {
    id?: string
    userId: string
    nis: number
    jurusanId: string
    tahunMasuk: number
    penhasilanOrtu?: number | null
    statusBeasiswa?: boolean | null
    skorSAW?: number | null
    rankBeasiswa?: number | null
  }

  export type StudentUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    jurusan?: JurusanUpdateOneRequiredWithoutStudentsNestedInput
    mapel?: MapelUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    mapel?: MapelUncheckedUpdateManyWithoutStudentsNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUncheckedUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NilaiCreateManyStudentInput = {
    id?: string
    mapelId: string
    upsensi: number
    nilai: number
  }

  export type PenilaianCreateManyStudentInput = {
    id?: string
    kriteria: string
    nilai: number
  }

  export type HasilSAWCreateManyStudentInput = {
    id?: string
    skor: number
  }

  export type MapelUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    teachers?: TeacherUpdateManyWithoutMapelsNestedInput
    nilai?: NilaiUpdateManyWithoutMapelNestedInput
  }

  export type MapelUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    teachers?: TeacherUncheckedUpdateManyWithoutMapelsNestedInput
    nilai?: NilaiUncheckedUpdateManyWithoutMapelNestedInput
  }

  export type MapelUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
  }

  export type NilaiUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
    mapel?: MapelUpdateOneRequiredWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
  }

  export type NilaiUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
  }

  export type PenilaianUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    kriteria?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
  }

  export type PenilaianUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    kriteria?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
  }

  export type PenilaianUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    kriteria?: StringFieldUpdateOperationsInput | string
    nilai?: FloatFieldUpdateOperationsInput | number
  }

  export type HasilSAWUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: FloatFieldUpdateOperationsInput | number
  }

  export type HasilSAWUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: FloatFieldUpdateOperationsInput | number
  }

  export type HasilSAWUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    skor?: FloatFieldUpdateOperationsInput | number
  }

  export type TeacherCreateManyMapelsInput = {
    id?: string
    userId: string
    nik: number
  }

  export type NilaiCreateManyMapelInput = {
    id?: string
    studentId: string
    upsensi: number
    nilai: number
  }

  export type TeacherUpdateWithoutMapelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutMapelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherUncheckedUpdateManyWithoutMapelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
  }

  export type StudentUpdateWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    jurusan?: JurusanUpdateOneRequiredWithoutStudentsNestedInput
    kelas?: KelasUpdateOneRequiredWithoutStudentsNestedInput
    nilai?: NilaiUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
    nilai?: NilaiUncheckedUpdateManyWithoutStudentNestedInput
    penilaian?: PenilaianUncheckedUpdateManyWithoutStudentNestedInput
    haasilSAW?: HasilSAWUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nis?: IntFieldUpdateOperationsInput | number
    jurusanId?: StringFieldUpdateOperationsInput | string
    kelasId?: StringFieldUpdateOperationsInput | string
    tahunMasuk?: IntFieldUpdateOperationsInput | number
    penhasilanOrtu?: NullableIntFieldUpdateOperationsInput | number | null
    statusBeasiswa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    skorSAW?: NullableFloatFieldUpdateOperationsInput | number | null
    rankBeasiswa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NilaiUpdateWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateOneRequiredWithoutNilaiNestedInput
  }

  export type NilaiUncheckedUpdateWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
  }

  export type NilaiUncheckedUpdateManyWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    upsensi?: IntFieldUpdateOperationsInput | number
    nilai?: IntFieldUpdateOperationsInput | number
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