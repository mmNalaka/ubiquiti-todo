/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as LoginImport } from './routes/login'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthTasksImport } from './routes/_auth.tasks'
import { Route as AuthListsListIdImport } from './routes/_auth.lists.$listId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
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

const AuthTasksRoute = AuthTasksImport.update({
  id: '/tasks',
  path: '/tasks',
  getParentRoute: () => AuthRoute,
} as any)

const AuthListsListIdRoute = AuthListsListIdImport.update({
  id: '/lists/$listId',
  path: '/lists/$listId',
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
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_auth/tasks': {
      id: '/_auth/tasks'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof AuthTasksImport
      parentRoute: typeof AuthImport
    }
    '/_auth/lists/$listId': {
      id: '/_auth/lists/$listId'
      path: '/lists/$listId'
      fullPath: '/lists/$listId'
      preLoaderRoute: typeof AuthListsListIdImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthTasksRoute: typeof AuthTasksRoute
  AuthListsListIdRoute: typeof AuthListsListIdRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthTasksRoute: AuthTasksRoute,
  AuthListsListIdRoute: AuthListsListIdRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/tasks': typeof AuthTasksRoute
  '/lists/$listId': typeof AuthListsListIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/tasks': typeof AuthTasksRoute
  '/lists/$listId': typeof AuthListsListIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/_auth/tasks': typeof AuthTasksRoute
  '/_auth/lists/$listId': typeof AuthListsListIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/login' | '/signup' | '/tasks' | '/lists/$listId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/login' | '/signup' | '/tasks' | '/lists/$listId'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/login'
    | '/signup'
    | '/_auth/tasks'
    | '/_auth/lists/$listId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  LoginRoute: typeof LoginRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  LoginRoute: LoginRoute,
  SignupRoute: SignupRoute,
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
        "/login",
        "/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/tasks",
        "/_auth/lists/$listId"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_auth/tasks": {
      "filePath": "_auth.tasks.tsx",
      "parent": "/_auth"
    },
    "/_auth/lists/$listId": {
      "filePath": "_auth.lists.$listId.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
