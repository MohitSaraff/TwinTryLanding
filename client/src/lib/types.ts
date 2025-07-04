export interface DemoRequest {
  id: number;
  name: string;
  workEmail: string;
  company: string;
  queryType: string;
  createdAt: Date;
}

export interface ContactMessage {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  inquiryType: string;
  message: string;
  createdAt: Date;
}
