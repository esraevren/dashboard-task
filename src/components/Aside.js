import React from 'react'
import myImage from '../assets/images/image3.png';
import Charts from './Charts';
import List from './List';

function Aside() {
  return (
    <>
    <div className='pt-3 flex justify-end space-x-9 mr-3 pb-2'>
      <div className='text-slate-800 font-bold mt-2'>Bessie Cooper</div>
      <img src='https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt="user"
        className='h-12 w-12 rounded-lg'
      ></img>
      <button ><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="black" stroke-width="0.916667" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </button>
      <button><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2502 17.4608C21.9949 20.2234 19.6343 22.3105 16.8613 22.2252C14.0882 22.14 11.8602 19.912 11.775 17.139C11.6898 14.3659 13.7768 12.0053 16.5394 11.75C15.3379 13.3754 15.5065 15.6353 16.9357 17.0645C18.365 18.4938 20.6248 18.6623 22.2502 17.4608V17.4608Z" stroke="#11263C" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </button>
    </div>


    <div className='bg-neutral-200 pt-1 h-full'>
    <div className='flex mt-8 ml-[64px] '>
      <div  className='text-slate-800 font-bold'>Superiority</div>
      <span className='ml-2 mt-[3px]'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5001C13.1421 16.5001 16.5 13.1423 16.5 9.00012C16.5 4.85799 13.1421 1.50012 9 1.50012C4.85786 1.50012 1.5 4.85799 1.5 9.00012C1.5 13.1423 4.85786 16.5001 9 16.5001Z" stroke="#D0D1D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 6.00012V9.00012" stroke="#D0D1D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="9" cy="12" r="0.75" fill="#D0D1D2"/>
</svg>
</span>
  </div>
  <div className='flex mt-8 ml-[64px] '>
    <img src={myImage} alt='myDashboard' className='rounded-xl shadow-xl'></img>
    
  </div>
  <div className='flex mt-4 ml-[64px] '>
    <span className=''><svg width="187" height="22" viewBox="0 0 187 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_710)">
<path d="M5.8335 11.5834C6.34039 12.261 7.11661 12.6851 7.96071 12.7455C8.8048 12.806 9.63354 12.4969 10.2318 11.8984L11.9818 10.1484C13.0872 9.00392 13.0714 7.18477 11.9463 6.05972C10.8212 4.93466 9.0021 4.91885 7.85766 6.02419L6.85433 7.02169" stroke="#422F8A" stroke-opacity="0.87" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.16678 10.4167C7.65989 9.73907 6.88367 9.31498 6.03957 9.25453C5.19547 9.19408 4.36674 9.50322 3.76845 10.1017L2.01845 11.8517C0.913115 12.9962 0.928923 14.8153 2.05398 15.9404C3.17904 17.0654 4.99818 17.0812 6.14262 15.9759L7.14012 14.9784" stroke="#422F8A" stroke-opacity="0.87" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.172 16.098C27.528 16.098 26.9493 15.986 26.436 15.762C25.932 15.5287 25.5353 15.2113 25.246 14.81C24.9567 14.3993 24.8073 13.928 24.798 13.396H26.156C26.2027 13.8533 26.3893 14.2407 26.716 14.558C27.052 14.866 27.5373 15.02 28.172 15.02C28.7787 15.02 29.2547 14.8707 29.6 14.572C29.9547 14.264 30.132 13.872 30.132 13.396C30.132 13.0227 30.0293 12.7193 29.824 12.486C29.6187 12.2527 29.362 12.0753 29.054 11.954C28.746 11.8327 28.3307 11.702 27.808 11.562C27.164 11.394 26.646 11.226 26.254 11.058C25.8713 10.89 25.54 10.6287 25.26 10.274C24.9893 9.91 24.854 9.42467 24.854 8.818C24.854 8.286 24.9893 7.81467 25.26 7.404C25.5307 6.99333 25.9087 6.676 26.394 6.452C26.8887 6.228 27.4533 6.116 28.088 6.116C29.0027 6.116 29.7493 6.34467 30.328 6.802C30.916 7.25933 31.2473 7.866 31.322 8.622H29.922C29.8753 8.24867 29.6793 7.922 29.334 7.642C28.9887 7.35267 28.5313 7.208 27.962 7.208C27.43 7.208 26.996 7.348 26.66 7.628C26.324 7.89867 26.156 8.28133 26.156 8.776C26.156 9.13067 26.254 9.42 26.45 9.644C26.6553 9.868 26.9027 10.0407 27.192 10.162C27.4907 10.274 27.906 10.4047 28.438 10.554C29.082 10.7313 29.6 10.9087 29.992 11.086C30.384 11.254 30.72 11.52 31 11.884C31.28 12.2387 31.42 12.724 31.42 13.34C31.42 13.816 31.294 14.264 31.042 14.684C30.79 15.104 30.4167 15.4447 29.922 15.706C29.4273 15.9673 28.844 16.098 28.172 16.098ZM36.6408 16.126C35.9221 16.126 35.2688 15.9627 34.6808 15.636C34.1021 15.3093 33.6448 14.8473 33.3088 14.25C32.9821 13.6433 32.8188 12.9433 32.8188 12.15C32.8188 11.366 32.9868 10.6753 33.3228 10.078C33.6681 9.47133 34.1348 9.00933 34.7228 8.692C35.3108 8.36533 35.9688 8.202 36.6968 8.202C37.4248 8.202 38.0828 8.36533 38.6708 8.692C39.2588 9.00933 39.7208 9.46667 40.0568 10.064C40.4021 10.6613 40.5748 11.3567 40.5748 12.15C40.5748 12.9433 40.3975 13.6433 40.0428 14.25C39.6975 14.8473 39.2261 15.3093 38.6288 15.636C38.0315 15.9627 37.3688 16.126 36.6408 16.126ZM36.6408 15.006C37.0981 15.006 37.5275 14.8987 37.9288 14.684C38.3301 14.4693 38.6521 14.1473 38.8948 13.718C39.1468 13.2887 39.2728 12.766 39.2728 12.15C39.2728 11.534 39.1515 11.0113 38.9088 10.582C38.6661 10.1527 38.3488 9.83533 37.9568 9.63C37.5648 9.41533 37.1401 9.308 36.6828 9.308C36.2161 9.308 35.7868 9.41533 35.3948 9.63C35.0121 9.83533 34.7041 10.1527 34.4708 10.582C34.2375 11.0113 34.1208 11.534 34.1208 12.15C34.1208 12.7753 34.2328 13.3027 34.4568 13.732C34.6901 14.1613 34.9981 14.4833 35.3808 14.698C35.7635 14.9033 36.1835 15.006 36.6408 15.006ZM41.7739 12.15C41.7739 11.3567 41.9325 10.666 42.2499 10.078C42.5672 9.48067 43.0059 9.01867 43.5659 8.692C44.1352 8.36533 44.7839 8.202 45.5119 8.202C46.4545 8.202 47.2292 8.43067 47.8359 8.888C48.4519 9.34533 48.8579 9.98 49.0539 10.792H47.6819C47.5512 10.3253 47.2945 9.95667 46.9119 9.686C46.5385 9.41533 46.0719 9.28 45.5119 9.28C44.7839 9.28 44.1959 9.532 43.7479 10.036C43.2999 10.5307 43.0759 11.2353 43.0759 12.15C43.0759 13.074 43.2999 13.788 43.7479 14.292C44.1959 14.796 44.7839 15.048 45.5119 15.048C46.0719 15.048 46.5385 14.9173 46.9119 14.656C47.2852 14.3947 47.5419 14.0213 47.6819 13.536H49.0539C48.8485 14.32 48.4379 14.95 47.8219 15.426C47.2059 15.8927 46.4359 16.126 45.5119 16.126C44.7839 16.126 44.1352 15.9627 43.5659 15.636C43.0059 15.3093 42.5672 14.8473 42.2499 14.25C41.9325 13.6527 41.7739 12.9527 41.7739 12.15ZM51.4118 7.082C51.1691 7.082 50.9638 6.998 50.7958 6.83C50.6278 6.662 50.5438 6.45667 50.5438 6.214C50.5438 5.97133 50.6278 5.766 50.7958 5.598C50.9638 5.43 51.1691 5.346 51.4118 5.346C51.6451 5.346 51.8411 5.43 51.9998 5.598C52.1678 5.766 52.2518 5.97133 52.2518 6.214C52.2518 6.45667 52.1678 6.662 51.9998 6.83C51.8411 6.998 51.6451 7.082 51.4118 7.082ZM52.0278 8.328V16H50.7538V8.328H52.0278ZM53.7231 12.136C53.7231 11.352 53.8818 10.666 54.1991 10.078C54.5164 9.48067 54.9504 9.01867 55.5011 8.692C56.0611 8.36533 56.6818 8.202 57.3631 8.202C58.0351 8.202 58.6184 8.34667 59.1131 8.636C59.6078 8.92533 59.9764 9.28933 60.2191 9.728V8.328H61.5071V16H60.2191V14.572C59.9671 15.02 59.5891 15.3933 59.0851 15.692C58.5904 15.9813 58.0118 16.126 57.3491 16.126C56.6678 16.126 56.0518 15.958 55.5011 15.622C54.9504 15.286 54.5164 14.8147 54.1991 14.208C53.8818 13.6013 53.7231 12.9107 53.7231 12.136ZM60.2191 12.15C60.2191 11.5713 60.1024 11.0673 59.8691 10.638C59.6358 10.2087 59.3184 9.882 58.9171 9.658C58.5251 9.42467 58.0911 9.308 57.6151 9.308C57.1391 9.308 56.7051 9.42 56.3131 9.644C55.9211 9.868 55.6084 10.1947 55.3751 10.624C55.1418 11.0533 55.0251 11.5573 55.0251 12.136C55.0251 12.724 55.1418 13.2373 55.3751 13.676C55.6084 14.1053 55.9211 14.4367 56.3131 14.67C56.7051 14.894 57.1391 15.006 57.6151 15.006C58.0911 15.006 58.5251 14.894 58.9171 14.67C59.3184 14.4367 59.6358 14.1053 59.8691 13.676C60.1024 13.2373 60.2191 12.7287 60.2191 12.15ZM64.934 5.64V16H63.66V5.64H64.934ZM76.8438 6.242V7.278H74.1838V16H72.9098V7.278H70.2358V6.242H76.8438ZM79.686 9.574C79.91 9.13533 80.2273 8.79467 80.638 8.552C81.058 8.30933 81.5667 8.188 82.164 8.188V9.504H81.828C80.4 9.504 79.686 10.2787 79.686 11.828V16H78.412V8.328H79.686V9.574ZM83.1586 12.136C83.1586 11.352 83.3173 10.666 83.6346 10.078C83.952 9.48067 84.386 9.01867 84.9366 8.692C85.4966 8.36533 86.1173 8.202 86.7986 8.202C87.4706 8.202 88.054 8.34667 88.5486 8.636C89.0433 8.92533 89.412 9.28933 89.6546 9.728V8.328H90.9426V16H89.6546V14.572C89.4026 15.02 89.0246 15.3933 88.5206 15.692C88.026 15.9813 87.4473 16.126 86.7846 16.126C86.1033 16.126 85.4873 15.958 84.9366 15.622C84.386 15.286 83.952 14.8147 83.6346 14.208C83.3173 13.6013 83.1586 12.9107 83.1586 12.136ZM89.6546 12.15C89.6546 11.5713 89.538 11.0673 89.3046 10.638C89.0713 10.2087 88.754 9.882 88.3526 9.658C87.9606 9.42467 87.5266 9.308 87.0506 9.308C86.5746 9.308 86.1406 9.42 85.7486 9.644C85.3566 9.868 85.044 10.1947 84.8106 10.624C84.5773 11.0533 84.4606 11.5573 84.4606 12.136C84.4606 12.724 84.5773 13.2373 84.8106 13.676C85.044 14.1053 85.3566 14.4367 85.7486 14.67C86.1406 14.894 86.5746 15.006 87.0506 15.006C87.5266 15.006 87.9606 14.894 88.3526 14.67C88.754 14.4367 89.0713 14.1053 89.3046 13.676C89.538 13.2373 89.6546 12.7287 89.6546 12.15ZM92.6196 12.136C92.6196 11.352 92.7782 10.666 93.0956 10.078C93.4129 9.48067 93.8469 9.01867 94.3976 8.692C94.9576 8.36533 95.5829 8.202 96.2736 8.202C96.8709 8.202 97.4262 8.342 97.9396 8.622C98.4529 8.89267 98.8449 9.252 99.1156 9.7V5.64H100.404V16H99.1156V14.558C98.8636 15.0153 98.4902 15.3933 97.9956 15.692C97.5009 15.9813 96.9222 16.126 96.2596 16.126C95.5782 16.126 94.9576 15.958 94.3976 15.622C93.8469 15.286 93.4129 14.8147 93.0956 14.208C92.7782 13.6013 92.6196 12.9107 92.6196 12.136ZM99.1156 12.15C99.1156 11.5713 98.9989 11.0673 98.7656 10.638C98.5322 10.2087 98.2149 9.882 97.8136 9.658C97.4216 9.42467 96.9876 9.308 96.5116 9.308C96.0356 9.308 95.6016 9.42 95.2096 9.644C94.8176 9.868 94.5049 10.1947 94.2716 10.624C94.0382 11.0533 93.9216 11.5573 93.9216 12.136C93.9216 12.724 94.0382 13.2373 94.2716 13.676C94.5049 14.1053 94.8176 14.4367 95.2096 14.67C95.6016 14.894 96.0356 15.006 96.5116 15.006C96.9876 15.006 97.4216 14.894 97.8136 14.67C98.2149 14.4367 98.5322 14.1053 98.7656 13.676C98.9989 13.2373 99.1156 12.7287 99.1156 12.15ZM103.215 7.082C102.972 7.082 102.767 6.998 102.599 6.83C102.431 6.662 102.347 6.45667 102.347 6.214C102.347 5.97133 102.431 5.766 102.599 5.598C102.767 5.43 102.972 5.346 103.215 5.346C103.448 5.346 103.644 5.43 103.803 5.598C103.971 5.766 104.055 5.97133 104.055 6.214C104.055 6.45667 103.971 6.662 103.803 6.83C103.644 6.998 103.448 7.082 103.215 7.082ZM103.831 8.328V16H102.557V8.328H103.831ZM109.74 8.188C110.673 8.188 111.429 8.47267 112.008 9.042C112.586 9.602 112.876 10.414 112.876 11.478V16H111.616V11.66C111.616 10.8947 111.424 10.3113 111.042 9.91C110.659 9.49933 110.136 9.294 109.474 9.294C108.802 9.294 108.265 9.504 107.864 9.924C107.472 10.344 107.276 10.9553 107.276 11.758V16H106.002V8.328H107.276V9.42C107.528 9.028 107.868 8.72467 108.298 8.51C108.736 8.29533 109.217 8.188 109.74 8.188ZM118.121 8.202C118.784 8.202 119.362 8.34667 119.857 8.636C120.361 8.92533 120.734 9.28933 120.977 9.728V8.328H122.265V16.168C122.265 16.868 122.116 17.4887 121.817 18.03C121.518 18.5807 121.089 19.01 120.529 19.318C119.978 19.626 119.334 19.78 118.597 19.78C117.589 19.78 116.749 19.542 116.077 19.066C115.405 18.59 115.008 17.9413 114.887 17.12H116.147C116.287 17.5867 116.576 17.96 117.015 18.24C117.454 18.5293 117.981 18.674 118.597 18.674C119.297 18.674 119.866 18.4547 120.305 18.016C120.753 17.5773 120.977 16.9613 120.977 16.168V14.558C120.725 15.006 120.352 15.3793 119.857 15.678C119.362 15.9767 118.784 16.126 118.121 16.126C117.44 16.126 116.819 15.958 116.259 15.622C115.708 15.286 115.274 14.8147 114.957 14.208C114.64 13.6013 114.481 12.9107 114.481 12.136C114.481 11.352 114.64 10.666 114.957 10.078C115.274 9.48067 115.708 9.01867 116.259 8.692C116.819 8.36533 117.44 8.202 118.121 8.202ZM120.977 12.15C120.977 11.5713 120.86 11.0673 120.627 10.638C120.394 10.2087 120.076 9.882 119.675 9.658C119.283 9.42467 118.849 9.308 118.373 9.308C117.897 9.308 117.463 9.42 117.071 9.644C116.679 9.868 116.366 10.1947 116.133 10.624C115.9 11.0533 115.783 11.5573 115.783 12.136C115.783 12.724 115.9 13.2373 116.133 13.676C116.366 14.1053 116.679 14.4367 117.071 14.67C117.463 14.894 117.897 15.006 118.373 15.006C118.849 15.006 119.283 14.894 119.675 14.67C120.076 14.4367 120.394 14.1053 120.627 13.676C120.86 13.2373 120.977 12.7287 120.977 12.15ZM134.674 9.098C134.674 9.91 134.394 10.5867 133.834 11.128C133.284 11.66 132.439 11.926 131.3 11.926H129.424V16H128.15V6.242H131.3C132.402 6.242 133.237 6.508 133.806 7.04C134.385 7.572 134.674 8.258 134.674 9.098ZM131.3 10.876C132.01 10.876 132.532 10.722 132.868 10.414C133.204 10.106 133.372 9.66733 133.372 9.098C133.372 7.894 132.682 7.292 131.3 7.292H129.424V10.876H131.3ZM137.532 5.64V16H136.258V5.64H137.532ZM139.227 12.136C139.227 11.352 139.386 10.666 139.703 10.078C140.02 9.48067 140.454 9.01867 141.005 8.692C141.565 8.36533 142.186 8.202 142.867 8.202C143.539 8.202 144.122 8.34667 144.617 8.636C145.112 8.92533 145.48 9.28933 145.723 9.728V8.328H147.011V16H145.723V14.572C145.471 15.02 145.093 15.3933 144.589 15.692C144.094 15.9813 143.516 16.126 142.853 16.126C142.172 16.126 141.556 15.958 141.005 15.622C140.454 15.286 140.02 14.8147 139.703 14.208C139.386 13.6013 139.227 12.9107 139.227 12.136ZM145.723 12.15C145.723 11.5713 145.606 11.0673 145.373 10.638C145.14 10.2087 144.822 9.882 144.421 9.658C144.029 9.42467 143.595 9.308 143.119 9.308C142.643 9.308 142.209 9.42 141.817 9.644C141.425 9.868 141.112 10.1947 140.879 10.624C140.646 11.0533 140.529 11.5573 140.529 12.136C140.529 12.724 140.646 13.2373 140.879 13.676C141.112 14.1053 141.425 14.4367 141.817 14.67C142.209 14.894 142.643 15.006 143.119 15.006C143.595 15.006 144.029 14.894 144.421 14.67C144.822 14.4367 145.14 14.1053 145.373 13.676C145.606 13.2373 145.723 12.7287 145.723 12.15ZM150.718 9.378V13.9C150.718 14.2733 150.797 14.5393 150.956 14.698C151.115 14.8473 151.39 14.922 151.782 14.922H152.72V16H151.572C150.863 16 150.331 15.8367 149.976 15.51C149.621 15.1833 149.444 14.6467 149.444 13.9V9.378H148.45V8.328H149.444V6.396H150.718V8.328H152.72V9.378H150.718ZM157.386 9.378H155.776V16H154.502V9.378H153.508V8.328H154.502V7.782C154.502 6.92333 154.721 6.298 155.16 5.906C155.608 5.50467 156.322 5.304 157.302 5.304V6.368C156.742 6.368 156.345 6.48 156.112 6.704C155.888 6.91867 155.776 7.278 155.776 7.782V8.328H157.386V9.378ZM162.217 16.126C161.498 16.126 160.845 15.9627 160.257 15.636C159.678 15.3093 159.221 14.8473 158.885 14.25C158.558 13.6433 158.395 12.9433 158.395 12.15C158.395 11.366 158.563 10.6753 158.899 10.078C159.244 9.47133 159.711 9.00933 160.299 8.692C160.887 8.36533 161.545 8.202 162.273 8.202C163.001 8.202 163.659 8.36533 164.247 8.692C164.835 9.00933 165.297 9.46667 165.633 10.064C165.978 10.6613 166.151 11.3567 166.151 12.15C166.151 12.9433 165.974 13.6433 165.619 14.25C165.274 14.8473 164.802 15.3093 164.205 15.636C163.608 15.9627 162.945 16.126 162.217 16.126ZM162.217 15.006C162.674 15.006 163.104 14.8987 163.505 14.684C163.906 14.4693 164.228 14.1473 164.471 13.718C164.723 13.2887 164.849 12.766 164.849 12.15C164.849 11.534 164.728 11.0113 164.485 10.582C164.242 10.1527 163.925 9.83533 163.533 9.63C163.141 9.41533 162.716 9.308 162.259 9.308C161.792 9.308 161.363 9.41533 160.971 9.63C160.588 9.83533 160.28 10.1527 160.047 10.582C159.814 11.0113 159.697 11.534 159.697 12.15C159.697 12.7753 159.809 13.3027 160.033 13.732C160.266 14.1613 160.574 14.4833 160.957 14.698C161.34 14.9033 161.76 15.006 162.217 15.006ZM169.1 9.574C169.324 9.13533 169.641 8.79467 170.052 8.552C170.472 8.30933 170.981 8.188 171.578 8.188V9.504H171.242C169.814 9.504 169.1 10.2787 169.1 11.828V16H167.826V8.328H169.1V9.574ZM182.275 8.188C182.872 8.188 183.404 8.314 183.871 8.566C184.337 8.80867 184.706 9.17733 184.977 9.672C185.247 10.1667 185.383 10.7687 185.383 11.478V16H184.123V11.66C184.123 10.8947 183.931 10.3113 183.549 9.91C183.175 9.49933 182.667 9.294 182.023 9.294C181.36 9.294 180.833 9.50867 180.441 9.938C180.049 10.358 179.853 10.9693 179.853 11.772V16H178.593V11.66C178.593 10.8947 178.401 10.3113 178.019 9.91C177.645 9.49933 177.137 9.294 176.493 9.294C175.83 9.294 175.303 9.50867 174.911 9.938C174.519 10.358 174.323 10.9693 174.323 11.772V16H173.049V8.328H174.323V9.434C174.575 9.03267 174.911 8.72467 175.331 8.51C175.76 8.29533 176.231 8.188 176.745 8.188C177.389 8.188 177.958 8.33267 178.453 8.622C178.947 8.91133 179.316 9.336 179.559 9.896C179.773 9.35467 180.128 8.93467 180.623 8.636C181.117 8.33733 181.668 8.188 182.275 8.188Z" fill="#422F8A" fill-opacity="0.87"/>
</g>
<defs>
<clipPath id="clip0_5_710">
<rect width="187" height="22" fill="white"/>
</clipPath>
</defs>
</svg>
    </span>
  </div>

  <div className='flex mt-9 ml-[64px] mr-[64px] rounded-xl bg-white shadow-xl ' ><List/> </div>
  


  <div className='flex mt-10 ml-[64px] '>
      <div  className='text-slate-800 font-bold'>My Income</div>
      <span className='ml-2 mt-[3px]'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5001C13.1421 16.5001 16.5 13.1423 16.5 9.00012C16.5 4.85799 13.1421 1.50012 9 1.50012C4.85786 1.50012 1.5 4.85799 1.5 9.00012C1.5 13.1423 4.85786 16.5001 9 16.5001Z" stroke="#D0D1D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 6.00012V9.00012" stroke="#D0D1D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="9" cy="12" r="0.75" fill="#D0D1D2"/>
</svg>
</span>
  </div>


  <Charts></Charts>
  
  

  </div>


    </>
  )
}

export default Aside