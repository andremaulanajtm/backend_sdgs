import { Sequelize } from "sequelize";

const db = new Sequelize('db_sdgs','odoo','odoo',{
    host:"localhost",
    port:2432,
    dialect:"postgres"
})

export default db;