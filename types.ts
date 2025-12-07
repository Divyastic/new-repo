
export enum UserRole {
  GUEST = 'GUEST',
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
  FACULTY = 'FACULTY'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export enum AdmissionStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  NEEDS_INFO = 'NEEDS_INFO'
}

export interface AdmissionApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  course: string;
  grade12Marks: number;
  submittedAt: string;
  status: AdmissionStatus;
  documents: { name: string; url: string }[];
}

export interface Student extends User {
  rollNumber: string;
  program: string;
  department: string;
  batch: string;
  semester: number;
  gpa: number;
  attendance: number;
  feesDue: number;
  hostelRoom?: string;
  contact: string;
}

export interface Faculty extends User {
  department: string;
  designation: string;
  subjects: string[];
}

export interface FeeInvoice {
  id: string;
  studentId: string;
  studentName: string; // Denormalized for list view
  amount: number;
  dueDate: string;
  description: string;
  status: 'PAID' | 'PENDING' | 'OVERDUE';
  paidDate?: string;
  paymentMode?: 'ONLINE' | 'CASH' | 'CHEQUE' | 'UPI' | 'CARD';
  transactionId?: string;
}

export interface HostelRoom {
  id: string;
  block: string;
  floor: number;
  number: string;
  capacity: number;
  occupants: string[]; // Student IDs
}

export interface Course {
  id: string;
  code: string;
  name: string;
  time: string;
  room: string;
  days: string[];
  enrolledCount: number;
}

export type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED';

export interface AttendanceRecord {
  id: string;
  date: string;
  courseId: string;
  studentId: string;
  status: AttendanceStatus;
}

export type AssessmentType = 'ASSIGNMENT' | 'TEST' | 'MIDTERM' | 'PRACTICAL';

export interface GradeEntry {
  studentId: string;
  studentName: string;
  marks: number;
  grade: string; // A, B, C, D, E, F
}

export interface GradeSheet {
  id: string;
  courseId: string;
  assessmentType: AssessmentType;
  title: string;
  maxMarks: number;
  entries: GradeEntry[];
  published: boolean;
  date: string;
}

// --- NEW TYPES FOR STUDENT MODULES ---

export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  status: 'AVAILABLE' | 'BORROWED';
  dueDate?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  type: 'ALERT' | 'INFO' | 'DEADLINE';
}

export interface ExamSchedule {
  id: string;
  subject: string;
  code: string;
  date: string;
  time: string;
  venue: string;
}

export interface TimetableEntry {
  time: string;
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
}
