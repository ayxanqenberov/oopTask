class Employer {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    details() {
        console.log(this.name);
        console.log(this.position);
    }
    interestSalary(percent) {
        let interest = percent + 100;
        return this.salary * interest / 100;
    }
    static comparisonSalary() {
        if (employer1.salary - employer2.salary > 0) {
            console.log(`${employer1.name} : ${employer1.salary}$ > ${employer2.name} : ${employer2.salary}$`);
        } else {
            console.log(`${employer2.name} : ${employer2.salary}$ > ${employer1.name} : ${employer1.salary}$`);
        }
    }
}
const employer1 = new Employer("John", "worker", 300);
const employer2 = new Employer("Jack", "worker", 450);
console.log(employer1, employer2);
console.log(employer1.interestSalary(100));
Employer.comparisonSalary();

class Manager extends Employer {
    constructor(name, position, salary) {
        super(name, position, salary)
    }
    detail() {
        console.log("eks olunan melumatlar asagidakilardir");
        console.log(`name : ${this.name}`);
        console.log(`position : ${this.position}`);
        console.log(`salary : ${this.salary}$`);
    }
}
const manager = new Manager("Bob", "Manager", 500)
console.log(manager);
manager.detail()

class AdministrativeStaff extends Employer {
    constructor(name, position, salary) {
        super(name, position, salary)
    }
    detail() {
        console.log("eks olunan melumatlar asagidakilardir");
        console.log(`name : ${this.name}`);
        console.log(`position : ${this.position}`);
        console.log(`salary : ${this.salary}$`);
    }
}
const administrative = new AdministrativeStaff("Theo", "Administrative", 1500)
console.log(administrative);
administrative.detail()

class Company {
    constructor(name) {
        this.name = name
        this.listofWorkers = []
    }
    workers(workersName) {
        this.listofWorkers.push(workersName.name)
    }
    results() {
        return this.listofWorkers;
    }

}
let company = new Company()
company.workers(employer1);
company.workers(employer2);
company.workers(manager);
company.workers(administrative)
console.log(company.results());


class CompanyStatics {
    constructor(salary) {
        this.salary = salary;
        this.lisofWorkersSalary = []
    }
    infoWorkers(workers) {
        this.lisofWorkersSalary.push(workers.salary)
    }
    result() {
        let adding = this.lisofWorkersSalary.reduce((a, b) => a + b, 0);
        return adding;
    }

    mostSalary() {
        return Math.max(this.lisofWorkersSalary); 
    }
}
const static = new CompanyStatics();
static.infoWorkers(employer1)
static.infoWorkers(employer2);
static.infoWorkers(manager);
static.infoWorkers(administrative)
console.log("sirketin toplam verdiyi maas :", static.result());
console.log(static.mostSalary());

