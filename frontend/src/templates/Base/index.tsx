import Navbar from 'components/Navbar';
import PageContainer from 'components/PageContainer';

import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Navbar />
      <S.Content>
        <PageContainer>{children}</PageContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default Base;
