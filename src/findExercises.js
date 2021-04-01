import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)
//export let getStudentById = studentList.find(number => number.type === "id")
export const getStudentById = (id) => {
        return students.find(students => students.id === id)
    }
    /* let bestEmoji = arrayOfEmojisPart2.find((item, index) => {
    	console.log("what is the index", index);
    	if (item === "🐿"){
    		return true
    	}
    }); */
    // Export a function called getInstructorById
    // It should accept one integer parameter named `id`
    // It should return the instructor object with the matching ID
    // Ex: getInstructorById(1)
export const getInstructorById = (id) => {
        return instructors.find(instructors => instructors.id === id)
    }
    // Export a function called getStudentByLastName
    // It should accept one string parameter named `lastName`
    // It should return the student object whose last name matches `lastName`
    // It should NOT be case sensitive
    // Ex: getStudentByName("sMiTh")
export const getStudentByLastName = (lastName) => {
        return students.find(students => students.lastName === lastName)
    }
    // Export a function called getStudentByName
    // It should accept one string parameter named `fullName`
    // It should return the student object whose first and last name match `fullName`
    // It should NOT be case sensitive
    // Ex: getStudentByName("Summer SMITH")
export const getStudentByName = (fullName) => {
        return students.find(students => students.toUpperCase(fullName) === fullName)
    }
    // Export a function called getInstructorOfStudent
    // It should accept one integeter parameter named `studentId`
    // It should return the instructor object of the student whose id matches `studentId`
    // Ex: getInstructorOfStudent(4)      // returns Brenda Long
export const getInstructorOfStudent = (studentId) => {
        return instructors.find(instructors => instructors.id ===
            students.find(students => students.id === studentId).instructorId)
    }
    // Export a function called getStudentWithMostLangs
    // It should not accept any parameters
    // It should return the student object who knows the most programming languages
    // Ex: getStudentWithMostLangs()      // returns Rick Sanchez
    // HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate
    /* export const getStudentWithMostLangs = studentList((index) => {
        if (index === "") {
            return true
        }
    }); */ //idk abt this yet