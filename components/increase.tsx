"use client";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export function Increase() {
  return (
    <Card className="p-8">
      <CardHeader>
        <h1 className="font-bold text-2xl">Increase</h1>
      </CardHeader>
      <CardBody className="flex justify-evenly">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#628CDD] text-5xl">36</h1>
          <h1>On Average</h1>
          <Button
            variant="bordered"
            endContent={
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.74375 1.19475C0.41875 1.51975 0.41875 2.04475 0.74375 2.36975L3.97708 5.60309L0.74375 8.83642C0.41875 9.16142 0.41875 9.68642 0.74375 10.0114C1.06875 10.3364 1.59375 10.3364 1.91875 10.0114L5.74375 6.18642C6.06875 5.86142 6.06875 5.33642 5.74375 5.01142L1.91875 1.18642C1.60208 0.869753 1.06875 0.869753 0.74375 1.19475Z"
                  fill="#969696"
                />
              </svg>
            }
          >
            More Details
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#55BC97] text-5xl">2.76%</h1>
          <div className="flex items-center">
            <h1>Trend Increase</h1>
            <Button
              size="sm"
              className="ms-2 bg-green-200 h-5 text-green-500 text-xs"
              endContent={
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.49999 3.44995C4.49999 3.72995 4.72499 3.94995 4.99999 3.94995H7.79499L2.34999 9.39495C2.15499 9.58995 2.15499 9.90495 2.34999 10.1C2.54499 10.295 2.85999 10.295 3.05499 10.1L8.49999 4.65495V7.44995C8.49999 7.72495 8.72499 7.94995 8.99999 7.94995C9.27499 7.94995 9.49999 7.72495 9.49999 7.44995V3.44995C9.49999 3.17495 9.27499 2.94995 8.99999 2.94995H4.99999C4.72499 2.94995 4.49999 3.17495 4.49999 3.44995Z"
                    fill="#00BA34"
                  />
                </svg>
              }
            >
              56%
            </Button>
          </div>

          <Button
            variant="bordered"
            endContent={
              <svg
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.74375 1.19475C0.41875 1.51975 0.41875 2.04475 0.74375 2.36975L3.97708 5.60309L0.74375 8.83642C0.41875 9.16142 0.41875 9.68642 0.74375 10.0114C1.06875 10.3364 1.59375 10.3364 1.91875 10.0114L5.74375 6.18642C6.06875 5.86142 6.06875 5.33642 5.74375 5.01142L1.91875 1.18642C1.60208 0.869753 1.06875 0.869753 0.74375 1.19475Z"
                  fill="#969696"
                />
              </svg>
            }
          >
            Trend increase
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
