import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

import { MOCK_SUBJECTS } from "@/constants/mock-data";

export const dataProvider: DataProvider = {
	getList: async <TData extends BaseRecord = BaseRecord>({
		resource,
	}: GetListParams): Promise<GetListResponse<TData>> => {
		if (resource !== "subjects") {
			return { data: [] as TData[], total: 0 };
		}

		return {
			data: MOCK_SUBJECTS as unknown as TData[],
			total: 3,
		};
	},

	getOne: () => {
		throw new Error("This function is not present in mock");
	},
	create: () => {
		throw new Error("This function is not present in mock");
	},
	update: () => {
		throw new Error("This function is not present in mock");
	},
	deleteOne: () => {
		throw new Error("This function is not present in mock");
	},
	getApiUrl: () => "",
};
