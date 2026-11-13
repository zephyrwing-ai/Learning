function detectType(val: number | string ) {
    if(typeof val ==="string"){
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide an ID");
        return;
    }
    return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
    if(strs) {
        if(Array.isArray(strs)) {
            for(const str of strs) {
                console.log(str);
            }
        } else {
            console.log(strs);
        }
    }
}

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    role: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}