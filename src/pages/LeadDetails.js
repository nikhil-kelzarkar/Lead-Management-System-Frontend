import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function LeadDetails() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Lead Details</h1>
      <Card>
        <CardContent>
          <p>Name: John Doe</p>
          <p>Status: Contacted</p>
          <p>Source: Facebook</p>
          <p>Phone: 1234567890</p>
        </CardContent>
      </Card>
    </div>
  );
}
