import Div from "./Div.js";
import Link from "./Link.js";
import addComponent, { createComponent, removeAllChildren } from "./index.js";

function NavbarBrand(props){
	return createComponent({
		component: `
			<div class="navbar-brand">
				{children}
			</div>
		`, props
	})
}

function NavbarMenu(props){
	return createComponent({
		component: `
			<div id="navbar-main" class="navbar-menu">
				{children}
			</div>
		`, props
	})
}

function NavbarBurger(props = {}){
	props.attr = {
		onclick: () => {
			const burgerElements = document.getElementsByClassName("navbar-burger");

			if(burgerElements && burgerElements.length){
				const burger = burgerElements[0];

				if (!burger.classList.contains("is-active")){
					burger.classList.add("is-active")
					document.getElementById("navbar-main").classList.add("is-active");
				} else {
					burger.classList.remove("is-active");
					document.getElementById("navbar-main").classList.remove("is-active");
				}				
			}
		}
	}

	return createComponent({
		component: `
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-main">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		`, props
	})
}

function NavbarItem(props = {}){
	props.attr = {
		onclick: removeIsActive
	}

	return Link({
		className: "navbar-item",
		...props
	})
}

const AddNavBar = () => {
	addComponent("navbar", [
		NavbarBrand({
			children: [
				NavbarItem({
					children: [
						`<img src="images/brancotr.png">`
					]
				}),
				NavbarBurger(),
			]
		}),
	
		NavbarMenu({
			children: [
				Div({
					className: "navbar-start",
					children: [
						NavbarItem({
							href: "index.html",
							children: "Home"
						}),
						NavbarItem({
							href: "#reports",
							children: "Outros Relatórios"
						}),
						NavbarItem({
							href: "#bi_tools",
							children: "Ferramentas de BI"
						}),
						NavbarItem({
							href: "#social_media",
							children: "Redes sociais"
						}),
					]
				})
			]
		})
	]);

	removeAllChildren()
}

function removeIsActive(){
	const burgerElements = document.getElementsByClassName("navbar-burger");

	if(burgerElements && burgerElements.length){
		const burger = burgerElements[0];
		
		burger.classList.remove("is-active");
		document.getElementById("navbar-main").classList.remove("is-active");			
	}
}

export default AddNavBar;