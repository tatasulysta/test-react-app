import { ApiResult, queryFetch } from './common';

export interface NoteModel {
  id: string;
  title: string;
  body: string;
  owner: string;
  archived: boolean;
  createdAt: string;
}

export type GetNoteParams = { archived?: boolean };

export const useGetNotes = async (
  params: GetNoteParams,
): Promise<ApiResult<NoteModel[]>> =>
  await queryFetch({
    endpoint: `notes${params.archived ? '/archived' : ''}`,
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
    endpoint: 'notes',
    method: 'POST',
    body,
  });
