export default class HolbertonCourse {
    constructor(name, length, students) {
        // name Attribute
        if (typeof name !== 'string') {
            throw TypeError("Name must be a string");
        }
        else {
            this._name = (name);
        }
        // length Attribute
        if (typeof length !== 'number') {
            throw TypeError("Length must be a number");
        }
        else {
            this._length = (length);
        }

        // students Attribute
        if (!Array.isArray(students)) {
            throw TypeError("Students must be an array");
        }
        else {
            students.forEach((item) => {
                if (typeof item !== 'string') {
                    throw TypeError('Array Elements must be string');
                }
            });
            this._students = students;
        }

    }

    // Getters
    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }
    // Setters
    set name(newName) {
        this._name = newName;
    }

    set length(newLength) {
        this._length = newLength;
    }

    set students(newStudents) {
        this._students = newStudents;
    }
}
