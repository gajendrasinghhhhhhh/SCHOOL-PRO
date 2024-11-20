export class TeacherDet{
    teacherID: number;
    teacherName: string;
    teacherSubject: string;
    teacherClg: string;
    constructor(teacherID: number, teacherName: string, teacherSubject: string, teacherClg: string){
        this.teacherID = teacherID;
        this.teacherName = teacherName;
        this.teacherSubject = teacherSubject;
        this.teacherClg = teacherClg;
    }
}