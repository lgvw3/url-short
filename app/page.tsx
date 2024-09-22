import CreateShortForm from "@/components/create-short-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>
        Create your short URL Here!
      </h1>
      <CreateShortForm />
    </div>
  );
}
