import { AssignmentItem } from './assignment-item';

export interface AssignmentApi {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  items: AssignmentItem[];
}
