import { Fragment, ReactNode } from 'react';

import Meta from '@/components/Meta';

type IMetaTemplateProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const MetaTemplate = ({ title, description, children }: IMetaTemplateProps) => (
  <Fragment>
    <Meta title={title} description={description} />
    {children}
  </Fragment>
);

export default MetaTemplate;