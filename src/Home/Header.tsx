import { useDispatch } from "react-redux";
import { logout } from "../ReduxToolkit/Reducers/AuthReducer";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#my" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="img" />
          </a>
        </div>
        <div className="flex gap-x-12">
          <a href="#Features" className="text-sm/6 font-semibold text-gray-900">
            User
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <a href="#logout" className="text-sm/6 font-semibold text-gray-900" onClick={() => dispatch(logout())}>
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
