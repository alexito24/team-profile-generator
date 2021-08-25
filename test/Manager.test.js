//manager test file
const Manager = require("../lib/Manager");

//testing code
describe('Manager', () => {
    test('creating a new manager object', () => {
        //Arrange
        const officeNum = 2
        
        //Act
        const manager = new Manager('Alex', 50, 'alexito2002.ll@gmail.com', 2)

        //Assert
        expect(manager.office).toEqual(officeNum)      

    })

    test('gets the role from getRole()', () => {
        const role = "Manager";

        const manager = new Manager('Alex', 50, 'alexito2002.ll@gmail.com', 2)

        expect(manager.getRole()).toEqual(role)
    })
})