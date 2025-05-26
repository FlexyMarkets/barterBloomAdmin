import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminStateApis = createApi({
    reducerPath: "adminApis",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["userList",],
    endpoints: (builder) => ({
        addFund: builder.mutation({
            query: (data) => ({
                url: "/admin/transaction/deposit/usdt",
                method: "POST",
                body: data
            })
        }),
        userList: builder.query({
            query: ({ page = 1, sizePerPage = 10, search, greaterThan, lessThan, type, startDate, endDate }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (search) params.search = search;
                if (greaterThan) params.greaterThan = greaterThan;
                if (lessThan) params.lessThan = lessThan;
                if (type) params.type = type;
                if (startDate) params.startDate = startDate;
                if (endDate) params.endDate = endDate;

                return {
                    url: "/user/list",
                    params,
                };
            },

            providesTags: (result) => {
                const data = result?.data?.docs || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'userList', id })),
                        { type: 'userList', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'userList', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
    })
})

export const {
    useAddFundMutation,
    useUserListQuery
} = adminStateApis;