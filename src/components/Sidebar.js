import React from 'react'

function Sidebar() {
    return (
        <div className='flex h-full '>
            <div className='w-20 h-full  '>
                <a href="#"></a>

                <div className='flex flex-col items-center h-full space-y-2 mt-5'>
                    <a href="#" ><svg className='mb-9' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 10H17.5" stroke="#D0D1D2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 5H17.5" stroke="#D0D1D2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.5 15H17.5" stroke="#D0D1D2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    </a>
                    <a href="#"><svg className='mb-0' width="80" height="66" viewBox="0 0 80 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="13" width="40" height="40" rx="15" fill="#F7931A" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.5482 30.0303C51.0186 26.8859 48.6245 25.1956 45.3509 24.0679L46.4128 19.8085L43.8201 19.1623L42.7862 23.3095C42.1046 23.1397 41.4046 22.9794 40.7089 22.8207L41.7502 18.6462L39.1589 18L38.0962 22.258C37.5321 22.1295 36.9782 22.0025 36.4406 21.8688L36.4436 21.8555L32.8679 20.9627L32.1782 23.7319C32.1782 23.7319 34.1019 24.1728 34.0613 24.2001C35.1114 24.4623 35.3012 25.1572 35.2694 25.7081L34.0598 30.5605C34.1322 30.579 34.226 30.6055 34.3294 30.6469L34.2415 30.625L34.2414 30.6249C34.1813 30.6099 34.119 30.5942 34.0554 30.579L32.3599 37.3765C32.2314 37.6955 31.9057 38.174 31.1717 37.9924C31.1975 38.03 29.2871 37.522 29.2871 37.522L28 40.4898L31.374 41.331C31.7508 41.4254 32.1231 41.5225 32.4915 41.6185L32.4921 41.6187C32.7372 41.6826 32.9805 41.7461 33.2224 41.808L32.1494 46.1162L34.7392 46.7623L35.8018 42.4999C36.5093 42.6919 37.1961 42.8692 37.8681 43.0361L36.8091 47.2785L39.4018 47.9247L40.4748 43.6246C44.896 44.4613 48.2206 44.1238 49.6199 40.125C50.7476 36.9054 49.5638 35.0481 47.2377 33.837C48.9317 33.4464 50.2078 32.3321 50.5482 30.0303ZM44.6242 38.3372C43.8892 41.2911 39.2655 40.0699 37.1499 39.5112L37.1496 39.5111C36.9594 39.4608 36.7894 39.4159 36.6444 39.3799L38.0682 33.6724C38.2448 33.7165 38.4607 33.7649 38.7052 33.8197L38.7052 33.8198C40.8933 34.3107 45.3775 35.3169 44.6242 38.3372ZM39.1448 31.171C40.9087 31.6418 44.756 32.6685 45.4262 29.9838C46.1106 27.2376 42.3712 26.4098 40.545 26.0056C40.3396 25.9601 40.1583 25.92 40.0103 25.8831L38.7195 31.0597C38.8414 31.0901 38.9845 31.1283 39.1448 31.171Z" fill="white" />
                    </svg>
                    </a>
                    <a href="#" ><svg className='mb-0' width="80" height="66" viewBox="0 0 80 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="13" width="40" height="40" rx="15" fill="#1F8DED" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9091 22.0909C38.9091 21.4885 39.3976 21 40 21C40.6025 21 41.0909 21.4885 41.0909 22.0909V37.9091C41.0909 38.5115 40.6025 39 40 39C39.3976 39 38.9091 38.5115 38.9091 37.9091V22.0909ZM34.5455 21.552C33.943 21.552 33.4546 22.0405 33.4546 22.6429V37.2169C33.4546 37.8194 33.943 38.3078 34.5455 38.3078C35.1479 38.3078 35.6364 37.8194 35.6364 37.2169V22.6429C35.6364 22.0405 35.1479 21.552 34.5455 21.552ZM50.9091 35.7273C51.5116 35.7273 52 35.2388 52 34.6364V24.8247C52 24.2223 51.5116 23.7338 50.9091 23.7338C50.3067 23.7338 49.8182 24.2223 49.8182 24.8247V34.6364C49.8182 35.2388 50.3067 35.7273 50.9091 35.7273ZM40 45C47.4095 45 51.4508 41.6089 51.6193 41.4646C52.0767 41.0725 52.1296 40.3838 51.7374 39.9262C51.3455 39.4685 50.6555 39.4159 50.1989 39.8081C50.164 39.8381 46.6109 42.8182 40 42.8182C33.4709 42.8182 29.8625 39.8594 29.7984 39.8059C29.3408 39.4156 28.6538 39.4696 28.2627 39.9262C27.8705 40.3838 27.9237 41.0725 28.3808 41.4646C28.5493 41.6089 32.5906 45 40 45ZM28 24.8247C28 24.2223 28.4885 23.7338 29.0909 23.7338C29.6934 23.7338 30.1818 24.2223 30.1818 24.8247V34.6364C30.1818 35.2388 29.6934 35.7273 29.0909 35.7273C28.4885 35.7273 28 35.2388 28 34.6364V24.8247ZM45.4546 21.552C44.8521 21.552 44.3637 22.0405 44.3637 22.6429V37.2169C44.3637 37.8194 44.8521 38.3078 45.4546 38.3078C46.057 38.3078 46.5455 37.8194 46.5455 37.2169V22.6429C46.5455 22.0405 46.057 21.552 45.4546 21.552Z" fill="white" />
                    </svg>
                    </a>
                    <a href="#" ><svg  className='mb-0'  width="80" height="66" viewBox="0 0 80 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="13" width="40" height="40" rx="15" fill="#FF7977" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.9992 40.2178C51.9907 39.4657 51.8276 38.6978 51.5315 37.9311C51.3849 37.5502 51.2554 37.2503 50.9622 36.596L50.945 36.5578L50.8637 36.3761C49.0642 32.3815 47.1715 28.4213 45.1863 24.4956C45.1361 24.3969 45.096 24.318 45.0076 24.1432L45.0039 24.136C44.6792 23.4943 44.5295 23.2043 44.3347 22.8477C43.978 22.1994 43.6145 21.6927 43.1754 21.2781C42.4027 20.5279 41.3569 20.0699 40.2704 20.001L39.7975 20C38.6563 20.0567 37.5757 20.5329 36.781 21.3219C36.3648 21.7233 36.0158 22.2151 35.6674 22.8475C35.4719 23.2043 35.3111 23.5154 35.0044 24.122L34.9682 24.1936L34.8282 24.4701C33.5072 27.0809 32.2178 29.7278 30.9593 32.4114C30.0389 34.3824 29.3888 35.8017 28.7634 37.2197C28.3773 38.099 28.1587 38.7567 28.0631 39.4551C27.8607 40.8025 28.1498 42.2239 28.8637 43.3924C29.4784 44.4065 30.4004 45.2203 31.4735 45.6912C32.3096 46.0594 33.2312 46.2258 34.1385 46.1712C35.285 46.1093 36.4364 45.7067 37.5032 45.0334C38.3555 44.5007 39.1327 43.8307 40.0014 42.9204C40.788 43.747 41.5031 44.3758 42.2773 44.8903C43.3323 45.5972 44.4637 46.0406 45.6051 46.1504C46.9321 46.2916 48.3023 45.9534 49.4111 45.2044C50.3873 44.5497 51.1582 43.5845 51.5914 42.4762C51.8725 41.7596 52.0122 40.9871 51.9992 40.2178ZM49.2981 41.3062C49.0689 42.1117 48.5158 42.8178 47.7978 43.2222C47.1651 43.5826 46.401 43.7127 45.6715 43.5886C44.8027 43.4508 43.9484 43.0019 43.0595 42.2725C42.6236 41.9159 42.2029 41.5093 41.7243 40.9919C42.5823 39.8589 43.22 38.8685 43.7234 37.8379C44.3448 36.5616 44.6952 35.3698 44.7322 34.1863C44.7569 33.2974 44.5823 32.4409 44.2035 31.7056C43.692 30.6924 42.7729 29.8948 41.6908 29.507C40.7111 29.1506 39.619 29.1164 38.6117 29.4089C37.643 29.688 36.7772 30.28 36.1855 31.0822C35.6701 31.7742 35.3609 32.6342 35.29 33.5317C35.1955 34.6528 35.428 35.8192 35.928 37.054C36.4732 38.3773 37.2469 39.6465 38.2806 40.9888C37.9283 41.3777 37.5466 41.7513 37.1377 42.1088C36.2514 42.8725 35.4112 43.3578 34.5477 43.548C33.7884 43.7216 32.9888 43.6291 32.3237 43.2864C31.5311 42.8841 30.9201 42.1234 30.6909 41.2536C30.5184 40.6249 30.5476 39.928 30.7653 39.2745C30.8933 38.892 31.0225 38.5836 31.3267 37.9051L31.3522 37.8481C31.4077 37.7242 31.4436 37.6438 31.4804 37.5606C33.2418 33.6492 35.1067 29.7456 37.0718 25.8537L37.2219 25.5566L37.2294 25.5416C37.5804 24.8459 37.7434 24.5293 37.9509 24.1483C38.2292 23.6441 38.4744 23.3165 38.7701 23.0877C39.1245 22.8054 39.5692 22.6541 40.0075 22.6642C40.4762 22.6589 40.9345 22.8289 41.289 23.1323C41.6054 23.3999 41.8474 23.7528 42.171 24.3679C42.6361 25.2576 43.0409 26.0604 43.7823 27.552L43.9148 27.8184L43.9294 27.8479C45.591 31.1982 47.179 34.5617 48.6924 37.9379C48.713 37.985 48.7289 38.0214 48.7675 38.109L48.7959 38.1732C49.0803 38.8181 49.197 39.111 49.2981 39.4742C49.4644 40.0776 49.4657 40.7214 49.2984 41.3052L49.2981 41.3062ZM38.2806 40.9888C38.3763 40.8831 38.4698 40.7763 38.5612 40.6684L38.5511 41.3342C38.459 41.2185 38.3689 41.1033 38.2806 40.9888ZM41.7243 40.9919C41.6371 41.1072 41.5475 41.2239 41.4556 41.3423L41.4322 40.6706C41.5322 40.7824 41.6294 40.8893 41.7243 40.9919ZM40.0001 38.8819C40.1525 39.095 40.2719 39.2503 40.4072 39.4126L40.0072 39.7488L39.5926 39.4308C39.7349 39.2439 39.8707 39.0612 40.0001 38.8819ZM40.0001 38.8819C40.8064 37.7653 41.3676 36.784 41.7479 35.7674C42.0352 34.9859 42.1547 34.2905 42.083 33.6526C42.0261 33.1536 41.8007 32.6969 41.4575 32.3992C40.7394 31.7673 39.5757 31.6983 38.7599 32.2345C38.4336 32.4463 38.1774 32.7674 38.0426 33.1392C37.9004 33.5136 37.8671 33.9621 37.9274 34.4832C37.9982 35.0461 38.1756 35.6278 38.4577 36.2721C38.7539 36.9403 39.1327 37.6089 39.5999 38.3069L39.6262 38.3451L39.6711 38.4105C39.8008 38.5992 39.9066 38.7514 40.0001 38.8819Z" fill="white" />
                    </svg>
                    </a>

                  <div className='flex flex-col bg-purple-700 rounded-2xl '>
                  <a  href="#" ><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd_5_291)">
                            <rect x="8" y="4" width="40" height="40" rx="15" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 18.75C30.5335 18.75 29.75 19.5335 29.75 20.5V27.5C29.75 28.4665 30.5335 29.25 31.5 29.25C32.4665 29.25 33.25 28.4665 33.25 27.5C33.25 26.5335 32.4665 25.75 31.5 25.75H24.5C23.5335 25.75 22.75 26.5335 22.75 27.5C22.75 28.4665 23.5335 29.25 24.5 29.25C25.4665 29.25 26.25 28.4665 26.25 27.5V20.5C26.25 19.5335 25.4665 18.75 24.5 18.75C23.5335 18.75 22.75 19.5335 22.75 20.5C22.75 21.4665 23.5335 22.25 24.5 22.25H31.5C32.4665 22.25 33.25 21.4665 33.25 20.5C33.25 19.5335 32.4665 18.75 31.5 18.75Z" stroke="#422F8A" stroke-opacity="0.87" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="8.5" y="4.5" width="39" height="39" rx="14.5" stroke="#F2F2F7" />
                        </g>
                        <defs>
                            <filter id="filter0_dd_5_291" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.278431 0 0 0 0.01 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_291" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_5_291" result="effect2_dropShadow_5_291" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_5_291" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </a>

                    <a href="#" ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3724 22.2692C24.3515 24.6836 21.8455 26.1204 19.2461 25.7818C16.6467 25.4431 14.5925 23.4122 14.2242 20.8169C13.8559 18.2216 15.264 15.6993 17.6666 14.6509" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8333 20C25.8333 18.4529 25.2188 16.9691 24.1248 15.8752C23.0308 14.7812 21.5471 14.1666 20 14.1666V20H25.8333Z" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </a>

                    <a href="#" ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9998 25.8333C23.2215 25.8333 25.8332 23.2216 25.8332 20C25.8332 16.7783 23.2215 14.1666 19.9998 14.1666C16.7782 14.1666 14.1665 16.7783 14.1665 20C14.1665 23.2216 16.7782 25.8333 19.9998 25.8333Z" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 16.5V20L21.75 21.75" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    </a>

                    <a href="#" ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9998 25.8333C23.2215 25.8333 25.8332 23.2216 25.8332 20C25.8332 16.7783 23.2215 14.1666 19.9998 14.1666C16.7782 14.1666 14.1665 16.7783 14.1665 20C14.1665 23.2216 16.7782 25.8333 19.9998 25.8333Z" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.1665 20H25.8332" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9998 14.1666C21.4589 15.764 22.2881 17.837 22.3332 20C22.2881 22.1629 21.4589 24.2359 19.9998 25.8333C18.5408 24.2359 17.7116 22.1629 17.6665 20C17.7116 17.837 18.5408 15.764 19.9998 14.1666V14.1666Z" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    </a>

                    <a href='#'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 14.1666V16.5" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 23.5V25.8333" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.876 15.8757L17.5268 17.5266" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.4736 22.4734L24.1245 24.1242" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1665 20H16.4998" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5 20H25.8333" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.876 24.1242L17.5268 22.4734" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.4736 17.5266L24.1245 15.8757" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
                  </div>
                    
   

                    
                </div>

                <div className='mt-[300px] ml-3 bg-purple-700 w-[50px] h-[50px] rounded-2xl justify-center flex flex-col items-center '>
   <a  href="#"> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 8.75C12.25 9.39433 11.7277 9.91667 11.0833 9.91667H4.08333L1.75 12.25V2.91667C1.75 2.27233 2.27233 1.75 2.91667 1.75H11.0833C11.7277 1.75 12.25 2.27233 12.25 2.91667V8.75Z" stroke="#422F8A" stroke-opacity="0.87" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>
   
   </div>


                
            </div>
        </div>
    )
}

export default Sidebar