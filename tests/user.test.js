import Axios from "axios";
import User from "./../src/js/components/user/";
jest.mock("axios");

describe("UserInterface class : " , ()=>{
    let user;
    let fn
    let array=[];
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
         user = new User();
         array = [1,3,4];
         fn = jest.fn((x)=>x**2);

    });


    test("should be defined",()=>{
        expect(user).not.toBeUndefined()
    })

    test(" getUser should be defined",()=>{
        expect(user.getUser).toBeDefined()
    })

    test(" getUser should be return string type value",()=>{
        expect(user.getUser()).toEqual(expect.any(String));
    })

    test(" getUserList should be defined",()=>{
        expect(user.getUserList).not.toBeUndefined();
    })

    test(" filter should be run callback",()=>{
        user.filter(array,fn);
        expect(fn).toBeCalled();
        expect(fn.mock.results[0].value).toEqual(1);
        expect(fn.mock.results[1].value).toEqual(9);
        expect(fn.mock.results[2].value).toEqual(16);
    })

    test(" filter should be defined and return array",()=>{
        expect(user.filter).not.toBeUndefined();
        expect(user.filter(array,fn)).toEqual(expect.any(Array));
    })

})

describe("UserInterface class ajax call methods: " , ()=>{

    let response;
    let users;
    let user;

    beforeEach(()=>{
        user = new User();
        users = [
            {
                id:1,
                user:"Ivan"
            }
        ]

        response ={
            data :{
                users
            }
        }
    })

    test("call get users", ()=>{
        Axios.get.mockReturnValue(response);

        return user.getUserList().then(data=>{
            expect(data.users).toEqual(users)
        })
    })
})
