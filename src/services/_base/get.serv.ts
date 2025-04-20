/* eslint-disable @typescript-eslint/no-explicit-any */

import TemplateService from "./template.serv.ts";
import { eq } from "drizzle-orm";
import type {
  FieldType,
  QueryConfig,
  TableType,
  TRealtions,
  TSchema,
} from "@/types/service.d.ts";

class GetService<T extends TableType> extends TemplateService<T> {
  /**
   *  all values, by options
   */
  async all(config?: QueryConfig<T, "many">): Promise<TRealtions<T>> {
    const query = this.query as any;
    return await query.findMany({
      limit: Number(config?.limit ?? 10),
      offset: Number(config?.offset),
      ...config,
    });
  }

  /**
   * By id
   */
  async byId(id: string): Promise<T["$inferSelect"]> {
    const column = this.table._.columns["id"];
    return await (this.database.query as any)[this.tableMethod].findFirst({
      where: eq(column, Number(id)),
    });
  }
  /**
   * By Slug
   */
  async bySlug(
    slug: string,
    config?: QueryConfig<T, "one">,
  ): Promise<T["$inferSelect"]> {
    const column = this.table._.columns["slug"];
    return await (this.database.query as any)[this.tableMethod].findFirst({
      where: eq(column, slug),
      ...config,
    });
  }

  /**
   * by any field - first
   */
  async firstByField<V>(
    field: FieldType<T, V>,
    config?: QueryConfig<T, "many">,
  ) {
    const column = this.table._.columns[field.name];
    return await (this.database.query as any)[this.tableMethod].findFirst({
      where: eq(column, field.value),
      ...config,
    });
  }
  /**
   * by any field - many
   */
  async byField(config?: QueryConfig<T, "many">): Promise<T["$inferSelect"][]> {
    return await (this.database.query as any)[this.tableMethod].findMany(
      config,
    );
  }
}
export default GetService;
