// import { useMutation, useQuery } from '@emr-web/common';
import { axiosGet, axiosPost } from './axios';
// import { userQueryKeyMap } from './common/user.queryKey';

interface LoginData {
  email: string;
  password: string;
}

// export const useLogin = () => {
//   return useMutation({
//     mutationKey: ['login'],
//     mutationFn: async (data: LoginData) => {
//       const res = await axiosPost('/auth/login', {
//         data
//       });
//       return res;
//     }
//   });
// };

// export const useCurrentUser = (
//   data: { isEnabled?: boolean } = { isEnabled: true }
// ) => {
//   return useQuery({
//     queryKey: userQueryKeyMap.currentUser(),
//     queryFn: async () => axiosGet('/user'),
//     select: (res) => res.data,
//     enabled: data?.isEnabled
//   });
// };

// @encounter/api/user.ts
// export const fetchRxnormMedications = async ({
//   query,
//   page = 1,
//   limit = 25
// }: {
//   query: string;
//   page?: number;
//   limit?: number;
// }) => {
//   const res = await fetch(
//     `https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=${encodeURIComponent(
//       query
//     )}`
//   );

//   if (!res.ok) throw new Error('Failed to fetch medications');

//   const json = await res.json();

//   const candidates = json?.approximateGroup?.candidate || [];

//   // Deduplicate and limit results
//   const uniqueRows = Array.from(
//     new Map(
//       candidates.map((item: any) => [
//         item.rxcui,
//         {
//           id: item.rxcui,
//           value: item.name,
//           label: item.name
//         }
//       ])
//     ).values()
//   );

//   const paginated = uniqueRows.slice((page - 1) * limit, page * limit);

//   return {
//     rows: paginated,
//     total: uniqueRows.length,
//     nextOffset: page + 1
//   };
// };
export const fetchRxnormMedications = async ({
  query,
  page = 1,
  limit = 25
}: {
  query: string;
  page?: number;
  limit?: number;
}) => {
  if (!query.trim()) {
    return {
      rows: [],
      total: 0,
      nextOffset: 0
    };
  }

  const response = await fetch(
    `https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=${encodeURIComponent(
      query
    )}`
  );

  const data = await response.json();

  const candidates = data?.approximateGroup?.candidate ?? [];

  const uniqueRows = Array.from(
    new Map(
      candidates.map((item: any) => [
        item.rxcui,
        {
          id: item.rxcui,
          label: item.name,
          value: item.name
        }
      ])
    ).values()
  );

  const paginated = uniqueRows.slice((page - 1) * limit, page * limit);

  return {
    rows: paginated,
    total: uniqueRows.length,
    nextOffset: page + 1
  };
};

export type GetAccessFnReturn = Awaited<
  ReturnType<typeof fetchRxnormMedications>
>;
