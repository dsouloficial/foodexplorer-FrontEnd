import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
// import { Home } from '../pages/Home';

export function AuthRoutes() {
  return (
    <Routes>
      {/* <Route index element={<SignIn />} /> */}
      <Route path="/signin" element={<SignIn />} />
      {/* <Route path="/signin" element={<SignIn />} /> */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register" element={<SignUp />} />
      {/* <Route path="/" element={<SignIn />} /> */}

      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
}
