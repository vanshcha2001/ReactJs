 import conf from "../conf/conf";
//  refer appwrite docs
 import { Client, Account, ID } from "appwrite";

 export class AuthService{
    // create a client jisko login krna hai
    client=new Client();
    // fir vo client ki value account m daal dnge
    account;

    constructor(){
        this.client
            .setEndpoint(conf. appwriteUrl)
            .setEndpoint(conf. appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
            return await this.account.create(email,password)
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error)
        }
        return null;
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
        }
    }

 }

 const authService = new AuthService;

 export default authService