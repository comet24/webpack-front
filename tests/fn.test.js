import fn from "./../src/js/fn";

describe("test function : ", ()=>{
    test("  should be defined",()=>{
        expect(fn).toBeDefined();
    })

    test("should be have value(not undefined)",()=>{
        expect(fn(10,10)).toBeDefined();

    })

    test("should be have value( Number)",()=>{
        expect(fn(10,10)).toEqual(expect.any(Number));

    })

    test("should be have value(Number)",()=>{
        expect(fn(10,"asd")).toEqual(expect.any(Number));

    })


})


