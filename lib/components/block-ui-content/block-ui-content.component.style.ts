// Spinner style - https://github.com/lukehaas/css-loaders

export const styles = `
.block-ui-wrapper {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.70);
  z-index: 30000;
  cursor: wait;
}

.block-ui-wrapper.block-ui-wrapper--element {
  position: absolute;
}

.block-ui-wrapper.active {
  
}

.block-ui-wrapper.block-ui-main {
  position: fixed;
}

.block-ui-spinner,
.block-ui-template {
  position: absolute;
  top: 40%;
  margin: 0 auto;
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.block-ui-spinner > .message {
  font-size: 1.3em;
  text-align: center;
  color: #fff;
}

.block-ui__element {
  position: relative;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 7px auto;
  font-size: 5px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}

@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* loader animation css */

.loader_animate_line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-bottom: 8px;
}

@-webkit-keyframes loader_animate_line {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }
  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } 
}

@keyframes loader_animate_line {
  0% {
    -webkit-transform: scaley(1);
            transform: scaley(1); }
  50% {
    -webkit-transform: scaley(0.4);
            transform: scaley(0.4); }
  100% {
    -webkit-transform: scaley(1);
            transform: scaley(1); } 
}

.loader_animate_line > div {
  background-color: var(--loader-msg-clr);
  width: 4px;
  height: 30px;
  border-radius: 4px;
  margin: 4px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block;
  -webkit-animation: loader_animate_line 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
          animation: loader_animate_line 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85); 
}

.loader_animate_line > div:nth-child(2), 
.loader_animate_line > div:nth-child(4) {
    -webkit-animation-delay: -0.4s !important;
            animation-delay: -0.4s !important; 
}

.loader_animate_line > div:nth-child(1), 
.loader_animate_line > div:nth-child(5) {
    -webkit-animation-delay: -0.2s !important;
            animation-delay: -0.2s !important; 
}

/* loader animation css ends */
`;
