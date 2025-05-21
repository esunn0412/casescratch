interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const Page = async ({ searchParams }: PageProps) => {
  // make db call
  const { id } = await searchParams;
  return <p>{id}</p>;
};

export default Page;
