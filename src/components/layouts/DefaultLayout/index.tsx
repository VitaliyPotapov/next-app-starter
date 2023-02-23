import { DefaultHeader, DefaultFooter } from '@takeda/ui/components/sections';
import { CloudinaryAsset } from '@takeda/ui/types';
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
        // colors="takeda-colors-reverse"
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
