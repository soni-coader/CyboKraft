import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/images/logo/logodark.png";

const LogoDark = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='logo' className='!w-[12rem]' />
    </Link>
  );
};

export default LogoDark;
