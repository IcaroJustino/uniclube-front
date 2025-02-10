/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default function DepartamentoCard(title: any, image: any) {
  return (
    <div className="flex flex-col justify-start">
      <div className="w-[96px] h-[96px] rounded-full bg-[#EAE0D5] hover:bg-[#F47920] flex justify-center">
        {image && (
          <img
            src={image}
            className="w-[50] h-[50] m-auto hover:fill-white hover:text-white"
          />
        )}
      </div>
      <span className="text-[#737373] hover:text-black font-normal text-base mt-[7px]">
        {title}
      </span>
    </div>
  );
}
