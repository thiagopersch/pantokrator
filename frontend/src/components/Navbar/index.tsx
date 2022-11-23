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
            src="/logo/logo.png"
            width={70}
            height={70}
            quality={80}
          />
        </Link>
      </S.Logo>
    </S.Wrapper>
  );
};

export default Navbar;
