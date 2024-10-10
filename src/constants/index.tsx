import {
  IconExplore,
  IconOrder,
  IconPlay,
  IconStudy,
  IconUsers,
} from "@/components/icons";
import IconComment from "@/components/icons/IconComment";
import { TMenuItem } from "@/types";

export const menuItems: TMenuItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay className="size-5 svg-animate" />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconStudy className="size-5 svg-animate" />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <IconExplore className="size-5 svg-animate" />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUsers className="size-5 svg-animate" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5 svg-animate" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5 svg-animate" />,
  },
];
