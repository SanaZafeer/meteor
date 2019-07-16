// *{
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//     font-family: Nunito-Regular, AdobeInvisFont, MyriadPro-Regular;
// }
//
// //colorVariables
//
// $header-top:#1a0e36;
// $header-text:#7c8295;
//
//
//
//
//
//
// .header-container {
// .header-top {
//         background: $header-top;
//         display:flex;
//         justify-content: space-around;
//     .header-top-text{
//             color: $header-text;
//             padding: 10px;
//             word-spacing: 10px;
//             font-size: small;
//             font-weight: 500;
//         }
//     .header-social-icons{
//             color: $header-text;
//             width: 200px;
//             height: 14px;
//             display: flex;
//             justify-content: space-between;
//             margin-top: 11px;
//             img {
//                 width: 16px;
//             }
//         .sign-in1 {
//                 padding-left: 4px;
//
//             }
//         .sign-in2{
//
//             }
//
//
//
//         }
//     }
//
// .navbar-container {
//         background: white;
//     .navbar {
//             width: 75%;
//             height: 80%;
//             margin:auto;
//             display: flex;
//             justify-content: space-between;
//         .logo-navbar {
//             .logo{
//
//                 }
//                 ul{
//                     display: inline-block;
//                     margin-left:32px;
//                     li{
//                         display: inline-block;
//                         padding:20px;
//                         font-size: larger;
//                         cursor: pointer;
//                         text-transform: capitalize;
//                     .li-lifestyle, .li-videos{
//                             background: transparent;
//                             border: none;
//                             font-size: large;
//                             outline: none;
//                             cursor: pointer;
//                         }
//                     .li-lifestyle:hover, .li-videos:hover{
//                             color: white;
//                         }
//
//                     }
//                     li:hover{
//                         background: $header-top;
//                         color: white;
//                     }
//                 }
//             }
//         .search-icon{
//                 padding: 18px;
//                 padding-top: 21px;
//             }
//         }
//     }
//
// }
//
//
// @media only screen and (max-width: 420px) {
//
//
//
// .header-container {
//         height: 50px;
//     .header-top {
//             background: $header-top;
//             height: 10px;
//         .header-top-text {
//                 display: none;
//             }
//         .header-social-icons {
//                 display: none;
//             }
//         }
//
//     .navbar-container {
//             display: inline-block;
//             background: white;
//             height: 33px;
//         .navbar {
//                 width: 100%;
//                 text-align: center;
//                 display: inline-block;
//                 font-size: xx-small;
//             .logo-navbar {
//                 .logo {
//                         display: none;
//                     }
//
//                     ul {
//                         display:flex;
//                         margin-left: 0%;
//                     }
//                 }
//             .search-icon {
//                     display: none;
//                 }
//             }
//         }
//     }
// }