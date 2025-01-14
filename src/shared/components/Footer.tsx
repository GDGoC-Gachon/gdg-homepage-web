import { ReactComponent as LogoIcon } from "../assets/icons/common/logo.svg";

function Footer() {
    return (
        <footer className="h-[8.938rem] mt-[-8.938rem] flex items-center justify-between">
            <div className="ml-16 font-productSans leading-tight">
                <div className="flex items-center justify-center">
                    <LogoIcon className="mr-2"/>
                    <p className="text-[1.234em]">Google Developer Groups</p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-[0.784em] text-mainBlue">On Campus</p>
                    <p className="font-black">&nbsp;·&nbsp;</p>
                    <p className="text-[0.756em]">Gachon University</p>
                </div>
            </div>
            <p className="mr-16 text-[1.03125rem] font-inter font-semibold">Copyright &copy; GDG GCU</p>
        </footer>
    );
}

export default Footer;
