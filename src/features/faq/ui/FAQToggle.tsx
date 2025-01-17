import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FAQItem } from "../type/FAQItem";

type FAQToggleProps = {
  faq: FAQItem;
  isClose: boolean;
  onToggle: () => void;
};

export function FAQToggle({ faq, isClose, onToggle }: FAQToggleProps) {
  return (
    <div className="w-full flex flex-col gap-y-5 border-t py-6 border-black-100 font-productSans">
      <div className="flex justify-between">
        <div className="text-lg font-bold">{faq.question}</div>
        <div className="cursor-pointer" onClick={onToggle}>
          {/**열린 상태라면 (isClose=false) 마이너스 버튼
           * 닫힌 상태라면 (isClose=true) 플러스 버튼
           */}
          {!isClose ? (
            <FontAwesomeIcon
              icon={faCircleMinus}
              style={{ color: "#4285F4" }}
            />
          ) : (
            <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#4285F4" }} />
          )}
        </div>
      </div>
      {!isClose && (
        <div className="text-lg font-normal text-black-100">{faq.answer}</div>
      )}
    </div>
  );
}
