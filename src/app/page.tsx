'use client';
import { images } from '@/images';
import { HelloIcon } from '@/images/icons';
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsEmojiExpressionlessFill, BsEmojiGrinFill } from 'react-icons/bs';
import { FaCartArrowDown, FaHandPointDown } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { PiSpinnerBallFill } from 'react-icons/pi';
function PreviousNextMethods() {
  const [count, setCount] = useState(1);
  const max = 10;
  const [check, setCheck] = useState(false);
  const [checkCuoi, setCheckCuoi] = useState(false);
  const [checkKhoc, setCheckKhoc] = useState(false);

  return (
    <div className='slider-container relative w-full h-[700px] bg-sky-500'>
      {count == 1 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-white drop-shadow-lg p-2'>
          <div className='flex justify-center gap-5'>
            <h3
              className={`font-bold text-[80px] text-center mt-5 animate__animated animate__delay-1s animate__tada animate-spin text-black`}
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
          <p className='text-center font-bold text-4xl uppercase'>
            {' '}
            lợi ích - được gì
          </p>
          <div className='gap-5 text-2xl font-medium pt-5'>
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-1'>
                1. Cải thiện Trải nghiệm Người dùng - UX
              </p>
              <div className='absolute w-[45%] top-[10%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Hướng dẫn người dùng:
                  Animation giúp người dùng hiểu cách sử dụng website bằng cách
                  hướng dẫn họ qua các bước hoặc quy trình phức tạp.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Phản hồi tức thì: Các hiệu
                  ứng như hover, click giúp người dùng biết rằng hành động của
                  họ đã được nhận diện và phản hồi, tạo cảm giác tương tác mượt
                  mà.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-2'>
                2. Tăng Cường Hiệu quả Giao diện Người dùng - UI
              </p>
              <div className='absolute w-[45%] top-[12%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Thu hút sự chú ý: Animation
                  có thể làm nổi bật các yếu tố quan trọng, giúp người dùng tập
                  trung vào các thông tin hoặc chức năng quan trọng.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Giảm sự lộn xộn: Các hiệu
                  ứng như dropdown hoặc modal giúp hiển thị thông tin theo từng
                  phần, tránh việc hiển thị quá nhiều thông tin cùng một lúc.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-3'>
                3. Nâng cao Thương Hiệu
              </p>
              <div className='absolute w-[45%] top-[15%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Tính nhất quán: Animation
                  được thiết kế đồng nhất với phong cách thương hiệu sẽ giúp tạo
                  dấu ấn và làm cho thương hiệu trở nên đáng nhớ hơn.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Tạo ấn tượng tốt: Một
                  website với các hiệu ứng animation mượt mà và chuyên nghiệp sẽ
                  tạo ấn tượng tốt về chất lượng và sự chăm sóc trong thiết kế.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-4'>
                4. Cải thiện Tỷ Lệ Chuyển Đổi
              </p>
              <div className='absolute w-[45%] top-[19%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Tạo trải nghiệm thú vị:
                  Animation làm cho việc duyệt web trở nên thú vị hơn, giữ chân
                  người dùng lâu hơn trên trang web.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Hướng dẫn hành động: Hiệu
                  ứng animation có thể hướng dẫn người dùng đến các hành động
                  mong muốn như đăng ký, mua hàng, hoặc điền form.
                </p>
              </div>
              <div className='absolute w-[45%] bottom-5 left-[50%] p-10 z-50 drop-shadow-lg text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <FaHandPointDown className='text-4xl animate-bounce text-blue-950' />
                <FaCartArrowDown className='text-6xl text-orange-500' />
              </div>
            </div>
            {/* 5 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-5'>
                5. Giải thích và Minh họa Thông Tin
              </p>
              <div className='absolute w-[45%] top-[23%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Trình bày thông tin phức
                  tạp: Animation có thể minh họa các ý tưởng hoặc quy trình phức
                  tạp một cách dễ hiểu và sinh động hơn so với văn bản hoặc hình
                  ảnh tĩnh.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Kể chuyện Storytelling:
                  Animation có thể được sử dụng để kể câu chuyện, giúp truyền
                  tải thông điệp một cách hấp dẫn và dễ hiểu.
                </p>
              </div>
              <div className='absolute w-[45%] bottom-5 left-[50%] p-2 flex justify-center z-50 drop-shadow-lg  text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <Image
                  className='w-[300px] h-[300px] rounded-lg overflow-hidden'
                  alt=''
                  src={images.Anh5}
                  height={300}
                  width={300}
                />
              </div>
            </div>
            {/* 6 */}
            <div className='group'>
              <button
                onClick={() => {
                  setCheck(!check);
                }}
                className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer text-left animate__animated animate__fadeInLeft loiich-6'
              >
                6. Tăng Tính Tương Tác
              </button>
              <div className='absolute w-[45%] top-[28%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Khuyến khích tương tác: Các
                  yếu tố tương tác như trò chơi nhỏ hoặc các hiệu ứng khi kéo
                  thả giúp tạo ra trải nghiệm thú vị và kích thích người dùng
                  tương tác nhiều hơn.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Phản hồi tức thời: Các hiệu
                  ứng animation giúp cung cấp phản hồi ngay lập tức khi người
                  dùng thực hiện hành động, tạo cảm giác tương tác liên tục.
                </p>
              </div>

              {check && (
                <div className='absolute w-[45%] bottom-5 left-[50%] p-10 z-50 drop-shadow-lg rounded-lg'>
                  <div className='flex items-center gap-5'>
                    <p className='text-black'>Mua hàng ở đây</p>
                    <AiOutlineArrowDown className='text-3xl animate-bounce' />
                  </div>
                  <div className='w-full flex justify-center gap-5'>
                    <button
                      onClick={() => {
                        setCheckKhoc(!checkKhoc);
                      }}
                      className=''
                    >
                      biến
                    </button>
                    {checkKhoc && (
                      <BsEmojiExpressionlessFill className='text-4xl ' />
                    )}
                  </div>
                  <div className='w-full flex justify-center  gap-5'>
                    <button
                      onClick={() => {
                        setCheckCuoi(!checkCuoi);
                      }}
                      className=''
                    >
                      mua ngay
                    </button>
                    {checkCuoi && <BsEmojiGrinFill className='text-4xl ' />}
                  </div>
                </div>
              )}
            </div>
            {/* 7 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-7'>
                7. Tăng Hiệu Quả Truyền Thông
              </p>
              <div className='absolute w-[45%] top-[34%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Tạo điểm nhấn: Animation
                  giúp làm nổi bật các thông tin quan trọng hoặc các chương
                  trình khuyến mãi đặc biệt, giúp truyền thông điệp hiệu quả
                  hơn.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Dẫn dắt hành vi: Animation
                  có thể hướng dẫn người dùng đến những hành vi cụ thể như điền
                  form, đăng ký bản tin, hoặc nhấp vào các liên kết quan trọng.
                </p>
              </div>
              <div className='absolute w-[45%] bottom-5 left-[50%] p-10 z-50 drop-shadow-lg text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <Image
                  className='w-[200px] h-[100px] rounded-lg overflow-hidden animate__animated animate__swing animate-bounce '
                  alt=''
                  src={images.Anh6}
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {count == 5 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-white drop-shadow-lg p-2 relative z-10'>
          <p className='text-center font-bold text-4xl uppercase'>
            Tác hại khi quá lạm dụng vào animation
          </p>
          <div className='gap-5 text-2xl font-medium pt-5'>
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-1'>
                1. Gây Phân Tâm và Mất Tập Trung
              </p>
              <div className='absolute w-[45%] top-[10%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Quá nhiều yếu tố chuyển
                  động: Animation liên tục có thể gây phân tán sự chú ý của
                  người dùng khỏi nội dung chính.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Khó tập trung: Người dùng
                  có thể gặp khó khăn trong việc tập trung vào thông tin quan
                  trọng nếu có quá nhiều yếu tố động.
                </p>
              </div>
              <div className='absolute w-[45%] bottom-5 left-[50%] p-2 flex justify-center z-50 drop-shadow-lg  text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <Image
                  className='w-[400px] h-[300px] rounded-lg overflow-hidden'
                  alt=''
                  src={images.Anh7}
                  height={4000}
                  width={3000}
                />
              </div>
            </div>
            {/* 2 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-2'>
                2. Tăng Thời Gian Tải Trang
              </p>
              <div className='absolute w-[45%] top-[12%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Tốc độ tải chậm: Animation
                  phức tạp và nhiều có thể làm tăng thời gian tải trang, ảnh
                  hưởng đến trải nghiệm người dùng.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Ảnh hưởng SEO: Tốc độ tải
                  trang chậm cũng có thể ảnh hưởng đến xếp hạng SEO của trang
                  web.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-3'>
                3. Gây Khó Chịu và Mệt Mỏi
              </p>
              <div className='absolute w-[45%] top-[15%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Mệt mỏi thị giác: Animation
                  liên tục và lặp đi lặp lại có thể gây mệt mỏi cho mắt, làm
                  giảm sự thoải mái khi duyệt web.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Khó chịu: Các hiệu ứng
                  chuyển động mạnh hoặc không phù hợp có thể gây khó chịu và làm
                  người dùng rời bỏ trang web.
                </p>
              </div>
              <div className='absolute w-[45%] bottom-5 left-[50%] p-2 flex justify-center z-50 drop-shadow-lg  text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <Image
                  className='w-[300px] h-[300px] rounded-lg overflow-hidden'
                  alt=''
                  src={images.Anh8}
                  height={4000}
                  width={3000}
                />
              </div>
            </div>
            {/* 4 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-4'>
                4. Ảnh Hưởng Đến Khả Năng Truy Cập
              </p>
              <div className='absolute w-[45%] top-[19%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Truy cập khó khăn:
                  Animation có thể làm khó khăn hơn cho người dùng khuyết tật,
                  đặc biệt là những người sử dụng các công nghệ trợ giúp như
                  screen readers.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Tiêu chuẩn truy cập web:
                  Việc lạm dụng animation có thể vi phạm các tiêu chuẩn truy cập
                  web, làm giảm tính toàn diện của trang web.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-5'>
                5. Gây Lỗi và Vấn Đề Kỹ Thuật
              </p>
              <div className='absolute w-[45%] top-[23%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' />
                  Lỗi trình duyệt: Các animation phức tạp có thể không tương
                  thích với mọi trình duyệt hoặc thiết bị, gây ra lỗi hiển thị.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Vấn đề hiệu suất: Animation
                  tiêu tốn nhiều tài nguyên có thể gây ra vấn đề về hiệu suất,
                  đặc biệt trên các thiết bị cũ hoặc yếu.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className='group'>
              <button
                onClick={() => {
                  setCheck(!check);
                }}
                className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer text-left animate__animated animate__fadeInLeft loiich-6'
              >
                6. Làm Mất Tính Chuyên Nghiệp
              </button>
              <div className='absolute w-[45%] top-[28%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Thiếu chuyên nghiệp:
                  Animation quá nhiều hoặc không phù hợp có thể làm giảm tính
                  chuyên nghiệp của trang web, gây ấn tượng không tốt cho người
                  dùng.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' />
                  Mất đi sự tin cậy: Người dùng có thể cảm thấy trang web thiếu
                  tin cậy hoặc không nghiêm túc nếu animation được sử dụng một
                  cách quá mức.
                </p>
              </div>
            </div>
            {/* 7 */}
            <div className='group'>
              <p className='hover:bg-black hover:text-white w-[45%] rounded-lg cursor-pointer animate__animated animate__fadeInLeft loiich-7'>
                7. Giảm Tỷ Lệ Chuyển Đổi
              </p>
              <div className='absolute w-[45%] top-[34%] left-[50%] p-2 z-50 drop-shadow-lg bg-slate-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out delay-0 group-hover:duration-500 gap-2'>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Gây cản trở: Animation
                  không cần thiết có thể cản trở người dùng thực hiện các hành
                  động mong muốn như đăng ký, mua hàng hoặc điền form.
                </p>
                <p className='flex flex-row text-sm'>
                  <GoDotFill className='text-2xl' /> Gây gián đoạn: Người dùng
                  có thể rời khỏi trang web nếu họ cảm thấy bị làm phiền bởi quá
                  nhiều hiệu ứng động.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {count == 6 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-gray-200 text-black drop-shadow-lg p-2 relative z-10'>
          <p className='text-center text-4xl font-semibold pt-5'>
            Các thư viện và plugin hỗ trợ - dùng gì để làm animation cho web
          </p>

          <div className='grid grid-cols-4 gap-5 pt-10'>
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 '
              alt=''
              src={images.Anh9}
              height={4000}
              width={3000}
            />
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0'
              alt=''
              src={images.Anh10}
              height={4000}
              width={3000}
            />
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0'
              alt=''
              src={images.Anh11}
              height={4000}
              width={3000}
            />
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0'
              alt=''
              src={images.Anh12}
              height={4000}
              width={3000}
            />
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0'
              alt=''
              src={images.Anh13}
              height={4000}
              width={3000}
            />
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0'
              alt=''
              src={images.Anh14}
              height={4000}
              width={3000}
            />
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0'
              alt=''
              src={images.Anh15}
              height={4000}
              width={3000}
            />
            <Image
              className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0'
              alt=''
              src={images.Anh00}
              height={4000}
              width={3000}
            />
          </div>
        </div>
      )}

      {count == 7 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-gray-200 text-black drop-shadow-lg p-2 relative z-10'>
          <p className='text-center text-4xl font-semibold pt-5'>
            kể chuyện cùng animation
          </p>
          <div className='p-10 grid grid-cols-2 text-2xl gap-5'>
            <div className=''>
              <p className='font-medium animate__animated animate__fadeIn chuyen-1'>
                - Một ngày lọ
              </p>
              <p className='font-medium animate__animated animate__fadeIn chuyen-2'>
                - Có một chàng sinh viên đang đi trên đường thì gặp một ông cụ
                trông có vẻ rất thông thái
              </p>
            </div>
            <div className='flex justify-center'>
              <Image
                className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 animate__animated animate__fadeIn chuyen-3'
                alt=''
                src={images.Anh20}
                height={4000}
                width={3000}
              />
            </div>
            {/* 2 */}

            <div className='flex justify-center'>
              <Image
                className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 animate__animated animate__fadeIn chuyen-4'
                alt=''
                src={images.Anh21}
                height={4000}
                width={3000}
              />
            </div>
            <div className=''>
              <p className='font-medium animate__animated animate__fadeIn chuyen-5'>
                - Chàng sinh viên hỏi ông cụ:
              </p>
              <p className='font-medium animate__animated animate__fadeIn chuyen-6'>
                - Thưa cụ, bí quyết nào giúp cụ sống lâu và khỏe mạnh như vậy?
              </p>
            </div>
          </div>
        </div>
      )}

      {count == 8 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-gray-200 text-black drop-shadow-lg p-2 relative z-10'>
          <p className='text-center text-4xl font-semibold pt-5'>
            kể chuyện cùng animation
          </p>
          <div className='p-10 grid grid-cols-2 text-2xl gap-5'>
            <div className=''>
              <p className='font-medium animate__animated animate__fadeIn chuyen-1'>
                - Ông cụ mỉm cười và trả lời:
              </p>
              <p className='font-medium animate__animated animate__fadeIn chuyen-2'>
                - Đơn giản thôi, cháu à. Mỗi ngày cụ thức dậy lúc 5 giờ sáng,
                chạy bộ 10km, ăn một bữa sáng lành mạnh, không uống rượu, không
                hút thuốc và ngủ đủ giấc.
              </p>
            </div>
            <div className='flex justify-center'>
              <Image
                className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 animate__animated animate__fadeIn chuyen-3'
                alt=''
                src={images.Anh22}
                height={4000}
                width={3000}
              />
            </div>
            {/* 2 */}

            <div className='flex justify-center'>
              <Image
                className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 animate__animated animate__fadeIn chuyen-4'
                alt=''
                src={images.Anh23}
                height={4000}
                width={3000}
              />
            </div>
            <div className=''>
              <p className='font-medium animate__animated animate__fadeIn chuyen-5'>
                - Chàng sinh viên ngạc nhiên và hỏi tiếp:
              </p>
              <p className='font-medium animate__animated animate__fadeIn chuyen-6'>
                - Thật ạ? Cụ đã làm như vậy trong bao lâu?
              </p>
            </div>
          </div>
        </div>
      )}

      {count == 9 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-gray-200 text-black drop-shadow-lg p-2 relative z-10'>
          <p className='text-center text-4xl font-semibold pt-5'>
            kể chuyện cùng animation
          </p>
          <div className='p-10 grid grid-cols-2 text-2xl gap-5'>
            <div className=''>
              <p className='font-medium animate__animated animate__fadeIn animate__delay-1s'>
                - Ông cụ cười và đáp:
              </p>
              <p className='font-medium animate__animated animate__fadeIn animate__delay-3s'>
                - Không, cụ không làm như vậy
              </p>
              <p className='font-medium animate__animated animate__fadeIn animate__delay-5s'>
                - Nhưng đó là những gì bác sĩ nói với cụ khi cụ hỏi cùng câu hỏi
                này
              </p>
              <p className='font-medium animate__animated animate__fadeIn chuyen-9-1 '>
                - Cụ thì chỉ uống một ly rượu vang mỗi ngày, ăn bất cứ thứ gì
                mình thích, và thi thoảng còn thức khuya để xem phim nữa
              </p>
            </div>
            <div className='flex justify-center'>
              <Image
                className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 animate__animated animate__fadeIn animate__delay-2s'
                alt=''
                src={images.Anh24}
                height={4000}
                width={3000}
              />
            </div>
            {/* 2 */}

            <div className='flex justify-center'>
              <Image
                className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 animate__animated animate__fadeIn chuyen-9-2'
                alt=''
                src={images.Anh25}
                height={4000}
                width={3000}
              />
            </div>
            <div className=''>
              <p className='font-medium animate__animated animate__fadeIn chuyen-9-2'>
                - Chàng sinh viên tròn mắt ngạc nhiên hỏi:
              </p>
              <p className='font-medium animate__animated animate__fadeIn chuyen-9-3'>
                - Vậy cụ đã sống lâu được bao nhiêu năm rồi?
              </p>
            </div>
          </div>
        </div>
      )}

      {count == 10 && (
        <div className='animate__animated animate__zoomIn w-[96%] mx-[2%] my-5 h-[660px] rounded-lg bg-gray-200 text-black drop-shadow-lg p-2 relative z-10'>
          <p className='text-center text-4xl font-semibold pt-5'>
            kể chuyện cùng animation
          </p>
          <div className='p-10 grid grid-cols-2 text-2xl gap-5'>
            <div className=''>
              <p className='font-medium animate__animated animate__fadeIn animate__delay-1s'>
                - Ông cụ trả lời:
              </p>
              <p className='font-medium animate__animated animate__fadeIn animate__delay-2s'>
                - Năm nay tôi hơn 70 tuổi
              </p>
              <p className='font-medium animate__animated animate__fadeIn animate__delay-4s'>
                - À Nhầm
              </p>
              <p className='font-medium animate__animated animate__fadeIn animate__delay-5s'>
                - Cụ vừa mới 30 tuổi tuần trước thôi, cháu à!
              </p>
            </div>
            <div className='flex justify-center'>
              <Image
                className='w-[300px] h-[200px] rounded-lg overflow-hidden drop-shadow-lg hover:scale-110 z-50 duration-500 hover:duration-500 delay-0 animate__animated animate__fadeIn animate__delay-2s'
                alt=''
                src={images.Anh26}
                height={4000}
                width={3000}
              />
            </div>
            {/* 2 */}
          </div>
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
