import UserCard from "@/app/ui/UserCard"

export default function UserGrid(){
  // const users = await ...
  const users = [
    {
      id: 1,
      name: 'Алексей Романов',
      age: '19',
      phone: '+7 (918) 078-17-05',
      email: 'magmafellow@gmail.com'
    },
    {
      id: 2,
      name: 'Алексей Романов',
      age: '19',
      phone: '+7 (918) 078-17-05',
      email: 'magmafellow@gmail.com'
    },
    {
      id: 3,
      name: 'Алексей Романов',
      age: '19',
      phone: '+7 (918) 078-17-05',
      email: 'magmafellow@gmail.com'
    },
    {
      id: 4,
      name: 'Алексей Романов',
      age: '19',
      phone: '+7 (918) 078-17-05',
      email: 'magmafellow@gmail.com'
    },
    {
      id: 5,
      name: 'Алексей Романов',
      age: '19',
      phone: '+7 (918) 078-17-05',
      email: 'magmafellow@gmail.com'
    },
    {
      id: 6,
      name: 'Алексей Романов',
      age: '19',
      phone: '+7 (918) 078-17-05',
      email: 'magmafellow@gmail.com'
    },
    {
      id: 7,
      name: 'Алексей Романов',
      age: '19',
      phone: '+7 (918) 078-17-05',
      email: 'magmafellow@gmail.com'
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-6">
      {users.map((user, index) => <UserCard key={index} userObj={user}/>)}
    </div>
  )
}
