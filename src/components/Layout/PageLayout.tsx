import React from 'react';
import Footer from './Footer';
import LeftNavigation from './LeftNavigation';
import { PageLayoutContainer } from './styles';

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <PageLayoutContainer>
      <LeftNavigation />
      <main>
        <p>TTV A.I</p>
        {children}
        <Footer />
      </main>
      <aside>
        <p>Powered by Shutterstock</p>
      </aside>
    </PageLayoutContainer>
  );
}
