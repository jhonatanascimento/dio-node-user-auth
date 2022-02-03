import { Pool } from "pg";


const connectionString = 'postgres://qqefosuz:jrA5jfQmKXZF76OY-JIF7tmBDnA8CxM4@kesavan.db.elephantsql.com/qqefosuz';
const db = new Pool({connectionString});

export default db;