import SearchComboBox from "@/components/features/search/SearchComboBox";
import SearchContent from "@/components/features/search/SearchContent";

interface SearchPageProps {
  params: Promise<{ query: string }>;
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { query } = await params;
  const decodedQuery = decodeURIComponent(query);
  console.log("query", query);

  return (
    <main className="pt-4">
      <section>
        <SearchComboBox />
      </section>
      <section className="w-full my-10">
        <h1 className="font-bold text-2xl lg:text-3xl">{decodedQuery}</h1>
      </section>
      <SearchContent query={decodedQuery} />
    </main>
  );
}
