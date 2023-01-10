import addComponent from "./components/index.js";
import { Test, Text } from "./components/TestComponent.js";

// exemplo de componentes completos
// addComponent("test", 
//   Test({
//     title: "DAX",
//     desc: "Descrição DAX",
//     imageSrc: "icon/dax2.png",
//     className: "test",
//     style: {
//       border: "3px solid black"
//     },
//     attr:{
//       onclick: () => console.log("Test Click")
//     },
//     children: [
//       Text({
//         text: "Hello World Component children!",
//         children: Text({
//           title: "Chid => ",
//           children: "<a>Test Link<a/>"
//         })
//       })
//     ]
//   })
// );