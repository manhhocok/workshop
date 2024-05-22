'use client';
import { images } from '@/images';
import { HelloIcon } from '@/images/icons';
import Image from 'next/image';
import React, { useState } from 'react';
import { PiSpinnerBallFill } from 'react-icons/pi';

function PreviousNextMethods() {
  const [count, setCount] = useState(1);
  const max = 4;

  return (
    <div className='slider-container relative w-full h-[700px] bg-sky-500'>
      {count == 1 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-white drop-shadow-lg p-2'>
          <div className='flex justify-center gap-5'>
            <h3
              className={`font-bold text-[80px] text-center mt-5 animate__animated animate__delay-1s animate__tada animate-spin `}
            >
              Hế nhô! Hế nhô!
            </h3>
            <div
              className={`flex justify-center mt-10 animate-ping animate__animated animate__delay-1s animate__shakeX animate__fast`}
            >
              <HelloIcon />
            </div>
          </div>
          <p
            className={`text-gray-600 font-medium text-xl animate__animated text-center mt-20 text-[40px] animate-pulse animate__bounce animate__delay-1s animate__delay-1s`}
          >
            Chào mừng mọi người đến với Workshop ngày hôm nay!
          </p>
          <div
            className={`flex justify-center animate__animated mt-5 animate__zoomInDown`}
          >
            <Image
              alt=''
              src={images.Anh3}
              width={400}
              height={400}
            />
          </div>
        </div>
      )}
      {count == 2 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5  rounded-lg bg-white drop-shadow-lg p-2'>
          <div className='w-full flex flex-col h-[1300px] bg-slate-300'>
            <p className='text-center font-semibold text-3xl'>web 1</p>
            <div className='w-[100%]'>
              <iframe
                className='w-full h-[600px] rounded-lg border-2 border-black'
                src='https://xuongnoithatgiare.com.vn/?gad_source=1&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz18252z31FpJgrbJylIdHc0YVxplfXXNdHRtFJZMmJMeswi70lNvC5caAuGKEALw_wcB'
                title='Example Website'
              />
            </div>
            <div className='border-4 border-black mt-5'></div>
            <p className='text-center font-semibold text-3xl'>web 2</p>
            <div className='w-[100%] '>
              <iframe
                className='w-full h-[600px] rounded-lg border-2 border-black'
                src='https://nhaxinh.com/'
                title='Example Website'
              />
            </div>
          </div>
        </div>
      )}
      {count == 3 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-white drop-shadow-lg p-2 relative z-10'>
          <div className='relative w-full'>
            <div className='absolute top-0 left-0 w-full h-[660px] z-0'>
              <Image
                className='w-full h-[650px] rounded-lg overflow-hidden'
                alt=''
                src={images.Header}
                height={6600}
                width={10000}
              />
            </div>
            <div className='z-10'>
              <div className='text-white uppercase font-bold text-6xl text-center pt-20 animate__animated animate__bounceInLeft animate__delay-1s '>
                tầm quan trọng của animation
              </div>
              <div className='text-white uppercase font-bold text-6xl text-center justify-center w-full pt-5 animate__animated animate__bounceInRight animate__delay-1s flex flex-row'>
                <p>đối với thiết kết website</p>
                <PiSpinnerBallFill className='animate-spin' />
              </div>
              <div className='relative z-20 pt-10 flex justify-center animate__animated animate__bounceIn animate__delay-1s'>
                <Image
                  className='w-[400px] h-[350px] rounded-lg overflow-hidden'
                  alt=''
                  src={images.Anh4}
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {count == 4 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-white drop-shadow-lg p-2 relative z-10'>
          <Image
            className='w-[300px] h-[300px] rounded-lg overflow-hidden'
            alt=''
            src={images.Anh4}
            height={300}
            width={300}
          />
        </div>
      )}

      {/* 2 nút */}
      <button
        onClick={() => {
          if (count == 1) {
            setCount(max);
          } else {
            setCount(count - 1);
          }
        }}
        className='bg-white border-2 rounded-3xl border-black text-black font-bold px-5 py-2 fixed top-[50%] left-0 z-50'
      >
        prev
      </button>
      <button
        onClick={() => {
          if (count == max) {
            setCount(1);
          } else {
            setCount(count + 1);
          }
        }}
        className='bg-white border-2 rounded-3xl border-black text-black font-bold px-5 py-2 fixed top-[50%] right-0 z-50'
      >
        next
      </button>
    </div>
  );
}

export default PreviousNextMethods;
