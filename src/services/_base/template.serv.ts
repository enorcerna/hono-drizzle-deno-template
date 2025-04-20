import { db } from "@/db/index.ts";
import type { DatabaseType, TableType, TSchema } from "@/types/service.d.ts";

class TemplateDBService<T extends TableType> {
  protected readonly table: T;
  protected readonly database: DatabaseType;
  protected readonly tableMethod: keyof TSchema;
  protected readonly query: Readonly<DatabaseType["query"][keyof TSchema]>;

  constructor(
    table: T,
    schemaName: keyof TSchema,
    database: DatabaseType = db,
  ) {
    this.table = table;
    this.database = database;
    this.tableMethod = schemaName;
    this.query = this.database.query[schemaName];
  }
}

export default TemplateDBService;
