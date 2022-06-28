const EMPLOYEE_ONE = {
    code: 10,
    name: 'John'
}

const EMPLOYEE_TWO: {code: number, name: String} = {
    code: 10,
    name: 'John'
}


// Interfaces

interface IEmployee {
    code: number,
    name: String
}

const EMPLOYEE_THREE: IEmployee = {
    code: 10,
    name: 'John'
}

const EMPLOYEE_FOUR = {} as IEmployee;

EMPLOYEE_FOUR.code = 10;
EMPLOYEE_FOUR.name = 'John'

