fullinfo={
    firstname:'cha',
    lastname:'chu',
    age:40,
    city:'adiss ababa',
    phonenumber:+251911223344,
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(fullinfo.getFullName());

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ]}

    let arr1=person.skills;
    longestcharacter=0;
    longestword='';
    for (let i=0;i<arr1.length;i++){
        if (arr1[i].length>longestcharacter){
            longestcharacter=arr1[i].length;
            longestword=arr1[i];
        }
    }


    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Redux','MongoDB', 'Express', 'React', 'Node'],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      } 

      let SkilledUser = '';
      let maxSkills = 0;
  
      for (const user in users) {
          if (users[user].skills.length > maxSkills) {
              maxSkills = users[user].skills.length;
              SkilledUser = user;
          }
      }

      for (const user in users){
        if (user.skills='MongoDB', 'Express', 'React', 'Node'){
          skillls=users[user].skills;
          merndev=user;
        }

        for (const user in users){
          if(user.age<30){
            console.log(user)}
        }
        
        }
console.log(merndev)
       
  
      console.log(merndev);
 


