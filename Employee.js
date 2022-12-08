var Emp = /** @class */ (function () {
    function Emp(firstName, lastName, birthDate, address, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
        this.role = role;
    }
    return Emp;
}());
var EmpManagement = /** @class */ (function () {
    function EmpManagement() {
    }
    EmpManagement.add = function (emp) {
        EmpManagement.emp_arr.push(emp);
    };
    EmpManagement.displayEmp = function () {
        console.table(this.emp_arr);
    };
    EmpManagement.seeDetails = function (firstName) {
        for (var i = 0; i < EmpManagement.emp_arr.length; i++) {
            if (EmpManagement.emp_arr[i].firstName === firstName) {
                console.log(EmpManagement.emp_arr[i]);
            }
        }
    };
    EmpManagement.remove = function (firstName) {
        for (var i = 0; i < EmpManagement.emp_arr.length; i++) {
            if (EmpManagement.emp_arr[i].firstName === firstName) {
                EmpManagement.emp_arr.splice(i, 1);
            }
        }
    };
    EmpManagement.update = function (firstName) {
    };
    EmpManagement.emp_arr = [];
    return EmpManagement;
}());
var a = new Emp("a", "b", "2000/10/24", "c", "d");
EmpManagement.add(a);
EmpManagement.remove("a");
EmpManagement.displayEmp();
