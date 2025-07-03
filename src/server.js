import app from './app.js';
import { initDatabaseConnection } from './db.js';

const PORT = 8080;

const bootstrap = async () => {
  await initDatabaseConnection();

  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Server started on port ${PORT}`);
  });
};

bootstrap();
