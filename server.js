const express = require('express')
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/auth')
dotenv.config({path: './config.env'}); 
let database = require('./database/db');

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect(database.db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Datasbase connected sucessfully !')
// },  
//     error => {
//         console.log('Database could not be connected : ' + error)
//     }
// )

const DB = "mongodb://hareram:hareram@cluster0-shard-00-00.4fkm5.mongodb.net:27017,cluster0-shard-00-01.4fkm5.mongodb.net:27017,cluster0-shard-00-02.4fkm5.mongodb.net:27017/simpe_ecom?ssl=true&replicaSet=atlas-z2dddi-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(DB , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  }).then(() => {
    console.log("Connection Successfull");
  }).catch((err) =>console.log(err));

app.use(bodyParser.json());

 app.use(cookieParser(process.env.SECRET_KEY));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({origin:true, credentials:true}));

app.use(express.json())

app.use("/register" , userRoute)

app.get('/contact' , (req , res ) => {
    res.cookie("shashank" , 'sushant')
    res.send("hello from contact")
})


const port = process.env.PORT || 4000;


if(process.env.NODE_ENV == "production"){
  app.use(express.static("client/build"))
}

app.listen(port, () => {
    console.log('Connected to port ' + port)
})