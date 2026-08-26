import { Outlet } from "react-router";
import WatchList from "../components/WatchList";
import TopBar from "../components/TopBar";
import OrderWindowContextProvider from "../context/Order/OrderWindowContextProvider";
import OrderContextProvider from "../context/Order/OrderContextProvider";

export default function DashboardLayout() {
  return (
    <>
      <TopBar />

      <OrderContextProvider>
        <div className="flex h-[calc(100vh-10vh)] overflow-y-auto">
          <OrderWindowContextProvider>
            <WatchList />
          </OrderWindowContextProvider>

          <main className="flex-1 p-8 transition-colors duration-100 dark:bg-[#070d17] min-w-0 flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </OrderContextProvider>
    </>
  );
}
