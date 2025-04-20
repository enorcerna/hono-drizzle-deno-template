import TemplateService from "./template.serv.ts";
import type { FieldType, TableType } from "@/types/service.d.ts";
import { eq } from "drizzle-orm";
import type { MySqlInsertValue } from "drizzle-orm/mysql-core";
type UpdateData<T extends TableType, K extends string = ""> = Partial<
  Omit<keyof MySqlInsertValue<T>, K>
>;
class UpdateService<T extends TableType> extends TemplateService<T> {
  /**
   * Update BY ID
   */
  async byId(id: string, data: UpdateData<T, "id">) {
    return this.database
      .update(this.table)
      .set(data)
      .where(eq(this.table._.columns["id"], Number(id)));
  }

  /**
   * Update BY  FIELD
   */
  async updateByField<V extends string>(
    field: FieldType<T, V>,
    data: UpdateData<T, "">,
  ) {
    const column = this.table._.columns[field.name];
    return this.database.update(this.table).set(data).where(
      eq(column, field.value),
    );
  }
}
export default UpdateService;
