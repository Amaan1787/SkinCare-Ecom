import React from "react";

const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
        style={{
          backgroundImage: `url("https://t4.ftcdn.net/jpg/06/82/65/79/360_F_682657909_FvtTkzt0cHavPO1qbSZzRw89iRd30IKu.jpg")`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
            <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
            
            </div>
      </div>
    </div>
  );
};

export default MidBanner;
