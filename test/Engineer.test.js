//engineer test file
const Engineer = require("../lib/Engineer")

//testing code
describe('Engineer', () => {
    test('creating a new engineer object', () => {
        //Arrange
        const github = "alexito24"
        
        //Act
        const engineer = new Engineer('Alex', 50, 'alexito2002.ll@gmail.com', 'alexito24')

        //Assert
        expect(engineer.gitHub).toEqual(github)      

    })

    test('gets the role from getRole()', () => {
        const role = "Engineer";

        const engineer = new Engineer('Alex', 50, 'alexito2002.ll@gmail.com', 'alexito24')

        expect(engineer.getRole()).toEqual(role)
    })
})