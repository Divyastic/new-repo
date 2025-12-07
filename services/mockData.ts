
import { AdmissionApplication, AdmissionStatus, FeeInvoice, HostelRoom, Student, UserRole, Faculty, Course, AttendanceRecord, GradeSheet, LibraryBook, Notification, ExamSchedule, TimetableEntry } from '../types';

// --- ADMISSIONS ---
export const MOCK_ADMISSIONS: AdmissionApplication[] = [
  {
    id: 'APP-001',
    fullName: 'Aarav Patel',
    email: 'aarav.p@example.com',
    phone: '9876543210',
    course: 'B.Tech CS',
    grade12Marks: 92.5,
    submittedAt: '2023-10-25',
    status: AdmissionStatus.PENDING,
    documents: [{ name: 'Marksheet.pdf', url: '#' }, { name: 'ID_Proof.jpg', url: '#' }]
  },
  {
    id: 'APP-002',
    fullName: 'Sneha Gupta',
    email: 'sneha.g@example.com',
    phone: '9876543211',
    course: 'B.Tech IT',
    grade12Marks: 88.0,
    submittedAt: '2023-10-26',
    status: AdmissionStatus.APPROVED,
    documents: [{ name: 'Marksheet.pdf', url: '#' }]
  },
  {
    id: 'APP-003',
    fullName: 'Rohan Kumar',
    email: 'rohan.k@example.com',
    phone: '9876543212',
    course: 'B.Tech CS',
    grade12Marks: 75.0,
    submittedAt: '2023-10-27',
    status: AdmissionStatus.REJECTED,
    documents: []
  },
  {
    id: 'APP-004',
    fullName: 'Priya Sharma',
    email: 'priya.s@example.com',
    phone: '9876543213',
    course: 'B.Tech EC',
    grade12Marks: 95.0,
    submittedAt: '2023-10-28',
    status: AdmissionStatus.APPROVED,
    documents: [{ name: 'All_Docs.zip', url: '#' }]
  }
];

// --- STUDENTS (10 Samples) ---
export const MOCK_STUDENTS: Student[] = [
  {
    id: 'STU-001',
    name: 'Himani Singh',
    email: 'himani@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'CS-24-001',
    program: 'B.Tech',
    department: 'Computer Science',
    batch: '2024',
    semester: 3,
    gpa: 8.9,
    attendance: 94,
    feesDue: 45000,
    hostelRoom: 'G-101',
    contact: '9876500001',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Himani'
  },
  {
    id: 'STU-002',
    name: 'Ananya Roy',
    email: 'ananya@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'CS-24-002',
    program: 'B.Tech',
    department: 'Computer Science',
    batch: '2024',
    semester: 3,
    gpa: 9.1,
    attendance: 96,
    feesDue: 0,
    hostelRoom: 'B-205',
    contact: '9876500002',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya'
  },
  {
    id: 'STU-003',
    name: 'Rahul Verma',
    email: 'rahul@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'ME-24-015',
    program: 'B.Tech',
    department: 'Mechanical',
    batch: '2024',
    semester: 3,
    gpa: 7.5,
    attendance: 78,
    feesDue: 12000,
    contact: '9876500003',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul'
  },
  {
    id: 'STU-004',
    name: 'Sara Khan',
    email: 'sara@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'EC-24-008',
    program: 'B.Tech',
    department: 'Electronics',
    batch: '2024',
    semester: 3,
    gpa: 8.2,
    attendance: 85,
    feesDue: 0,
    hostelRoom: 'B-104',
    contact: '9876500004',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara'
  },
  {
    id: 'STU-005',
    name: 'Arjun Das',
    email: 'arjun@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'CS-24-022',
    program: 'B.Tech',
    department: 'Computer Science',
    batch: '2024',
    semester: 3,
    gpa: 6.8,
    attendance: 65,
    feesDue: 75000,
    contact: '9876500005',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun'
  },
  {
    id: 'STU-006',
    name: 'Meera Iyer',
    email: 'meera@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'IT-24-005',
    program: 'B.Tech',
    department: 'Information Tech',
    batch: '2024',
    semester: 3,
    gpa: 9.5,
    attendance: 98,
    feesDue: 0,
    hostelRoom: 'B-302',
    contact: '9876500006',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera'
  },
  {
    id: 'STU-007',
    name: 'Kabir Singh',
    email: 'kabir@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'ME-24-030',
    program: 'B.Tech',
    department: 'Mechanical',
    batch: '2024',
    semester: 3,
    gpa: 7.2,
    attendance: 81,
    feesDue: 5000,
    hostelRoom: 'A-201',
    contact: '9876500007',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kabir'
  },
  {
    id: 'STU-008',
    name: 'Zara Ahmed',
    email: 'zara@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'EC-24-012',
    program: 'B.Tech',
    department: 'Electronics',
    batch: '2024',
    semester: 3,
    gpa: 8.8,
    attendance: 91,
    feesDue: 0,
    contact: '9876500008',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zara'
  },
  {
    id: 'STU-009',
    name: 'Dev Patel',
    email: 'dev@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'CS-24-055',
    program: 'B.Tech',
    department: 'Computer Science',
    batch: '2024',
    semester: 3,
    gpa: 7.9,
    attendance: 88,
    feesDue: 2500,
    hostelRoom: 'A-305',
    contact: '9876500009',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dev'
  },
  {
    id: 'STU-010',
    name: 'Ishaan Gupta',
    email: 'ishaan@cloud.edu',
    role: UserRole.STUDENT,
    rollNumber: 'IT-24-018',
    program: 'B.Tech',
    department: 'Information Tech',
    batch: '2024',
    semester: 3,
    gpa: 8.5,
    attendance: 94,
    feesDue: 0,
    hostelRoom: 'A-102',
    contact: '9876500010',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ishaan'
  }
];

// --- FACULTY ---
export const MOCK_FACULTY: Faculty = {
  id: 'FAC-001',
  name: 'Dr. Aditi Sharma',
  email: 'faculty@cloud.edu',
  role: UserRole.FACULTY,
  department: 'Computer Science',
  designation: 'Associate Professor',
  subjects: ['Database Systems', 'Cloud Computing'],
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi'
};

export const MOCK_COURSES: Course[] = [
  { id: 'CS301', code: 'CS301', name: 'Database Management Systems', time: '10:00 AM', room: 'LH-101', days: ['Mon', 'Wed', 'Fri'], enrolledCount: 45 },
  { id: 'CS304', code: 'CS304', name: 'Cloud Computing Fundamentals', time: '02:00 PM', room: 'Lab-2', days: ['Tue', 'Thu'], enrolledCount: 38 },
  { id: 'CS306', code: 'CS306', name: 'Web Engineering', time: '11:00 AM', room: 'LH-104', days: ['Mon', 'Thu'], enrolledCount: 42 }
];

// --- FINANCES ---
export const MOCK_INVOICES: FeeInvoice[] = [
  {
    id: 'INV-2024-001',
    studentId: 'STU-001',
    studentName: 'Himani Singh',
    amount: 75000,
    dueDate: '2023-08-01',
    description: 'Semester 3 Tuition Fee',
    status: 'PAID',
    paidDate: '2023-07-28',
    paymentMode: 'ONLINE',
    transactionId: 'TXN_98234723'
  },
  {
    id: 'INV-2024-002',
    studentId: 'STU-001',
    studentName: 'Himani Singh',
    amount: 45000,
    dueDate: '2024-01-15',
    description: 'Semester 4 Tuition Fee',
    status: 'PENDING'
  },
  {
    id: 'INV-2024-003',
    studentId: 'STU-005',
    studentName: 'Arjun Das',
    amount: 75000,
    dueDate: '2023-08-01',
    description: 'Semester 3 Tuition Fee',
    status: 'OVERDUE'
  },
  {
    id: 'INV-2024-004',
    studentId: 'STU-003',
    studentName: 'Rahul Verma',
    amount: 12000,
    dueDate: '2024-02-01',
    description: 'Hostel Fee (Late)',
    status: 'PENDING'
  },
  {
    id: 'INV-2024-005',
    studentId: 'STU-007',
    studentName: 'Kabir Singh',
    amount: 5000,
    dueDate: '2024-01-20',
    description: 'Lab Breakage Fine',
    status: 'PENDING'
  }
];

// --- NEW DATA FOR STUDENT DASHBOARD ---

export const MOCK_LIBRARY_BOOKS: LibraryBook[] = [
  { id: 'LIB-001', title: 'Introduction to Algorithms', author: 'Cormen, Leiserson', status: 'BORROWED', dueDate: '2024-11-15' },
  { id: 'LIB-002', title: 'Clean Code', author: 'Robert C. Martin', status: 'AVAILABLE' },
  { id: 'LIB-003', title: 'Database System Concepts', author: 'Silberschatz', status: 'AVAILABLE' },
  { id: 'LIB-004', title: 'Artificial Intelligence: A Modern Approach', author: 'Russell, Norvig', status: 'BORROWED', dueDate: '2024-11-20' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'NOT-001', title: 'Exam Schedule Released', message: 'The draft schedule for Semester 3 end exams has been published.', date: '2024-10-24', type: 'ALERT' },
  { id: 'NOT-002', title: 'Hostel Fee Deadline', message: 'Last date to pay hostel fees without penalty is Oct 30.', date: '2024-10-20', type: 'DEADLINE' },
  { id: 'NOT-003', title: 'Library Holiday', message: 'Central library will remain closed on Oct 27 (Sunday).', date: '2024-10-22', type: 'INFO' },
];

export const MOCK_EXAM_SCHEDULE: ExamSchedule[] = [
  { id: 'EX-001', subject: 'Database Management Systems', code: 'CS301', date: '2024-11-20', time: '10:00 AM - 01:00 PM', venue: 'Exam Hall A' },
  { id: 'EX-002', subject: 'Cloud Computing', code: 'CS304', date: '2024-11-22', time: '10:00 AM - 01:00 PM', venue: 'Exam Hall B' },
  { id: 'EX-003', subject: 'Web Engineering', code: 'CS306', date: '2024-11-25', time: '02:00 PM - 05:00 PM', venue: 'Lab Complex' },
  { id: 'EX-004', subject: 'Mathematics III', code: 'MA301', date: '2024-11-27', time: '10:00 AM - 01:00 PM', venue: 'Exam Hall A' },
];

export const MOCK_TIMETABLE: TimetableEntry[] = [
  { time: '09:00 - 10:00', mon: 'CS301 (DBMS)', tue: 'CS304 (Cloud)', wed: 'CS301 (DBMS)', thu: 'CS306 (Web)', fri: 'CS301 (DBMS)' },
  { time: '10:00 - 11:00', mon: 'CS306 (Web)', tue: 'Lab', wed: 'Free', thu: 'CS304 (Cloud)', fri: 'MA301 (Math)' },
  { time: '11:00 - 12:00', mon: 'MA301 (Math)', tue: 'Lab', wed: 'CS304 (Cloud)', thu: 'CS301 (DBMS)', fri: 'Free' },
  { time: '12:00 - 01:00', mon: 'Lunch', tue: 'Lunch', wed: 'Lunch', thu: 'Lunch', fri: 'Lunch' },
  { time: '01:00 - 02:00', mon: 'Lab', tue: 'CS306 (Web)', wed: 'Lab', thu: 'Free', fri: 'CS304 (Cloud)' },
  { time: '02:00 - 03:00', mon: 'Lab', tue: 'Free', wed: 'Lab', thu: 'MA301 (Math)', fri: 'CS306 (Web)' },
];

// --- ATTENDANCE & GRADING STATE ---
export const MOCK_ATTENDANCE_HISTORY: AttendanceRecord[] = [];
export const MOCK_GRADE_SHEETS: GradeSheet[] = [];

// Helper to check if attendance is submitted today
export const isAttendanceSubmittedToday = (courseId: string) => {
    const today = new Date().toISOString().split('T')[0];
    return MOCK_ATTENDANCE_HISTORY.some(r => r.courseId === courseId && r.date === today);
};

// --- HOSTEL ---
export const generateHostelRooms = (): HostelRoom[] => {
  const rooms: HostelRoom[] = [];
  ['A', 'B'].forEach(block => {
    for (let floor = 1; floor <= 3; floor++) {
      for (let num = 1; num <= 6; num++) {
        const capacity = 2;
        const roomNum = `${block}-${floor}0${num}`;
        const occupants = MOCK_STUDENTS.filter(s => s.hostelRoom === roomNum).map(s => s.id);
        
        rooms.push({
          id: roomNum,
          block,
          floor,
          number: `${floor}0${num}`,
          capacity,
          occupants
        });
      }
    }
  });
  return rooms;
};

export const MOCK_HOSTEL_ROOMS = generateHostelRooms();
