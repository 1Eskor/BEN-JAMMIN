CREATE TABLE Classes
(
  Id data_type INTEGER,
    code data_type TEXT,
  Name data_type TEXT,
  Teacher Id data_type INTEGER,
  startDate data_type TEXT,
  endDate data_type TEXT)

CREATE TABLE Students
(
    Id data_type INTEGER,
    Firstname data_type TEXT,
    Lastname data_type TEXT)

CREATE TABLE Teachers
(
    Id data_type INTEGER,
    Firstname data_type TEXT,
    Lastname data_type TEXT)

CREATE TABLE Student_Classes
(
    class_id data_type INTEGER,
    student_id data_type INTEGER)