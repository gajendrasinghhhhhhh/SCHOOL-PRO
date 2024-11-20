import { Student } from "./stdSerivice";

export class studentService{
    public getStd(){
        let std: Student[];
        std = [
            new Student(1,"Gajendra", 80, "D2226", "Male"),
            new Student(2,"Akash", 80, "D2226", "Male"),
            new Student(3,"Avnish", 80, "D2226", "Male"),
            new Student(4,"Umesh", 80, "D2226", "Male"),
            new Student(5,"ishika", 80, "D2226", "Female"),
        ]
        return std;
    }
}