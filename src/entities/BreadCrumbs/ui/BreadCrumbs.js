import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../../shared/ui/Text/Text';
import { Stack } from '../../../shared/ui/Stack/Stack';
import styles from './BreadCrumbs.module.scss'

export const Breadcrumbs = ({ routes, separator = ' / ' }) => {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = [
    { title: 'Главная', link: '/' }, 
    ...pathnames.map((segment, index) => {
      const route = routes.find((r) => r.link.includes(segment))

      if (route) {
        const isLast = index === pathnames.length - 1;

        return {
          title: route.title,
          link: route.link,
          isLast: isLast, 
        }
      }
      return { title: segment, link: `/${segment}`, isLast: index === pathnames.length - 1 };
    }),
  ];

  const currentRoute = breadcrumbs[breadcrumbs.length - 1]; 
  const title = currentRoute.isLast ? currentRoute.title : '';


  return (
    <Stack className={styles.breadCrumbsContainer}
    direction='column'
    align="alignCenter"
    gap='16'>
      <Text type='h1'>{title}</Text>
      <nav>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.link}>
            {crumb.isLast ? (
              <Text type='p'>{crumb.title}</Text>
            ) : (
              <Link to={crumb.link}>
                <Text type='p'>{crumb.title}</Text>
              </Link> 
            )}
            {index < breadcrumbs.length - 1 && separator}
          </li>
        ))}
      </nav>
    </Stack>
  );
};


