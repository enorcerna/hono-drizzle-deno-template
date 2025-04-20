import { db } from "@/db/index.ts";
import * as schema from "@/models/index.ts";
import {
  DBQueryConfig,
  ExtractTableRelationsFromSchema,
  ExtractTablesWithRelations,
  KnownKeysOnly,
} from "drizzle-orm";
import { MySqlTable, TableConfig } from "drizzle-orm/mysql-core";
export type TableValue = Record<string, unknown>;
export type DatabaseType = typeof db;
// type TableName = keyof TSchema;
export type ConfigSelect<T extends TableType> = KnownKeysOnly<
  QueryConfig<T, "many">,
  QueryConfig<T, "many">
>;
export type FieldType<T extends MySqlTable<TableConfig>, V> = {
  name: Extract<keyof T["_"]["columns"], string>;
  value: V;
};
// Config
export type TableType = MySqlTable<TableConfig>;
export type TSchema = ExtractTablesWithRelations<typeof schema>;
export type TRealtions<T extends TableType> = ExtractTableRelationsFromSchema<
  TSchema,
  T["_"]["name"]
>;
export type QueryConfig<T extends TableType, Mode extends "many" | "one"> =
  DBQueryConfig<
    "many",
    Mode extends "many" ? true : false,
    TSchema,
    ExtractTableRelationsFromSchema<TSchema, T["_"]["name"]>
  >;
