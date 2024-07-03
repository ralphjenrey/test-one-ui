"use client";
import CustomSidebar from "@/components/sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sidebar } from "react-pro-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      <CustomSidebar setActiveLink={setActiveLink} />
      <div className="flex flex-col w-full overflow-scroll">
        <header className="bg-gray-50 min-h-24 flex items-center justify-between gap-5 ps-5">
          <div className="flex items-center gap-2">
            <Image src={"/dashboard.png"} alt="logo" width={30} height={30} />

            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.499242 8.23341L3.73258 5.00007L0.499242 1.76674C0.422091 1.68959 0.360891 1.598 0.319137 1.49719C0.277383 1.39639 0.255892 1.28835 0.255892 1.17924C0.255892 1.07013 0.277383 0.96209 0.319137 0.861287C0.360891 0.760483 0.422091 0.668891 0.499242 0.591739C0.576394 0.514588 0.667986 0.453388 0.76879 0.411634C0.869593 0.369879 0.977634 0.348389 1.08674 0.348389C1.19585 0.348389 1.30389 0.369879 1.4047 0.411634C1.5055 0.453388 1.59709 0.514588 1.67424 0.591739L5.49924 4.41674C5.82424 4.74174 5.82424 5.26674 5.49924 5.59174L1.67424 9.41674C1.59715 9.49399 1.50557 9.55528 1.40476 9.5971C1.30395 9.63892 1.19588 9.66044 1.08674 9.66044C0.977602 9.66044 0.869533 9.63892 0.768722 9.5971C0.667911 9.55528 0.576337 9.49399 0.499242 9.41674C0.182576 9.09174 0.174242 8.55841 0.499242 8.23341Z"
                fill="#111111"
              />
            </svg>

            <h1 className="text-lg">{activeLink}</h1>
          </div>

          <div className="flex items-center gap-5 mx-5">
            <svg
              className="mr-5"
              width="30"
              height="30"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 20.3789H14.75V19.6289H14V20.3789ZM9.99999 20.3789V19.6289H9.24999V20.3789H9.99999ZM18 16.3789H17.25V16.6896L17.4697 16.9092L18 16.3789ZM13.5 5.05891H12.75V5.65149L13.3265 5.78857L13.5 5.05891ZM10.5 5.05891L10.6729 5.7887L11.25 5.65197V5.05891H10.5ZM5.99999 16.3789L6.53032 16.9092L6.74999 16.6896V16.3789H5.99999ZM12 23.1289C13.5142 23.1289 14.75 21.8931 14.75 20.3789H13.25C13.25 21.0647 12.6858 21.6289 12 21.6289V23.1289ZM14 19.6289H9.99999V21.1289H14V19.6289ZM9.24999 20.3789C9.24999 21.8907 10.4733 23.1289 12 23.1289V21.6289C11.3066 21.6289 10.75 21.0671 10.75 20.3789H9.24999ZM18.75 16.3789V11.3789H17.25V16.3789H18.75ZM18.75 11.3789C18.75 8.04668 16.9478 5.10776 13.6735 4.32925L13.3265 5.78857C15.7722 6.37005 17.25 8.57113 17.25 11.3789H18.75ZM14.25 5.05891V4.37891H12.75V5.05891H14.25ZM14.25 4.37891C14.25 3.13469 13.2442 2.12891 12 2.12891V3.62891C12.4158 3.62891 12.75 3.96312 12.75 4.37891H14.25ZM12 2.12891C10.7558 2.12891 9.74999 3.13469 9.74999 4.37891H11.25C11.25 3.96312 11.5842 3.62891 12 3.62891V2.12891ZM9.74999 4.37891V5.05891H11.25V4.37891H9.74999ZM10.3271 4.32911C7.04171 5.10753 5.24999 8.03735 5.24999 11.3789H6.74999C6.74999 8.56046 8.21827 6.37029 10.6729 5.7887L10.3271 4.32911ZM5.24999 11.3789V16.3789H6.74999V11.3789H5.24999ZM5.46966 15.8486L4.17966 17.1386L5.24032 18.1992L6.53032 16.9092L5.46966 15.8486ZM4.17966 17.1386C3.08606 18.2322 3.83928 20.1289 5.40999 20.1289V18.6289C5.2007 18.6289 5.07392 18.3656 5.24032 18.1992L4.17966 17.1386ZM5.40999 20.1289H18.58V18.6289H5.40999V20.1289ZM18.58 20.1289C20.1347 20.1289 20.9252 18.2435 19.8203 17.1386L18.7597 18.1992C18.9147 18.3543 18.8053 18.6289 18.58 18.6289V20.1289ZM19.8203 17.1386L18.5303 15.8486L17.4697 16.9092L18.7597 18.1992L19.8203 17.1386Z"
                fill="#111111"
              />
            </svg>
            <Image src={"/profile.png"} alt="profile" width={50} height={50} />
            <span className="text-lg font-semibold">John Doe</span>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}