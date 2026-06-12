import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoutes.js';
import "dotenv/config"
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoutes.js';


//app config
const app = express();
const port = process.env.PORT || 8000;


//middlewares
app.use(express.json());
app.use(cors());



//db connection
connectDB();

//api endpoints
app.use('/api/food', foodRouter);

// serve uploaded images under /images
app.use("/images", express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

//
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//mongodb+srv://<db_username>:<db_password>@cluster1.ja3as6f.mongodb.net/?appName=Cluster1