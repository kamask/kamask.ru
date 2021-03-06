import { c as create_ssr_component } from "../../chunks/index-2dc61825.js";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"preload"}" href="${"/fonts/OpenSans-Regular.woff2"}" as="${"font"}" type="${"font/woff2"}" crossorigin data-svelte="svelte-1ghnup"><link rel="${"preload"}" href="${"/fonts/OpenSans-Bold.woff2"}" as="${"font"}" type="${"font/woff2"}" crossorigin data-svelte="svelte-1ghnup"><link rel="${"preload"}" href="${"/fonts/OpenSans-Light.woff2"}" as="${"font"}" type="${"font/woff2"}" crossorigin data-svelte="svelte-1ghnup"><style data-svelte="svelte-1ghnup">@font-face{
            font-family: "Open Sans";
            font-weight: normal;
            font-style: normal;
            font-display: swap;
            src: local("Open Sans Regular"),
                 local("OpenSans-Regular"),
                 url(/fonts/OpenSans-Regular.woff2) format('woff2'),
                 url(/fonts/OpenSans-Regular.woff) format('woff');
        }
        @font-face{
            font-family: "Open Sans";
            font-weight: bold;
            font-style: normal;
            font-display: swap;
            src: local("Open Sans Bold"),
                 local("OpenSans-Bold"),
                 url(/fonts/OpenSans-Bold.woff2) format('woff2'),
                 url(/fonts/OpenSans-Bold.woff) format('woff');
        }
        @font-face{
            font-family: "Open Sans";
            font-weight: 300;
            font-style: normal;
            font-display: swap;
            src: local("Open Sans Light"),
                 local("OpenSans-Light"),
                 url(/fonts/OpenSans-Light.woff2) format('woff2'),
                 url(/fonts/OpenSans-Light.woff) format('woff');
        }
        *{margin:0;padding:0;box-sizing:border-box}
        html{
            font-family: 'Open Sans', sans-serif;
            line-height:1.15;-webkit-text-size-adjust:100%;
        }
        main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
    </style>`, ""}

${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
