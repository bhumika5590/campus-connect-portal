from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Temporary list to store our data
students = []

# Pydantic model to secure data inputs
class StudentCreate(BaseModel):
    name: str
    email: str
    age: int

# --- 1. GET (Retrieve all students) ---
@app.get('/students')
def get_students():
    return students

# --- 2. POST (Create a new student) ---
@app.post('/students', status_code=status.HTTP_201_CREATED)
def add_student(student: StudentCreate):
    new_record = student.model_dump()
    new_record['id'] = len(students) + 1
    students.append(new_record)
    return new_record

# --- 3. PUT (Update an existing student) ---
@app.put('/students/{student_id}')
def update_student(student_id: int, updated_student: StudentCreate):
    for index, student in enumerate(students):
        if student['id'] == student_id:
            # Convert validated data to dictionary and keep the same ID
            new_record = updated_student.model_dump()
            new_record['id'] = student_id
            
            # Replace the old record with the new one
            students[index] = new_record
            return new_record
            
    # Trigger an error if the ID doesn't exist
    raise HTTPException(status_code=404, detail="Student not found")

# --- 4. DELETE (Remove a student) ---
@app.delete('/students/{student_id}')
def delete_student(student_id: int):
    for index, student in enumerate(students):
        if student['id'] == student_id:
            # Remove the student from the list
            del students[index]
            return {"message": f"Student with ID {student_id} successfully deleted"}
            
    # Trigger an error if the ID doesn't exist
    raise HTTPException(status_code=404, detail="Student not found")