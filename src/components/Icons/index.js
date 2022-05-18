import React, { useContext } from "react";

//import { SvgFromXml } from "react-native-svg";
//import ThemeContext from "styles/context";
import InlineSVG from "svg-inline-react";

function IconSvg(props) {
  //const {theme} = useContext(ThemeContext);

  let svgImage = "";
  let vw,
    vh = 0;

  let colorSvg = props.color;
  let colorFill = "black";

  /*if (colorSvg == undefined || colorSvg == null)
    colorSvg = theme.colors.primary;*/

  colorSvg = "black";

  if (props.icon == "login-key") {
    vw = vh = 32;
    svgImage =
      '<path d="M3.5 18a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m22 9 1.5-1.5L21 5l1.5-1.5a1.414 1.414 0 0 0-2-2L8.755 13.245a5.512 5.512 0 1 0 2 2L16.5 9.5l2 2L20 10l-2-2 1.5-1.5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  } else if (props.icon == "user") {
    vw = vh = 32;
    svgImage =
      '<path d="M4 20.25a8.719 8.719 0 0 1 .7-3.322c.49-.981 2.539-1.661 5.111-2.613.7-.258.581-2.074.273-2.413a5.127 5.127 0 0 1-1.34-3.978A3.354 3.354 0 0 1 12 4.25a3.354 3.354 0 0 1 3.256 3.674A5.127 5.127 0 0 1 13.92 11.9c-.308.339-.422 2.155.273 2.413 2.572.952 4.621 1.632 5.111 2.613A8.719 8.719 0 0 1 20 20.25z" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  } else if (props.icon == "mobile-wifi") {
    vw = vh = 100;
    svgImage =
      '<path d="M33.431 43.559V29.465a3.284 3.284 0 0 1 3.283-3.284H59.7a3.284 3.284 0 0 1 3.284 3.284v23.766m-13.21 25.488H37.992m3.847-6.66v-2.855m.695-13.572a18.062 18.062 0 0 0 6.362 1.01c7.116 0 9.789-2.893 10.559-4.017a.311.311 0 0 0-.193-.479 2.534 2.534 0 0 1-.769-.272" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M57.145 46.375c-.309-4.587-3.56-8.172-8.249-6.281-4.69-1.891-7.941 1.694-8.25 6.281" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M43.874 54.187a6.365 6.365 0 0 0 11.253-2.61 1.417 1.417 0 0 0 .186-.033v-2.526l-.053-.013v-.849a.531.531 0 0 0-.4-.557 1.724 1.724 0 0 1-1.352-1.685 1.259 1.259 0 0 0-1.477-1.04c-.428.084-.944.168-1.522.227a1.1 1.1 0 0 0-.808.438 5.834 5.834 0 0 1-4.628 2.192 3.74 3.74 0 0 1-1.6-.356" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M47.3 52.978a2.871 2.871 0 0 0 3.183 0" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.509 48.156a.8.8 0 1 0 .8.8.8.8 0 0 0-.8-.8zm4.773 0a.8.8 0 1 0 .8.8.8.8 0 0 0-.8-.8z"/><path d="M45.077 47.732a3.762 3.762 0 0 1-2.424-.885.323.323 0 0 1 .092-.553c.726-.271 1.961-.872 1.7-1.745" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M40.546 46.375v-.946a8.342 8.342 0 0 1 8.342-8.343h0a8.342 8.342 0 0 1 8.342 8.343v.946m.152 6.417h-1.5a.567.567 0 0 1-.566-.566V46.94a.566.566 0 0 1 .566-.565h1.5a1.131 1.131 0 0 1 1.131 1.131v4.155a1.131 1.131 0 0 1-1.131 1.131zM44.103 29.465h4.104m3.284 0h.821" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M48.207 75.305a.129.129 0 0 1 .092.038.128.128 0 0 1 .038.092.124.124 0 0 1-.039.091.128.128 0 0 1-.182 0 .129.129 0 0 1 0-.183.125.125 0 0 1 .091-.038m0-1a1.13 1.13 0 1 0 .8.331 1.126 1.126 0 0 0-.8-.331z"/><path d="M60.8 69.94c-4.419 0-8.206 3.559-8.206 12.879M40.779 59.976a3.635 3.635 0 0 1-4.7 2.093l-3.395-1.3a3.636 3.636 0 0 1 2.6-6.789l3.394 1.3a3.635 3.635 0 0 1 2.101 4.696zm-.67 7.785a3.635 3.635 0 0 1-4.7 2.092l-3.394-1.3a3.635 3.635 0 1 1 2.6-6.789l3.394 1.3a3.635 3.635 0 0 1 2.1 4.697z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.291 74.776a3.635 3.635 0 0 1-4.7 2.092l-1.7-.651a3.635 3.635 0 1 1 2.6-6.788l1.7.651a3.635 3.635 0 0 1 2.1 4.696zm28.671 16.861c-1.081-5.748-1.7-9.857-1.33-10.217 1.7-1.664 2.439-5.272 2.439-7.123V59.644a3.636 3.636 0 1 0-7.271 0v10.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m30.815 75.567 9.3 11.091a11.881 11.881 0 0 0 4.289 3.318 1.288 1.288 0 0 1 .728.915L45.849 95M41.88 52.538a3.636 3.636 0 0 1-4.7 2.093l-3.394-1.3a3.636 3.636 0 0 1 2.6-6.789l3.394 1.3a3.636 3.636 0 0 1 2.1 4.696zm13.813-34.48a1.557 1.557 0 0 1-2.2 2.2 7.409 7.409 0 0 0-10.465 0 1.557 1.557 0 1 1-2.2-2.2 10.525 10.525 0 0 1 14.865 0zm5.066-7.888a1.557 1.557 0 1 1-2.2 2.2 14.582 14.582 0 0 0-20.6 0 1.557 1.557 0 1 1-2.2-2.2 17.7 17.7 0 0 1 25 0zm26.558 17.96a1.35 1.35 0 0 1-1.909 1.909 6.421 6.421 0 0 0-9.071 0 1.35 1.35 0 0 1-1.908-1.909 9.122 9.122 0 0 1 12.888 0zm4.391-6.837A1.35 1.35 0 1 1 89.8 23.2a12.637 12.637 0 0 0-17.852 0 1.35 1.35 0 0 1-1.909-1.909 15.339 15.339 0 0 1 21.669.002zM26.091 40.266v-4.388a2.415 2.415 0 0 0-2.415-2.415h-9.657a2.415 2.415 0 0 0-2.419 2.415v9.982m8.455-9.982H17.64m4.899 14.329a1.919 1.919 0 0 0 2.478 1.1l1.792-.687a1.919 1.919 0 0 0-1.374-3.583l-1.792.687a1.92 1.92 0 0 0-1.104 2.483zm-.581-3.926a1.918 1.918 0 0 0 2.478 1.105l1.792-.687a1.919 1.919 0 0 0-1.374-3.583l-1.792.687a1.919 1.919 0 0 0-1.104 2.478zm.934 8.034a1.919 1.919 0 0 0 2.479 1.1l1.791-.687a1.918 1.918 0 1 0-1.374-3.582L24 51.837a1.918 1.918 0 0 0-1.108 2.478z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.852 58.017a1.918 1.918 0 0 0 2.478 1.1l.9-.343a1.919 1.919 0 0 0-1.378-3.574l-.9.344a1.918 1.918 0 0 0-1.1 2.473zm-11.879-2.552c2.332 0 4.331 1.879 4.331 6.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m27.8 58.435-4.911 5.853a6.265 6.265 0 0 1-2.263 1.751.682.682 0 0 0-.385.483l-2.523 14.79m.985-21.273h3.365M8.484 69.792s1.954-7.274.939-8.268a6.138 6.138 0 0 1-1.288-3.759v-7.734a1.919 1.919 0 0 1 3.838 0v5.434m13.598-27.9a1.35 1.35 0 0 1-1.908 1.909 6.421 6.421 0 0 0-9.071 0 1.35 1.35 0 1 1-1.909-1.909 9.124 9.124 0 0 1 12.888 0zm4.391-6.837a1.35 1.35 0 0 1-1.909 1.909 12.637 12.637 0 0 0-17.852 0 1.35 1.35 0 0 1-1.909-1.909 15.339 15.339 0 0 1 21.67 0zm-3.871 17.564H11.604m4.923 17.255h3.865m59.934 8.146h-3.377M73.487 44.2v-4.651a2.415 2.415 0 0 1 2.413-2.415h9.657a2.415 2.415 0 0 1 2.415 2.415v9.775m-8.449-9.775h2.415m-4.899 14.329a1.919 1.919 0 0 1-2.478 1.1l-1.792-.678a1.919 1.919 0 0 1 1.374-3.583l1.792.687a1.919 1.919 0 0 1 1.104 2.474zm.581-3.926a1.918 1.918 0 0 1-2.478 1.1l-1.792-.687a1.918 1.918 0 0 1 1.374-3.582l1.792.687a1.919 1.919 0 0 1 1.104 2.482zm-.934 8.034a1.919 1.919 0 0 1-2.479 1.1l-1.791-.686a1.918 1.918 0 0 1 1.374-3.582l1.791.687a1.918 1.918 0 0 1 1.105 2.481z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M75.726 61.688a1.918 1.918 0 0 1-2.478 1.1l-.9-.343a1.919 1.919 0 0 1 1.374-3.583l.9.344a1.918 1.918 0 0 1 1.104 2.482zm11.879-2.552c-2.332 0-4.33 1.879-4.33 6.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m71.781 62.106 4.91 5.853a6.274 6.274 0 0 0 2.263 1.751.682.682 0 0 1 .385.483l1.919 11.246m9.225-13.264a10.708 10.708 0 0 1-.328-2.98 6.138 6.138 0 0 0 1.288-3.759V53.7a1.919 1.919 0 0 0-3.837 0v5.434M73.487 41.963h14.487m-5.372 17.255h-3.988M33.431 32.749h29.552m-10.614 39.31h-11.36m12.285-13.521a11.578 11.578 0 0 1 4.817 3.728m-15.004-3.04a11.359 11.359 0 0 1 1.837-.861" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.521 56.523v.609a1 1 0 0 1-.731.962 11.309 11.309 0 0 0-1.3.449l3.444 3.829a1.288 1.288 0 0 0 1.916 0l3.449-3.834h0A11.376 11.376 0 0 0 52 58.093a1 1 0 0 1-.731-.964v-.606" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "secure-pass") {
    vw = vh = 100;
    svgImage =
      '<path d="M49.3 41.339H15.294a3 3 0 0 0-3 3v37.47H76V61.484" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M50.758 45.836H18.292a1.5 1.5 0 0 0-1.5 1.5v34.473H71.5v-20.46" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M81.618 86.306H6.673v-3a1.5 1.5 0 0 1 1.5-1.5H80.12a1.5 1.5 0 0 1 1.5 1.5zm0 0a77.9 77.9 0 0 1-21.4 3H28.077a77.907 77.907 0 0 1-21.4-3h74.941zM62.133 73.565H26.159a1.5 1.5 0 0 1-1.5-1.5v-7.493a1.5 1.5 0 0 1 1.5-1.5h35.974a1.5 1.5 0 0 1 1.5 1.5v7.494a1.5 1.5 0 0 1-1.5 1.499z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.658 68.319a2.248 2.248 0 1 0 4.496 0 2.248 2.248 0 1 0-4.496 0zm7.495 0a2.248 2.248 0 1 0 4.496 0 2.248 2.248 0 1 0-4.496 0zm7.494 0a2.248 2.248 0 1 0 4.496 0 2.248 2.248 0 1 0-4.496 0zm8.244 0h2.248m4.497 0h2.248m-7.196-36.086a22.124 22.124 0 1 1 18.435 25.279 22.124 22.124 0 0 1-18.435-25.279z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M83.52 49.555H65.5a1.385 1.385 0 0 1-1.385-1.386V32.925a1.384 1.384 0 0 1 1.385-1.386h18.02a1.386 1.386 0 0 1 1.386 1.386v15.244a1.387 1.387 0 0 1-1.386 1.386z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M66.2 31.539v-3.812a8.661 8.661 0 0 1 8.661-8.661h0a8.661 8.661 0 0 1 8.661 8.661v3.812h-3.467v-3.812a5.2 5.2 0 0 0-5.2-5.2h0a5.2 5.2 0 0 0-5.2 5.2v3.812zM77.284 40.2a2.426 2.426 0 1 0-3.465 2.184v1.281a1.04 1.04 0 0 0 1.04 1.039h0a1.039 1.039 0 0 0 1.041-1.039v-1.281a2.422 2.422 0 0 0 1.384-2.184z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "email") {
    vw = vh = 24;
    svgImage =
      '<path d="M.5 12a11.5 11.5 0 1 0 23 0 11.5 11.5 0 1 0-23 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 18.063A7 7 0 1 1 12 5c9.5 0 9 10.5 5 10.5-1.5 0-1.5-1-1.5-1.5V9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "lock") {
    vw = vh = 24;
    svgImage =
      '<path d="M2 5.5h10v8H2zm8.5 0V4a3.5 3.5 0 0 0-7 0v1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 9.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "password") {
    vw = vh = 24;
    svgImage =
      '<path d="M8 9.179h5.5V13.5H8z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.714 9.2v-.87a1.965 1.965 0 0 0-3.928 0v.87M5.5 8h-4a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 4a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0zm3.5 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0zM10 4a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "arrow-right") {
    vw = vh = 32;
    svgImage =
      '<path d="m5.651 23.5 12.576-11.126a.5.5 0 0 0 0-.748L5.651.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "setting") {
    vw = vh = 24;
    svgImage =
      '<path d="m3.771 1.712.3-.772A.692.692 0 0 1 4.719.5h.562a.692.692 0 0 1 .645.44l.3.772 1 .58.82-.124a.692.692 0 0 1 .7.338l.282.488a.693.693 0 0 1-.059.778l-.517.648v1.16l.517.648a.693.693 0 0 1 .059.778l-.282.488a.692.692 0 0 1-.7.338l-.82-.124-1 .58-.3.772a.692.692 0 0 1-.645.44h-.562a.692.692 0 0 1-.645-.44l-.3-.772-1-.58-.82.124a.692.692 0 0 1-.7-.338l-.292-.488a.693.693 0 0 1 .059-.778l.517-.648V4.42l-.517-.648a.693.693 0 0 1-.059-.778l.282-.488a.692.692 0 0 1 .7-.338l.82.124zM3.75 5A1.25 1.25 0 1 0 5 3.75 1.25 1.25 0 0 0 3.75 5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "alert") {
    vw = vh = 24;
    svgImage =
      '<path d="M8 7.5H2v-3a3 3 0 0 1 6 0zm-3.5 2h1m-5-2h9m-9-6 1-1m8 1-1-1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "cake-birthday") {
    vw = vh = 24;
    svgImage =
      '<path d="M.5 23.5h23M1.5 13v6.5a2.005 2.005 0 0 0 2 2h17a2.005 2.005 0 0 0 2-2V13M7 3a1.5 1.5 0 0 1-3 0A5.567 5.567 0 0 1 5.109.688a.5.5 0 0 1 .782 0A5.557 5.557 0 0 1 7 3zm13 0a1.5 1.5 0 0 1-3 0A5.567 5.567 0 0 1 18.109.688a.5.5 0 0 1 .782 0A5.557 5.557 0 0 1 20 3zm-6.5 0a1.5 1.5 0 0 1-3 0A5.567 5.567 0 0 1 11.609.688a.5.5 0 0 1 .782 0A5.557 5.557 0 0 1 13.5 3zm-.5 7.5h-2V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm-6.5 0h-2V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0h-2V7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.5 13a2.625 2.625 0 0 1-5.25 0A2.625 2.625 0 0 1 12 13a2.625 2.625 0 0 1-5.25 0 2.625 2.625 0 0 1-5.25 0v-1.5a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "calendar-number") {
    vw = vh = 24;
    svgImage =
      '<path d="M.5 2.501h23v21H.5zm5-2v5m13-5v5m-18 2h23m-17 11.5h5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 19v-7.5a.5.5 0 0 0-.812-.391L6.5 12.46m9 6.54 2.931-7.255a.469.469 0 0 0-.005-.5.546.546 0 0 0-.464-.245H14a.5.5 0 0 0-.5.5v1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "calendar-time") {
    vw = vh = 24;
    svgImage =
      '<path d="M11.5 17.501a6 6 0 1 0 12 0 6 6 0 1 0-12 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.5 17.501h-2v-3m-8 3.999h-8a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1V10M5.5.501v5m10-5v5m-15 2h20" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "calendar-up") {
    vw = vh = 14;
    svgImage =
      '<path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m4.5 8.5 2.5-3 2.5 3M7 5.5v6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "circle-help") {
    vw = vh = 24;
    svgImage =
      '<path d="M1 12.001a11 11 0 1 0 22 0 11 11 0 1 0-22 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17a.25.25 0 1 0 .25.25A.25.25 0 0 0 12 17h0m-3-6.995a3 3 0 1 1 4.2 2.75 2 2 0 0 0-1.2 1.833V15" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "contract-final") {
    vw = vh = 24;
    svgImage =
      '<path d="M15.5 13v10.5m-8-5 2.5-7 2.5 7m1.5-7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zm3 0h5m-13 0h5m-1.5 12h6m-6-5a2.5 2.5 0 0 1-5 0zm11 0-2.5-7-2.5 7m0 0a2.5 2.5 0 0 0 5 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 23.5h-8a1 1 0 0 1-1-1v-21a1 1 0 0 1 1-1h9a2.782 2.782 0 0 1 1.707.707l3.586 3.586A2.782 2.782 0 0 1 16.5 6.5V8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5.745V4.5a1 1 0 0 0 1 1h3.755M3.5 5.5H6m-2.5 3H9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "receipt") {
    vw = vh = 32;
    svgImage =
      '<path d="M21.75 21.75a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V2.25a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l5.872 5.872a1.5 1.5 0 0 1 .439 1.06z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.75 8.25h-6a1.5 1.5 0 0 1-1.5-1.5v-6M6.2 11.594a2.224 2.224 0 0 0 1.858.875c1.139 0 2.063-.693 2.063-1.547S9.2 9.376 8.062 9.376 6 8.683 6 7.828s.924-1.547 2.062-1.547a2.221 2.221 0 0 1 1.858.875m-1.858 5.313V13.5m0-8.25v1.031M12 15h6M6.75 19.5H18" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>';
  } else if (props.icon == "bag-money") {
    vw = vh = 32;
    svgImage =
      '<path d="M.75 14.25v9m0-1.5h16.5a3 3 0 0 0-3-3H10.5a3 3 0 0 0-3-3H.75m6 3h3.75m9.74-.742a7.475 7.475 0 0 0-2.022-13.059l1.853-3.17a.679.679 0 0 0 0-.687.707.707 0 0 0-.611-.342h-7.42a.707.707 0 0 0-.609.342.679.679 0 0 0 0 .687l1.853 3.17A7.477 7.477 0 0 0 8.25 12" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.7 13.844a2.224 2.224 0 0 0 1.858.875c1.139 0 2.063-.693 2.063-1.547s-.924-1.546-2.063-1.546-2.058-.693-2.058-1.548.924-1.547 2.062-1.547a2.221 2.221 0 0 1 1.858.875m-1.858 5.313v1.031m0-8.25v1.031" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>';
  } else if (props.icon == "vertical-menu") {
    vw = vh = 32;
    svgImage =
      '<path d="M9.362 20.628a2.625 2.625 0 1 0 5.25 0 2.625 2.625 0 1 0-5.25 0zm0-17.25a2.625 2.625 0 1 0 5.25 0 2.625 2.625 0 1 0-5.25 0zm0 8.625a2.625 2.625 0 1 0 5.25 0 2.625 2.625 0 1 0-5.25 0z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>';
  } else if (props.icon == "arrow-down") {
    vw = vh = 24;
    svgImage =
      '<path d="M.5 3.854 6.646 10a.5.5 0 0 0 .708 0L13.5 3.854" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "whatsapp") {
    vw = vh = 32;
    svgImage =
      '<path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/>';
    colorSvg = "";
    colorFill = "green";
  } else if (props.icon == "mail-send") {
    vw = vh = 22;
    svgImage =
      '<path d="M5.818 10.992 8 13.171a1.124 1.124 0 0 0 1.861-.439l3.581-10.753A1.123 1.123 0 0 0 12.021.558L1.268 4.142A1.124 1.124 0 0 0 .829 6L3.57 8.744l-.093 3.465zM13.121.782 3.57 8.744" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "mail") {
    vw = vh = 24;
    svgImage =
      '<path d="M.5 1.75h13v10.5H.5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m.5 3.015 5.855 4.941a1 1 0 0 0 1.29 0L13.5 3.015" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "settings") {
    vw = vh = 32;
    svgImage =
      '<path d="M10.546 2.438a1.957 1.957 0 0 0 2.908 0L14.4 1.4a1.959 1.959 0 0 1 3.41 1.413l-.071 1.4a1.958 1.958 0 0 0 2.051 2.054l1.4-.071a1.959 1.959 0 0 1 1.41 3.41l-1.042.94a1.96 1.96 0 0 0 0 2.909l1.042.94a1.959 1.959 0 0 1-1.413 3.41l-1.4-.071a1.958 1.958 0 0 0-2.056 2.056l.071 1.4A1.959 1.959 0 0 1 14.4 22.6l-.941-1.041a1.959 1.959 0 0 0-2.908 0L9.606 22.6A1.959 1.959 0 0 1 6.2 21.192l.072-1.4a1.958 1.958 0 0 0-2.056-2.056l-1.4.071A1.958 1.958 0 0 1 1.4 14.4l1.041-.94a1.96 1.96 0 0 0 0-2.909L1.4 9.606A1.958 1.958 0 0 1 2.809 6.2l1.4.071a1.958 1.958 0 0 0 2.058-2.06L6.2 2.81A1.959 1.959 0 0 1 9.606 1.4z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.5 12.001a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>';
  } else if (props.icon == "arrow-left") {
    vw = vh = 24;
    svgImage =
      '<path d="M10.146.5 4 6.646a.5.5 0 0 0 0 .708l6.146 6.146" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "travel-stamp") {
    vw = vh = 14;
    svgImage =
      '<path d="M12.293 10.293A1 1 0 0 1 13 10V8a1 1 0 0 1 0-2V4a1 1 0 0 1 0-2V.5h-2.5a1 1 0 0 1-2 0h-3a1 1 0 0 1-2 0H1V2a1 1 0 0 1 0 2v2a1 1 0 0 1 0 2v2a1 1 0 0 1 0 2v1.5h2.5a1 1 0 0 1 2 0h3a1 1 0 0 1 2 0H13V12a1 1 0 0 1-.707-1.707z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5.711V4H6v1.711C4.5 6 4.5 7.475 4.5 8.5c0 1.381 1.119 2 2.5 2s2.5-.619 2.5-2c0-1.025 0-2.5-1.5-2.789zM5 4h4M4.505 8h4.989" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "telephone") {
    vw = vh = 24;
    svgImage =
      '<path d="M8.756 13a3.2 3.2 0 0 0 3.985-.433l.447-.447a1.066 1.066 0 0 0 0-1.507L11.3 8.725a1.066 1.066 0 0 0-1.507 0h0a1.067 1.067 0 0 1-1.508 0l-3.01-3.014a1.067 1.067 0 0 1 0-1.508h0a1.066 1.066 0 0 0 0-1.507L3.391.812a1.066 1.066 0 0 0-1.507 0l-.447.448A3.2 3.2 0 0 0 1 5.244 28.858 28.858 0 0 0 8.756 13z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "books-library") {
    vw = vh = 24;
    svgImage =
      '<path d="M23.5 19.5a2 2 0 0 1-2 2h-19a2 2 0 0 1-2-2v-1h23zm-21 2v2m19-2v2m-9.5-5H7v-17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm5.144 0L15.156 2.094a1 1 0 0 1 .872-1.113L19.006.62a1 1 0 0 1 1.113.873L22.18 18.5m-7.18 0h-3v-15h2a1 1 0 0 1 1 1zm-8 0H2v-17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm2-3h1m-6 0h1m-.5-12v9m5-9v9" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 13.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "setting-vertical") {
    vw = vh = 19;
    svgImage =
      '<path d="M.5 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zM2 6v7.5m0-13V3m8.5 1.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zM12 3V.5m0 13V6M5.5 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zM7 .5v5m0 3v5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "seach-detail") {
    vw = vh = 12;
    svgImage =
      '<path d="M4.75 6.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 1 0-3.5 0zm2.987 1.237L9.5 9.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 4.5V1A.5.5 0 0 0 9 .5H1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1.5m7-5h-9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "move-both-direction") {
    vw = vh = 24;
    svgImage =
      '<path d="M.5 11.998a11.5 11.5 0 1 0 23 0 11.5 11.5 0 1 0-23 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 11.998a3 3 0 1 0 6 0 3 3 0 1 0-6 0zm-4.071-1.414-1.414 1.414 1.414 1.414m5.657 5.657L12 20.483l1.414-1.414m0-14.142L12 3.513l-1.414 1.414m8.485 8.485 1.414-1.414-1.414-1.414" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "entry") {
    vw = vh = 24;
    svgImage =
      '<path d="M11.5 12h12m-8-4-4 4 4 4m-6-13.5H17a.5.5 0 0 1 .5.5v2.5m0 13V21a.5.5 0 0 1-.5.5H9.5m-9-.277a.5.5 0 0 0 .392.488l8 1.777A.5.5 0 0 0 9.5 23V1a.5.5 0 0 0-.608-.488l-8 1.778a.5.5 0 0 0-.392.488z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "exit") {
    vw = vh = 24;
    svgImage =
      '<path d="M23.5 12h-12m8 4 4-4-4-4m-10-5.5H17a.5.5 0 0 1 .5.5v2.5m0 13V21a.5.5 0 0 1-.5.5H9.5m-9-.277a.5.5 0 0 0 .392.488l8 1.777A.5.5 0 0 0 9.5 23V1a.5.5 0 0 0-.608-.488l-8 1.778a.5.5 0 0 0-.392.488z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "home") {
    vw = vh = 24;
    svgImage =
      '<path d="M16.011 23.505h-5v18.5a15.5 15.5 0 0 1-1 5h6z" fill="#debb7e"/><path d="M11.011 23.505v5.5h5v-5.5z" fill="#b89558"/><path d="M16.011 23.505h-5v18.5a15.5 15.5 0 0 1-1 5h6z" fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><path d="M30.511 12.724c0-5.368-5.77-9.719-12.889-9.719-6.452 0-11.781 3.579-12.722 8.246a7.566 7.566 0 0 0-3.386 6.078c0 4.52 4.569 8.185 10.2 8.185a11.194 11.194 0 0 0 8.1-3.221c6.072-.785 10.697-4.765 10.697-9.569z" fill="#6dd627"/><path d="M4.9 15.251c.943-4.667 6.273-8.246 12.726-8.246 6.2 0 11.375 3.3 12.607 7.7a7.445 7.445 0 0 0 .281-1.991C30.511 7.347 24.741 3 17.623 3 11.17 3 5.84 6.575 4.9 11.242a7.566 7.566 0 0 0-3.389 6.078 6.642 6.642 0 0 0 .322 2.006A8.117 8.117 0 0 1 4.9 15.251z" fill="#9ceb60"/><path d="M30.511 12.715C30.511 7.347 24.741 3 17.622 3 11.17 3 5.841 6.575 4.9 11.242a7.566 7.566 0 0 0-3.389 6.078c0 4.52 4.569 8.185 10.2 8.185a11.194 11.194 0 0 0 8.1-3.221c6.075-.784 10.7-4.765 10.7-9.569z" fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><path d="M16.511 12.5h4a1 1 0 0 1 1 1v7h0-6 0v-7a1 1 0 0 1 1-1z" fill="#fff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><path d="M44.25 47.005h-29a2 2 0 0 1-2-2v-20.5l16.5-8.5 16.5 8.5v20.5a2 2 0 0 1-2 2z" fill="#fffef2"/><path d="m29.75 16.005-16.5 8.5v3.5l16.5-8.5 16.5 8.5v-3.5l-16.5-8.5z" fill="#daedf7"/><path d="M44.25 47.005h-29a2 2 0 0 1-2-2v-20.5l16.5-8.5 16.5 8.5v20.5a2 2 0 0 1-2 2z" fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><path d="M17.25 44.5h10a1 1 0 0 1 1 1V47h0-12 0v-1.5a1 1 0 0 1 1-1z" fill="#e0e0e0" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><path d="M18.25 30.755h8a1 1 0 0 1 1 1V44.5h0-10 0V31.755a1 1 0 0 1 1-1z" fill="#bf8256" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><rect x="32.75" y="31.005" width="9" height="9" rx="1" ry="1" fill="#a6fbff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><path d="m29.293 12.74-17.739 9.123a1 1 0 0 0-.491 1.205l.812 2.437L29.75 16.3l17.875 9.209.812-2.437a1 1 0 0 0-.491-1.205L30.207 12.74a1 1 0 0 0-.914 0z" fill="#ff6242" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/><path d="M19.511 33.505h5.5v3.5h-5.5z" fill="#a6fbff" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"/>';
  } else if (props.icon == "warning") {
    vw = vh = 24;
    svgImage =
      '<path d="M.5 5.5h23v7H.5zm2 7v11m19-11v11M4 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zm13 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zM5.5 3.5v2m13-2v2M.793 12.207 7.5 5.5m5 0-7 7m13-7-7 7m11.707-6.707L16.5 12.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "urgencia") {
    vw = vh = 24;
    svgImage =
      '<path d="M23.843 10.908a10.754 10.754 0 0 0-.383-2.115 2.913 2.913 0 0 0-.877-1.393.784.784 0 0 0-.366-.152 8.493 8.493 0 0 0-1.372-.03c-1.442.047-3.654.221-5.086.3.142-1.325.577-2.71.658-4.048a5.483 5.483 0 0 0-.2-1.936.749.749 0 0 0-.534-.41 19.634 19.634 0 0 0-1.96-.278 23.649 23.649 0 0 0-4.869-.4 3.789 3.789 0 0 0-2.173.863 1.006 1.006 0 0 0-.264.608 12.6 12.6 0 0 0 0 1.324 20.337 20.337 0 0 0-.01 2.039c.039.885.13 1.738.239 2.732A10.945 10.945 0 0 0 4.873 7.6a11.606 11.606 0 0 0-2.165-.091 5.047 5.047 0 0 0-1.208.069 1.2 1.2 0 0 0-.642.443A4.415 4.415 0 0 0 .2 9.818a19.2 19.2 0 0 0-.189 2.607c-.009.5-.018 1.077.02 1.633a7.562 7.562 0 0 0 .156 1.127.948.948 0 0 0 .45.589 5.378 5.378 0 0 0 1.505.454 13.82 13.82 0 0 0 1.99.244c.848.049 1.7.049 2.528.058-.114 1.07-.25 2.17-.319 3.27a16.8 16.8 0 0 0 0 2.478.906.906 0 0 0 .576.633 8.933 8.933 0 0 0 1.611.459 14.8 14.8 0 0 0 1.966.211c.968.041 1.948 0 2.9-.025a21.982 21.982 0 0 0 2.859-.362.806.806 0 0 0 .631-.536 20.869 20.869 0 0 0 .078-3.149 28.364 28.364 0 0 0-.271-3.1.332.332 0 0 0-.658.083 27.237 27.237 0 0 1 .114 3.03 21.629 21.629 0 0 1-.185 2.723 21.6 21.6 0 0 1-2.6.214 47.38 47.38 0 0 1-2.823.011 15.035 15.035 0 0 1-1.827-.159 6.119 6.119 0 0 1-1.412-.179 15.784 15.784 0 0 1-.155-2.308c0-1.126.074-2.256.117-3.358a.326.326 0 0 0 .138-.249.332.332 0 0 0-.317-.345c-.934-.068-1.918-.112-2.886-.225a13.058 13.058 0 0 1-1.845-.337c-.176-.047-1.2-.106-1.217-.448a54.181 54.181 0 0 1-.015-2.408 21.73 21.73 0 0 1 .152-2.467 3.6 3.6 0 0 1 .4-1.4.438.438 0 0 1 .332-.143c.286-.042.585-.031.774-.054A10.434 10.434 0 0 1 4.8 8.323a9.888 9.888 0 0 1 2 .342.29.29 0 0 0 .36-.18.286.286 0 0 0 .1-.24c-.052-1.108-.1-2.019-.081-2.973a19.9 19.9 0 0 1 .242-3.3A8.246 8.246 0 0 1 9.6 1.513a39.623 39.623 0 0 1 4.02.4c.2.015 1.249.058 1.752.149a4.706 4.706 0 0 1 .174 1.377 37.7 37.7 0 0 1-.65 4.4.291.291 0 0 0 .294.289l6.731.072a1.919 1.919 0 0 1 .495.918 10.341 10.341 0 0 1 .318 1.9c.1.879.194 1.682.207 2.38a3.431 3.431 0 0 1-.183 1.385c-.248.583-.8.92-1.83 1.024-.273.028-1.065.037-1.879.021a18.693 18.693 0 0 1-1.884-.109.332.332 0 0 0-.111.654c.423.083 1.2.157 1.959.213.856.062 1.69.1 1.978.082a2.779 2.779 0 0 0 2.685-1.465c.475-.987.334-2.496.167-4.295zM15.4 2.073l.05.01c.021 0 .06 0 .054.013-.025.068-.065.038-.104-.023z"/><path d="m8.691 12.729-.522.614c-.08.1-.283.234-.338.331a.533.533 0 0 0-.082.346.486.486 0 0 0 .229.372.974.974 0 0 0 .4.134c.188.02.421.009.557.012l1.878-.018a.331.331 0 1 0 .084-.657l-1.7-.157.247-.24a7.431 7.431 0 0 0 1.445-1.566 1.737 1.737 0 0 0 .188-1.178 1.649 1.649 0 0 0-2.1-1.382 1.858 1.858 0 0 0-1.393 1.9.293.293 0 0 0 .585 0 1.153 1.153 0 0 1 .987-1.076c.4-.061.781.181.854.757a.868.868 0 0 1-.219.636 11.336 11.336 0 0 1-1.1 1.172zm4.227-3.372a.294.294 0 0 0-.332.247 5.607 5.607 0 0 0-.371 2.275 1.633 1.633 0 0 0 1.377 1.3l.631.022c.041.5.108.985.149 1.48a.332.332 0 0 0 .663.02c.074-.518.148-1.032.2-1.555l.555-.052a.332.332 0 0 0-.012-.663l-.489-.05c0-.037.006-.075.007-.112.006-.24.005-.48-.007-.719-.029-.567-.1-1.113-.109-1.679a.292.292 0 1 0-.579-.076 11.386 11.386 0 0 0-.4 1.962 5.857 5.857 0 0 0-.016.46l-.339-.078a.79.79 0 0 1-.646-.772 11.229 11.229 0 0 1-.032-1.674.293.293 0 0 0-.25-.336z"/>';
  } else if (props.icon == "people-mark") {
    vw = vh = 24;
    svgImage =
      '<path d="m7.5 23.5.5-6h2.5V14a5 5 0 0 0-10 0v3.5H3l.5 6z" fill="#e3e3e3" stroke="#191919" stroke-linecap="round" stroke-linejoin="round"/><circle cx="5.5" cy="4" r="3.5" fill="#e3e3e3" stroke="#191919" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 1.5h2.25A3.749 3.749 0 0 1 19 5.25V7" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 5.5 19 7l-1.5-1.5" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.5 14.588c0 2.332-3.5 6.929-4.7 8.424a.5.5 0 0 1-.782 0c-1.192-1.5-4.7-6.092-4.7-8.424a5.089 5.089 0 0 1 10.178 0z" fill="#ff808c"/><path d="M18.412 23.2a.5.5 0 0 1-.391-.188c-1.192-1.5-4.7-6.092-4.7-8.424A5.088 5.088 0 0 1 18.412 9.5z" fill="#ffbfc5"/><path d="M20.32 14.588a1.908 1.908 0 1 1-1.908-1.908 1.909 1.909 0 0 1 1.908 1.908z" fill="#e3e3e3"/><path d="M18.412 16.5a1.909 1.909 0 0 1 0-3.818z" fill="#fff"/><path d="M23.5 14.588c0 2.332-3.5 6.929-4.7 8.424a.5.5 0 0 1-.782 0c-1.192-1.5-4.7-6.092-4.7-8.424a5.089 5.089 0 0 1 10.178 0z" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.32 14.588a1.908 1.908 0 1 1-1.908-1.908 1.909 1.909 0 0 1 1.908 1.908z" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "travel-bag") {
    vw = vh = 24;
    svgImage =
      '<path d="M23.5 13V7.5a3.009 3.009 0 0 0-3-3h-17a3.009 3.009 0 0 0-3 3v10a3.009 3.009 0 0 0 3 3h4m1-16v-2a2.006 2.006 0 0 1 2-2h3a2.006 2.006 0 0 1 2 2v2m4 0V12m-3-7.5V12m-9-7.5v16m-3-16v16" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.255 14.8a1.61 1.61 0 0 1 1.155 1.037 1.522 1.522 0 0 1 .09.513 1.591 1.591 0 0 1-.743 1.378L13.6 23.415a.561.561 0 0 1-.621-.018L9.616 21.04a.31.31 0 0 1-.047-.437.29.29 0 0 1 .053-.052l1.409-1.243a.31.31 0 0 1 .3-.051l1.769 1.052 2.24-1.563-4.245-2.628a.385.385 0 0 1-.044-.544.378.378 0 0 1 .062-.058l1.038-.769a.386.386 0 0 1 .364-.052l5.85 2.178 2.706-1.847a1.5 1.5 0 0 1 1.184-.226z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "linkedin") {
    vw = vh = 24;
    svgImage =
      '<path d="M6.5 22.5h-5v-13h5zm9-9a2 2 0 0 0-2 2v7h-5v-13h5v1.485a6.307 6.307 0 0 1 3.99-1.495c2.962 0 5.01 2.2 5.01 6.355V22.5h-5v-7a2 2 0 0 0-2-2zM6.5 5A2.5 2.5 0 1 1 4 2.5 2.5 2.5 0 0 1 6.5 5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "download-file") {
    vw = vh = 24;
    svgImage =
      '<path d="M4.5 8.5H14m-9.5 3h6m-6-6h7m-7 9h4m-4 3h4m2 6h-9a1 1 0 0 1-1-1v-21a1 1 0 0 1 1-1h13.293a1 1 0 0 1 .707.293L19.207 4.5a1 1 0 0 1 .293.707V8.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5 17.5a6 6 0 1 0 12 0 6 6 0 1 0-12 0zm6-3v6m0 0-2.25-2.25m2.25 2.25 2.25-2.25" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "view") {
    vw = vh = 24;
    svgImage =
      '<path d="M.75 12a11.25 11.25 0 1 0 22.5 0 11.25 11.25 0 1 0-22.5 0z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.267 10.731a1.825 1.825 0 0 0 0 2.544C5.818 14.83 8.591 17.258 12 17.258s6.182-2.427 7.734-3.982a1.826 1.826 0 0 0 0-2.544C18.183 9.177 15.406 6.748 12 6.748s-6.181 2.427-7.733 3.983z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.75 12a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 1 0-4.5 0z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>';
  } else if (props.icon == "bracelet") {
    vw = vh = 24;
    svgImage =
      '<path d="M.499 12a11.5 9 0 1 0 23 0 11.5 9 0 1 0-23 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.499 8.5a6.5 3.5 0 1 0 13 0 6.5 3.5 0 1 0-13 0zm-1.5 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0zm5.854 2.171 1.767-1.767a.5.5 0 0 1 .707 0l1.927 1.927a.27.27 0 0 1 0 .381l-1.93 1.93a.5.5 0 0 1-.707 0l-1.768-1.767a.5.5 0 0 1 .004-.704zM17.499 14a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "earrings") {
    vw = vh = 24;
    svgImage =
      '<path d="M16.5 4.5v-1a1 1 0 0 0-1-1 1 1 0 0 1 0-2H18" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.499 5.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.371 10.114a7 7 0 1 1 3.256 9.772" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.444 11.546a4.5 4.5 0 1 1 1.985 5.95" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.999 11.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0zM7.5 7.5v-1a1 1 0 0 0-1-1 1 1 0 1 1 0-2H9" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.499 8.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M.499 16.5a7 7 0 1 0 14 0 7 7 0 1 0-14 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.999 16.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.999 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "earrings-oriental") {
    vw = vh = 24;
    svgImage =
      '<path d="M16.249 19a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25m4.5 0a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25M18.5 20.75a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25M18.499 6.5V8m-3-4.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.499 3.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0zm6.001 15a5 5 0 0 1-10 0c0-2.761 5-10.5 5-10.5s5 7.739 5 10.5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 16a1.5 1.5 0 0 1-3 0 9.062 9.062 0 0 1 1.059-2.641.5.5 0 0 1 .882 0A9.062 9.062 0 0 1 20 16zM3.249 19a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25m4.5 0a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25M5.5 20.75a.25.25 0 1 1-.25.25.25.25 0 0 1 .25-.25M5.499 6.5V8m-3-4.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.499 3.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0zm6.001 15a5 5 0 0 1-10 0c0-2.761 5-10.5 5-10.5s5 7.739 5 10.5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 16a1.5 1.5 0 0 1-3 0 9.062 9.062 0 0 1 1.059-2.641.5.5 0 0 1 .882 0A9.062 9.062 0 0 1 7 16z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "neck") {
    vw = vh = 24;
    svgImage =
      '<path d="m16.699 17.866 4.135 2.969m1.901-1.869a1.2 1.2 0 0 0-1.636.812l-.265 1.057-1.057.265a1.2 1.2 0 0 0-.812 1.636l.016.037a1.2 1.2 0 0 0 1.195.723l3.082-.237.238-3.082a1.2 1.2 0 0 0-.724-1.2zM8.291 3.055a2.555 2.555 0 1 0 5.11 0 2.555 2.555 0 1 0-5.11 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.252 4.193a1.845 1.845 0 1 0 3.69 0 1.845 1.845 0 1 0-3.69 0zM.93 7.305a2.555 2.555 0 1 0 5.11 0 2.555 2.555 0 1 0-5.11 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75 4.193a1.845 1.845 0 1 0 3.69 0 1.845 1.845 0 1 0-3.69 0zM.93 15.805a2.555 2.555 0 1 0 5.11 0 2.555 2.555 0 1 0-5.11 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M.5 11.555a1.845 1.845 0 1 0 3.69 0 1.845 1.845 0 1 0-3.69 0zm7.791 8.5a2.555 2.555 0 1 0 5.11 0 2.555 2.555 0 1 0-5.11 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.75 18.917a1.845 1.845 0 1 0 3.69 0 1.845 1.845 0 1 0-3.69 0zm10.902-3.112a2.555 2.555 0 1 0 5.11 0 2.555 2.555 0 1 0-5.11 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.252 18.917a1.845 1.845 0 1 0 3.69 0 1.845 1.845 0 1 0-3.69 0zm2.4-11.612a2.555 2.555 0 1 0 5.11 0 2.555 2.555 0 1 0-5.11 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.502 11.555a1.845 1.845 0 1 0 3.69 0 1.845 1.845 0 1 0-3.69 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "neck-2") {
    vw = vh = 24;
    svgImage =
      '<path d="M3.749 16.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 1 0-2.5 0zm1.25-4.563V15.5m1.75 5.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 1 0-2.5 0zm1.25-4.428V19.5m9.75-2.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 1 0-2.5 0zm1.25-4.563V15.5m-4 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0zm1-4.178V19.5m-5.25 2.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 1 0-2.5 0zM20 8.9c0 4.639-8 11.365-8 11.365S4 13.539 4 8.9a8.208 8.208 0 0 1 8-8.4 8.208 8.208 0 0 1 8 8.4z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "watch") {
    vw = vh = 24;
    svgImage =
      '<path d="M4.999 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 3.5h-9c-2.011 2.408-4 5.375-4 8.5 0 3 1.525 5.77 4 8.5h9c2.475-2.73 4-5.5 4-8.5 0-3.125-1.988-6.091-4-8.5z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.352 10.5H21a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1.628M8.499.5v3h-2v-3m9 0v3h-2v-3m-5 1h5m-5 22v-3h-2v3m9 0v-3h-2v3m-5-1h5m-5-13.5 2.5 3.5m0 0 3-1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "ring") {
    vw = vh = 24;
    svgImage =
      '<path d="M12 2.615C10.9-.771 7 .247 7 3.286c0 2.5 4.278 5.789 5 6.326.722-.537 5-3.826 5-6.326 0-3.039-3.9-4.057-5-.671z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.457 9.388a7.5 7.5 0 1 0 7-.046" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.457 11.079a5.155 5.155 0 1 0 3-.027" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "watch-heart") {
    vw = vh = 24;
    svgImage =
      '<path d="M7.328 4.897 8.5.5h7l1.172 4.398M7.31 19.037 8.5 23.5h7l1.206-4.42" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 12a8.5 8.5 0 1 0 17 0 8.5 8.5 0 1 0-17 0z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="m12 16.25-4.139-4.318A2.449 2.449 0 0 1 7.4 9.1h0a2.449 2.449 0 0 1 3.922-.636l.678.68.676-.676A2.449 2.449 0 0 1 16.6 9.1h0a2.45 2.45 0 0 1-.458 2.828z" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (props.icon == "anklet") {
    vw = vh = 24;
    svgImage =
      '<path d="m42.726562 512.035156c15.085938.203125 29.960938-3.582031 43.113282-10.976562 13.363281 5.34375 36.871094 10.976562 76.882812 10.976562 26.136719-.234375 52.136719-3.730468 77.40625-10.402344 24.710938-7.25 50.613282-9.535156 76.210938-6.734374 29.867187 3.710937 48.359375 7.441406 63.191406 10.429687 19.0625 4.476563 38.582031 6.726563 58.160156 6.707031 25.601563 0 45.058594-8.484375 57.722656-25.21875 20.957032-27.699218 21.503907-77.402344 1.636719-147.769531-31.335937-110.976563-22.757812-194.738281-15.855469-262.050781 2.5-24.40625 4.855469-47.460938 4.855469-68.429688 0-4.710937-3.820312-8.5312498-8.53125-8.5312498-4.714843 0-8.535156 3.8203128-8.535156 8.5312498 0 20.089844-2.210937 41.6875-4.777344 66.6875-4.945312 40.808594-7.054687 81.910156-6.316406 123.007813-38 22.660156-81.5 34.425781-125.738281 34.015625 3.242187-85.1875-6.375-217.105469-6.910156-224.339844-.125-2.277344-1.167969-4.402344-2.886719-5.890625-1.722657-1.492187-3.976563-2.21875-6.246094-2.0117188-4.695313.3476558-8.222656 4.4414058-7.875 9.1367188.136719 1.828125 10.785156 147.78125 6.628906 230.988281 0 .128906-.074219.242188-.074219.378906 0 .136719.042969.167969.042969.273438-.238281 15.730469-2.3125 31.382812-6.179687 46.632812-16.121094 48.339844-24.210938 72.601563-106.957032 105.703126-26.683593 10.675781-44.542968 18.996093-57.574218 25.070312-28.75 13.414062-36.480469 17.015625-75.792969 17.015625-59.179687 0-68.265625 0-68.265625 34.132813-.433594 11.445312 3.921875 22.550781 12.019531 30.648437 8.097657 8.097656 19.203125 12.453125 30.644531 12.019531zm416.113282-294.402344c.28125 4.394532.597656 8.832032.988281 13.339844-30.96875 19.414063-66.136719 31.136719-102.5625 34.191406-9.085937.855469-18.269531 1.109376-27.417969 1.101563.574219-5.238281 1.050782-10.929687 1.453125-16.949219 44.503907.367188 88.378907-10.535156 127.539063-31.683594zm-100.789063 110.5c3.773438 3.738282 6.683594 8.257813 8.535157 13.234376 0 4.714843-3.820313 8.535156-8.535157 8.535156-4.710937 0-8.53125-3.820313-8.53125-8.535156 1.851563-4.976563 4.761719-9.492188 8.53125-13.234376zm-338.636719 126.675782c5.835938-2.507813 22.050782-2.507813 48.914063-2.507813 43.101563 0 53.144531-4.683593 82.988281-18.585937 12.859375-5.972656 30.472656-14.191406 56.710938-24.6875 86.46875-34.59375 98.296875-60.585938 116.804687-116.164063.980469-3.078125 1.78125-6.214843 2.398438-9.386719.996093 0 1.996093.050782 2.992187.050782 6.4375 0 12.871094-.273438 19.296875-.671875v29.371093c-6.101562 6.203126-17.066406 18.773438-17.066406 29.15625 0 14.140626 11.460937 25.601563 25.597656 25.601563 14.140625 0 25.601563-11.460937 25.601563-25.601563 0-10.367187-10.964844-22.953124-17.066406-29.15625v-30.976562c33.550781-3.714844 65.972656-14.335938 95.222656-31.1875 3.816406 31.652344 10.113281 62.957031 18.824218 93.625 18.074219 64 18.476563 109.960938 1.167969 132.839844-10.835937 12.945312-27.28125 19.820312-44.109375 18.441406-18.449218.023438-36.839844-2.117188-54.789062-6.375-15.105469-3.046875-33.914063-6.828125-64.460938-10.625-27.59375-3.066406-55.519531-.675781-82.1875 7.039062-23.992187 6.394532-48.699218 9.742188-73.53125 9.960938-17.710937.269531-35.40625-1.273438-52.804687-4.609375.675781-1.199219 1.042969-2.546875 1.078125-3.925781 0-4.710938-3.820313-8.53125-8.535156-8.53125-8.226563.4375-16.207032 2.960937-23.191407 7.328125-11.058593 6.53125-23.699219 9.898437-36.542969 9.738281-6.894531.367188-13.621093-2.210938-18.503906-7.09375-4.882812-4.882812-7.460937-11.613281-7.09375-18.507812 0-12.996094.511719-13.789063 2.285156-14.558594zm0 0"></path><path d="m417.785156 366.96875c1.34375-.003906 2.667969-.320312 3.867188-.929688l19.855468-10.113281c8.597657-3.757812 14.921876-11.347656 17.066407-20.480469 1.292969-7.476562-1.042969-15.121093-6.289063-20.597656l-19.625-21.882812c-3.167968-3.417969-8.496094-3.664063-11.964844-.550782-3.464843 3.117188-3.792968 8.4375-.734374 11.953126l19.625 21.878906c1.664062 1.554687 2.488281 3.808594 2.210937 6.066406-1.339844 3.828125-4.28125 6.878906-8.054687 8.363281l-19.867188 10.121094c-3.558594 1.773437-5.421875 5.773437-4.488281 9.640625.933593 3.871094 4.417969 6.578125 8.398437 6.53125zm0 0"></path>';
  }

  if (props.size != undefined && props.size != null) vw = vh = props.size;

  return (
    <InlineSVG
      src={
        '<svg viewBox="0 0 ' +
        vw +
        " " +
        vh +
        '" xmlns="http://www.w3.org/2000/svg" fill="' +
        colorFill +
        '" stroke="' +
        colorSvg +
        '">' +
        svgImage +
        "</svg>"
      }
    />
  );
}

export default IconSvg;
