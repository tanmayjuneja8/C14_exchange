import './SectionTitle.css';

import { Text } from '..';
import classNames from 'classnames';

const SectionTitle = ({ title, subtitle, link,link_name, noBorderBottom }) => {
  const sectionTitleClasses = classNames({
    SectionTitle: true,
    'sectionTitle-noBorderBottom': noBorderBottom,
  });

  return (
    <div className={sectionTitleClasses}>
      <Text h3>{title}</Text>
      {subtitle && (
        <>
        <div className='sectionTitle__subtitle'>
          <Text color='grey'>{subtitle}</Text>
        </div><div className='sectionTitle_link'>
                        <a href={link}>{link_name}</a>
                  </div></>
      )}
    </div>
  );
};

export default SectionTitle;
