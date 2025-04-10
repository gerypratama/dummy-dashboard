import {
  Card,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function UserMgmtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-80 rounded-sm">
        <CardHeader className="text-center">
          <CardTitle>DummyDash</CardTitle>
          {children}
        </CardHeader>
      </Card>
    </div>
  );
}
