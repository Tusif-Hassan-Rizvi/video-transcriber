import MainScreen from "@/components/MainScreen";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <SideBar />
      <MainScreen />
    </div>
  );
}
