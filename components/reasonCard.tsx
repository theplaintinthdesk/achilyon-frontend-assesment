import { ReactElement } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
interface ReasonCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}
export default function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <Card className="bg-purple-200  pb-24">
      <CardHeader>
        <CardTitle>
          {icon}
        </CardTitle>
        <CardDescription className="font-bold text-base text-indigo-900">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Card>
  );
}
