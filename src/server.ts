import app from "./app";
import logger from "./config/logger";
import connectDB from "./config/db";
import { Config } from "./config/config";

const startServer = async () => {
    const PORT = Config.PORT || 5503;
    try {
        await connectDB();
        app.listen(PORT, () => {
            logger.info(`Server Started On Port : ${PORT}`);
        }).on("error", (err) => {
            logger.error(err.message);
            setTimeout(() => {
                process.exit(1);
            }, 1000);
        });
    } catch (err) {
        logger.error("Error happened: ", (err as Error).message);
        process.exit(1);
    }
};

void startServer();

