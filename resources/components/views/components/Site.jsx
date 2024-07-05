import React from 'react'
import Image from "/xampp1/htdocs/my-laravel-app/public/assets/image.png";
import Mobile from "/xampp1/htdocs/my-laravel-app/public/assets/mobile.png";

export default function Site() {
  return (
    <div className="home flex flex-col gap-5 ">
    <div className="flex lg:gap-20 lg:justify-evenly lg:items-center xsm:justify-center xsm:items-center lg:m-40 xsm:flex-col-reverse ">
        <div className="content w-6/12">
            <h1 className="text-2xl font-bold xsm:mt-10 xsm:text-center">
                Task App | Desktop Site
            </h1>
            <p className="lg:mt-10 xsm:w-full xsm:mt-5 xsm:text-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ex quos quidem ipsa eaque repellendus
                asperiores. Asperiores tempora similique autem illo
                quam. Dicta accusantium perferendis cupiditate
                accusamus mollitia ratione soluta nemo?{" "}
            </p>
        </div>

        <div className="mockup-window border bg-base-300 w-6/12 xsm:mt-10">
            <div className="flex justify-center  bg-base-200">
                <img src={Image} alt="" className="w-full h-full" />
            </div>
        </div>
    </div>

    <div className="flex lg:gap-20 lg:justify-evenly lg:items-center xsm:justify-center xsm:items-center lg:m-40 xsm:flex-col xsm:mt-10">
        <div className="mockup-phone ">
            <div className="camera "></div>
            <div className="display">
                <div className="artboard artboard-demo phone-1">
                    <img
                        src={Mobile}
                        alt=""
                        className="w-full h-full "
                    />
                </div>
            </div>
        </div>
        <div className="content w-6/12 xsm:mt-10">
            <h1 className="text-2xl font-bold xsm:text-center">
                Task App | Mobile Site
            </h1>
            <p className="lg:mt-10  xsm:mt-5 xsm:text-center xsm:mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ex quos quidem ipsa eaque repellendus
                asperiores. Asperiores tempora similique autem illo
                quam. Dicta accusantium perferendis cupiditate
                accusamus mollitia ratione soluta nemo?{" "}
            </p>
        </div>
    </div>
</div>
  )
}
