//intern test file
const Intern = require("../lib/Intern");

//testing code
describe('Intern', () => {
    test('creating a new intern object', () => {
        //Arrange
        const school = "DU"
        
        //Act
        const intern = new Intern('Alex', 50, 'alexito2002.ll@gmail.com', 'DU')

        //Assert
        expect(intern.school).toEqual(school)      

    })

    test('gets the role from getRole()', () => {
        const role = "Intern";

        const intern = new Intern('Alex', 50, 'alexito2002.ll@gmail.com', 'DU')

        expect(intern.getRole()).toEqual(role)
    })
})