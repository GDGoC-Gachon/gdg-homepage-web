function LabelWithAsterisk ({ children }: { children: string }) {
  return (
   <div className="font-bold font-googleSansDisplay">
     {children}
     <span className="ml-2 text-mainBlue">*</span>
   </div>
  );
}

export default LabelWithAsterisk;
