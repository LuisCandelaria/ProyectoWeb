function validate() {
    let url = "/user/validate-user";
    let settings = {
        method : 'GET',
        headers : {
            sessiontoken : localStorage.getItem( 'token' )
        }
    };

    fetch( url, settings )
        .then( response => {
            if( response.ok ) {
                return response.json();
            }
            throw new Error( response.statusText ); 
        })
        .then( responseJSON => {
            userEmail( responseJSON );
        })
        .catch( err => {
            console.log( err.message );
        });
}

function userEmail( data ) {
    console.log( data );
    let superuser = data.superuser;
    let fName = data.fName;
    let lName = data.lName;

    if(superuser) {
        console.log("si es super usuario");
    }
    else {
        console.log("no es super usuario");
    }
}

function init() {
    validate();
}

init();