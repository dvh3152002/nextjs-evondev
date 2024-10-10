import { IconClock, IconEye, IconStar } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseItem = () => {
  const courseInfo = [
    {
      title: "3000",
      icon: (className?: string) => <IconEye className={className} />,
    },
    {
      title: "5.0",
      icon: (className?: string) => <IconStar className={className} />,
    },
    {
      title: "30h25p",
      icon: (className?: string) => <IconClock className={className} />,
    },
  ];
  return (
    <div className="bg-white dark:bg-grayDarker dark:border-opacity-10 border-gray-200 p-4 rounded-2xl">
      <Link href="#" className="block h-[180px] relative">
        <Image
          src="https://images.unsplash.com/photo-1728237895204-695f3528c4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
          alt=""
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-lg"
          sizes="@media (min-width:640px) 300px,100vw"
        />
        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-5 dark:text-gray-200">
          Khóa học NextJs - Xây dựng Website E-Learning
        </h3>
        <div className="flex item-center gap-3 mb-5 text-gray-500 text-xs dark:text-grayDark">
          {courseInfo.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-1">
                {item.icon("size-4")}
                <span>{item.title}</span>
              </div>
            );
          })}
          <span className="font-semibold text-primary ml-auto text-base">
            799.000đ
          </span>
        </div>
        <Link
          href={`#`}
          className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary h-12"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
