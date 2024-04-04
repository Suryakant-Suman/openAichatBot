import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (err) {
        console.log(err);
        throw new Error("cannot connect to mongoDB");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (err) {
        console.log(err);
        throw new Error("Could not disconnected from Database");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map