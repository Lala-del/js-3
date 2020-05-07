let createNewUser = (name,surname)=>{
    return{
        firstName:name,
        lastName:surname,
        getLogin:function () {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase()
        },
         setFirstName (value){
            this.firstName=value;
         },
         setLastName(value){
            this.lastName=value;
         }

    };

        return newUser;
};

const newUser=createNewUser("Ivan",'Kravchenko');
newUser.setFirstName('Lala');
newUser.setLastName('Huseynova');
console.log(newUser);
console.log(newUser.getLogin());


