class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `
        ID: ${this.id}
        Name: ${this.name}
        Salary: ${this.salary}
        `;
    }
}

class FrontendEngineer extends Employee {
    constructor(id, name, salary, favoriteFramework) {
        super(id, name, salary);

        this.favoriteFramework = favoriteFramework;
    }

    developWebsite() {
        return `${this.name} is developing a website using ${this.favoriteFramework}`;
    }
}

class BackendEngineer extends Employee {
    constructor(id, name, salary, language) {
        super(id, name, salary);

        this.language = language;
    }

    buildAPI() {
        return `${this.name} is building an API using ${this.language}`;
    }
}

class Manager extends Employee {
    constructor(id, name, salary, department) {
        super(id, name, salary);

        this.department = department;
    }

    assignTask(employee, task) {
        return `${this.name} from the ${this.department} department assigned "${task}" to ${employee.name}.`;
    }
}

// Instantiate instances of the subclasses
const frontendDev = new FrontendEngineer(1, "Bruce Wayne", 65000, "React");
const backendDev = new BackendEngineer(2, "Napoleon Dynamite", 90000, "C#");
const manager = new Manager(3, "Miles Morales", 110000, "Engineering");

// Console each instance using getDetails method
console.log(frontendDev.getDetails());
console.log(backendDev.getDetails());
console.log(manager.getDetails());

// Test the Specific Methods of Each Subclass
console.log(frontendDev.developWebsite());
console.log(backendDev.buildAPI());
console.log(manager.assignTask(frontendDev, "build a new login page"));