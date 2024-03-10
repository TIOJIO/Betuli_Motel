
import React, { useState, useEffect } from 'react';

const CrudApp = () => {
  
  // Initialisation des données
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  // Fonction pour ajouter un étudiant
  const handleAdd = () => {
    const newStudent = { name, surname, age };
    setStudents([...students, newStudent]);
    localStorage.setItem('students', JSON.stringify([...students, newStudent]));
    setName('');
    setSurname('');
    setAge('');
  }

  // Fonction pour modifier un étudiant
  const handleUpdate = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].name = name;
    updatedStudents[index].surname = surname;
    updatedStudents[index].age = age;
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setName('');
    setSurname('');
    setAge('');
  }

  // Fonction pour supprimer un étudiant
  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  }

  // Fonction pour remplir le formulaire pour la modification
  const handleEdit = (index) => {
    setName(students[index].name);
    setSurname(students[index].surname);
    setAge(students[index].age);
  }

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  return (
    <div>
      <h1>Gestion des étudiants</h1>
      <form>
        <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Prénom" value={surname} onChange={(e) => setSurname(e.target.value)} />
        <input type="text" placeholder="Âge" value={age} onChange={(e) => setAge(e.target.value)} />
      </form>
      <button onClick={handleAdd}>Ajouter</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} {student.surname}, {student.age} ans 
            <button onClick={() => handleEdit(index)}>Modifier</button>
            <button onClick={() => handleDelete(index)}>Supprimer</button>
            <button onClick={() => handleUpdate(index)}>valider</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
