import { c as create_ssr_component, v as validate_component } from "../../chunks/index-2dc61825.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg id="${"\u0421\u043B\u043E\u0439_1"}" data-name="${"\u0421\u043B\u043E\u0439 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 344.1 232.2"}"><defs><style>.cls-1{isolation:isolate;}.cls-2{fill:#434343;}</style></defs><g class="${"cls-1"}"><path class="${"cls-2"}" d="${"M147.42,331.45H121.94v-50a87.89,87.89,0,0,0-11-43.54q-9-16.45-19.67-21.61H81V331.45H55.51V110.54H81v97.72H88.4q14.84-6.15,24.84-25.57,8.7-17.46,8.7-34.94V110.54h25.48v36.82a78.86,78.86,0,0,1-10,39.4q-11.61,20.67-31.6,22.61,21,2.58,32.25,27.78a102.54,102.54,0,0,1,9.35,43.92Z"}" transform="${"translate(-55.51 -104.73)"}"></path><path class="${"cls-2"}" d="${"M275.78,236.31q0,47.1-5.49,65.15-4.52,15.17-19,26.12a212.67,212.67,0,0,0-23.87,9.36c-2.15-1.73-6.24-3.55-12.26-5.49q-15.79-7.08-22.57-11.61-15.81-10.32-15.8-22.57v-38.7h25.47v38.7q0,7.43,10.32,15.8,4.19,3.23,14.82,11.29,18.06-14.82,21.28-31.89,1.6-8.7,1.61-61.85l-66.06-15.35q-7.44-1.62-7.44-11.31,0-50.1,3.87-64.65,5.81-22,29-28.77h9.68q2.58,0,8.06-5.81,5.81,5.8,8.06,5.81h9.68q11.61,4.53,21.12,21.38T275.78,162v25.91H250.3V162q0-12-6.37-24.63T227.7,119.25q-15.9,7.11-21.32,20.05-4.14,9.7-4.14,30.09v40.76L266.1,225Q275.77,227.28,275.78,236.31Z"}" transform="${"translate(-55.51 -104.73)"}"></path><path class="${"cls-2"}" d="${"M399.61,331.45H374.13v-50a88,88,0,0,0-11-43.54q-9-16.45-19.67-21.61H333.18V331.45H307.7V110.54h25.48v97.72h7.41q14.84-6.15,24.84-25.57,8.7-17.46,8.7-34.94V110.54h25.48v36.82a79,79,0,0,1-10,39.4Q378,207.43,358,209.37q21,2.58,32.25,27.78a102.54,102.54,0,0,1,9.35,43.92Z"}" transform="${"translate(-55.51 -104.73)"}"></path></g></svg>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>kamask.ru</h1>
<div class="${"logo"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>

${$$result.head += `${$$result.title = `<title>kamask.ru</title>`, ""}<meta name="${"keywords"}" content="${"kamask"}" data-svelte="svelte-16ssbdg"><meta name="${"description"}" content="${"kamask"}" data-svelte="svelte-16ssbdg"><style data-svelte="svelte-16ssbdg">@keyframes logo-rotating{
        0%{
            transform: rotateY(0deg);
        }
        40%{
            transform: rotateY(180deg);
        }
        100%{
            transform: rotateY(0deg);
        }
    }
    h1{
        font-weight: normal;
        text-align: center;
        color: rgb(77, 77, 77);
    }
    .logo{
        margin: 0 auto;
        width: 300px;
        animation: 3.5s ease-in-out infinite logo-rotating;
    }

    .logo svg{
        filter: drop-shadow( 0px 45px 10px rgba(0, 0, 0, 0.5) );
    }
    </style>`, ""}`;
});
export { Routes as default };
