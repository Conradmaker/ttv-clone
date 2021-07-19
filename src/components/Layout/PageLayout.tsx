import React from 'react';
import Footer from './Footer';
import LeftNavigation from './LeftNavigation';
import { PageLayoutContainer } from './styles';
import _LoginModal from '../Modal/LoginModal';
import _TermModal from '../Modal/TermModal';
import useModal from '../../hooks/useModal';

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
  const [LoginModal, toggleLoginModal] = useModal(_LoginModal);
  const [TermModal, toggleTermModal] = useModal(_TermModal);
  return (
    <>
      <PageLayoutContainer>
        <LeftNavigation toggleLoginModal={toggleLoginModal} />
        <main>
          <p>TTV A.I</p>
          {children}
          <Footer toggleTermModal={toggleTermModal} />
        </main>
        <aside>
          <p>Powered by Shutterstock</p>
        </aside>
      </PageLayoutContainer>
      <LoginModal />
      <TermModal />
    </>
  );
}
