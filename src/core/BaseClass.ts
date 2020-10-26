/* 基类
 * @Author: zll 
 * @Date: 2020-04-18 10:55:07 
 * @Last Modified by: zll
 * @Last Modified time: 2020-04-18 10:58:51
 */
export class BaseClass {
	public constructor() {

	}

	/**
	 * 获取一个单例
	 * @returns {any}
	 */
	public static ins(...args: any[]): any {
		let Class: any = this;
		if (!Class._instance) {
			Class._instance = new Class(...args);

		}
		return Class._instance;
	}

	public static del(): void {
		let Class: any = this;
		if (Class._instance) {
			Class._instance = null;
		}
	}
}