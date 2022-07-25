import About from '../../pages/About';
import Posts from '../../pages/Posts/Posts';
import PostIdPage from '../../pages/PostIdPage';
import Login from '../Login';

export const privateRoutes = [
  { path: '/about', component: About, exact: true },
  { path: '/posts', component: Posts, exact: true },
  { path: '/posts/:id', component: PostIdPage, exact: true },
];

export const publicRoutes = [{ path: '/login', component: Login, exact: true }];
