import Button from 'components/Button';
import Image from 'next/image';
import Link from 'next/link';

import * as S from './styles';

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Link href="/home">
          <Image
            src="/img/logo-transparent.png"
            width={150}
            height={60}
            quality={80}
          />
        </Link>
        logo aqui
      </S.Logo>
    </S.Wrapper>
  );
};

export default Navbar;
