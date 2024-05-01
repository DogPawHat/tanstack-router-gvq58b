import * as React from 'react';
import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export const Route = createFileRoute('/_postSelectLayout')({
  component: PostSelectLayout,
});

function PostSelectLayout() {
  return (
    <div>
      <div className="flex gap-2">
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
        <Select />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
