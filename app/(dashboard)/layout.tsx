import { NavBar, SidebarMenu } from "./index";
import '../(homepage)/globals.css'



export const metadata = {
  title: "dashboard",
  description: "Easy and reliable way to buy electricity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className="relative">
    <NavBar />
    <div className="flex gap-0 ">
      <div className="w-[260px] lg:block hidden">
        <SidebarMenu />
      </div>
  
      <div className="md:px-[32px] px-[16px]  h-auto min-h-full pt-[32px] relative w-full ">
        
        {children}
      </div>
    </div>
    </body>
    </html>
  
        
        
     
  );
}
