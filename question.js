class Student{
    static i=0;
    constructor(name,age,phone,mark){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.mark = mark;
        (Student.i)++;
    }

    checkEligible(){
        return this.mark >= 40 ? "Eligible" : "not Eligible";
    }

    incrementCount(){
        return Student.i;
    }
}


const student1  = new Student("Sumit",22,823,35);
const student2  = new Student("Sumit",22,823,35);
const student3 = new Student("Sumit",22,823,35);
const student4 = new Student("Sumit",22,823,35);

console.log(student1.checkEligible());
console.log(student1.incrementCount())