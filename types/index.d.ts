declare module "inquirer/lib/prompts/base" {
	export = Base;

	class Base {
		opt: {
			choices: Base.Choice[];
			pageSize: number;
		};
		rl: {
			line: string;
			write(params: any): void;
			moveCursor(dx: number): void;
		};
		status: string;
		screen: {
			render: (content: string, bottomContent: string) => void;
			done: () => void;
		};

		constructor(...params: any[]);

		throwParamError(params: string): void;
		getQuestion(): string;
		handleSubmitEvents(submit: any): Base.Validation;
	}

	namespace Base {
		export interface Validation {
			success: any;
			error: any;
		}

		export interface Choice {
			name: string;
			type: string;
			short: string;
			value: string;
			line: string;
			disabled: boolean;
			checked: boolean;
		}
	}
}

declare module "inquirer/lib/utils/events" {
	import { Observable } from 'rxjs';

	interface Events {
		keypress: Observable<any>;
		line: Observable<any>;
		spaceKey: Observable<any>;
	}

	function observe(params: any): Events;
	export = observe;
}

declare module "inquirer/lib/utils/paginator" {
	class Paginator {
		paginate(output: string, active: number, pageSize: number): string;
	}
	export = Paginator;
}
declare module "cli-cursor";
declare module "ansi-escapes";
