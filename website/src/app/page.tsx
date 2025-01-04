import Header from "@/components/Header";
import Map from "@/components/Map";
import { getTreesGithub } from "@/utils/db";
import { transformTreesToGeoJSON } from "@/utils/transformToGeoJSON";

export default async function Home() {
  const treeData = await getTreesGithub();

  // console.log(treeData);

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Header />
      <Map treeData={transformTreesToGeoJSON(treeData)} />
    </div>
  );
}
