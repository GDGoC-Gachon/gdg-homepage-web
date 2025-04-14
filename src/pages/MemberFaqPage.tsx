import { useState } from 'react';
import { ReactComponent as FaqIcon } from '../shared/assets/icons/member/common/memberFaqIcon.svg';
import FaQSettingCard from '../features/member/faq/ui/FaQSettingCard';

function MemberFaqPage() {
  const [questionInput, setQuestionInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [faqList, setFaqList] = useState<{ question: string; answer: string }[]>([]);

  const handleAddFaq = () => {
    if (!questionInput.trim() || !answerInput.trim()) return;

    setFaqList(prev => [...prev, { question: questionInput, answer: answerInput }]);
    setQuestionInput('');
    setAnswerInput('');
  };

  return (
    <div className="pl-48 w-full flex">
      <div className="px-[8rem] py-[4rem] w-full flex flex-col items-start gap-10">
        {/* 타이틀 */}
        <div className="flex-center gap-2 text-[#0B63F8]">
          <FaqIcon className="w-8"/>
          <span className="font-bold text-2xl">설정</span>
        </div>

        {/* 컨텐츠 */}
        <div className="w-full flex flex-col items-start gap-4">
          <div className="text-xl font-bold text-[#64748B]">FAQ 설정</div>

          {/* 입력폼 */}
          <div className="px-10 pt-12 pb-6 mb-2 w-full rounded-xl flex-center flex-col gap-8 bg-[#FFF] shadow-lg">
            <div className='w-full flex items-center gap-8'>
              <div className="text-xl font-bold text-[#64748B]">질문</div>
              <input
                type="text"
                placeholder='최대 100자'
                maxLength={100}
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                className='p-3 w-[34.5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
              />
            </div>
            <div className='w-full items-center flex gap-8'>
              <div className="text-xl font-bold text-[#64748B]">답변</div>
              <input
                type="text"
                placeholder='최대 500자'
                maxLength={500}
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
                className='p-3 w-[34.5rem] border-[1.5px] border-[#E7EAEE] rounded-lg text-sm focus:outline-none'
              />
            </div>
            <div className='w-full flex justify-end'>
              <button
                onClick={handleAddFaq}
                className="mb-4 w-36 h-10 rounded-lg bg-mainBlue text-sm text-[white] font-semibold transition-all duration-150 ease-in-out hover:bg-[#3D72CB]"
              >
                추가하기
              </button>
            </div>
          </div>

          {/* FAQ 리스트 */}
          <div className="mt-4 text-xl font-bold text-[#64748B]">FAQ 목록</div>
          {faqList.map((faq, index) => (
            <FaQSettingCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              onDelete={() => {
                setFaqList(prev => prev.filter((_, i) => i !== index));
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MemberFaqPage;
