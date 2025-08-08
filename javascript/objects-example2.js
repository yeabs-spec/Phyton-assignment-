const students = {
    Sarah: {
      email: 'sarah@student.com',
      studentID: 'STU1001',
      courses: ['Math', 'Biology', 'Chemistry'],
      age: 19,
      isEnrolled: true,
      creditsEarned: 18,
      GPA: 3.4,
      attendanceRate: 92,
      graduationYear: 2026,
      hasScholarship: true,
      clubMemberships: ['Science Club', 'Debate Team']
    },
    Michael: {
      email: 'michael@student.com',
      studentID: 'STU1002',
      courses: ['Physics', 'Math', 'Computer Science'],
      age: 21,
      isEnrolled: true,
      creditsEarned: 24,
      GPA: 3.8,
      attendanceRate: 88,
      graduationYear: 2025,
      hasScholarship: false,
      clubMemberships: ['Coding Club', 'Robotics Club']
    },
    Emily: {
      email: 'emily@student.com',
      studentID: 'STU1003',
      courses: ['Literature', 'History', 'Philosophy'],
      age: 22,
      isEnrolled: false,
      creditsEarned: 30,
      GPA: 3.6,
      attendanceRate: 85,
      graduationYear: 2024,
      hasScholarship: false,
      clubMemberships: ['Literary Society']
    },
    David: {
      email: 'david@student.com',
      studentID: 'STU1004',
      courses: ['Economics', 'Statistics', 'Finance'],
      age: 23,
      isEnrolled: true,
      creditsEarned: 27,
      GPA: 3.7,
      attendanceRate: 91,
      graduationYear: 2024,
      hasScholarship: true,
      clubMemberships: ['Finance Club', 'Chess Club']
    },
    Anna: {
      email: 'anna@student.com',
      studentID: 'STU1005',
      courses: ['Psychology', 'Sociology', 'Anthropology'],
      age: 20,
      isEnrolled: false,
      creditsEarned: 21,
      GPA: 3.2,
      attendanceRate: 79,
      graduationYear: 2025,
      hasScholarship: false,
      clubMemberships: []
    },
    Chris: {
      email: 'chris@student.com',
      studentID: 'STU1006',
      courses: ['Math', 'Computer Science', 'Art'],
      age: 18,
      isEnrolled: true,
      creditsEarned: 15,
      GPA: 3.9,
      attendanceRate: 97,
      graduationYear: 2027,
      hasScholarship: true,
      clubMemberships: ['Coding Club', 'Art Society']
    },
    Lisa: {
      email: 'lisa@student.com',
      studentID: 'STU1007',
      courses: ['Biology', 'Chemistry', 'Physics'],
      age: 21,
      isEnrolled: true,
      creditsEarned: 28,
      GPA: 3.5,
      attendanceRate: 93,
      graduationYear: 2025,
      hasScholarship: true,
      clubMemberships: ['Science Club']
    },
    Brian: {
      email: 'brian@student.com',
      studentID: 'STU1008',
      courses: ['Business', 'Finance', 'Accounting'],
      age: 24,
      isEnrolled: true,
      creditsEarned: 32,
      GPA: 3.6,
      attendanceRate: 90,
      graduationYear: 2024,
      hasScholarship: false,
      clubMemberships: ['Business Club']
    },
    Olivia: {
      email: 'olivia@student.com',
      studentID: 'STU1009',
      courses: ['Design', 'Photography', 'Art'],
      age: 22,
      isEnrolled: false,
      creditsEarned: 20,
      GPA: 3.3,
      attendanceRate: 76,
      graduationYear: 2024,
      hasScholarship: false,
      clubMemberships: ['Art Society', 'Photography Club']
    },
    James: {
      email: 'james@student.com',
      studentID: 'STU1010',
      courses: ['Math', 'Statistics', 'Physics'],
      age: 20,
      isEnrolled: true,
      creditsEarned: 25,
      GPA: 3.4,
      attendanceRate: 87,
      graduationYear: 2025,
      hasScholarship: true,
      clubMemberships: ['Math Club']
    }
 }


  for(student of Object.keys(students)){
   let grade  = students[student].GPA
   let hasStudentScholarship = students[student].hasScholarship

   if(grade > 3.4 && hasStudentScholarship == true){ 
    console.log(student)
   }
  }