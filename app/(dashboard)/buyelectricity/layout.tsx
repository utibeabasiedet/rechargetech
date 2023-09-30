// import { NavBar, SidebarMenu } from "./index";




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
    <>
    
    <div className=" justify-center flex card-electric items-center flex-1 w-full h-full   ">
      
          {children}
      
    </div>
  </>
  
        
        
     
  );
}
