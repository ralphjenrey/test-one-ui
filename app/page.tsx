"use client";
import styles from "./page.module.css";
import { Link } from "@nextui-org/link";
import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";

export default function Home() {
  return (
    <section
      className={`flex flex-col items-center justify-center ${styles.bgMap}`}
    >
      <Card className="max-w-[400px] flex flex-col items-center justify-center p-10">
        <Image
          alt="nextui logo"
          height={100}
          radius="sm"
          src="/login.png"
          width={100}
        />
        <CardBody className="gap-3">
          <Input
            placeholder="Username"
            endContent={
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="person_24px">
                  <path
                    id="icon/social/person_24px"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6359 3.33325C8.80934 3.33325 7.32988 4.82492 7.32988 6.66659C7.32988 8.50825 8.80934 9.99992 10.6359 9.99992C12.4625 9.99992 13.942 8.50825 13.942 6.66659C13.942 4.82492 12.4625 3.33325 10.6359 3.33325ZM12.289 6.66668C12.289 5.75001 11.5451 5.00001 10.6359 5.00001C9.72678 5.00001 8.98292 5.75001 8.98292 6.66668C8.98292 7.58334 9.72678 8.33334 10.6359 8.33334C11.5451 8.33334 12.289 7.58334 12.289 6.66668ZM15.595 15C15.4297 14.4083 12.8675 13.3333 10.6359 13.3333C8.41262 13.3333 5.86695 14.4 5.67685 15H15.595ZM4.0238 15C4.0238 12.7833 8.42912 11.6667 10.6359 11.6667C12.8427 11.6667 17.248 12.7833 17.248 15V16.6667H4.0238V15Z"
                    fill="black"
                    fillOpacity="0.44"
                  />
                </g>
              </svg>
            }
          />
          <Input placeholder="Password" type="password" />

          <Link href="/dashboard" className="w-full">
            <Button className="bg-[#5B1958] text-white" fullWidth={true}>
              Login
            </Button>
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}
