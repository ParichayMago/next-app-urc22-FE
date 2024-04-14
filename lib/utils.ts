import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatDate(date: Date): string {
  // Get the day, month, and year from the date object
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const year = date.getFullYear();
  
  // Pad the day and month with leading zeros if necessary
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  
  // Combine the day, month, and year into the desired format
  return `${formattedDay}-${formattedMonth}-${year}`;
}