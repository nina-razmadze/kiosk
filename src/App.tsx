import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('./views/Main'));
const BorrowBook = lazy(() => import('./views/BorrowBook'));
const ReturnBook = lazy(() => import('./views/ReturnBook'));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/borrow-book' element={<BorrowBook />} />
        <Route path='/return-book' element={<ReturnBook />} />
      </Routes>
    </Suspense>
  );
}

export default App;
