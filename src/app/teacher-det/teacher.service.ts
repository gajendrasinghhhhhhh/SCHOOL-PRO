import { TeacherDet } from "./teachdetService";

export class Teacher{
    public getTeach(){
        let teach: TeacherDet[];
        teach = [
                new TeacherDet(2, "sahil rampal", "Python", "LPU"),
                new TeacherDet(2, "Robin soni", "analytics", "LPU"),
                new TeacherDet(2, "Neha mam", "ionic", "LPU"),
                new TeacherDet(2, "Ashutosh ", "Python", "LPU"),
                new TeacherDet(2, "satwinder kaur", "data science", "LPU"),
                new TeacherDet(2, "harpreet singh", "Python", "LPU"),
                new TeacherDet(2, "ramandeep kaur", "bootstrap", "LPU"),
                new TeacherDet(2, "ruchi mam", "maths", "LPU"),
                new TeacherDet(2, "arohi mam", "soft skill", "LPU")
        ]
        return teach;
    }
}