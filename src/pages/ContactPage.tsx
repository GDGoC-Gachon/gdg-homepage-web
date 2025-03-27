import GITHUB from "../shared/assets/icons/contact/Github_logo.svg";
import MEDIUM from "../shared/assets/icons/contact/Medium_logo.svg";
import INSTAGRAM from "../shared/assets/icons/contact/Instagram_logo.svg";
import KAKAO from "../shared/assets/icons/contact/Kakao_logo.svg";

function ContactPage() {
  const handleOpenSite = (site: string) => {
    if (site === "GITHUB")
      window.open("https://github.com/GDGoC-Gachon", "_blank");
    else if (site === "MEDIUM")
      window.open("https://medium.com/gdg-on-campus-gachon", "_blank");
    else if (site === "INSTAGRAM")
      window.open("https://www.instagram.com/gdg.gachon/", "_blank");
    else if (site === "KAKAO") window.open("/", "_blank");
  };

  return (
    <div className="w-full flex-center flex-col">
      <div className="pt-24 max-w-5xl flex-center flex-col text-black-800">
        <div className="text-4xl font-bold font-productSans">Contact</div>
        <div className="text-base font-normal font-productSans leading-10">
          GDG GACHON에게 더 궁금한 점이 있으신가요?
        </div>
      </div>
      <div className="w-[20rem] pt-6 grid grid-cols-2 gap-12 items-center justify-center">
        <img
          src={GITHUB}
          className="mr-auto w-24 cursor-pointer"
          onClick={() => handleOpenSite("GITHUB")}
        />
        <img
          src={MEDIUM}
          className="ml-auto w-24 cursor-pointer"
          onClick={() => handleOpenSite("MEDIUM")}
        />
        <img
          src={INSTAGRAM}
          className="mr-auto w-24 cursor-pointer"
          onClick={() => handleOpenSite("INSTAGRAM")}
        />
        <img
          src={KAKAO}
          className="ml-auto w-24 cursor-pointer"
          onClick={() => handleOpenSite("KAKAO")}
        />
      </div>
    </div>
  );
}

export default ContactPage;
