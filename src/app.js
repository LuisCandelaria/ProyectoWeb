const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();

// connection to  db
mongoose.connect('mongodb://localhost/db-fimsa')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));


// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//routes
app.use('/', indexRoutes);
app.use(express.static(path.join(__dirname, 'public')));

//login / register
/*
app.get( '/user/validate-user' , ( req, res ) => {
    const { sessiontoken } = req.headers;

    jsonwebtoken.verify( sessiontoken, SECRET_TOKEN, ( err, decoded ) => {
        if( err ) {
            res.statusMessage = "Session expired";
            return res.status( 400 ).end();
        }

        return res.status( 200 ).json( decoded );
    });
});

app.post( '/users/login', jsonParser, ( req, res ) => {
    let { email, password } = req.body;

    if( !email || !password ){
        res.statusMessage = "Parameter missing in the body of the request.";
        return res.status( 406 ).end();
    }

    Users
        .getUserByEmail( email )
        .then( user => {
            if( user ){
                bcrypt.compare( password, user.password )
                    .then( result => {
                        if( result ){
                            let userData = {
                                fName : user.fName,
                                lName : user.lName,
                                email : user.email
                            };

                            jsonwebtoken.sign( userData, SECRET_TOKEN, { expiresIn : '25m' }, ( err, token ) => {
                                if( err ){
                                    res.statusMessage = "Something went wrong with generating the token.";
                                    return res.status( 400 ).end();
                                }
                                return res.status( 200 ).json( { token } );
                            });

                        }
                        else{
                            throw new Error( "Invalid credentials" );
                        }
                    })
                    .catch( err => {
                        res.statusMessage = err.message;
                        return res.status( 400 ).end();
                    });
            }
            else{
                throw new Error( "User doesn't exists!" );
            }
        })
        .catch( err => {
            res.statusMessage = err.message;
            return res.status( 400 ).end();
        });
});

app.post( '/users/register', jsonParser, ( req, res ) => {
    let {fName, lName, email, password} = req.body;

    if( !fName || !lName || !email || !password ){
        res.statusMessage = "Parameter missing in the body of the request.";
        return res.status( 406 ).end();
    }

    let flag = false;

    Users.getUserByEmail( email )
    .then( user => {
        if( user ) {
            flag = true;
            throw new Error("The user already exists.");
        }
        else {
            console.log( "The user is new." );
        }
    })
    .catch( err => {
        res.statusMessage = err.message;
        return res.status( 400 ).end();
    })

    if( !flag ) {
        bcrypt.hash( password, 10 )
            .then( hashedPassword => {
                let newUser = { 
                    fName, 
                    lName, 
                    password : hashedPassword, 
                    email 
                };

                Users
                    .createUser( newUser )
                    .then( result => {
                        return res.status( 201 ).json( result ); 
                    })
                    .catch( err => {
                        res.statusMessage = err.message;
                        return res.status( 400 ).end();
                    });
            })
            .catch( err => {
                res.statusMessage = err.message;
                return res.status( 400 ).end();
            });
    }
    else {
        res.statusMessage = "That user already exists.";
        return res.status( 406 ).end();
    }
});*/

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})