export class Auth{

    static authIsRequire (to, from, next){
        if(!Auth.isLogin()){
            next({name: 'login'})
            return
        }else{
            next()
        }
    }

    static isLogin(){
        return localStorage.getItem("apollo-token") ? true : false
    }


}

// comment because is not use 

// export class RouteMiddleware{

//     static setPageTitle(to, from, next){
//         if(to.meta.title){
//             document.title = `YAK | ${to.meta.title}`

//         }
//         next()
//     }
// }