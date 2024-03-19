

const students = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "123-456-7890",
        score: 85,
        gender: "Male",
        state: "California",
        national: "USA"
    },
    {
        firstName: "Alice",
        lastName: "Smith",
        email: "alice.smith@example.com",
        phoneNumber: "987-654-3210",
        score: 92,
        gender: "Female",
        state: "New York",
        national: "USA"
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob.johnson@example.com",
        phoneNumber: "555-123-4567",
        score: 78,
        gender: "Male",
        state: "Texas",
        national: "USA"
    },
    {
        firstName: "Emma",
        lastName: "Brown",
        email: "emma.brown@example.com",
        phoneNumber: "456-789-0123",
        score: 88,
        gender: "Female",
        state: "Florida",
        national: "USA"
    },
    {
        firstName: "Michael",
        lastName: "Wilson",
        email: "michael.wilson@example.com",
        phoneNumber: "222-333-4444",
        score: 95,
        gender: "Male",
        state: "Ohio",
        national: "USA"
    },
    {
        firstName: "Sophia",
        lastName: "Lee",
        email: "sophia.lee@example.com",
        phoneNumber: "777-888-9999",
        score: 82,
        gender: "Female",
        state: "Illinois",
        national: "USA"
    },
    {
        firstName: "David",
        lastName: "Martinez",
        email: "david.martinez@example.com",
        phoneNumber: "333-222-1111",
        score: 70,
        gender: "Male",
        state: "Arizona",
        national: "USA"
    },
    {
        firstName: "Olivia",
        lastName: "Garcia",
        email: "olivia.garcia@example.com",
        phoneNumber: "999-888-7777",
        score: 89,
        gender: "Female",
        state: "Washington",
        national: "USA"
    },
    {
        firstName: "William",
        lastName: "Jones",
        email: "william.jones@example.com",
        phoneNumber: "444-555-6666",
        score: 75,
        gender: "Male",
        state: "Georgia",
        national: "USA"
    },
    {
        firstName: "Ava",
        lastName: "Taylor",
        email: "ava.taylor@example.com",
        phoneNumber: "666-555-4444",
        score: 93,
        gender: "Female",
        state: "Michigan",
        national: "USA"
    },
    {
        firstName: "James",
        lastName: "Brown",
        email: "james.brown@example.com",
        phoneNumber: "111-222-3333",
        score: 84,
        gender: "Male",
        state: "Virginia",
        national: "USA"
    },
    {
        firstName: "Emily",
        lastName: "Rodriguez",
        email: "emily.rodriguez@example.com",
        phoneNumber: "333-444-5555",
        score: 80,
        gender: "Female",
        state: "North Carolina",
        national: "USA"
    },
    {
        firstName: "Daniel",
        lastName: "Gonzalez",
        email: "daniel.gonzalez@example.com",
        phoneNumber: "777-999-1111",
        score: 91,
        gender: "Male",
        state: "Pennsylvania",
        national: "USA"
    },
    {
        firstName: "Isabella",
        lastName: "Lopez",
        email: "isabella.lopez@example.com",
        phoneNumber: "888-777-6666",
        score: 87,
        gender: "Female",
        state: "Massachusetts",
        national: "USA"
    },
    {
        firstName: "Benjamin",
        lastName: "Hernandez",
        email: "benjamin.hernandez@example.com",
        phoneNumber: "123-456-7890",
        score: 79,
        gender: "Male",
        state: "New Jersey",
        national: "USA"
    },
    {
        firstName: "Mia",
        lastName: "Martinez",
        email: "mia.martinez@example.com",
        phoneNumber: "456-789-0123",
        score: 90,
        gender: "Female",
        state: "Colorado",
        national: "USA"
    },
    {
        firstName: "Ethan",
        lastName: "Young",
        email: "ethan.young@example.com",
        phoneNumber: "987-654-3210",
        score: 86,
        gender: "Male",
        state: "Tennessee",
        national: "USA"
    },
    {
        firstName: "Charlotte",
        lastName: "Adams",
        email: "charlotte.adams@example.com",
        phoneNumber: "555-123-4567",
        score: 94,
        gender: "Female",
        state: "Maryland",
        national: "USA"
    },
    {
        firstName: "Alexander",
        lastName: "Nelson",
        email: "alexander.nelson@example.com",
        phoneNumber: "222-333-4444",
        score: 83,
        gender: "Male",
        state: "Minnesota",
        national: "USA"
    },
    {
        firstName: "Amelia",
        lastName: "Thomas",
        email: "amelia.thomas@example.com",
        phoneNumber: "777-888-9999",
        score: 77,
        gender: "Female",
        state: "Oregon",
        national: "USA"
    }
];


//students.forEach((pick)=>{
  //  console.log(pick.firstName,pick.lastName)

//}) 


//const filteredArray = students.filter((each,i)=>{
  //  return each.score >= 90
//})

//console.log(filteredArray)


//const mapArray = students.map((each,i)=>{
  //  return each.firstName == "Mia"
//})


//console.log(mapArray)


//const plan = students.filter((each,i)=>{
   // return each.gender == "Male"
//})

//console.log(plan)


//const have = students.filter((each,i)=>{
   // return each.gender == "Female"
//})

//console.log(have)


const add = students.filter((each, i)=>{
    return each.score < 90 
})
 .map((each)=>{
  each.score += 10
  return each
    
 })

console.log(add)

  


    
 