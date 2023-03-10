import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <div>
        <Routes>
          <Route path='login/*' element={
            <PublicRoute>
              {/*<LoginPage />*/}
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
            } 

            />

          <Route path="/*" element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
          />
        </Routes>
    </div>
  );
};
