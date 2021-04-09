import styled from "styled-components";

const ProgressBar = styled.div`
  position: fixed;
  background: linear-gradient(
    to bottom,
    #008aff,
    #00ffe7 ${(props) => props.scroll},
    transparent 0
  );
  animation: animate 5s linear infinite;
  width: 10px;
  height: 100%;
  right: 0;
  top: 0;
  border-radius: 16px;

  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(360deg);
    }
    100% {
      filter: hue-rotate(0deg);
    }
  }

  &:before {
    content: "";
    position: inline-absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #008aff, #00ffe7);
    filter: blur(10px);
  }

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #008aff, #00ffe7);
    filter: blur(30px);
  }
`;

export default ProgressBar;

// state = {
//     scrollPosition: 0,
//   };

//   listenToScrollEvent = () => {
//     document.addEventListener("scroll", () => {
//       requestAnimationFrame(() => {
//         this.calculateScrollDistance();
//       });
//     });
//   };

//   calculateScrollDistance = () => {
//     const scrollTop = window.pageYOffset;
//     const winHeight = window.innerHeight;
//     const docHeight = this.getDocHeight();

//     const totalDocScrollHeight = docHeight - winHeight;
//     const scrollPosition = Math.floor((scrollTop / totalDocScrollHeight) * 100);

//     this.setState({
//       scrollPosition,
//     });
//   };

//   getDocHeight = () => {
//     return Math.max(
//       document.body.scrollHeight,
//       document.documentElement.scrollHeight,
//       document.body.offsetHeight,
//       document.documentElement.offsetHeight,
//       document.body.clientHeight,
//       document.documentElement.clientHeight
//     );
//   };

//   componentDidMount() {
//     this.listenToScrollEvent();
//   }
