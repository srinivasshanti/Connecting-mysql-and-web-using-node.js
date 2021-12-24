import { createConnection } from 'mysql';

const connection = createConnection({
  host: "117.236.190.213",
  user: "student_147",
  password: "student_147",
  database: "student_147"
});

export default connection;