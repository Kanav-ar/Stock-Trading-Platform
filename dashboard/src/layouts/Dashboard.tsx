import { Outlet } from "react-router";
import WatchList from "../components/WatchList";
import TopBar from "../components/TopBar";

export default function DashboardLayout() {
  return (
    <>
      <TopBar />

      <div className="flex mx-auto">
        <WatchList />

        <main className="flex-1 p-8 transition-colors duration-100 dark:bg-[#070d17]">
          <Outlet />
        </main>
      </div>
    </>
  );
}
