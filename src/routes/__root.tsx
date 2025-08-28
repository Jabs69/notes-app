import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '@/shared/elements/Header'
import AsideMenu from '@/shared/elements/AsideMenu'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <AsideMenu />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
