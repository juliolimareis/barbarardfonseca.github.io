import { createComponent } from "./index.js";

export default function Link(props){
	return createComponent({
		component: `
			<a href="${props.href}" target="${props.target ?? ""}">
				{children}
			</a>
		`, props
	})
}