import TemplateService from "./template.serv.ts";
import type { MySqlInsertValue } from "drizzle-orm/mysql-core";
import type { TableType } from "@/types/service.d.ts";
class CreateService<T extends TableType> extends TemplateService<T> {
  /**
   * create one
   */
  async one(data: MySqlInsertValue<T>[]) {
    const values = [...data];
    if (!Array.isArray(values) || values.length == 0) {
      return { success: false };
    }
    const inserted = await this.database.insert(this.table).values(values);
    return { success: true, data: inserted };
  }
  /**
   * create many
   */
  async many(data: MySqlInsertValue<T>[]) {
    return await this.database.insert(this.table).values(data);
  }
}
export default CreateService;
