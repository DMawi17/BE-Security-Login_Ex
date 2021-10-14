import mongoose from "mongoose";
import config from "./config/config.js";
import app from "./express.js";

const { connect, connection } = mongoose;

connection.on("connected", () => {
    console.log(`Connected to database`);
});
connection.on("error", () => {
    throw new Error(`Unable to connect to database`);
});

try {
    await connect(config.mongoUri);
} catch (err) {
    console.error(err);
} finally {
    connection.close();
}

app.listen(config.port, (e) =>
    e
        ? console.log(`NOT listening ${e}`)
        : console.info("Server started on port %s.", config.port)
);
