import { createComponent } from "./index.js";

export default function Div(props){
	return createComponent({
		component: `<div>{children}</div>`,
		props
	})
}