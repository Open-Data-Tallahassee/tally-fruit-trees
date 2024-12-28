import Header from "@/components/Header";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <Map />
    </div>
  );
}
