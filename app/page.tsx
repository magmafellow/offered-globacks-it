import SearchUser from "@/app/ui/SearchUser";
import UserGrid from "@/app/ui/UserGrid";

export default function Home({ searchParams }: { searchParams: { term: string } }) {

  return (
    <main className="pt-4 md:pt-6 lg:pt-8">
      <SearchUser />
      <UserGrid />
    </main>
  )
}
