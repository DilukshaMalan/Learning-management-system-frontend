import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddResult.css';
const AddResultPage = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState({});

  useEffect(() => {
    // Fetch exams on component mount
    axios.get('http://localhost:8080/malan/students')
      .then(response => {
        setExams(response.data);
      })
      .catch(error => {
        console.error('Error fetching exams:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch students when selectedExam changes
    if (selectedExam) {
      axios.get('http://localhost:8080/malan/students')
        .then(response => {
          setStudents(response.data);
        })
        .catch(error => {
          console.error('Error fetching students:', error);
        });
    }
  }, [selectedExam]);

  const handleExamChange = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleMarksChange = (studentId, value) => {
    setMarks(prevMarks => ({
      ...prevMarks,
      [studentId]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare data for submission
    const marksData = {
      examId: selectedExam,
      marks: marks
    };

    // Submit the result to the server
    axios.post('http://localhost:8080/malan/students', marksData)
      .then(response => {
        console.log('Result submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting result:', error);
      });
  };

  return (
    <div className="addResult-container">
      <h1>Add Result Page</h1>
      
      <label htmlFor="examSelect">Select Exam:</label>
      <select id="examSelect" onChange={handleExamChange} value={selectedExam}>
        <option value="">Select an Exam</option>
        {exams.map(exam => (
          <option key={exam.id} value={exam.id}>{exam.name}</option>
        ))}
      </select>

      {selectedExam && (
        <div  >
          <h2>Students:</h2>
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Enter Marks</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Marks"
                      onChange={(e) => handleMarksChange(student.id, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Submit Result:</h2>
          <form onSubmit={handleSubmit}>
            <button type="submit">Submit Result</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddResultPage;
