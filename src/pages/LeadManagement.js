import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LeadManagement() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Lead Management</h1>
      <Card>
        <CardContent className="space-y-4">
          <Input placeholder="Assign lead to..." />
          <Input placeholder="Update lead status..." />
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
