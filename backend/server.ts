import dotenv from 'dotenv';
dotenv.config();

import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors';
import './utils/db';
import mainRoute from './routes';
import userRouter from './routes/userRouter';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.use("/api/products", mainRoute);
app.use("/api/users", userRouter);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
app.listen(PORT, () => {
 console.log(`Server runned port:${PORT}`);
});


