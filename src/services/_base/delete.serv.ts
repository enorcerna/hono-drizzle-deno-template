import { eq } from "drizzle-orm";
import TemplateService from "./template.serv.ts";
import type { FieldType, TableType } from "@/types/service.d.ts";
class DeleteService<T extends TableType> extends TemplateService<T> {
  async byId(id: string) {
    return await this.database.delete(this.table).where(
      eq(this.table._.columns["id"], Number(id)),
    );
  }
  async deleteByField<V>(field: FieldType<T, V>) {
    const column = this.table._.columns[field.name];
    return await this.database.delete(this.table).where(
      eq(column, field.value),
    );
  }
}

export default DeleteService;
