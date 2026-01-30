"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Action {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  href: string;
}

interface SidebarNavProps {
  userActions: Action[];
  adminActions: Action[];
  isAdmin: boolean;
}

export function SidebarNav({
  userActions,
  adminActions,
  isAdmin,
}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {userActions.map((action) => (
              <SidebarMenuItem key={action.label}>
                <Link href={action.href} className="w-full">
                  <SidebarMenuButton
                    tooltip={action.label}
                    className="cursor-pointer w-full"
                    isActive={pathname === action.href}
                  >
                    <HugeiconsIcon icon={action.icon} strokeWidth={2} />
                    <span>{action.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      {isAdmin && (
        <SidebarGroup>
          <SidebarGroupLabel>Admin Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminActions.map((action) => (
                <SidebarMenuItem key={action.label}>
                  <Link href={action.href} className="w-full">
                    <SidebarMenuButton
                      tooltip={action.label}
                      className="cursor-pointer w-full"
                      isActive={pathname === action.href}
                    >
                      <HugeiconsIcon icon={action.icon} strokeWidth={2} />
                      <span>{action.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      )}
    </>
  );
}
