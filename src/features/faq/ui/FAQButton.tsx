interface FAQButtonProps {
  onClick: () => void;
}

export function FAQButton({ onClick }: FAQButtonProps) {
  return (
    <button
      type="button"
      className="w-full max-w-[15.3rem] py-5 bg-mainBlue text-white border-2 border-bg-mainBlue focus:outline-none hover:bg-[#D8E7FF] hover:border-2 hover:border-white hover:text-mainBlue rounded-full font-bold font-productSans transition-all"
      onClick={onClick}
    >
      카카오톡 문의하기
    </button>
  );
}
