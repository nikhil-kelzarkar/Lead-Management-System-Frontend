import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";

const leads = [
  { id: 1, name: "John Doe", source: "Facebook", status: "New", phone: "1234567890", assignedTo: "Alice", date: "2025-06-27" },
  { id: 2, name: "Jane Smith", source: "Google", status: "Contacted", phone: "0987654321", assignedTo: "Bob", date: "2025-06-25" },
];

export default function LeadListing() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Lead Listing</h1>
      <div className="flex gap-4 mb-4">
        <Input placeholder="Search by name or phone" className="w-1/3" />
        <Input placeholder="Filter by source" className="w-1/4" />
        <Input placeholder="Filter by status" className="w-1/4" />
        <Button>Search</Button>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.source}</TableCell>
                  <TableCell>{lead.status}</TableCell>
                  <TableCell>{lead.phone}</TableCell>
                  <TableCell>{lead.assignedTo}</TableCell>
                  <TableCell>{lead.date}</TableCell>
                  <TableCell><Button size="sm">View</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
