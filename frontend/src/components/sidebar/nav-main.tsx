import { Link } from '@tanstack/react-router'
import type { LucideIcon } from 'lucide-react'

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useLocalization } from '@/hooks/use-localization'

export function NavMain({
  items,
}: {
  items: Array<{
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    count?: number
    searchParams?: Record<string, string>
    items?: Array<{
      title: string
      url: string
    }>
  }>
}) {
  const { t } = useLocalization()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t('sidebar.main.title')}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild tooltip={item.title}>
              <Link
                to={item.url.split('?')[0]} // Remove any existing query string
                search={item.searchParams || {}}
              >
                <item.icon />
                <span className="flex grow justify-between">
                  <span>{item.title}</span>
                  <span className="badge badge-primary badge-xs">
                    {item.count && item.count}
                  </span>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
