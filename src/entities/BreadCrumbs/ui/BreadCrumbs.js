import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../../shared/ui/Text/Text';
import { Stack } from '../../../shared/ui/Stack/Stack';
import styles from './BreadCrumbs.module.scss'

export const Breadcrumbs = ({ routes, separator = ' / ', isProduct = false, name}) => {
  const location = useLocation()

  const breadcrumbs = location.pathname
  .split('/')
  .reduce((acc, segment, index, arr) => {
    if (!segment) return acc

    const prevLink = acc.length > 0 ? acc[acc.length - 1].link : '';    
    const link = `${prevLink}${segment}`
    const route = routes.find((r) => r.link === link)
    const isLast = index === arr.length - 1;

    acc.push({
      title: route ? route.title : segment, 
      link: link, 
      isLast: isLast,
    });

    return acc;
  }, [{ title: 'Главная', link: '/' }]);

  if (isProduct) {
    if (breadcrumbs.length > 1) {
      breadcrumbs.pop(); // Удаляем предпоследний элемент
    }

    // Устанавливаем isLast для последнего элемента в true, если он существует
    if (breadcrumbs.length > 0) {
      breadcrumbs[breadcrumbs.length - 1].isLast = true;
    }
  }

  const currentRoute = breadcrumbs[breadcrumbs.length - 1]
  const title = currentRoute.isLast ? currentRoute.title : ''

  return (
    <Stack className={styles.breadCrumbsContainer}
    direction='column'
    align="alignCenter"
    gap='16'>
      <Text type='h1'>{isProduct? name : title}</Text>
      <nav>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.link}>
            {crumb.isLast ? ( 
              <Text type='p'>{isProduct ? name : crumb.title}</Text>
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
