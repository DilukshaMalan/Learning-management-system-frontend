import React, { useState, useEffect } from 'react';
import './AssignUsernamePage.css';

const AssignUsernamePage = () => {
    const [students, setStudents] = useState([]);
    const [assignedUsername, setAssignedUsername] = useState('');

    useEffect(() => {
        fetchNullUsernameStudents();
    }, []);

    const fetchNullUsernameStudents = async () => {
        try {
            const response = await fetch('http://localhost:8080/malan/nullstudents');
            if (response.ok) {
                const data = await response.json();
                setStudents(data);
            } else {
                console.error('Failed to fetch null username students');
            }
        } catch (error) {
            console.error('Failed to fetch null username students:', error);
        }
    };

    const handleAssignUsername = async (studentId) => {
        try {
            const response = await fetch(`http://localhost:8080/malan/students/${studentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: assignedUsername })
            });
            if (response.ok) {
                console.log(`Assigned username ${assignedUsername} to student with ID ${studentId}`);
                // Update state to reflect the change
                setStudents(students.filter(student => student.id !== studentId));
                // Clear the input field
                setAssignedUsername('');
            } else {
                console.error('Failed to assign username');
            }
        } catch (error) {
            console.error('Failed to assign username:', error);
        }
    };

    return (
        <div className="assign-username-container">
            <h2>Assign Usernames to Students with Null Usernames</h2>
            <div className="students-list">
                {students.map(student => (
                    <div key={student.id} className="student-item">
                        <div>Student ID: {student.id}</div>
                        <div>Student Name: {student.name}</div>
                        <div>
                            <label>Assign Username: </label>
                            <input type="text" value={assignedUsername} onChange={(e) => setAssignedUsername(e.target.value)} />
                            <button onClick={() => handleAssignUsername(student.id)}>Assign</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssignUsernamePage;
