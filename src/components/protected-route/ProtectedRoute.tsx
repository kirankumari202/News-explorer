import React from 'react';
import { Route, Redirect, RouteComponentProps, BrowserRouter } from 'react-router-dom';

type Props  = {loggedIn: boolean, children: any, path: string}

export default function ProtectedRoute({ loggedIn, children }: Props ) {
  return <Route>{loggedIn ? children : <Redirect to="/" />}</Route>;
}
