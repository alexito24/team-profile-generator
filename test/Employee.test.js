//employee test file
const Employee = require("../lib/Employee");

//testing code
describe('Employee', () => {
    test('creating a new employee object', () => {
        //Arrange
        const text1 = "alex"
        const num = 50
        const text2 = "alexito2002.ll@gmail.com"
        //Act
        const employee = new Employee('alex', 50, 'alexito2002.ll@gmail.com')

        //Assert
        expect(employee.name).toEqual(text1)
        expect(employee.id).toEqual(num)
        expect(employee.email).toEqual(text2)        

    })

    test('gets the role from getRole()', () => {
        const role = "Employee";

        const employee = new Employee('Alex', 50, 'alexito2002.ll@gmail.com')

        expect(employee.getRole()).toEqual(role)
    })
})