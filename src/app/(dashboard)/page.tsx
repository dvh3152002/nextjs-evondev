import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.action";
import React from "react";

const HomePage = async () => {
  const user = await createUser({
    clerkId: "test clerk id",
    email: "email test",
    username: "username test",
  });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </div>
  );
};

export default HomePage;
