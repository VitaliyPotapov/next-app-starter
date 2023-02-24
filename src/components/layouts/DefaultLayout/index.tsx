import { DefaultHeader, DefaultFooter } from '@takeda/ui/components/sections';
import { ReactNode } from 'react';

export interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <main>
      <DefaultHeader
        searchPlaceholder="Search..."
        searchPageUrl="/"
        title="Next app starter"
        annotationPrefix=""
        position="sticky"
      />
      {props.children}
      <DefaultFooter
        annotationPrefix=""
        socialLinks={[
          {
            type: 'Social',
            label: 'Icon One',
            url: 'https://example.com',
            icon: {
              variant: 'facebook',
            },
            style: 'link',
          },
        ]}
        copyrightText="Copyright"
      />
    </main>
  );
}
