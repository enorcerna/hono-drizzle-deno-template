import type { TableType, TSchema } from "@/types/service.d.ts";
import TemplateService from "./template.serv.ts";
import GetService from "./get.serv.ts";
import UpdateService from "./update.serv.ts";
import CreateService from "./create.serv.ts";
import DeleteService from "./delete.serv.ts";

class BaseDBService<T extends TableType> extends TemplateService<T> {
  public get: GetService<T>;
  public create: CreateService<T>;
  public update: UpdateService<T>;
  public delete: DeleteService<T>;
  constructor(table: T, schemaName: keyof TSchema) {
    super(table, schemaName);
    this.get = new GetService(table, schemaName);
    this.create = new CreateService(table, schemaName);
    this.update = new UpdateService(table, schemaName);
    this.delete = new DeleteService(table, schemaName);
  }
}
export default BaseDBService;
