import Header from "@/components/Header";
import Map from "@/components/Map";
import { getTrees } from "@/utils/db";
import { transformTreesToGeoJSON } from "@/utils/transformToGeoJSON";

export default async function Home() {
  const treeData = await getTrees();

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <Map treeData={transformTreesToGeoJSON(treeData)} />
    </div>
  );
}
