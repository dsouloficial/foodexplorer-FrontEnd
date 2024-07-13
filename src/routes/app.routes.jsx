import { Routes, Route, redirect, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';

export function AppRoutes() {

  const { user } = useAuth();
  const isAdmin = Boolean(user.admin);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />

      {
        isAdmin ? (
          <>
            <Route path="/new" element={<NewDish />} />
            <Route path="/edit/:id" element={<EditDish />} />
          </>
        ) : null
      }

      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  );
}
