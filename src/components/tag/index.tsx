interface TagProps {
  title: string;
}

export const Tag = ({ title, ...rest }: TagProps) => {
  return (
    <span
      className="h-[24px] bg-[#FF9000] rounded-[5px] text-[#232129] font-semibold px-3 py-4 flex items-center justify-center"
      {...rest}
    >
      {title}
    </span>
  );
};
