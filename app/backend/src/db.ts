import {DataSource} from "typeorm";

export const datasource = new DataSource({
    type: "sqlite",
    database: "checkback.sqlite",
    entities: ["./src/entities/*.ts"],
    synchronize: true,
    logging: true,
})