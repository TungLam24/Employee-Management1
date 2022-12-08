class Emp {
    lastName: string
    firstName: string
    birthDate: string
    address: string
    role: string
    constructor(firstName: string, lastName: string, birthDate: string, address: string, role: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthDate = birthDate
        this.address = address
        this.role = role
    }
}
class EmpManagement {
    static emp_arr: Emp[] = []
    static add(emp: Emp): void {
        EmpManagement.emp_arr.push(emp)
    }
    static displayEmp() {
        console.table(this.emp_arr)
    }
    static seeDetails(firstName: string) {
        for (let i = 0; i < EmpManagement.emp_arr.length; i++) {
            if (EmpManagement.emp_arr[i].firstName === firstName) {
                console.log(EmpManagement.emp_arr[i])
            }
        }
    }
    static remove(firstName: string) {
        for (let i = 0; i < EmpManagement.emp_arr.length; i++) {
            if (EmpManagement.emp_arr[i].firstName === firstName) {
                EmpManagement.emp_arr.splice(i, 1)
            }
        }
    }
}
let a = new Emp("a", "b", "2000/10/24", "c", "d")

EmpManagement.add(a)
EmpManagement.displayEmp()
EmpManagement.seeDetails("a")