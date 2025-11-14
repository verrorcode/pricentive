import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logoa1.png"
        alt="logo"
        width={200}
        height={80}
        quality={100}
        className="dark:hidden"
      />

      <Image
        src="/images/logo/logoa.png"
        alt="logo"
        width={200}
        height={80}
        quality={100}
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
