import Icon from "../svgs/svg-icon";
import NavLink, { type NavLinkData } from "../components/nav-link";
import { NavLink_styles } from "../_styles";
const NavLink_data: NavLinkData[] = [
    { height: "11", viewBox: "0 0 15 11", width: "15", icon: <>
          <path fillRule="evenodd" clipRule="evenodd" d="M13.1237 4.3626H15V6.6374H13.125V8.85793H12.1956V11H11.25V8.85793H10.3206V11H9.375V8.85793H5.625V11H4.68V8.85793H3.75V11H2.80437V8.85793H1.875V6.63667H0V4.36333H1.875V0H13.1237V4.3626ZM3.75 4.3626H4.68V2.2748H3.75V4.3626ZM10.3188 4.3626H11.25V2.2748H10.3188V4.3626Z" fill="#D97757" />
          </>, label: "\n\n\t\t\t\t\tClaude Code\n\t\t\t\t" },
    { height: "16", viewBox: "0 0 16 16", width: "16", icon: <>
          <g clipPath="url(#clip0_1657_1163)">
            <path d="M14.699 3.54195L8.27754 -0.156035C8.07134 -0.274811 7.8169 -0.274811 7.6107 -0.156035L1.18954 3.54195C1.0162 3.64178 0.90918 3.8264 0.90918 4.02637V11.4834C0.90918 11.6831 1.0162 11.868 1.18954 11.9678L7.61101 15.6658C7.81721 15.7846 8.07165 15.7846 8.27786 15.6658L14.6993 11.9678C14.8727 11.868 14.9797 11.6833 14.9797 11.4834V4.02637C14.9797 3.82671 14.8727 3.64178 14.6993 3.54195H14.699ZM14.2957 4.32527L8.09666 15.035C8.05476 15.1071 7.94414 15.0776 7.94414 14.994V7.98146C7.94414 7.84133 7.86906 7.71172 7.74726 7.64136L1.65892 4.13523C1.58657 4.09344 1.61611 3.98306 1.69992 3.98306H14.0979C14.274 3.98306 14.384 4.17342 14.296 4.32558H14.2957V4.32527Z" fill="#26241E" />
          </g>
          <defs>
            <clipPath id="clip0_1657_1163">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
          </>, label: "\n\t\t\t\t\tCursor\n\t\t\t\t" },
    { height: "16", viewBox: "0 0 16 16", width: "16", icon: <>
          <path d="M14.7465 6.54857C15.1095 5.45907 14.9845 4.26557 14.404 3.27457C13.531 1.75457 11.776 0.972574 10.062 1.34057C9.29951 0.481574 8.20401 -0.00692579 7.05551 7.42116e-05C5.30351 -0.00392579 3.74901 1.12407 3.21001 2.79107C2.08451 3.02157 1.11301 3.72607 0.54451 4.72457C-0.33499 6.24057 -0.13449 8.15157 1.04051 9.45157C0.67751 10.5411 0.80251 11.7346 1.38301 12.7256C2.25601 14.2456 4.01101 15.0276 5.72501 14.6596C6.48701 15.5186 7.58301 16.0071 8.73151 15.9996C10.4845 16.0041 12.0395 14.8751 12.5785 13.2066C13.704 12.9761 14.6755 12.2716 15.244 11.2731C16.1225 9.75707 15.9215 7.84757 14.747 6.54757L14.7465 6.54857ZM8.73251 14.9541C8.03101 14.9551 7.35151 14.7096 6.81301 14.2601C6.83751 14.2471 6.88001 14.2236 6.90751 14.2066L10.0935 12.3666C10.2565 12.2741 10.3565 12.1006 10.3555 11.9131V7.42157L11.702 8.19907C11.7165 8.20607 11.726 8.22007 11.728 8.23607V11.9556C11.726 13.6096 10.3865 14.9506 8.73251 14.9541ZM2.29051 12.2026C1.93901 11.5956 1.81251 10.8841 1.93301 10.1936C1.95651 10.2076 1.99801 10.2331 2.02751 10.2501L5.21351 12.0901C5.37501 12.1846 5.57501 12.1846 5.73701 12.0901L9.62651 9.84407V11.3991C9.62751 11.4151 9.62001 11.4306 9.60751 11.4406L6.38701 13.3001C4.95251 14.1261 3.12051 13.6351 2.29101 12.2026H2.29051ZM1.45201 5.24807C1.80201 4.64007 2.35451 4.17507 3.01251 3.93357C3.01251 3.96107 3.01101 4.00957 3.01101 4.04357V7.72407C3.01001 7.91107 3.11001 8.08457 3.27251 8.17707L7.16201 10.4226L5.81551 11.2001C5.80201 11.2091 5.78501 11.2106 5.77001 11.2041L2.54901 9.34307C1.11751 8.51407 0.62651 6.68257 1.45151 5.24857L1.45201 5.24807ZM12.515 7.82257L8.62551 5.57657L9.97201 4.79957C9.98551 4.79057 10.0025 4.78907 10.0175 4.79557L13.2385 6.65507C14.6725 7.48357 15.164 9.31807 14.3355 10.7521C13.985 11.3591 13.433 11.8241 12.7755 12.0661V8.27557C12.777 8.08857 12.6775 7.91557 12.5155 7.82257H12.515ZM13.855 5.80557C13.8315 5.79107 13.79 5.76607 13.7605 5.74907L10.5745 3.90907C10.413 3.81457 10.213 3.81457 10.051 3.90907L6.16151 6.15507V4.60007C6.16051 4.58407 6.16801 4.56857 6.18051 4.55857L9.40101 2.70057C10.8355 1.87307 12.6695 2.36557 13.4965 3.80057C13.846 4.40657 13.9725 5.11607 13.854 5.80557H13.855ZM5.42951 8.57707L4.08251 7.79957C4.06801 7.79257 4.05851 7.77857 4.05651 7.76257V4.04307C4.05751 2.38707 5.40101 1.04507 7.05701 1.04607C7.75751 1.04607 8.43551 1.29207 8.97401 1.74007C8.94951 1.75307 8.90751 1.77657 8.87951 1.79357L5.69351 3.63357C5.53051 3.72607 5.43051 3.89907 5.43151 4.08657L5.42951 8.57607V8.57707ZM6.16101 7.00007L7.89351 5.99957L9.62601 6.99957V9.00007L7.89351 10.0001L6.16101 9.00007V7.00007Z" fill="#0D0D0D" />
          </>, label: "\n\t\t\t\t\tChatGPT\n\t\t\t\t" },
    { height: "16", viewBox: "0 0 16 16", width: "16", icon: <>
          <mask id="mask0_1657_1175" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="-1" width="16" height="17">
            <path d="M7.98695 -0.245117C8.15434 -0.245117 8.30031 -0.130656 8.34117 0.0318059C8.46604 0.528702 8.63059 1.01477 8.83323 1.48534C9.36295 2.71611 10.0898 3.79328 11.0127 4.71611C11.936 5.63919 13.0129 6.36608 14.2434 6.89581C14.7141 7.09838 15.2003 7.26293 15.6972 7.38787C15.8597 7.42873 15.9739 7.57445 15.9739 7.74184C15.9739 7.90922 15.8597 8.05519 15.697 8.09605C15.2001 8.22092 14.714 8.38547 14.2434 8.58811C13.0127 9.11784 11.9358 9.84473 11.0127 10.7676C10.0898 11.6909 9.36295 12.7678 8.83323 13.9983C8.63056 14.469 8.46593 14.9551 8.34092 15.4521C8.32114 15.5311 8.27558 15.6011 8.21146 15.6513C8.14734 15.7014 8.06833 15.7287 7.98695 15.7288C7.81957 15.7288 7.67385 15.6146 7.63298 15.4519C7.50802 14.955 7.34339 14.4689 7.14068 13.9983C6.6112 12.7676 5.88455 11.6906 4.96123 10.7676C4.03815 9.84473 2.96123 9.11784 1.73046 8.58811C1.25987 8.38546 0.773805 8.22083 0.276923 8.09581C0.197979 8.07608 0.127873 8.03058 0.077712 7.9665C0.0275511 7.90243 0.00020297 7.82345 0 7.74208C0 7.5747 0.114462 7.42898 0.276923 7.38811C0.773826 7.26316 1.2599 7.09853 1.73046 6.89581C2.96123 6.36633 4.0384 5.63944 4.96123 4.71636C5.88431 3.79353 6.6112 2.71636 7.14092 1.48559C7.3435 1.01499 7.50804 0.528927 7.63298 0.0320521C7.65267 -0.046979 7.69819 -0.11717 7.76232 -0.167384C7.82645 -0.217597 7.90551 -0.244955 7.98695 -0.245117Z" fill="black" />
            <path d="M7.98695 -0.245117C8.15434 -0.245117 8.30031 -0.130656 8.34117 0.0318059C8.46604 0.528702 8.63059 1.01477 8.83323 1.48534C9.36295 2.71611 10.0898 3.79328 11.0127 4.71611C11.936 5.63919 13.0129 6.36608 14.2434 6.89581C14.7141 7.09838 15.2003 7.26293 15.6972 7.38787C15.8597 7.42873 15.9739 7.57445 15.9739 7.74184C15.9739 7.90922 15.8597 8.05519 15.697 8.09605C15.2001 8.22092 14.714 8.38547 14.2434 8.58811C13.0127 9.11784 11.9358 9.84473 11.0127 10.7676C10.0898 11.6909 9.36295 12.7678 8.83323 13.9983C8.63056 14.469 8.46593 14.9551 8.34092 15.4521C8.32114 15.5311 8.27558 15.6011 8.21146 15.6513C8.14734 15.7014 8.06833 15.7287 7.98695 15.7288C7.81957 15.7288 7.67385 15.6146 7.63298 15.4519C7.50802 14.955 7.34339 14.4689 7.14068 13.9983C6.6112 12.7676 5.88455 11.6906 4.96123 10.7676C4.03815 9.84473 2.96123 9.11784 1.73046 8.58811C1.25987 8.38546 0.773805 8.22083 0.276923 8.09581C0.197979 8.07608 0.127873 8.03058 0.077712 7.9665C0.0275511 7.90243 0.00020297 7.82345 0 7.74208C0 7.5747 0.114462 7.42898 0.276923 7.38811C0.773826 7.26316 1.2599 7.09853 1.73046 6.89581C2.96123 6.36633 4.0384 5.63944 4.96123 4.71636C5.88431 3.79353 6.6112 2.71636 7.14092 1.48559C7.3435 1.01499 7.50804 0.528927 7.63298 0.0320521C7.65267 -0.046979 7.69819 -0.11717 7.76232 -0.167384C7.82645 -0.217597 7.90551 -0.244955 7.98695 -0.245117Z" fill="url(#paint0_linear_1657_1175)" />
          </mask>
          <g mask="url(#mask0_1657_1175)">
            <g filter="url(#filter0_f_1657_1175)">
              <path d="M-1.44231 12.2433C0.403352 12.8988 2.52471 11.6697 3.29591 9.49815C4.06711 7.32682 3.19597 5.03513 1.35031 4.37962C-0.495356 3.72412 -2.61671 4.95316 -3.38816 7.12449C-4.15911 9.29605 -3.28797 11.5877 -1.44231 12.2433Z" fill="#FFE432" />
            </g>
            <g filter="url(#filter1_f_1657_1175)">
              <path d="M6.75264 5.08389C9.28803 5.08389 11.3437 2.98297 11.3437 0.391708C11.3437 -2.1998 9.28827 -4.30048 6.75264 -4.30048C4.21701 -4.30048 2.16113 -2.19955 2.16113 0.391708C2.16113 2.98297 4.21676 5.08389 6.75264 5.08389Z" fill="#FC413D" />
            </g>
            <g filter="url(#filter2_f_1657_1175)">
              <path d="M4.9682 20.0892C7.61509 19.9599 9.62494 17.0753 9.4573 13.6463C9.28992 10.2174 7.00807 7.54245 4.36118 7.67193C1.71429 7.80141 -0.295558 10.6858 -0.127927 14.1148C0.0397038 17.5437 2.3213 20.2186 4.9682 20.0892Z" fill="#00B95C" />
            </g>
            <g filter="url(#filter3_f_1657_1175)">
              <path d="M4.9682 20.0892C7.61509 19.9599 9.62494 17.0753 9.4573 13.6463C9.28992 10.2174 7.00807 7.54245 4.36118 7.67193C1.71429 7.80141 -0.295558 10.6858 -0.127927 14.1148C0.0397038 17.5437 2.3213 20.2186 4.9682 20.0892Z" fill="#00B95C" />
            </g>
            <g filter="url(#filter4_f_1657_1175)">
              <path d="M7.61922 18.0149C9.83805 16.6647 10.432 13.59 8.94574 11.1472C7.45947 8.7041 4.45565 7.81819 2.23658 9.1681C0.0174985 10.5185 -0.576471 13.5932 0.909806 16.0363C2.39658 18.4791 5.40014 19.365 7.61922 18.0149Z" fill="#00B95C" />
            </g>
            <g filter="url(#filter5_f_1657_1175)">
              <path d="M16.5884 10.3378C19.0825 10.3378 21.1044 8.39072 21.1044 5.98924C21.1044 3.58752 19.0825 1.64044 16.5884 1.64044C14.0944 1.64044 12.0725 3.58752 12.0725 5.98924C12.0725 8.39097 14.0944 10.3378 16.5884 10.3378Z" fill="#3186FF" />
            </g>
            <g filter="url(#filter6_f_1657_1175)">
              <path d="M-3.21605 9.83342C-0.919437 11.5796 2.43539 11.0319 4.27736 8.60955C6.11933 6.18739 5.75109 2.80795 3.45447 1.06173C1.15786 -0.684729 -2.19673 -0.137037 -4.03894 2.28536C-5.88091 4.70752 -5.51242 8.08721 -3.21605 9.83342Z" fill="#FBBC04" />
            </g>
            <g filter="url(#filter7_f_1657_1175)">
              <path d="M8.55133 12.4146C11.2923 14.2991 14.9257 13.7743 16.6665 11.2419C18.4076 8.70971 17.5967 5.12941 14.8556 3.24485C12.1144 1.3598 8.48117 1.8851 6.74013 4.41704C4.99933 6.94947 5.80991 10.5298 8.55108 12.4146H8.55133Z" fill="#3186FF" />
            </g>
            <g filter="url(#filter8_f_1657_1175)">
              <path d="M13.5344 -0.820111C14.2318 0.128074 13.3356 1.97127 11.533 3.2973C9.73014 4.62334 7.70355 4.92955 7.0062 3.98161C6.30884 3.03318 7.20484 1.18974 9.00743 -0.136049C10.8103 -1.46208 12.8371 -1.7683 13.5342 -0.820357L13.5344 -0.820111Z" fill="#749BFF" />
            </g>
            <g filter="url(#filter9_f_1657_1175)">
              <path d="M7.8095 3.71896C10.5974 1.13287 11.5542 -2.36842 9.94685 -4.10134C8.33947 -5.83427 4.77615 -5.14307 1.98821 -2.55697C-0.799731 0.0291181 -1.75678 3.53041 -0.149146 5.26333C1.45824 6.99626 5.02156 6.30506 7.8095 3.71896Z" fill="#FC413D" />
            </g>
            <g filter="url(#filter10_f_1657_1175)">
              <path d="M2.09456 13.0073C3.75167 14.1933 5.65395 14.3735 6.34367 13.41C7.03339 12.4463 6.24915 10.7038 4.59204 9.51783C2.93518 8.33186 1.03266 8.15167 0.343179 9.11512C-0.346544 10.0788 0.437456 11.8213 2.09456 13.0073Z" fill="#FFEE48" />
            </g>
          </g>
          <defs>
            <filter id="filter0_f_1657_1175" x="-6.12895" y="1.74331" width="12.1658" height="13.1362" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="1.23" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter1_f_1657_1175" x="-9.72987" y="-16.1915" width="32.9646" height="33.1663" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.9455" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter2_f_1657_1175" x="-10.2467" y="-2.44158" width="29.8227" height="32.6443" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.0545" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter3_f_1657_1175" x="-10.2467" y="-2.44158" width="29.8227" height="32.6443" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.0545" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter4_f_1657_1175" x="-10.0177" y="-1.57226" width="29.8909" height="30.3277" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5.0545" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter5_f_1657_1175" x="2.46651" y="-7.96556" width="28.244" height="27.9093" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="4.803" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter6_f_1657_1175" x="-13.9174" y="-8.66584" width="28.0734" height="28.2266" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="4.353" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter7_f_1657_1175" x="-1.952" y="-5.66123" width="27.3107" height="26.9816" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="3.8875" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter8_f_1657_1175" x="-0.187469" y="-8.32809" width="20.9155" height="19.8174" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="3.4785" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter9_f_1657_1175" x="-6.8052" y="-10.9322" width="23.408" height="23.0263" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2.938" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <filter id="filter10_f_1657_1175" x="-7.18023" y="1.22267" width="21.0472" height="20.0798" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="3.6365" result="effect1_foregroundBlur_1657_1175" />
            </filter>
            <linearGradient id="paint0_linear_1657_1175" x1="4.5408" y1="10.4429" x2="12.8377" y2="3.44817" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4893FC" />
              <stop offset="0.27" stopColor="#4893FC" />
              <stop offset="0.777" stopColor="#969DFF" />
              <stop offset="1" stopColor="#BD99FE" />
            </linearGradient>
          </defs>
          </>, label: "\n\t\t\t\t\tGemini CLI\n\t\t\t\t" },
    { height: "13", viewBox: "0 0 16 13", width: "16", icon: <>
          <path d="M15.7397 5.18854C15.3474 4.92445 14.3167 4.81168 13.5675 5.01367C13.5273 4.26732 13.1421 3.63826 12.4381 3.08938L12.1776 2.91451L12.0039 3.17694C11.6625 3.69512 11.5186 4.3858 11.5695 5.01367C11.6097 5.40053 11.7441 5.83521 12.0039 6.15069C11.0287 6.71646 10.1296 6.58798 6.14824 6.58798H0.00136101C-0.0164829 7.48708 0.127934 9.21628 1.2276 10.624C1.34917 10.7796 1.48217 10.93 1.62682 11.0749C2.52093 11.9702 3.87183 12.6268 5.89176 12.6285C8.97353 12.6314 11.6137 10.9655 13.2199 6.93796C13.7483 6.94653 15.1435 7.03265 15.8263 5.71339C15.843 5.69127 16 5.36365 16 5.36365L15.7397 5.18878V5.18854ZM4.01292 4.36653H2.28443V6.09501H4.01292V4.36653ZM6.24579 4.36653H4.51731V6.09501H6.24579V4.36653ZM8.4789 4.36653H6.75041V6.09501H8.4789V4.36653ZM10.712 4.36653H8.98352V6.09501H10.712V4.36653ZM1.77981 4.36653H0.051324V6.09501H1.77981V4.36653ZM4.01292 2.18338H2.28443V3.91187H4.01292V2.18338ZM6.24579 2.18338H4.51731V3.91187H6.24579V2.18338ZM8.4789 2.18338H6.75041V3.91187H8.4789V2.18338ZM8.4789 0H6.75041V1.72848H8.4789V0Z" fill="#1D63ED" />
          </>, label: "\n\t\t\t\t\tDocker\n\t\t\t\t" },
    { height: "16", viewBox: "0 0 16 16", width: "16", icon: <>
          <path d="M1 2.25488V5.53613C1 6.36328 1.67285 7.03613 2.5 7.03613H5.78125C6.6084 7.03613 7.28125 6.36328 7.28125 5.53613V2.25488C7.28125 1.42773 6.6084 0.754883 5.78125 0.754883H2.5C1.67285 0.754883 1 1.42773 1 2.25488ZM2 2.25488C2 1.979 2.22437 1.75488 2.5 1.75488H5.78125C6.05688 1.75488 6.28125 1.979 6.28125 2.25488V5.53613C6.28125 5.81201 6.05688 6.03613 5.78125 6.03613H2.5C2.22437 6.03613 2 5.81201 2 5.53613V2.25488Z" fill="#0062CE" />
          <path d="M1 13.2549C1 14.082 1.67285 14.7549 2.5 14.7549H5.78125C6.6084 14.7549 7.28125 14.082 7.28125 13.2549V9.97363C7.28125 9.14648 6.6084 8.47363 5.78125 8.47363H2.5C1.67285 8.47363 1 9.14648 1 9.97363V13.2549ZM2 9.97363C2 9.69775 2.22437 9.47363 2.5 9.47363H5.78125C6.05688 9.47363 6.28125 9.69775 6.28125 9.97363V13.2549C6.28125 13.5308 6.05688 13.7549 5.78125 13.7549H2.5C2.22437 13.7549 2 13.5308 2 13.2549V9.97363Z" fill="#0062CE" />
          <path d="M13.5 8.47363H10.2188C9.3916 8.47363 8.71875 9.14648 8.71875 9.97363V13.2549C8.71875 14.082 9.3916 14.7549 10.2188 14.7549H13.5C14.3272 14.7549 15 14.082 15 13.2549V9.97363C15 9.14648 14.3272 8.47363 13.5 8.47363ZM14 13.2549C14 13.5308 13.7756 13.7549 13.5 13.7549H10.2188C9.94312 13.7549 9.71875 13.5308 9.71875 13.2549V9.97363C9.71875 9.69775 9.94312 9.47363 10.2188 9.47363H13.5C13.7756 9.47363 14 9.69775 14 9.97363V13.2549Z" fill="#0062CE" />
          <path d="M14.5 3.39551H12.3594V1.25488C12.3594 0.978516 12.1355 0.754883 11.8594 0.754883C11.5833 0.754883 11.3594 0.978516 11.3594 1.25488V3.39551H9.21875C8.94263 3.39551 8.71875 3.61914 8.71875 3.89551C8.71875 4.17188 8.94263 4.39551 9.21875 4.39551H11.3594V6.53613C11.3594 6.8125 11.5833 7.03613 11.8594 7.03613C12.1355 7.03613 12.3594 6.8125 12.3594 6.53613V4.39551H14.5C14.7761 4.39551 15 4.17188 15 3.89551C15 3.61914 14.7761 3.39551 14.5 3.39551Z" fill="#0062CE" />
          </>, label: "\n\t\t\t\t\tOther\n\t\t\t\t" }
];
/** Get Started With section. */
export default function GetStartedWithSection({ navLinkData = NavLink_data } = {}) {
  return (
    <section className="block py-20 bg-clr-2 max-md:py-12" aria-labelledby="mcp-title">
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="block mb-12 text-center">
          <h2 className="block mb-3 text-color-001 text-[2.125rem] font-extrabold leading-[2.5625rem] tracking-[-0.68px] max-md:text-2xl max-md:leading-[1.8125rem] max-md:tracking-[-0.48px]" data-component="heading" id="mcp-title">
            Get Started With DataForSEO MCP
          </h2>
          {" "}
          <p className="block max-w-160 mx-auto text-lg font-medium leading-[1.8125rem]">
            Choose your AI client and follow the instructions to connect with DataForSEO APIs.
          </p>
          {" "}
        </div>
        {" "}
        <div className="block pt-5 pb-6 px-5 rounded-md overflow-hidden bg-background shadow-[var(--clr-3)_4px_4px_18px_0px]">
          <nav className="flex mb-5 gap-1 overflow-auto max-lg:border-b max-lg:border-solid max-lg:border-b-surface max-lg:grid max-lg:p-3 max-lg:gap-2 max-lg:bg-clr-2 max-lg:grid-cols-[repeat(auto-fit,_minmax(278px,_1fr))] max-md:grid-rows-7 max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] md:max-lg:grid-rows-4" data-component="nav" aria-label="AI client" role="tablist">
            <button className="border-b-4 border-solid border-b-primary flex relative py-4.5 px-3 rounded-tl-md rounded-tr-md justify-center items-center flex-1 gap-2 text-color-001 text-lg font-semibold leading-4.5 text-center whitespace-nowrap text-nowrap bg-clr-4 cursor-pointer max-lg:border max-lg:border-primary max-lg:min-w-0 max-lg:py-3 max-lg:rounded-[10px] max-lg:justify-start max-md:shrink-0 max-md:gap-1.5 max-lg:text-sm max-lg:leading-[1.125rem] max-lg:shadow-[var(--clr-5)_0px_0px_0px_2px] max-lg:border-b-[0] max-lg:border-initial max-lg:border-b-[initial] max-md:grow-[initial] max-md:basis-[initial] max-lg:[white-space:inherit] max-lg:[text-wrap:initial] md:max-lg:px-3.5" data-component="button" aria-selected="true" role="tab">
              <span className="w-5.5 h-5.5 flex rounded-[5px] justify-center items-center shrink-0 text-color-003 max-md:w-4.5 max-md:h-4.5">
                <Icon />
                {" "}
              </span>
              {" Claude "}
            </button>
            {navLinkData.map((d, i) => <NavLink key={i} d={d} styles={NavLink_styles[i]} />)}
            {" "}
          </nav>
          {" "}
          <div className="block max-md:py-5 max-md:px-4 md:max-lg:py-7 md:max-lg:px-5.5" role="tabpanel">
            <div className="border border-solid border-color-012 inline-flex mb-4 p-1 rounded-xl gap-0.5 bg-surface-2 max-lg:flex max-md:flex-col" role="tablist">
              {" "}
              <button className="h-[2.275rem] flex relative py-[0.4375rem] px-4 rounded-md justify-center items-center gap-2 text-color-001 font-semibold leading-[1.375rem] text-center bg-background shadow-[var(--clr-6)_0px_1px_2px_0px] cursor-pointer max-lg:flex-1 hover:border-color-010" data-component="button">
                Connectors
              </button>
              {" "}
              <button className="h-[2.275rem] flex relative py-[0.4375rem] px-4 rounded-md justify-center items-center gap-2 text-clr-7 font-semibold leading-[1.375rem] text-center cursor-pointer max-lg:flex-1 hover:bg-clr-22 hover:border-color-010 hover:shadow-[var(--clr-23)_0px_2px_8px_0px] hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="button">
                Config file
              </button>
              {" "}
            </div>
            {" "}
            <div className="block">
              <ol className="flex flex-col gap-7 [list-style-type:none] list-outside">
                <li className="flex items-start gap-4 max-md:gap-3">
                  <span className="w-9 h-9 flex mt-0.5 rounded-[50%] justify-center items-center shrink-0 text-color-010 text-lg font-bold leading-[1.8125rem] bg-color-011">
                    1
                  </span>
                  {" "}
                  <div className="block min-w-0 flex-1">
                    <p className="block text-color-001 text-lg leading-[1.8125rem]">
                      {"Open Claude Desktop and go to "}
                      <strong className="inline font-semibold">
                        Customize → Connectors
                      </strong>
                      .
                    </p>
                    {" "}
                  </div>
                  {" "}
                </li>
                <li className="flex items-start gap-4 max-md:gap-3">
                  <span className="w-9 h-9 flex mt-0.5 rounded-[50%] justify-center items-center shrink-0 text-color-010 text-lg font-bold leading-[1.8125rem] bg-color-011">
                    2
                  </span>
                  {" "}
                  <div className="block min-w-0 flex-1">
                    <p className="block mb-2.5 text-color-001 text-lg leading-[1.8125rem]">
                      {"Click "}
                      <strong className="inline font-semibold">
                        Add custom connector
                      </strong>
                      {" and paste the DataForSEO MCP HTTP URL:"}
                    </p>
                    {" "}
                    <span className="border border-solid border-surface inline-block mt-1.5 py-1 px-2.5 rounded-md text-color-001 [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-sm leading-[1.375rem] [word-break:break-all] bg-clr-2">
                      https://mcp.dataforseo.com/mcp
                    </span>
                    {" "}
                  </div>
                  {" "}
                </li>
                <li className="flex items-start gap-4 max-md:gap-3">
                  <span className="w-9 h-9 flex mt-0.5 rounded-[50%] justify-center items-center shrink-0 text-color-010 text-lg font-bold leading-[1.8125rem] bg-color-011">
                    3
                  </span>
                  {" "}
                  <div className="block min-w-0 flex-1">
                    <p className="block text-color-001 text-lg leading-[1.8125rem]">
                      {"When prompted, approve the "}
                      <strong className="inline font-semibold">
                        Authorization
                      </strong>
                      {" request to access the DataForSEO API."}
                    </p>
                    {" "}
                  </div>
                  {" "}
                </li>
                <li className="flex items-start gap-4 max-md:gap-3">
                  <span className="w-9 h-9 flex mt-0.5 rounded-[50%] justify-center items-center shrink-0 text-color-010 text-lg font-bold leading-[1.8125rem] bg-color-011">
                    4
                  </span>
                  {" "}
                  <div className="block min-w-0 flex-1">
                    <p className="block text-color-001 text-lg leading-[1.8125rem]">
                      Start a new chat. Claude will request your approval the first time it calls a DataForSEO tool.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </li>
              </ol>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
