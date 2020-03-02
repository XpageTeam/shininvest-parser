import domReady from "./xpage/ready";
import App from "./xpage/core";

domReady(() => {
	;(async function(){
		const singleSelects = App.transformNodeListToArray(document.querySelectorAll(".default-input__input--select:not([multiple])"));

		if (!singleSelects.length) return;

		const mySelect = (await import("./xpage/select")).default;

		for (const select of singleSelects)
			new mySelect(select as HTMLSelectElement);
	})();
})