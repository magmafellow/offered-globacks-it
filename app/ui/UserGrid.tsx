import UserCard from "@/app/ui/UserCard"

export default function UserGrid(){
  // const users = await ...
  const users = [
    {
      name: 'alex',
      age: '19',
      email: 'magmafellow@gmail.com'
    },
    {
      name: 'alex',
      age: '19',
      email: 'magmafellow@gmail.com'
    },
    {
      name: 'alex',
      age: '19',
      email: 'magmafellow@gmail.com'
    },
    {
      name: 'alex',
      age: '19',
      email: 'magmafellow@gmail.com'
    },
    {
      name: 'alex',
      age: '19',
      email: 'magmafellow@gmail.com'
    },
    {
      name: 'alex',
      age: '19',
      email: 'magmafellow@gmail.com'
    },
    {
      name: 'alex',
      age: '19',
      email: 'magmafellow@gmail.com'
    },
  ]

  return (
    <div className="grid">
      {users.map((user) => <UserCard userObj={user}/>)}
    </div>
  )
}
