import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card><CardContent>Total Leads: 124</CardContent></Card>
        <Card><CardContent>Converted: 45</CardContent></Card>
        <Card><CardContent>Follow-ups Today: 13</CardContent></Card>
        <Card><CardContent>Contacted Today: 20</CardContent></Card>
      </div>
    </div>
  );
}
