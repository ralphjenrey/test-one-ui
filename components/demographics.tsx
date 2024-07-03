"use client";
import {
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Chart from "react-google-charts";
export const data = [
  [
    { type: "date", label: "Day" },
    "Average temperature",
    "Average hours of daylight",
  ],
  [new Date(2014, 0), -0.5, 5.7],
  [new Date(2014, 1), 0.4, 8.7],
  [new Date(2014, 2), 0.5, 12],
  [new Date(2014, 3), 2.9, 15.3],
  [new Date(2014, 4), 6.3, 18.6],
  [new Date(2014, 5), 9, 20.9],
  [new Date(2014, 6), 10.6, 19.8],
  [new Date(2014, 7), 10.3, 16.6],
  [new Date(2014, 8), 7.4, 13.3],
  [new Date(2014, 9), 4.4, 9.9],
  [new Date(2014, 10), 1.1, 6.6],
  [new Date(2014, 11), -0.2, 4.5],
];

export const options = {
  chart: {
    title: "Average Temperatures and Daylight in Iceland Throughout the Year",
  },
  width: 900,
  height: 500,
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: "Temps" },
    1: { axis: "Daylight" },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: { label: "Temps (Celsius)" },
      Daylight: { label: "Daylight" },
    },
  },
};

export function DemoGraphics() {
  return (
    <Card className="p-10">
      <CardHeader className="flex justify-between">
        <h1 className="font-bold text-2xl">Demographic Trend</h1>
        <div className="flex gap-2 flex-wrap justify-end">
          <Select
            className="w-40"
            placeholder="Filter"
            startContent={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.33333 12H8.66667C9.03333 12 9.33333 11.7 9.33333 11.3333C9.33333 10.9667 9.03333 10.6667 8.66667 10.6667H7.33333C6.96667 10.6667 6.66667 10.9667 6.66667 11.3333C6.66667 11.7 6.96667 12 7.33333 12ZM2 4.66667C2 5.03333 2.3 5.33333 2.66667 5.33333H13.3333C13.7 5.33333 14 5.03333 14 4.66667C14 4.3 13.7 4 13.3333 4H2.66667C2.3 4 2 4.3 2 4.66667ZM4.66667 8.66667H11.3333C11.7 8.66667 12 8.36667 12 8C12 7.63333 11.7 7.33333 11.3333 7.33333H4.66667C4.3 7.33333 4 7.63333 4 8C4 8.36667 4.3 8.66667 4.66667 8.66667Z"
                  fill="#969696"
                />
              </svg>
            }
          >
            {["Option 1", "Option 2", "Option 3"].map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </Select>
          <Select placeholder="Monthly" className="w-40">
            {["Option 1", "Option 2", "Option 3"].map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </Select>
        </div>
      </CardHeader>
      <CardBody>
        <Chart
          chartType="Line"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </CardBody>
    </Card>
  );
}
