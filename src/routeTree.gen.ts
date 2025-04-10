/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthTestImport } from './routes/_auth/test'
import { Route as AuthDashboardImport } from './routes/_auth/dashboard'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthTestRoute = AuthTestImport.update({
  id: '/test',
  path: '/test',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDashboardRoute = AuthDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/_auth/dashboard': {
      id: '/_auth/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthDashboardImport
      parentRoute: typeof AuthImport
    }
    '/_auth/test': {
      id: '/_auth/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof AuthTestImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthDashboardRoute: typeof AuthDashboardRoute
  AuthTestRoute: typeof AuthTestRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthDashboardRoute: AuthDashboardRoute,
  AuthTestRoute: AuthTestRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/register': typeof RegisterRoute
  '/dashboard': typeof AuthDashboardRoute
  '/test': typeof AuthTestRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/register': typeof RegisterRoute
  '/dashboard': typeof AuthDashboardRoute
  '/test': typeof AuthTestRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/register': typeof RegisterRoute
  '/_auth/dashboard': typeof AuthDashboardRoute
  '/_auth/test': typeof AuthTestRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/register' | '/dashboard' | '/test'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/register' | '/dashboard' | '/test'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/register'
    | '/_auth/dashboard'
    | '/_auth/test'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  RegisterRoute: typeof RegisterRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  RegisterRoute: RegisterRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/register"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/dashboard",
        "/_auth/test"
      ]
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/_auth/dashboard": {
      "filePath": "_auth/dashboard.tsx",
      "parent": "/_auth"
    },
    "/_auth/test": {
      "filePath": "_auth/test.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
