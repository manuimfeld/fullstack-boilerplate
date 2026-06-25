import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { ViewTransition } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F2F5F9]">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <div />
        <main className="flex-1 overflow-y-auto p-6">
          <ViewTransition name="page">{children} </ViewTransition>
        </main>
      </div>
    </div>
  );
}
