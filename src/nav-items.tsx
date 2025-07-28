
import { Home, FileText, Phone, HelpCircle } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "404",
    to: "/404",
    icon: <FileText className="h-4 w-4" />,
    page: <NotFound />,
  },
];
