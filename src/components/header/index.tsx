import Image from "next/image";
import type {FC} from "react";
import PizzaLogo from "public/svg/pizza-logo.svg";


const Header: FC = () => {
  return (
    <div className={"header"}>
      <div className={"container"}>
        <div className={"header__logo"}>
          <Image width="38" src={PizzaLogo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className={"header__cart"}>

        </div>
      </div>
    </div>

  )
  
};

export default Header;
