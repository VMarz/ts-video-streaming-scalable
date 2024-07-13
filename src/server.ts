import { server } from './app';
import { PORT } from './config';

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
