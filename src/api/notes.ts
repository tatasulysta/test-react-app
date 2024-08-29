import { ApiResult, queryFetch } from './common';

export interface NoteModel {
  id: string;
  title: string;
  body: string;
  owner: string;
  archived: boolean;
  createdAt: string;
}

const ENDPOINT = 'notes';

export const useGetNotes = async (): Promise<ApiResult<NoteModel[]>> =>
  await queryFetch({
    endpoint: ENDPOINT,
    method: 'GET',
  });

export const useGetArchivedNotes = async (): Promise<ApiResult<NoteModel[]>> =>
  await queryFetch({
    endpoint: `${ENDPOINT}/archived`,
    method: 'GET',
  });

export type NoteInput = {
  title: string;
  body: string;
};

export const useCreateNote = async (
  body: NoteInput,
): Promise<ApiResult<NoteModel>> =>
  await queryFetch({
    endpoint: ENDPOINT,
    method: 'POST',
    body,
  });
