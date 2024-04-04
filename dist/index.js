import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections Ans listeneres
const port = process.env.PORT || 5050;
connectToDatabase()
    .then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map