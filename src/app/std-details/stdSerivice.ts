export class Student{
    studentID: number;
    stdName: string;
    stdMarks: number;
    stdSection: string;
    stdsex: string;
    constructor(studentID:number, stdName:string, stdMarks: number, stdSection: string, stdsex: string){
        this.studentID = studentID;
        this.stdName = stdName;
        this.stdMarks = stdMarks;
        this.stdSection = stdSection;
        this.stdsex = stdsex;
    }
}