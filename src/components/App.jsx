import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="/some" element={<h2>Hello</h2>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
