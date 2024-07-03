"use client";

import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";
import "../styles/globals.css";
import { Button } from "@nextui-org/button";
import { Divider, Image } from "@nextui-org/react";

const CustomSidebar = ({ setActiveLink }: any) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const savedPage = localStorage.getItem("activePage");
    if (savedPage) {
      setActivePage(savedPage);
      setActiveLink(savedPage);
    }
  }, []);

  const handleMenuItemClick = (page: any) => {
    setActivePage(page);
    setActiveLink(page);
    localStorage.setItem("activePage", page);
    console.log(activePage);
  };

  return (
    <div>
      <Sidebar
        className="bg-slate-50 h-screen"
        collapsed={collapsed}
        width="300px"
      >
        <div className="flex items-center justify-start gap-4 p-4 mb-10">
          <Image src="/nav.png" alt="logo" width={50} height={50} />
          <h1 className="text-xl font-bold">Test-one</h1>
        </div>
        <span className="ml-6 text-gray-500 text-sm my-10">MAIN MENU</span>
        <Menu className="gap-3 mb-96 mx-4">
          <MenuItem
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2007_577)">
                  <path
                    d="M1.66667 15C1.20833 15 0.815835 14.8367 0.489168 14.51C0.162501 14.1833 -0.000554141 13.7911 1.41483e-06 13.3333V1.66667C1.41483e-06 1.20833 0.163335 0.815835 0.490001 0.489168C0.816668 0.162501 1.20889 -0.000554141 1.66667 1.41483e-06H13.3333C13.7917 1.41483e-06 14.1842 0.163335 14.5108 0.490001C14.8375 0.816668 15.0006 1.20889 15 1.66667V13.3333C15 13.7917 14.8367 14.1842 14.51 14.5108C14.1833 14.8375 13.7911 15.0006 13.3333 15H1.66667ZM1.66667 13.3333H6.66667V1.66667H1.66667V13.3333ZM8.33333 13.3333H13.3333V7.5H8.33333V13.3333ZM8.33333 5.83333H13.3333V1.66667H8.33333V5.83333Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2007_577">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            className={`text-black text-xl ${activePage === "Dashboard" && "bg-slate-300 rounded-lg"}`}
            component={<Link href={"/dashboard"} />}
            onClick={() => handleMenuItemClick("Dashboard")}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2007_587)">
                  <path
                    d="M11.0312 1.00781H12V16H0V1.00781H0.984375V0H1.98438V1.00781H4V0H5V1.00781H7.01562V0H8.01562V1.00781H10.0312V0H11.0312V1.00781ZM11 15V2.00781H1V15H11ZM9 4.00781V5.00781H3V4.00781H9ZM3 13.0156V12.0156H9V13.0156H3ZM3 9.00781V8.00781H9V9.00781H3Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2007_587">
                    <rect width="12" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            className={`text-black text-xl ${activePage === "People" && "bg-slate-300 rounded-lg"}`}
            component={<Link href={"/dashboard/people"} />}
            onClick={() => handleMenuItemClick("People")}
          >
            People
          </MenuItem>

          <MenuItem
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2007_593)">
                  <path
                    d="M1.33333 11.6666V12.3333H13.3333V13.6666H0V0.333252H1.33333V10.3333C3.33333 10.3333 5.33333 8.99992 6.73333 6.59992C8.73333 3.26659 10.9333 1.66659 13.3333 1.66659V2.99992C11.4667 2.99992 9.66667 4.39992 7.93333 7.33325C6.2 10.0666 3.8 11.6666 1.33333 11.6666Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2007_593">
                    <rect
                      width="13.3333"
                      height="13.3333"
                      fill="white"
                      transform="translate(0 0.333252)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            className={`text-black text-xl ${activePage === "Programs" && "bg-slate-300 rounded-lg"}`}
            component={<Link href={""} />}
            onClick={() => handleMenuItemClick("Programs")}
          >
            Programs
          </MenuItem>
        </Menu>

        <footer>
          <Divider />
          <Menu>
            <MenuItem
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2007_603)">
                    <path
                      d="M8.37126 6.01211C7.85832 5.96145 7.34226 6.07057 6.89374 6.32454C6.44522 6.57851 6.08616 6.9649 5.86572 7.43082C5.64528 7.89673 5.57424 8.41939 5.66233 8.92724C5.75041 9.4351 5.99332 9.90331 6.35778 10.2678C6.72225 10.6322 7.19046 10.8751 7.69831 10.9632C8.20616 11.0513 8.72882 10.9803 9.19474 10.7598C9.66066 10.5394 10.047 10.1803 10.301 9.73181C10.555 9.28329 10.6641 8.76723 10.6134 8.2543C10.5557 7.67929 10.3009 7.14193 9.89227 6.73329C9.48363 6.32465 8.94627 6.06986 8.37126 6.01211ZM14.3908 8.5C14.3892 8.77174 14.3692 9.04306 14.331 9.31211L16.097 10.6973C16.1739 10.761 16.2258 10.85 16.2433 10.9483C16.2608 11.0466 16.2429 11.148 16.1927 11.2344L14.522 14.125C14.4713 14.2106 14.392 14.2754 14.2981 14.3082C14.2042 14.341 14.1017 14.3396 14.0088 14.3043L12.2549 13.598C12.1581 13.5595 12.0534 13.5456 11.9499 13.5576C11.8465 13.5695 11.7477 13.6069 11.6623 13.6664C11.3946 13.8507 11.1133 14.0145 10.8209 14.1562C10.7289 14.2009 10.6494 14.2676 10.5893 14.3503C10.5292 14.433 10.4904 14.5292 10.4763 14.6305L10.2134 16.5012C10.1962 16.6 10.1451 16.6897 10.069 16.755C9.99295 16.8204 9.89653 16.8573 9.79626 16.8594H6.45485C6.35623 16.8577 6.26114 16.8224 6.18524 16.7594C6.10933 16.6965 6.05714 16.6095 6.03727 16.5129L5.77477 14.6449C5.76003 14.5426 5.72023 14.4454 5.65889 14.3621C5.59756 14.2789 5.5166 14.212 5.42321 14.1676C5.13111 14.0266 4.85078 13.8624 4.58493 13.6766C4.49981 13.6173 4.40129 13.5802 4.29826 13.5686C4.19522 13.5569 4.0909 13.5711 3.9947 13.6098L2.24118 14.3156C2.14825 14.351 2.04582 14.3525 1.95193 14.3197C1.85803 14.287 1.7787 14.2222 1.7279 14.1367L0.057196 11.2461C0.0069667 11.1597 -0.0109831 11.0583 0.00654251 10.96C0.0240681 10.8616 0.0759317 10.7727 0.152899 10.709L1.64548 9.53711C1.72725 9.4722 1.79152 9.38789 1.83244 9.29185C1.87337 9.1958 1.88967 9.09105 1.87985 8.98711C1.86579 8.82422 1.8572 8.66172 1.8572 8.49883C1.8572 8.33594 1.8654 8.17578 1.87985 8.01641C1.8886 7.9131 1.8715 7.80924 1.83011 7.71418C1.78872 7.61912 1.72433 7.53585 1.64274 7.47187L0.150946 6.3C0.0752277 6.23597 0.0244568 6.14734 0.00753001 6.04964C-0.00939677 5.95194 0.00860042 5.85139 0.0583679 5.76562L1.72907 2.875C1.77981 2.78945 1.85912 2.72455 1.95302 2.69175C2.04692 2.65895 2.14938 2.66035 2.24235 2.6957L3.99626 3.40195C4.09298 3.44046 4.19774 3.45438 4.30116 3.44245C4.40458 3.43052 4.50342 3.39311 4.58884 3.33359C4.85651 3.14927 5.13779 2.98552 5.43024 2.84375C5.52219 2.79906 5.60171 2.73242 5.6618 2.64972C5.72189 2.56701 5.76069 2.47078 5.77477 2.36953L6.03766 0.498828C6.05493 0.400032 6.10597 0.310299 6.18207 0.244964C6.25816 0.179629 6.35458 0.142748 6.45485 0.140625H9.79626C9.89487 0.142331 9.98997 0.177578 10.0659 0.24056C10.1418 0.303542 10.194 0.3905 10.2138 0.487109L10.4763 2.35508C10.4911 2.45745 10.5309 2.55459 10.5922 2.63787C10.6535 2.72114 10.7345 2.78798 10.8279 2.83242C11.12 2.97342 11.4003 3.13762 11.6662 3.32344C11.7513 3.38266 11.8498 3.41978 11.9529 3.43144C12.0559 3.4431 12.1602 3.42894 12.2564 3.39023L14.0099 2.68438C14.1029 2.64899 14.2053 2.64753 14.2992 2.68026C14.3931 2.71299 14.4724 2.7778 14.5232 2.86328L16.1939 5.75391C16.2441 5.84027 16.2621 5.94165 16.2446 6.04001C16.227 6.13837 16.1752 6.22732 16.0982 6.29102L14.6056 7.46289C14.5235 7.52759 14.4589 7.6118 14.4176 7.70786C14.3763 7.80392 14.3597 7.90878 14.3693 8.01289C14.3822 8.17461 14.3908 8.33711 14.3908 8.5Z"
                      stroke="#111111"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2007_603">
                      <rect
                        width="16.2511"
                        height="16.7188"
                        fill="white"
                        transform="translate(0 0.140625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              component={<Link href={""} />}
              className="text-black text-xl"
            >
              Settings
            </MenuItem>
          </Menu>
        </footer>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
